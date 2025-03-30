import { useState, useMemo } from 'react';
import { Fab } from "konsta/react";
import { IconPlus, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { gql } from 'urql';
import { useQuery } from "urql";
import { Doughnut , Bar } from "react-chartjs-2";
import TransactionModal from '~/components/TransactionModal';
import 'chart.js/auto';
import dayjs from "dayjs";
import { ChartOptions } from 'chart.js/auto';

const GET_TRANSACTIONS = gql`
  query GET_TRANSACTIONS {
    transactions(orderBy: DATE_DESC) {
      nodes {
        transactionId
        type
        date
        amount
      }
    }
  }
`;

export default function HomePage() {
  const [basicOpened, setBasicOpened] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [monthOffset, setMonthOffset] = useState(0);

  const [{ data, fetching, error }] = useQuery({ query: GET_TRANSACTIONS });

  const currentMonth = dayjs().subtract(monthOffset, 'month').format("YYYY-MM");
  const lastMonth = dayjs().subtract(monthOffset + 1, 'month').format("YYYY-MM");

  const currentMonthName = dayjs().subtract(monthOffset, 'month').format("MMMM");
  const lastMonthName = dayjs().subtract(monthOffset + 1, 'month').format("MMMM");
  const currentYear = dayjs().subtract(monthOffset, 'month').format("YYYY");

  interface Transaction {
    transactionId: string;
    type: "INCOME" | "EXPENSE";
    date: string;
    amount: number;
  }

  interface TransactionsData {
    transactions: {
      nodes: Transaction[];
    };
  }

  const calculateTotals = (year?: string, month?: string) => {
    if (!data) return { income: 0, expenses: 0 };

    const filteredTransactions = (data as TransactionsData).transactions.nodes.filter((t) => {
      const transactionDate = dayjs(t.date);
      return year
        ? transactionDate.format("YYYY") === year
        : month
        ? transactionDate.format("YYYY-MM") === month
        : true;
    });

    return filteredTransactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "INCOME") {
          acc.income += transaction.amount;
        } else if (transaction.type === "EXPENSE") {
          acc.expenses += transaction.amount;
        }
        return acc;
      },
      { income: 0, expenses: 0 }
    );
  };

  const currentMonthTotals = useMemo(() => calculateTotals(undefined, currentMonth), [data, monthOffset]);
  const lastMonthTotals = useMemo(() => calculateTotals(undefined, lastMonth), [data, monthOffset]);
  const allTimeTotals = useMemo(() => calculateTotals(currentYear), [data, monthOffset]);

  const chartData = (income: number, expenses: number) => ({
    labels: ["Expenses", "Income"],
    datasets: [
      {
        data: [expenses, income],
        backgroundColor: ["#ff4d4d", "#4caf50"],
        borderWidth: 1,
      },
    ],
  });

  const chartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    cutout: "70%",
  };
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const day = dayjs().subtract(i, 'day');
    return {
      label: day.format("ddd. DD"), // e.g., "Sam. 23"
      date: day.format("YYYY-MM-DD"),
    };
  }).reverse();
  
  // Calculate last 7 days' transactions
  const sevenDaysTotals = last7Days.map(({ date, label }) => {
    const transactionsForDay = (data?.transactions.nodes || []).filter((t: { date: string | number | dayjs.Dayjs | Date | null | undefined; }) => 
      dayjs(t.date).format("YYYY-MM-DD") === date
    );
  
    const dailyIncome = transactionsForDay
      .filter((t: { type: string; }) => t.type === "INCOME")
      .reduce((sum: number, t: { amount: number; }) => sum + t.amount, 0);
  
    const dailyExpenses = transactionsForDay
      .filter((t: { type: string; }) => t.type === "EXPENSE")
      .reduce((sum: any, t: { amount: any; }) => sum + t.amount, 0);
  
    return { label, income: dailyIncome, expenses: dailyExpenses };
  });
  
  const sevenDaysData = {
    labels: sevenDaysTotals.map(d => d.label),
    datasets: [
      {
        label: "Dépenses",
        data: sevenDaysTotals.map(d => d.expenses),
        backgroundColor: "#ff4d4d",
      },
      {
        label: "Revenus",
        data: sevenDaysTotals.map(d => d.income),
        backgroundColor: "#4caf50",
      },
    ],
  };
  
  const sevenDaysOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">

      {fetching && <p className="text-center text-gray-500">Loading data...</p>}
      {error && <p className="text-center text-red-500">Error fetching transactions.</p>}

      <div className="flex justify-between items-center mb-6 mt-10">
        <div className="flex items-center gap-4">
          <button onClick={() => setMonthOffset(monthOffset + 12)}>
            <IconChevronLeft size={24} />
          </button>
          <h2 className="text-lg font-semibold">{currentYear}</h2>
          <button onClick={() => setMonthOffset(monthOffset - 12)}>
            <IconChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Summary Card (Outside Month Navigation) */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-80 sm:w-96 lg:w-1/4 border border-gray-300">
          <h3 className="text-lg font-bold mb-3">Sommaire</h3>
          <div className="flex justify-between text-sm font-semibold mb-4">
            <p className="text-green-600">+{allTimeTotals.income.toLocaleString()} TND</p>
            <p className="text-red-600">-{allTimeTotals.expenses.toLocaleString()} TND</p>
          </div>
          <div className="border-t border-gray-300 my-3"></div>
          <p className="text-md font-bold mb-2">
            Balance: {(allTimeTotals.income - allTimeTotals.expenses).toLocaleString()} TND
          </p>
        </div>
      </div>

      {/* Month Navigation for Two-Month Charts */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => setMonthOffset(monthOffset + 1)}>
          <IconChevronLeft size={24} />
        </button>
        <h2 className="text-lg font-semibold">{currentMonthName} & {lastMonthName}</h2>
        <button onClick={() => setMonthOffset(monthOffset - 1)}>
          <IconChevronRight size={24} />
        </button>
      </div>
      

      {/* Monthly Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {[{ name: currentMonthName, totals: currentMonthTotals }, { name: lastMonthName, totals: lastMonthTotals }].map(({ name, totals }, index) => {
          const total = totals.income + totals.expenses;
          const expensePercentage = total ? ((totals.expenses / total) * 100).toFixed(1) : "0.0";
          const incomePercentage = total ? ((totals.income / total) * 100).toFixed(1) : "0.0";

          return (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-80 sm:w-96 lg:w-1/4 border border-gray-300">
              <h3 className="text-lg font-bold mb-3">{name}</h3>
              {total === 0 ? (
                <p className="text-gray-500 text-sm">No transactions</p>
              ) : (
                <>
                  <div className="relative w-36 h-36 mx-auto mb-4">
                    <Doughnut data={chartData(totals.income, totals.expenses)} options={chartOptions} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-sm font-semibold">
                        {expensePercentage}% / {incomePercentage}%
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm font-semibold mb-4">
                    <p className="text-green-600">+{totals.income.toLocaleString()} TND</p>
                    <p className="text-red-600">-{totals.expenses.toLocaleString()} TND</p>
                  </div>
                  <div className="border-t border-gray-300 my-3"></div>
                  <p className="text-md font-bold">
                    {(totals.income - totals.expenses).toLocaleString()} TND
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
      {/* 7 Derniers Jours Section */}
<div className="bg-white p-6 rounded-lg shadow-md w-full mb-6">
  <h3 className="text-lg font-bold mb-3">7 Derniers Jours</h3>
  <div className="w-full">
    <Bar data={sevenDaysData} options={sevenDaysOptions} />
  </div>
</div>


      {/* Add Transaction Button */}
      <Fab
        onClick={() => {
          setBasicOpened(true);
          setIsEditing(false);
        }}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-500 p-5 text-white shadow-xl hover:scale-110 hover:bg-blue-600"
        icon={<IconPlus />}
      />

      {/* Transaction Modal */}
      {basicOpened && (
        <TransactionModal
          basicOpened={basicOpened}
          setBasicOpened={setBasicOpened}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setEditData={() => {}}
          handleEdit={async () => {}}
          onSuccess={() => {}}
        />
      )}
    </div>
  );
}
