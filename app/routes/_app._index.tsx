import { useState, useMemo, useEffect } from 'react'; 
import { Fab } from "konsta/react";
import { IconPlus, IconChevronLeft, IconChevronRight, IconWallet, IconChartLine, IconCalendar } from "@tabler/icons-react";
import { gql } from 'urql';
import { useQuery } from "urql";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import TransactionModal from '~/components/TransactionModal';
import 'chart.js/auto';
import dayjs from "dayjs";
import { ChartOptions } from 'chart.js/auto';
import { useAtom } from "jotai";
import { userAtom } from "~/store/store";

const GET_TRANSACTIONS = gql`
  query GET_USER_TRANSACTIONS($userId: String!) {
    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {
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
  const [selectedYear, setSelectedYear] = useState(dayjs().format("YYYY"));
  
  // Get user data from the atom store
  const [user] = useAtom(userAtom);
  
  // Ensure user ID is available before making the query
  const [{ data, fetching, error }] = useQuery({
    query: GET_TRANSACTIONS,
    variables: { userId: user ? user.oidcId : "" },  // Use user ID from the atom
    pause: !user, // Pause query until user data is available
  });


  // Generate available years (current year and 5 years back)
  const availableYears = useMemo(() => {
    const currentYear = dayjs().year();
    return Array.from({ length: 6 }, (_, i) => (currentYear - i).toString());
  }, []);
  
  // Update month offset when selected year changes
  useEffect(() => {
    const yearDiff = dayjs().year() - parseInt(selectedYear);
    setMonthOffset(yearDiff * 12);
  }, [selectedYear]);

  const currentMonth = dayjs().subtract(monthOffset, 'month').format("YYYY-MM");
  const lastMonth = dayjs().subtract(monthOffset + 1, 'month').format("YYYY-MM");

  const currentMonthName = dayjs().subtract(monthOffset, 'month').format("MMMM");
  const lastMonthName = dayjs().subtract(monthOffset + 1, 'month').format("MMMM");
  const currentYear = selectedYear;

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
  const allTimeTotals = useMemo(() => calculateTotals(currentYear), [data, currentYear]);

  // Calculate monthly totals for the balance chart - now filtered by selected year
  const monthlyData = useMemo(() => {
    if (!data) return [];
    
    // Get all months for the selected year
    const months = Array.from({ length: 12 }, (_, i) => {
      const month = dayjs(`${selectedYear}-01-01`).add(i, 'month');
      return {
        label: month.format("MMM"),
        month: month.format("YYYY-MM"),
      };
    });
    
    return months.map(({ label, month }) => {
      const totals = calculateTotals(undefined, month);
      const balance = totals.income - totals.expenses;
      return { label, balance };
    });
  }, [data, selectedYear]);

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

  const balanceChartData = {
    labels: monthlyData.map(d => d.label),
    datasets: [
      {
        label: "Balance",
        data: monthlyData.map(d => d.balance),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        pointBackgroundColor: "#3b82f6",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const balanceChartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: "top",
        labels: {
          usePointStyle: true,
          font: {
            weight: "bold"
          }
        }
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 14,
          weight: "bold"
        },
        bodyFont: {
          size: 13
        },
        padding: 10,
        callbacks: {
          label: function(context) {
            return `Balance: ${context.raw} TND`;
          }
        }
      }
    },
    scales: {
      x: { 
        grid: { display: false },
        ticks: {
          font: {
            weight: "bold"
          }
        }
      },
      y: { 
        beginAtZero: true,
        grid: { color: "rgba(0, 0, 0, 0.05)" },
        ticks: {
          font: {
            weight: "bold"
          },
          callback: function(value) {
            return value + " TND";
          }
        }
      },
    },
  };

  // Calculate last 7 days' transactions - now filtered by selected year
  const last7Days = useMemo(() => {
    // If selected year is current year, use current date
    // Otherwise use the last 7 days of the selected year
    const baseDate = selectedYear === dayjs().format("YYYY") 
      ? dayjs() 
      : dayjs(`${selectedYear}-12-31`);
    
    return Array.from({ length: 7 }, (_, i) => {
      const day = baseDate.subtract(i, 'day');
      return {
        label: day.format("ddd. DD"), // e.g., "Sam. 23"
        date: day.format("YYYY-MM-DD"),
      };
    }).reverse();
  }, [selectedYear]);
  
  // Calculate last 7 days' transactions
  const sevenDaysTotals = useMemo(() => {
    return last7Days.map(({ date, label }) => {
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
  }, [data, last7Days]);
  
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
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: "top",
        labels: {
          usePointStyle: true,
          font: {
            weight: "bold"
          }
        }
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { 
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + " TND";
          }
        }
      },
    },
  };

  const goToPreviousYear = () => {
    const currentIndex = availableYears.indexOf(selectedYear);
    if (currentIndex < availableYears.length - 1) {
      setSelectedYear(availableYears[currentIndex + 1]);
    }
  };

  const goToNextYear = () => {
    const currentIndex = availableYears.indexOf(selectedYear);
    if (currentIndex > 0) {
      setSelectedYear(availableYears[currentIndex - 1]);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {fetching && <p className="text-center text-gray-500">Loading data...</p>}
      {error && <p className="text-center text-red-500">Error fetching transactions.</p>}

      {/* Improved Year Selection */}
      <div className="flex justify-between items-center mb-6 mt-6">
        <div className="bg-white rounded-lg shadow-md py-3 px-5 flex items-center justify-between w-full mt-10">
          <div className="flex items-center">
            <IconCalendar size={28} className="text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-800">Dashboard {selectedYear}</h2>
          </div>
          
          <div className="flex items-center space-x-1">
            <button 
              onClick={goToPreviousYear} 
              disabled={availableYears.indexOf(selectedYear) === availableYears.length - 1}
              className={`p-2 rounded-l-lg ${availableYears.indexOf(selectedYear) === availableYears.length - 1 
                ? 'text-gray-400 bg-gray-100' 
                : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'} transition-colors`}
            >
              <IconChevronLeft size={20} />
            </button>
            
            <div className="px-3 py-1 font-semibold text-gray-800 bg-gray-100 flex items-center justify-center">
              {selectedYear}
            </div>
            
            <button 
              onClick={goToNextYear}
              disabled={availableYears.indexOf(selectedYear) === 0}
              className={`p-2 rounded-r-lg ${availableYears.indexOf(selectedYear) === 0 
                ? 'text-gray-400 bg-gray-100' 
                : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'} transition-colors`}
            >
              <IconChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Summary Card */}
      <div className="flex justify-center mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-xl shadow-lg text-white w-full">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <IconWallet size={24} className="mr-2" />
            Sommaire Annuel {selectedYear}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Income Card */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-300 hover:scale-105 border border-white border-opacity-20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-blue-100">Revenus</p>
                <div className="w-8 h-8 rounded-full bg-green-500 bg-opacity-25 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v1zm-1 4a1 1 0 00-1 1v1a1 1 0 001 1h2a1 1 0 001-1v-1a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                    <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a3 3 0 11-6 0 3 3 0 016 0zm-9 8a3 3 0 116 0 3 3 0 01-6 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold">+{allTimeTotals.income.toLocaleString()} TND</p>
              <div className="w-full h-1 bg-green-200 bg-opacity-20 rounded-full mt-3">
                <div 
                  className="h-1 bg-green-400 rounded-full" 
                  style={{ width: `${Math.min(100, (allTimeTotals.income / (allTimeTotals.income + allTimeTotals.expenses) * 100) || 0)}%` }}
                ></div>
              </div>
            </div>
            
            {/* Expenses Card */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-300 hover:scale-105 border border-white border-opacity-20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-blue-100">Dépenses</p>
                <div className="w-8 h-8 rounded-full bg-red-500 bg-opacity-25 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z" clipRule="evenodd" />
                    <path d="M7 7h6v6H7V7z" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold">-{allTimeTotals.expenses.toLocaleString()} TND</p>
              <div className="w-full h-1 bg-red-200 bg-opacity-20 rounded-full mt-3">
                <div 
                  className="h-1 bg-red-400 rounded-full" 
                  style={{ width: `${Math.min(100, (allTimeTotals.expenses / (allTimeTotals.income + allTimeTotals.expenses) * 100) || 0)}%` }}
                ></div>
              </div>
            </div>
            
            {/* Balance Card */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-300 hover:scale-105 border border-white border-opacity-20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-blue-100">Balance</p>
                <div className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-25 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
              </div>
              <p className={`text-2xl font-bold ${(allTimeTotals.income - allTimeTotals.expenses) >= 0 ? 'text-blue-200' : 'text-red-200'}`}>
                {(allTimeTotals.income - allTimeTotals.expenses).toLocaleString()} TND
              </p>
              <div className="flex items-center mt-3">
                <div className={`text-xs px-2 py-1 rounded-full ${(allTimeTotals.income - allTimeTotals.expenses) >= 0 ? 'bg-blue-600 text-blue-100' : 'bg-red-600 text-red-100'}`}>
                  {(allTimeTotals.income - allTimeTotals.expenses) >= 0 ? 'Positif' : 'Négatif'}
                </div>
                <div className="text-xs text-blue-200 ml-2">
                  {Math.abs(parseFloat(((allTimeTotals.income - allTimeTotals.expenses) / (allTimeTotals.income || 1) * 100).toFixed(1)))}% des revenus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Balance Chart - Enhanced */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full mb-6">
        <h3 className="text-lg font-bold mb-4 flex items-center text-gray-800">
          <IconChartLine size={24} className="mr-2 text-blue-600" />
          Évolution de la Balance ({selectedYear})
        </h3>
        <div className="w-full h-72">
          <Line data={balanceChartData} options={balanceChartOptions} />
        </div>
      </div>

      {/* Monthly Comparison - Enhanced UI */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold flex items-center text-gray-800">
            <IconCalendar size={24} className="mr-2 text-blue-600" />
            Comparaison Mensuelle
          </h3>
          
          <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200">
            <button 
              onClick={() => setMonthOffset(monthOffset + 1)} 
              className="p-2 hover:bg-gray-100 rounded-l-lg text-gray-700"
            >
              <IconChevronLeft size={20} />
            </button>
            <div className="px-3 py-1 font-medium text-gray-800">
              {currentMonthName} & {lastMonthName}
            </div>
            <button 
              onClick={() => setMonthOffset(monthOffset - 1)} 
              className="p-2 hover:bg-gray-100 rounded-r-lg text-gray-700"
            >
              <IconChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Monthly Cards - Improved Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ name: currentMonthName, totals: currentMonthTotals }, { name: lastMonthName, totals: lastMonthTotals }].map(({ name, totals }, index) => {
            const total = totals.income + totals.expenses;
            const expensePercentage = total ? ((totals.expenses / total) * 100).toFixed(1) : "0.0";
            const incomePercentage = total ? ((totals.income / total) * 100).toFixed(1) : "0.0";
            const balance = totals.income - totals.expenses;
            const balanceClass = balance >= 0 ? "text-blue-600" : "text-red-600";

            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:border-blue-300 transition-all transform hover:scale-102 duration-200">
                <h3 className="text-lg font-bold mb-4 text-center text-gray-800 border-b border-gray-200 pb-2">{name}</h3>
                {total === 0 ? (
                  <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                    <IconCalendar size={36} className="mb-2 opacity-50" />
                    <p className="text-sm">Pas de transactions</p>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="relative w-36 h-36">
                      <Doughnut data={chartData(totals.income, totals.expenses)} options={chartOptions} />
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <p className="text-sm font-semibold mb-1">Répartition</p>
                        <div className="flex gap-1 text-xs">
                          <span className="px-1 bg-red-100 text-red-600 rounded">{expensePercentage}%</span>
                          <span>/</span>
                          <span className="px-1 bg-green-100 text-green-600 rounded">{incomePercentage}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="bg-gray-50 p-3 rounded-lg mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Revenus</span>
                          <span className="text-green-600 font-bold">+{totals.income.toLocaleString()} TND</span>
                        </div>
                        <div className="w-full h-1 bg-gray-200 rounded-full">
                          <div 
                            className="h-1 bg-green-500 rounded-full" 
                            style={{ width: `${Math.min(100, (totals.income / (total) * 100) || 0)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Dépenses</span>
                          <span className="text-red-600 font-bold">-{totals.expenses.toLocaleString()} TND</span>
                        </div>
                        <div className="w-full h-1 bg-gray-200 rounded-full">
                          <div 
                            className="h-1 bg-red-500 rounded-full" 
                            style={{ width: `${Math.min(100, (totals.expenses / (total) * 100) || 0)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">Balance</span>
                          <span className={`${balanceClass} font-bold`}>{balance.toLocaleString()} TND</span>
                        </div>
                        <div className="w-full h-1 bg-gray-200 rounded-full mt-2">
                          <div 
                            className={`h-1 ${balance >= 0 ? 'bg-blue-500' : 'bg-red-500'} rounded-full`} 
                            style={{ width: `${Math.min(100, Math.abs(balance) / (total ? total : 1) * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 7 Last Days Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full mb-6">
        <h3 className="text-lg font-bold mb-4 flex items-center text-gray-800">
          <IconCalendar size={24} className="mr-2 text-blue-600" />
          7 Derniers Jours {selectedYear !== dayjs().format("YYYY") ? `(${selectedYear})` : ""}
        </h3>
        <div className="w-full h-72">
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