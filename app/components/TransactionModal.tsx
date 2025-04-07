import { useAtom } from "jotai";
import { Dialog } from "konsta/react";
import { nanoid } from "nanoid";
import { useState, useEffect, useRef } from "react";
import { gql, useMutation, useQuery } from "urql";
import { userAtom } from "~/store/store";
import { Calendar, X, Search, ChevronDown, ShoppingBag } from "lucide-react";
import {
  IconHome, IconCar, IconShoppingCart, IconSoup, IconHeart, IconBriefcase, IconPlane,
  IconGift, IconHealthRecognition, IconSportBillard, IconMusic, IconCamera, IconBook,
  IconSchool, IconBus, IconPigMoney
} from "@tabler/icons-react";
import { Typetransaction } from "gql/graphql";

const icons = [
  { name: "Home", component: IconHome, color: "#DE3163", value: "home" },
  { name: "Car", component: IconCar, color: "#EF4444", value: "car" },
  { name: "Shopping", component: IconShoppingCart, color: "#3B82F6", value: "shopping" },
  { name: "Food", component: IconSoup, color: "#F59E0B", value: "food" },
  { name: "Health", component: IconHeart, color: "#22C55E", value: "health" },
  { name: "Work", component: IconBriefcase, color: "#8B5CF6", value: "work" },
  { name: "Travel", component: IconPlane, color: "#EC4899", value: "travel" },
  { name: "Gifts", component: IconGift, color: "#FBBF24", value: "gifts" },
  { name: "Medical", component: IconHealthRecognition, color: "#A855F7", value: "medical" },
  { name: "Sports", component: IconSportBillard, color: "#16A34A", value: "sports" },
  { name: "Music", component: IconMusic, color: "#FCD34D", value: "music" },
  { name: "Photography", component: IconCamera, color: "#EA580C", value: "photography" },
  { name: "Education", component: IconBook, color: "#38B2AC", value: "education" },
  { name: "School", component: IconSchool, color: "#4F46E5", value: "school" },
  { name: "Transport", component: IconBus, color: "#805AD5", value: "transport" },
  { name: "Savings", component: IconPigMoney, color: "#EAB308", value: "savings" },
];

const GET_CATEGORIES = gql`
  query GET_CATEGORIES($userId: String!) {
    categories(condition: { userId: $userId }) {
      nodes {
        type
        id
        name
        icon
        iconColor
      }
    }
  }
`;


const ADD_TRANSACTION_MUTATION = gql`
  mutation AddTransaction(
    $user_id: String!
    $category_id: String!
    $amount: Float!
    $date: Datetime!
    $description: String
    $transaction_id: String!
    $type: Typetransaction!
  ) {
    createTransaction(
      input: {
        transaction: {
          userId: $user_id
          categoryId: $category_id
          amount: $amount
          date: $date
          description: $description
          transactionId: $transaction_id
          type: $type
        }
      }
    ) {
      clientMutationId
    }
  }
`;

const EDIT_TRANSACTION = gql`
  mutation EDIT_TRANSACTION1(
    $id: String!
    $amount: Float!
    $date: Datetime!
    $categoryId: String!
    $description: String!
    $type: Typetransaction!
    $clientMutationId: String!
  ) {
    updateTransaction(
      input: {
        patch: {
          amount: $amount
          date: $date
          categoryId: $categoryId
          description: $description
          type: $type
        }
        transactionId: $id
        clientMutationId: $clientMutationId
      }
    ) {
      transaction {
        transactionId
        type
        date
        categoryId
        description
        amount
      }
    }
  }
`;

const DynamicIcon = ({ iconName, color, size = 20 }: { iconName: string, color?: string, size?: number }) => {
  const iconObj = icons.find(icon => icon.value === iconName);
  if (iconObj) {
    const IconComponent = iconObj.component;
    return <IconComponent size={size} style={{ color }} />;
  }
  return <ShoppingBag size={size} color={color} />;
};

