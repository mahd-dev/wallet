import { IconPencil, IconTrash } from "@tabler/icons-react";
import { gql, useQuery } from "urql";

const TransactionsList = () => {
  const GET_TRANSACTIONS = gql`
    query GET_TRANSACTIONS {
      transactions {
        nodes {
          transactionId
          type
          userId
          categoryId
          date
        }
      }
    }
  `;

  const [{ data }] = useQuery({
    query: GET_TRANSACTIONS,
  });

  /* const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };
  */

  return (
    <div className="mx-auto mt-16 max-w-lg p-4">
      <div className="space-y-4">
        {data?.transactions?.nodes?.map((tx: any) => (
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
                <IconPencil size={23} />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                // onClick={() => deleteTransaction(tx.id)}
              >
                <IconTrash size={23} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;
