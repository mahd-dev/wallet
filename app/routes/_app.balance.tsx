import { useState } from "react";
import dayjs from "dayjs";
import { useQuery, gql, useMutation } from "urql";
import { nanoid } from "nanoid";
import { Fab } from "konsta/react";
import { IconPlus } from "@tabler/icons-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { useAtom } from "jotai";
import { userAtom } from "~/store/store";
/*const GET_TRANSACTIONS = gql`
  query GET_TRANSACTIONS {
    transactions(orderBy: DATE_DESC) {
      nodes {
        transactionId
        type
        categoryId
        date
        amount
        category {
          id
          name
        }
      }
    }
  }
`;

const BalancePage = () => {
  const [{ data, fetching, error }] = useQuery({ query: GET_TRANSACTIONS });
  const [selectedMonth, setSelectedMonth] = useState(dayjs().format("YYYY-MM"));

  if (fetching) return <p>Loading transactions...</p>;
  if (error) return <p>Error loading transactions: {error.message}</p>;

  // Filter transactions by selected month
  const filteredTransactions = data?.transactions?.nodes?.filter((tx: { type: string; amount: number; date: string }) =>
    dayjs(tx.date).format("YYYY-MM") === selectedMonth
  );

  const expenses = filteredTransactions?.filter((tx: { type: string }) => tx.type === "EXPENSE") || [];
  const income = filteredTransactions?.filter((tx: { type: string }) => tx.type === "INCOME") || [];

  const totalExpenses = expenses.reduce((sum: number, tx: { type: string; amount: number }) => sum + tx.amount, 0);
  const totalIncome = income.reduce((sum: number, tx: { type: string; amount: number }) => sum + tx.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold mb-4">Balance</h1>
      
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Select Month:</label>
        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold text-red-600">Expenses</h2>
          <ul>
            {expenses.length > 0 ? (
              expenses.map((tx: { transactionId: string; category: { name: string }; amount: number }) => (
                <li key={tx.transactionId} className="mt-2 text-red-700">
                  {tx.category.name}: {tx.amount} TND
                </li>
              ))
            ) : (
              <p className="text-gray-500">No transactions found</p>
            )}
          </ul>
          <p className="mt-4 font-semibold text-red-700">Total: {totalExpenses} TND</p>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold text-green-600">Income</h2>
          <ul>
            {income.length > 0 ? (
              income.map((tx: { transactionId: string; category: { name: string }; amount: number }) => (
                <li key={tx.transactionId} className="mt-2 text-green-700">
                  {tx.category.name}: {tx.amount} TND
                </li>
              ))
            ) : (
              <p className="text-gray-500">No transactions found</p>
            )}
          </ul>
          <p className="mt-4 font-semibold text-green-700">Total: {totalIncome} TND</p>
        </div>
      </div>
      
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow text-center">
        <h2 className="text-xl font-bold">Balance</h2>
        <p className={`text-2xl font-semibold ${balance >= 0 ? "text-green-700" : "text-red-700"}`}>
          {balance >= 0 ? `+${balance} TND` : `-${Math.abs(balance)} TND`}
        </p>
      </div>
    </div>
  );
};

export default BalancePage;
*/



const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories {
      nodes {
        id
        name
      }
    }
  }
`;
const ADD_BUDGET_MUTATION = gql`
  mutation AddBudget(
    $budget_id: String!
    $user_id: String!
    $category_id: String!
    $amount: Float!
    $month: Datetime!
    $alert_threshold: Int
  ) {
    createBudget(
      input: {
        budget: {
          budgetId: $budget_id
          userId: $user_id
          categoryId: $category_id
          amount: $amount
          month: $month
          alertThreshold: $alert_threshold
        }
      }
    ) {
      clientMutationId
    }
  }
`;
const GET_BUDGETS = gql`
  query GET_BUDGETS {
    budgets(orderBy: MONTH_DESC) {
      nodes {
        budgetId
        userId
        categoryId
        amount
        month
        alertThreshold
        category {
          id
          name
        }
      }
    }
  }
`;
const GET_TRANSACTIONS = gql`
  query GET_TRANSACTIONS {
    transactions(orderBy: DATE_DESC) {
      nodes {
        transactionId
        type
        categoryId
        date
        amount
        category {
          id
          name
        }
      }
    }
  }
`;
const DELETE_BUDGET = gql`
  mutation DELETE_BUDGET($id: String!) {
    deleteBudget(input: { budgetId: $id }) {
      clientMutationId
    }
  }