interface TransactionModalProps {
  basicOpened: boolean;
  setBasicOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  editData?: {
    amount: number;
    categoryId: string;
    type: "EXPENSE" | "INCOME";
    description?: string;
    id: string;
    date: string;
  };
  setEditData: React.Dispatch<React.SetStateAction<any>>;
  handleEdit: () => Promise<void>;
  onSuccess: () => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({
  basicOpened,
  setBasicOpened,
  isEditing,
  setIsEditing,
  editData,
  setEditData,
  handleEdit,
  onSuccess,
}) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const parseDate = (dateString: string | undefined) => {
    if (!dateString) return currentDate;
    return new Date(dateString).toISOString().split("T")[0];
  };

  const initialDate = parseDate(editData?.date);
  const initialFormState = {
    amount: editData?.amount || 0,
    categoryId: editData?.categoryId || "",
    type: editData?.type || "EXPENSE",
    description: editData?.description || "",
    date: initialDate
  };

  const [amount, setAmount] = useState<number>(initialFormState.amount);
  const [categoryId, setCategoryId] = useState(initialFormState.categoryId);
  const [type, setType] = useState<"EXPENSE" | "INCOME">(initialFormState.type);
  const [description, setDescription] = useState<string>(initialFormState.description);
  const [date, setDate] = useState<string>(initialFormState.date);
  const [amountError, setAmountError] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState<boolean>(false);
  const [user] = useAtom(userAtom);

  const modalRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [{ data }] = useQuery({
    query: GET_CATEGORIES,
    variables: user ? { userId: user.oidcId } : undefined,  // Pass the userId here
    pause: !user,  // Pause until user is available
    requestPolicy: "network-only",  // Ensure we always fetch fresh data
  });
  
