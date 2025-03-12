import { IconPencil, IconPlus, IconTrash } from "@tabler/icons-react";
import dayjs from "dayjs";
import { Typetransaction } from "gql/graphql";
import { Badge, Fab } from "konsta/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { gql, useMutation, useQuery } from "urql";
import TransactionModal from "~/components/TransactionModal"; // Import the modal

const GET_TRANSACTIONS = gql`
  query GET_TRANSACTIONS {
    transactions(orderBy: DATE_DESC) {
      nodes {
        transactionId
        type
        userId
        categoryId
        date
        description
        amount
        category {
          id
          name
        }
      }
    }
  }
`;

const DELETE_TRANSACTION = gql`
  mutation DELETE_TRANSACTION($id: String!) {
    deleteTransaction(input: { transactionId: $id }) {
      clientMutationId
    }
  }
`;

const EDIT_TRANSACTION = gql`
  mutation EDIT_TRANSACTION(
    $id: String!
    $amount: Float!
    $categoryId: String!
    $date: Datetime!
    $description: String!
    $type: Typetransaction!
    $clientMutationId: String!
  ) {
    updateTransaction(
      input: {
        patch: {
          amount: $amount
          categoryId: $categoryId
          date: $date
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
        categoryId
        date
        description
        amount
      }
    }
  }
`;

const TransactionsList = () => {
  const [{ data, fetching, error }, refetch] = useQuery({
    query: GET_TRANSACTIONS,
    requestPolicy: "network-only",
  });

  const [, deleteTransaction] = useMutation(DELETE_TRANSACTION);
  const [, editTransaction] = useMutation(EDIT_TRANSACTION);
  

  const [editData, setEditData] = useState({
    id: "",
    type: Typetransaction.Expense,
    categoryId: "",
    date: "",
    description: "",
    amount: 0,
  });

  const [basicOpened, setBasicOpened] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Tab management
  const [activeTab, setActiveTab] = useState("tout");

  const handleDelete = async (id: string, onSuccess?: () => void) => {
    console.log("Deleting transaction with ID:", id);
  
    const result = await deleteTransaction({ id });
  
    console.log("Delete result:", result);
  
    if (result.data?.deleteTransaction) { // Check for deleteTransaction instead of clientMutationId
      console.log("Transaction deleted successfully.");
      
      if (onSuccess) {
        console.log("Calling onSuccess...");
        onSuccess();
      }
    } else {
      console.error("Failed to delete transaction:", result.error?.message);
    }
  };
  
  
  

  const handleEdit = async () => {
    console.log("Editing transaction:", editData); // Debugging log
  
    const result = await editTransaction({
      id: editData.id,
      amount: editData.amount,
      categoryId: editData.categoryId,
      date: editData.date,
      description: editData.description,
      type: editData.type,
      clientMutationId: nanoid(),
    });
  
    console.log("Edit result:", result); // Check mutation response
  
    if (result.data?.updateTransaction?.transaction) {
      console.log("Transaction updated successfully:", result.data.updateTransaction.transaction);
      refetch();
      setIsEditing(false);
      setBasicOpened(false);
    } else {
      console.error("Failed to update transaction:", result.error?.message);
    }
  };
  

  if (fetching) return <p>Loading transactions...</p>;
  if (error) return <p>Error loading transactions: {error.message}</p>;

  // Filter transactions based on the active tab
  const filteredTransactions = data?.transactions?.nodes?.filter((tx: any) => {
    if (activeTab === "revenus") return tx.type === "INCOME";
    if (activeTab === "depenses") return tx.type === "EXPENSE";
    return true;
  });

  return (
    <div className="mx-auto mt-16 max-w-lg p-4">


      {/* Tab Navigation */}
      <div role="tablist" className="flex justify-between border-b-2 mb-6">
        <a
          role="tab"
          className={`flex-1 text-center pb-2 text-lg font-semibold ${
            activeTab === "tout" ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("tout")}
        >
          Tout
        </a>
        <a
          role="tab"
          className={`flex-1 text-center pb-2 text-lg font-semibold ${
            activeTab === "revenus" ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("revenus")}
        >
          Revenus
        </a>
        <a
          role="tab"
          className={`flex-1 text-center pb-2 text-lg font-semibold ${
            activeTab === "depenses" ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("depenses")}
        >
          Dépenses
        </a>
      </div>

      

      {/* Transactions List */}
      <div className="space-y-4">
        {filteredTransactions?.map((tx: any) => (
          <div
            key={tx.transactionId}
            className="flex items-center justify-between rounded-lg border-l-4 bg-white p-6 shadow-lg transition-transform hover:shadow-2xl hover:scale-105"
            style={{
              borderColor: tx.type === "INCOME" ? "#34D399" : "#EF4444",
            }}
          >
            <div>
              <p className="text-sm text-gray-500">{dayjs(tx.date).format('lll')}</p>
              <p className="text-xl font-semibold text-gray-900">{tx.amount} TND</p>
              <p className="text-sm text-gray-700">{tx.description}</p>
              <p className="text-sm text-gray-700">{tx.category?.name}</p>
              <span
                className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  tx.type === "INCOME" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                }`}
              >
                {tx.type === "INCOME" ? "Revenu" : "Dépense"}
              </span>
            </div>
            <div className="flex space-x-3">
            <button
  className="text-blue-500 hover:text-blue-700"
  onClick={() => {
    setEditData({
      id: tx.transactionId,
      type: tx.type,
      categoryId: tx.category.id,
      date: tx.date,
      description: tx.description || "",
      amount: tx.amount,
    });
    setIsEditing(true);
    setBasicOpened(true);
  }}
  
>
  <IconPencil size={23} />
</button>

              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(tx.transactionId, () => refetch())}
              >
                <IconTrash size={23} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Transaction Modal */}
      {basicOpened && <TransactionModal
        basicOpened={basicOpened}
        setBasicOpened={setBasicOpened}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editData={editData}
        setEditData={setEditData}
        handleEdit={handleEdit}
        onSuccess={() => refetch()}
      />}

      {/* FAB Button */}
      <Fab
        onClick={() => {
          setIsEditing(false);
          setBasicOpened(true);
        }}
        className="fixed bottom-6 right-6 z-50 transform rounded-full bg-blue-500 p-5 text-white shadow-xl transition-transform hover:scale-110 hover:bg-blue-600"
        icon={<IconPlus />}
      />
    </div>
  );
};

export default TransactionsList;
