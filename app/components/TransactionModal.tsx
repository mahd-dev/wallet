import { useAtom } from "jotai";
import { Dialog } from "konsta/react";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { gql, useMutation, useSubscription } from "urql";
import { userAtom } from "~/store/store";

const CATEGORY_SUBSCRIPTION = gql`
  subscription CategorySubscription {
    categories {
      nodes {
        id
        name
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
  mutation EDIT_TRANSACTION(
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
    date: string; // Add this line
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
  
  const [amount, setAmount] = useState<number>(editData?.amount || 0);
  const [categoryId, setCategoryId] = useState(editData?.categoryId || "");
  const [type, setType] = useState<"EXPENSE" | "INCOME">(editData?.type || "EXPENSE");
  const [user] = useAtom(userAtom);
  //const [transactions, setTransactions] = useState<any[]>([]);


  // Use category subscription to keep the list updated
  const [{ data, error }] = useSubscription({ query: CATEGORY_SUBSCRIPTION });
  
   const [result, mutate] = useMutation(ADD_TRANSACTION_MUTATION);

  useEffect(() => {
    // Reset category ID to the first category if empty
    if (!categoryId && data?.categories?.nodes?.length > 0) {
      setCategoryId(data.categories.nodes[0].id);
    }
  }, [data, categoryId]);

  const [editResult, editMutate] = useMutation(EDIT_TRANSACTION);

useEffect(() => {
    if (isEditing) {
      setAmount(editData?.amount || 0);
      setCategoryId(editData?.categoryId || "");
      setType(editData?.type || "EXPENSE");
    }
  }
, [isEditing, editData]);
  

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  
  const transactionId = nanoid();

  const variables = {
    user_id: user?.oidcId,
    category_id: categoryId,
    amount,
    date: isEditing ? editData?.date : new Date().toISOString(),
    description: editData?.description || "",
    type: type,
    transaction_id: transactionId,
  };

  try {
    if (isEditing) {
      // Edit mutation
      const editVariables = {
        id: editData?.id, // Assuming you pass the id of the transaction
        amount,
        date: editData?.date,
        categoryId,
        description: editData?.description || "",
        type,
        clientMutationId: nanoid(),
      };

      const editResponse = await editMutate(editVariables);
      
      if (editResponse.error) {
        console.error("Edit Mutation Error:", editResponse.error);
      } else {
        console.log("Transaction Edited Successfully:", editResponse.data);
        onSuccess();
        setBasicOpened(false);
        setIsEditing(false);
      }
    } else {
      // Add mutation
      const response = await mutate(variables);
      
      if (response.error) {
        console.error("Add Mutation Error:", response.error);
      } else {
        console.log("Transaction Added Successfully:", response.data);
        onSuccess();
        setBasicOpened(false);
      }
    }
  } catch (error) {
    console.error("Unexpected Error:", error);
  }
};


  return (
    <Dialog
      opened={basicOpened}
      onBackdropClick={() => setBasicOpened(false)}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 p-4 backdrop-blur-sm"
    >
      <div className="mx-4 w-full max-w-sm overflow-y-auto rounded-lg bg-white shadow-xl">
        <div className="p-4">
          <h2 className="mb-4 text-center text-xl font-bold text-gray-800">
            {isEditing ? "Modifier la transaction" : "Ajouter une transaction"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Radio Buttons */}
            <div className="mb-4 flex justify-center gap-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="type"
                  value="EXPENSE"
                  checked={type === "EXPENSE"}
                  onChange={() => setType("EXPENSE")}
                  className="size-4 border-2 border-gray-300 text-blue-500"
                />
                <span className="text-gray-700">Dépense</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="type"
                  value="INCOME"
                  checked={type === "INCOME"}
                  onChange={() => setType("INCOME")}
                  className="size-4 border-2 border-gray-300 text-blue-500"
                />
                <span className="text-gray-700">Revenu</span>
              </label>
            </div>

            {/* Amount Input */}
            <div className="mb-4">
              <input
                type="number"
                name="amount"
                step="0.01"
                placeholder="0 TND"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-center text-2xl font-bold focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Category Selection */}
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold text-gray-600">
                Catégorie
              </h3>
              {error ? (
                <p className="text-red-500">Erreur lors du chargement des catégories</p>
              ) : (
                <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex space-x-3 overflow-x-auto pb-3">
                  {data?.categories?.nodes?.map((catg: { id: string; name: string }) => (
                    <button
                      key={catg.id}
                      type="button"
                      onClick={() => setCategoryId(catg.id)}
                      className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        categoryId === catg.id
                          ? "bg-blue-500 text-white shadow-sm"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {catg.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setBasicOpened(false)}
                className="flex-1 rounded-lg bg-gray-100 px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={result.fetching}
                className="flex-1 rounded-lg bg-blue-500 px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {result.fetching ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    {isEditing ? "Modification..." : "Ajout..."}
                  </div>
                ) : isEditing ? (
                  "Modifier"
                ) : (
                  "Ajouter"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default TransactionModal;
