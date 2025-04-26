import { Typetransaction } from "gql/graphql";
import { useAtom } from "jotai";
import { Calendar, ChevronDown, Search, ShoppingBag, X } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { gql, useMutation, useQuery, useClient } from "urql";
import { triggerNotifEvent } from "~/notif/helper";
import { ExpenseExeceededType } from "~/notif/types";
import { userAtom } from "~/store/store";
import { icons } from "../routes/CategoryIconPicker";
import dayjs from "dayjs";
import { refreshNotifications } from "~/layout/MainNavbar";

const GET_CATEGORIES = gql`
  query GET_CATEGORIES($userId: String!) {
    categories(condition: { userId: $userId },orderBy: CREATED_AT_DESC) {
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

const GET_BUDGET_FOR_CATEGORY = gql`
  query GET_BUDGET_FOR_CATEGORY($userId: String!, $categoryId: String!, $month: Datetime!) {
    budgets(
      condition: { userId: $userId, categoryId: $categoryId }
      filter: { month: { equalTo: $month } }
    ) {
      nodes {
        budgetId
        userId
        categoryId
        amount
        month
        alertThreshold
      }
    }
  }
`;

const GET_TRANSACTIONS_FOR_CATEGORY = gql`
  query GET_TRANSACTIONS_FOR_CATEGORY($userId: String!, $categoryId: String!, $start: Datetime!, $end: Datetime!) {
    transactions(
      condition: { userId: $userId, categoryId: $categoryId, type: EXPENSE }
      filter: { date: { greaterThanOrEqualTo: $start, lessThanOrEqualTo: $end } }
    ) {
      nodes {
        transactionId
        amount
        date
      }
      aggregates {
        sum {
          amount
        }
      }
    }
  }
