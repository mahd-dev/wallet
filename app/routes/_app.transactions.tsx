import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2025-02-06",
      amount: 50,
      category: "Alimentation",
      type: "expense",
    },
    {
      id: 2,
      date: "2025-02-05",
      amount: 200,
      category: "Salaire",
      type: "income",
    },
    {
      id: 3,
      date: "2025-02-04",
      amount: 30,
      category: "Transport",
      type: "expense",
    },
  ]);

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  return (
    <div className="mx-auto max-w-lg p-4">
      <h2 className="mb-4 text-2xl font-bold">Transactions</h2>
      <div className="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between rounded-lg border-l-4 bg-white p-4 shadow-md transition hover:shadow-lg"
            style={{
              borderColor: tx.type === "income" ? "#34D399" : "#EF4444",
            }}
          >
            <div>
              <p className="text-sm text-gray-500">{tx.date}</p>
              <p className="text-lg font-semibold">{tx.amount} TND</p>
              <p className="text-sm text-gray-700">{tx.category}</p>
              <span
                className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  tx.type === "income"
                    ? "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-700"
                }`}
              >
                {tx.type === "income" ? "Revenu" : "Dépense"}
              </span>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <Pencil size={18} />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => deleteTransaction(tx.id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;