`;
const EDIT_BUDGET = gql`
  mutation EDIT_BUDGET(
    $id: String!
    $amount: Float!
    $categoryId: String!
    $month: Datetime!
    $alertThreshold: Int
    $clientMutationId: String!
  ) {
    updateBudget(
      input: {
        patch: {
          amount: $amount
          categoryId: $categoryId
          month: $month 
          alertThreshold: $alertThreshold
        }
        budgetId: $id
        clientMutationId: $clientMutationId
      }
    ) {
      budget {
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
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

import { IconPencil, IconTrash } from '@tabler/icons-react'; // Importing Tabler icons

function BudgetPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState(dayjs().format("YYYY-MM"));
  const [alertThreshold, setAlertThreshold] = useState(80);
  const [editingBudget, setEditingBudget] = useState<{
    budgetId: string;
    categoryId: string;
    amount: number;
    month: string;
    alertThreshold?: number;
  } | null>(null);

  const [{ data: categoryData }] = useQuery({ query: GET_CATEGORIES });
  const [{ data: budgetData, fetching: fetchingBudgets }, getBudgets] = useQuery({ query: GET_BUDGETS });
  const [{ data: transactionData }] = useQuery({ query: GET_TRANSACTIONS });
  const [, addBudget] = useMutation(ADD_BUDGET_MUTATION);
  const [, deleteBudget] = useMutation(DELETE_BUDGET);
  const [, editBudget] = useMutation(EDIT_BUDGET);

  const categories = categoryData?.categories.nodes || [];
  const budgets = budgetData?.budgets.nodes || [];
  const transactions = transactionData?.transactions.nodes || [];
  const [user] = useAtom(userAtom);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBudget) {
      // Update existing budget
      await editBudget({
        id: editingBudget.budgetId,
        amount: parseFloat(amount),
        categoryId,
        month: new Date(month).toISOString(),
        alertThreshold,
        clientMutationId: nanoid(),
      });
    } else {
      // Add new budget
      await addBudget({
        budget_id: nanoid(),
        user_id: user?.oidcId,
        category_id: categoryId,
        amount: parseFloat(amount),
        month: new Date(month).toISOString(),
        alert_threshold: alertThreshold,
      });
    }
    setIsModalOpen(false);
    getBudgets();
  };

  // Handle delete budget
  const handleDelete = async (budgetId: string) => {
    await deleteBudget({ id: budgetId });
    getBudgets();
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold mb-4 mt-20">Budget</h1>

      {fetchingBudgets ? (
        <p>Loading budgets...</p>
      ) : (
        budgets.map((budget: {
          budgetId: string;
          categoryId: string;
          amount: number;
          month: string;
          category?: { name: string };
          alertThreshold?: number;
        }) => {
          const spent = transactions
            .filter(
              (t: { categoryId: string; date: string; amount: number }) =>
                t.categoryId === budget.categoryId &&
                dayjs(t.date).format("YYYY-MM") === dayjs(budget.month).format("YYYY-MM")
            )
            .reduce((sum: number, t: { amount: number }) => sum + t.amount, 0);

          // Calculate progress but limit it to 100%
          const progress = Math.min((spent / budget.amount) * 100, 100);

          // Determine the color based on thresholds
          let progressColor = "bg-green-500"; // Default color is green (within budget)
          if (progress >= 80 && progress < 100) {
            progressColor = "bg-yellow-500"; // Yellow for exceeding 80%
          } else if (progress >= 100) {
            progressColor = "bg-red-500"; // Red for exceeding the budget
          }

          return (
            <div key={budget.budgetId} className="mb-4 p-4 border rounded relative">
              <h2 className="text-lg font-bold">{budget.category?.name}</h2>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`${progressColor} h-4 rounded-full`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm">{spent} / {budget.amount} TND</p>

              {/* Edit and Delete Icons in the bottom-right corner */}
              <div className="absolute bottom-2 right-2 flex space-x-2">
                <button
                  className="text-yellow-500 hover:text-yellow-700"
                  onClick={() => {
                    setCategoryId(budget.categoryId);
                    setAmount(budget.amount.toString());
                    setMonth(dayjs(budget.month).format("YYYY-MM"));
                    setAlertThreshold(budget.alertThreshold || 80);
                    setEditingBudget(budget);
                    setIsModalOpen(true);
                  }}
                >
                  <IconPencil size={20} />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(budget.budgetId)}
                >
                  <IconTrash size={20} />
                </button>
              </div>
            </div>
          );
        })
      )}

      {/* Floating Action Button */}
      <Fab
  className="fixed bottom-6 right-6 z-50 transform rounded-full bg-blue-500 p-5 text-white shadow-xl transition-transform hover:scale-110 hover:bg-blue-600"
  onClick={() => {
    setCategoryId("");
    setAmount("");
    setMonth(dayjs().format("YYYY-MM"));
    setAlertThreshold(80);
    setEditingBudget(null); // Ensure it's set to null to indicate adding a new budget
    setIsModalOpen(true);
  }}
  icon={<IconPlus />}
/>


      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4 mt-20">{editingBudget ? 'Edit Budget' : 'Add Budget'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">Category:</label>
                <select
                  className="w-full p-2 border rounded mt-1"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat: { id: string; name: string }) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium">Amount:</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded mt-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Month:</label>
                <input
                  type="month"
                  className="w-full p-2 border rounded mt-1"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Alert Threshold (%):</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded mt-1"
                  value={alertThreshold}
                  onChange={(e) => setAlertThreshold(Number(e.target.value))}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BudgetPage;