`;

const DynamicIcon = ({
  iconName,
  color,
  size = 20,
}: {
  iconName: string;
  color?: string;
  size?: number;
}) => {
  const iconObj = icons.find((icon) => icon.value === iconName);
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
    date: initialDate,
  };

  const [amount, setAmount] = useState<number>(initialFormState.amount);
  const [categoryId, setCategoryId] = useState(initialFormState.categoryId);
  const [type, setType] = useState<"EXPENSE" | "INCOME">(initialFormState.type);
  const [description, setDescription] = useState<string>(
    initialFormState.description,
  );
  const [date, setDate] = useState<string>(initialFormState.date);
  const [amountError, setAmountError] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showCategoryDropdown, setShowCategoryDropdown] =
    useState<boolean>(false);
  const [user] = useAtom(userAtom);

  const modalRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const client = useClient();

  const [{ data }] = useQuery({
    query: GET_CATEGORIES,
    variables: user ? { userId: user.oidcId } : undefined,
    pause: !user,
    requestPolicy: "network-only",
  });

  const [result, mutate] = useMutation(ADD_TRANSACTION_MUTATION);
  const [editResult, editMutate] = useMutation(EDIT_TRANSACTION);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !modalRef.current?.contains(event.target as Node)
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
      const filteredCategories = data.categories.nodes.filter(
        (cat: any) => cat.type === type || !cat.type,
      );
      if (filteredCategories.length > 0) {
        setCategoryId(filteredCategories[0].id);
      }
    }
  }, [data, categoryId, type]);

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
      (cat: any) => cat.type === "EXPENSE" || !cat.type,
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

  const updateDatePreserveTime = (
    newDateStr: string,
    originalDateStr: string | undefined,
  ): string => {
    if (!originalDateStr) return new Date().toISOString();

    const originalParts = originalDateStr.match(
      /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/,
    );
    if (!originalParts) return new Date().toISOString();

    const [, , , , originalHours, originalMinutes, originalSeconds] =
      originalParts;

    const [newYear, newMonth, newDay] = newDateStr.split("-").map(Number);

    const updatedDate = new Date(
      Date.UTC(
        newYear,
        newMonth - 1,
        newDay,
        parseInt(originalHours),
        parseInt(originalMinutes),
        parseInt(originalSeconds),
      ),
    );
    return updatedDate.toISOString();
  };

  const checkBudgetStatus = async (
    categoryId: string,
    amount: number,
    transactionDate: string,
    isExpense: boolean,
    isEditing: boolean = false,
    previousAmount: number = 0,
  ) => {
    if (!isExpense) return { exceeded: false, nearlyExceeded: false };

    const transactionMonth = dayjs(transactionDate).format("YYYY-MM-01T00:00:00.000Z");

    try {
      const budgetResult = await client
        .query(GET_BUDGET_FOR_CATEGORY, {
          userId: user?.oidcId,
          categoryId,
          month: transactionMonth,
        })
        .toPromise();

      if (!budgetResult.data?.budgets?.nodes?.length) {
        console.log("No budget found for category:", categoryId);
        return { exceeded: false, nearlyExceeded: false };
      }

      const budget = budgetResult.data.budgets.nodes[0];
      console.log("Budget:", budget);

      const transactionsResult = await client
        .query(GET_TRANSACTIONS_FOR_CATEGORY, {
          userId: user?.oidcId,
          categoryId,
          start: transactionMonth,
          end: dayjs(transactionMonth).endOf("month").toISOString(),
        })
        .toPromise();

      let totalExpenses = transactionsResult.data?.transactions?.nodes?.reduce(
        (sum: number, transaction: any) => {
          if (isEditing && transaction.transactionId === editData?.id) {
            return sum;
          }
          return sum + transaction.amount;
        },
        0,
      ) || 0;

      totalExpenses += amount;

      const alertThreshold = budget.alertThreshold ?? 80;
      const thresholdAmount = (budget.amount * alertThreshold) / 100;

      console.log("Total Expenses:", totalExpenses);
      console.log("Budget Amount:", budget.amount);
      console.log("Alert Threshold (%):", alertThreshold);
      console.log("Threshold Amount:", thresholdAmount);

      const exceeded = totalExpenses > budget.amount;
      const nearlyExceeded = !exceeded && totalExpenses > thresholdAmount;

      return { exceeded, nearlyExceeded, totalExpenses, budgetAmount: budget.amount };
    } catch (error) {
      console.error("Error checking budget:", error);
      return { exceeded: false, nearlyExceeded: false };
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    const transactionId = nanoid();
    const isExpenseType = type === "EXPENSE";

    try {
      let budgetStatus = { exceeded: false, nearlyExceeded: false };

      if (isEditing) {
        let previousBudgetStatus = { exceeded: false, nearlyExceeded: false };
        if (isExpenseType && editData) {
          previousBudgetStatus = await checkBudgetStatus(
            editData.categoryId,
            editData.amount,
            dayjs(editData.date).format("YYYY-MM-01T00:00:00.000Z"),
            isExpenseType,
            false,
          );
        }

        if (isExpenseType) {
          budgetStatus = await checkBudgetStatus(
            categoryId,
            amount,
            dayjs(editData?.date).format("YYYY-MM-01T00:00:00.000Z"),
            isExpenseType,
            true,
            editData?.amount || 0,
          );
        }

        const editVariables = {
          id: editData?.id,
          amount,
          date: updateDatePreserveTime(date, editData?.date),
          categoryId,
          description: description || "",
          type,
          clientMutationId: nanoid(),
        };

        const editResponse = await editMutate(editVariables);

        if (editResponse.data?.updateTransaction?.transaction) {
          if (isExpenseType) {
            if (budgetStatus.exceeded && !previousBudgetStatus.exceeded) {
              triggerNotifEvent("expenseExeceededEvent", {
                userIds: [user?.oidcId || ""],
                type: ExpenseExeceededType.Exceeded,
             categoryId,
              } as any);
              refreshNotifications();
            } else if (
              budgetStatus.nearlyExceeded &&
              !previousBudgetStatus.nearlyExceeded &&
              !budgetStatus.exceeded
            ) {
              triggerNotifEvent("expenseNearlyExceededEvent", {
                userIds: [user?.oidcId || ""],
                type: ExpenseExeceededType.NearlyExceeded,
                categoryId,
              } as any);
              refreshNotifications();
            } else if (
              !budgetStatus.exceeded &&
              !budgetStatus.nearlyExceeded &&
              (previousBudgetStatus.exceeded || previousBudgetStatus.nearlyExceeded)
            ) {
              console.log("Budget no longer exceeded or nearly exceeded");
            }
          }

          onSuccess();
          handleClose();
        } else {
          console.error("Edit Mutation Error:", editResponse.error);
        }
      } else {
        if (isExpenseType) {
          budgetStatus = await checkBudgetStatus(
            categoryId,
            amount,
            dayjs().format("YYYY-MM-01T00:00:00.000Z"),
            isExpenseType,
          );
        }

        const variables = {
          user_id: user?.oidcId,
          category_id: categoryId,
          amount,
          date: updateDatePreserveTime(date, new Date().toISOString()),
          description: description || "",
          type,
          transaction_id: transactionId,
        };

        const response = await mutate(variables);

        if (response.data?.createTransaction) {
          if (isExpenseType) {
           // In TransactionModal.js, update these sections
if (budgetStatus.exceeded) {
  triggerNotifEvent("expenseExeceededEvent", {
    userIds: [user?.oidcId || ""],
    type: ExpenseExeceededType.Exceeded,
    categoryId,
  } as any);
  
  console.log("Budget exceeded, triggering notification refresh");
  setTimeout(() => refreshNotifications(), 500); // Add small delay to ensure notification is created first
} else if (budgetStatus.nearlyExceeded) {
  triggerNotifEvent("expenseNearlyExceededEvent", {
    userIds: [user?.oidcId || ""],
    type: ExpenseExeceededType.NearlyExceeded,
    categoryId,
  } as any);
  
  console.log("Budget nearly exceeded, triggering notification refresh");
  setTimeout(() => refreshNotifications(), 500);
}
          }

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

  const handleButtonSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true }),
      );
    }
  };

  const getCategory = (id: string) => {
    return data?.categories?.nodes?.find((cat: any) => cat.id === id);
  };

  const filteredCategories = data?.categories?.nodes?.filter((cat: any) => {
    const matchesType = cat.type === type || !cat.type;
    const matchesSearch = cat.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div
      className={`fixed inset-0 z-50 ${basicOpened ? "block" : "hidden"}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      <div className="pointer-events-none fixed inset-0 flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className="pointer-events-auto flex w-full max-w-lg flex-col rounded-xl bg-white shadow-xl"
          style={{ maxHeight: "90vh" }}
        >
          <div className="mt-10 flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 id="modal-title" className="text-xl font-medium text-gray-800">
              {isEditing
                ? "Modifier la transaction"
                : "Ajouter une transaction"}
            </h2>
            <button
              onClick={handleClose}
              className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt flex-1 overflow-y-auto">
            <form ref={formRef} onSubmit={handleSubmit} className="p-6">
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setType("EXPENSE");
                      const expenseCategories = data?.categories?.nodes?.filter(
                        (cat: any) => cat.type === "EXPENSE" || !cat.type,
                      );
                      if (expenseCategories?.[0])
                        setCategoryId(expenseCategories[0].id);
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
                        (cat: any) => cat.type === "INCOME" || !cat.type,
                      );
                      if (incomeCategories?.[0])
                        setCategoryId(incomeCategories[0].id);
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
                <div
                  className={`relative rounded-lg border ${
                    amountError ? "border-red-300" : "border-gray-300"
                  } focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}
                >
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

              <div className="relative mb-5" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className={`flex w-full items-center justify-between rounded-lg border px-4 py-3.5 text-left text-base ${
                    type === "EXPENSE"
                      ? "border-red-200 bg-red-50 text-red-800 hover:bg-red-100"
                      : "border-green-200 bg-green-50 text-green-800 hover:bg-green-100"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {categoryId &&
                      (() => {
                        const category = getCategory(categoryId);
                        if (category) {
                          return (
                            <>
                              <div
                                className="flex items-center justify-center rounded-full p-1"
                                style={{
                                  backgroundColor: category.iconColor
                                    ? `${category.iconColor}20`
                                    : "#f3f4f6",
                                }}
                              >
                                <DynamicIcon
                                  iconName={category.icon || "shopping"}
                                  color={category.iconColor}
                                  size={22}
                                />
                              </div>
                              <span className="font-medium">
                                {category.name}
                              </span>
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
                    <div className="border-b border-gray-100 px-4 py-2">
                      <div className="relative">
                        <Search
                          size={18}
                          className="absolute left-3 top-3 text-gray-400"
                        />
                        <input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Rechercher une catégorie..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full rounded-md border border-gray-200 py-2 pl-10 pr-3 text-base focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                      </div>
                    </div>

                    <div className="max-h-64 overflow-y-auto py-2">
                      {filteredCategories?.length > 0 ? (
                        <div className="grid grid-cols-1 gap-1">
                          {filteredCategories.map(
                            (category: {
                              id: string;
                              name: string;
                              icon: string;
                              iconColor: string;
                              type: Typetransaction;
                            }) => (
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
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                              >
                                <div
                                  className="mr-3 flex items-center justify-center rounded-full p-1"
                                  style={{
                                    backgroundColor: category.iconColor
                                      ? `${category.iconColor}20`
                                      : "#f3f4f6",
                                  }}
                                >
                                  <DynamicIcon
                                    iconName={category.icon || "shopping"}
                                    color={category.iconColor}
                                    size={22}
                                  />
                                </div>
                                <span className="font-medium">
                                  {category.name}
                                </span>
                              </button>
                            ),
                          )}
                        </div>
                      ) : (
                        <div className="px-4 py-3 text-center text-base text-gray-500">
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
                  placeholder={
                    type === "EXPENSE"
                      ? "Pour quoi avez-vous dépensé?"
                      : "D'où vient ce revenu?"
                  }
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
                  {isEditing
                    ? "L'heure d'origine sera préservée lors de la modification"
                    : "L'heure actuelle sera automatiquement utilisée lors de l'ajout"}
                </p>
              </div>
            </form>
          </div>

          <div className="border-t border-gray-200 bg-white p-6 pt-0">
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
                  type === "EXPENSE"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {result.fetching || editResult.fetching ? (
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