  const [result, mutate] = useMutation(ADD_TRANSACTION_MUTATION);
  const [editResult, editMutate] = useMutation(EDIT_TRANSACTION);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !modalRef.current?.contains(event.target as Node) // Check if the click is inside the modal
      ) {
        setShowCategoryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  useEffect(() => {
    if (basicOpened && amountInputRef.current) {
      setTimeout(() => amountInputRef.current?.focus(), 100);
    }
  }, [basicOpened]);
  
  useEffect(() => {
    if (showCategoryDropdown && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [showCategoryDropdown]);
  
  useEffect(() => {
    if (!categoryId && data?.categories?.nodes?.length > 0) {
      setCategoryId(data.categories.nodes[0].id);
    }
  }, [data, categoryId]);
  
  useEffect(() => {
    if (isEditing && editData) {
      setAmount(editData.amount || 0);
      setCategoryId(editData.categoryId || "");
      setType(editData.type || "EXPENSE");
      setDescription(editData.description || "");
      setDate(parseDate(editData.date));
    }
  }, [isEditing, editData]);
  
  useEffect(() => {
    if (basicOpened && !isEditing) {
      resetForm();
    }
  }, [basicOpened, isEditing]);
  
  const resetForm = () => {
    setAmount(0);
    const filteredCategories = data?.categories?.nodes?.filter(
      (cat: any) => cat.type === "EXPENSE" || !cat.type
    );
    setCategoryId(filteredCategories?.[0]?.id || "");
    setType("EXPENSE");
    setDescription("");
    setDate(new Date().toISOString().split("T")[0]);
    setAmountError("");
    setSearchTerm("");
    setShowCategoryDropdown(false);
  };
  

  const handleClose = () => {
    setBasicOpened(false);
    setTimeout(() => {
      resetForm();
      if (!isEditing) setIsEditing(false);
    }, 300);
  };

  const validateForm = (): boolean => {
    if (amount <= 0) {
      setAmountError("Le montant doit être supérieur à 0");
      return false;
    }
    setAmountError("");
    return true;
  };

  // Helper function to update only year, month, and day, preserving original time exactly
  const updateDatePreserveTime = (newDateStr: string, originalDateStr: string | undefined): string => {
    if (!originalDateStr) return new Date().toISOString();

    // Parse the original date string directly
    const originalParts = originalDateStr.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
    if (!originalParts) return new Date().toISOString();

    const [, , , , originalHours, originalMinutes, originalSeconds] = originalParts;

    // Parse the new date from the date picker
    const [newYear, newMonth, newDay] = newDateStr.split('-').map(Number);

    // Construct a new ISO string with new date and original time
    const updatedDate = new Date(Date.UTC(newYear, newMonth - 1, newDay, parseInt(originalHours), parseInt(originalMinutes), parseInt(originalSeconds)));
    return updatedDate.toISOString();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!validateForm()) return;
    
    const transactionId = nanoid();
    
    try {
      if (isEditing) {
        // Use the new date from the form, but preserve the original time exactly
        const fullDateTime = updateDatePreserveTime(date, editData?.date);
        console.log("Original date:", editData?.date);
        console.log("Updated date:", fullDateTime);

        const editVariables = {
          id: editData?.id,
          amount,
          date: fullDateTime,
          categoryId,
          description: description || "",
          type,
          clientMutationId: nanoid(),
        };

        const editResponse = await editMutate(editVariables);
        
        if (editResponse.data?.updateTransaction?.transaction) {
          onSuccess();
          handleClose();
        } else {
          console.error("Edit Mutation Error:", editResponse.error);
        }
      } else {
        const variables = {
          user_id: user?.oidcId,
          category_id: categoryId,
          amount,
          date: new Date().toISOString(), // Use current time for new transactions
          description: description || "",
          type,
          transaction_id: transactionId,
        };

        const response = await mutate(variables);
        
        if (response.data?.createTransaction) {
          onSuccess();
          handleClose();
        } else {
          console.error("Add Mutation Error:", response.error);
        }
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
    }
  };

  // Create a click handler for the submit button that submits the form
  const handleButtonSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  const getCategory = (id: string) => {
    return data?.categories?.nodes?.find((cat: any) => cat.id === id);
  };

  const filteredCategories = data?.categories?.nodes?.filter((cat: any) => {
    const matchesType = cat.type === type || !cat.type;
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    // Custom modal implementation instead of using Dialog directly
    <div 
      className={`fixed inset-0 z-50 ${basicOpened ? 'block' : 'hidden'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
        <div 
          ref={modalRef}
          className="w-full max-w-lg bg-white shadow-xl rounded-xl pointer-events-auto flex flex-col"
          style={{ maxHeight: '90vh' }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 mt-10">
            <h2 id="modal-title" className="text-xl font-medium text-gray-800">
              {isEditing ? "Modifier la transaction" : "Ajouter une transaction"}
            </h2>
            <button
              onClick={handleClose}
              className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Form container with flex-1 and overflow-y-auto to allow scrolling */}
          <div className="flex-1 overflow-y-auto mt">
            <form ref={formRef} onSubmit={handleSubmit} className="p-6">
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setType("EXPENSE");
                      const expenseCategories = data?.categories?.nodes?.filter(
                        (cat: any) => cat.type === "EXPENSE" || !cat.type
                      );
                      if (expenseCategories?.[0]) setCategoryId(expenseCategories[0].id);
                    }}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-all ${
                      type === "EXPENSE"
                        ? "bg-white text-red-600 shadow-sm"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                    aria-pressed={type === "EXPENSE"}
                    aria-label="Type dépense"
                  >
                    Dépense
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setType("INCOME");
                      const incomeCategories = data?.categories?.nodes?.filter(
                        (cat: any) => cat.type === "INCOME" || !cat.type
                      );
                      if (incomeCategories?.[0]) setCategoryId(incomeCategories[0].id);
                    }}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-all ${
                      type === "INCOME"
                        ? "bg-white text-green-600 shadow-sm"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                    aria-pressed={type === "INCOME"}
                    aria-label="Type revenu"
                  >
                    Revenu
                  </button>
                </div>
              </div>
              
              <div className="mb-5">
                <div className={`relative rounded-lg border ${
                  amountError ? "border-red-300" : "border-gray-300"
                } focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                  <input
                    id="amount"
                    ref={amountInputRef}
                    type="number"
                    name="amount"
                    step="0.01"
                    placeholder="0.00"
                    value={amount || ""}
                    onChange={(e) => {
                      setAmount(parseFloat(e.target.value) || 0);
                      if (parseFloat(e.target.value) > 0) setAmountError("");
                    }}
                    className={`w-full rounded-lg border-0 px-4 py-4 text-center text-3xl font-bold ${
                      type === "EXPENSE" ? "text-red-600" : "text-green-600"
                    } focus:outline-none focus:ring-0`}
                    aria-invalid={!!amountError}
                    aria-describedby={amountError ? "amount-error" : undefined}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-lg text-gray-500">TND</span>
                  </div>
                </div>
                {amountError && (
                  <p id="amount-error" className="mt-1.5 text-sm text-red-600">
                    {amountError}
                  </p>
                )}
              </div>

              <div className="mb-5 relative" ref={dropdownRef}>
  <button
    type="button"
    onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
    className={`w-full flex items-center justify-between rounded-lg border px-4 py-3.5 text-left text-base ${
      type === "EXPENSE"
        ? "border-red-200 bg-red-50 text-red-800 hover:bg-red-100"
        : "border-green-200 bg-green-50 text-green-800 hover:bg-green-100"
    }`}
  >
    <div className="flex items-center space-x-3">
      {categoryId && (() => {
        const category = getCategory(categoryId);
        if (category) {
          return (
            <>
              <div className="flex items-center justify-center rounded-full p-1" 
                style={{ backgroundColor: category.iconColor ? `${category.iconColor}20` : '#f3f4f6' }}>
                <DynamicIcon 
                  iconName={category.icon || "shopping"} 
                  color={category.iconColor} 
                  size={22} 
                />
              </div>
              <span className="font-medium">{category.name}</span>
            </>
          );
        }
        return <span>Sélectionner une catégorie</span>;
      })()}
    </div>
    <ChevronDown size={18} />
  </button>

  {showCategoryDropdown && (
    <div className="absolute z-10 mt-1.5 w-full rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Rechercher une catégorie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-gray-200 pl-10 pr-3 py-2 text-base focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>

      <div className="max-h-64 overflow-y-auto py-2">
        {data?.categories?.nodes?.length > 0 ? (
          <div className="grid grid-cols-1 gap-1">
            {data?.categories?.nodes
              .filter((category: {type: Typetransaction}) => category.type === type) // Filter categories based on type or if no type is set
              .map((category: { id: string; name: string; icon: string; iconColor: string }) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setCategoryId(category.id);
                    setShowCategoryDropdown(false);
                  }}
                  className={`flex w-full items-center px-4 py-3 text-base transition-colors ${
                    categoryId === category.id
                      ? type === "EXPENSE"
                        ? "bg-red-50 text-red-700"
                        : "bg-green-50 text-green-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex items-center justify-center rounded-full p-1 mr-3" 
                      style={{ backgroundColor: category.iconColor ? `${category.iconColor}20` : '#f3f4f6' }}>
                    <DynamicIcon 
                      iconName={category.icon || "shopping"} 
                      color={category.iconColor} 
                      size={22} 
                    />
                  </div>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
          </div>
        ) : (
          <div className="px-4 py-3 text-base text-gray-500 text-center">
            Aucune catégorie trouvée
          </div>
        )}
      </div>
    </div>
  )}
</div>

              
              <div className="mb-5">
                <input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={type === "EXPENSE" ? "Pour quoi avez-vous dépensé?" : "D'où vient ce revenu?"}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              
              <div className="mb-5">
                <div className="relative rounded-lg border border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-lg border-0 py-3 pl-4 pr-10 text-base text-gray-700 focus:outline-none focus:ring-0"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <Calendar size={18} className="text-gray-400" />
                  </div>
                </div>
                <p className="mt-1.5 text-xs text-gray-500">
                  {isEditing ? 
                    "L'heure d'origine sera préservée lors de la modification" : 
                    "L'heure actuelle sera automatiquement utilisée lors de l'ajout"}
                </p>
              </div>
            </form>
          </div>
          
          {/* Fixed button container at the bottom */}
          <div className="p-6 pt-0 border-t border-gray-200 bg-white">
            <div className="flex w-full space-x-4">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={handleButtonSubmit}
                disabled={result.fetching || editResult.fetching}
                className={`flex-1 rounded-lg px-4 py-3 text-base font-medium text-white transition-colors disabled:opacity-50 ${
                  type === "EXPENSE" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {(result.fetching || editResult.fetching) ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>{isEditing ? "Modification..." : "Ajout..."}</span>
                  </div>
                ) : (
                  <span>{isEditing ? "Modifier" : "Ajouter"}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;