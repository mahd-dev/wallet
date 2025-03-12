import { useState } from "react";
import dayjs from "dayjs";
import { useQuery, gql } from "urql";

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
      
      {/* Month Selector */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Select Month:</label>
        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      
      {/* Transactions Table */}
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
      
      {/* Balance Calculation */}
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
