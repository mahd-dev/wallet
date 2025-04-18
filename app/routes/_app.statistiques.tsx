import { Chart, registerables } from "chart.js";
import dayjs from "dayjs";
import html2canvas from "html2canvas";
import { useAtom } from "jotai";
import { jsPDF } from "jspdf";
import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { gql, useQuery } from "urql";
import { userAtom } from "~/store/store";

Chart.register(...registerables);

// Define TypeScript Interfaces
interface Transaction {
  transactionId: string;
  type: "INCOME" | "EXPENSE";
  date: string;
  amount: number;
  category: {
    id: string;
    name: string;
  };
}

interface TransactionsData {
  transactions: {
    nodes: Transaction[];
  };
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

// GraphQL Query for fetching transactions
const GET_TRANSACTIONS = gql`
  query GET_TRANSACTIONS3($userId: String!) {
    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {
      nodes {
        transactionId
        type
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

export default function Statistiques() {
  const [user] = useAtom(userAtom);
  const [{ data, fetching, error }] = useQuery<TransactionsData>({
    query: GET_TRANSACTIONS,
    variables: { userId: user ? user.oidcId : "" },
    pause: !user,
  });

  const [selectedYear, setSelectedYear] = useState<string>(dayjs().year().toString());
  const [incomeExpenseData, setIncomeExpenseData] = useState<ChartData | null>(null);
  const [balanceData, setBalanceData] = useState<ChartData | null>(null);
  const [pieChartData, setPieChartData] = useState<ChartData | null>(null);
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"incomeExpense" | "balance">("incomeExpense");
  const [pieChartType, setPieChartType] = useState<"INCOME" | "EXPENSE">("EXPENSE");
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [summary, setSummary] = useState<{
    totalIncome: number;
    totalExpense: number;
    balance: number;
  }>({ totalIncome: 0, totalExpense: 0, balance: 0 });

  const [filteredPieChartData, setFilteredPieChartData] = useState<ChartData>({
    labels: [],
    datasets: [{ label: "", data: [], backgroundColor: [] }],
  });

  // Function to generate unique colors (used for Pie Chart)
  const generateColors = (count: number) => {
    const colors: string[] = [];
    const hueStep = 360 / count;
    for (let i = 0; i < count; i++) {
      const color = `hsl(${i * hueStep}, 70%, 60%)`;
      colors.push(color);
    }
    return colors;
  };

  useEffect(() => {
    if (!data) return;

    const transactions = data.transactions.nodes;
    const uniqueYears = Array.from(
      new Set(transactions.map((tx) => dayjs(tx.date).year().toString()))
    );
    setAvailableYears(["ALL", ...uniqueYears.sort()]);

    const filteredByYear =
      selectedYear === "ALL"
        ? transactions
        : transactions.filter((tx) => dayjs(tx.date).year().toString() === selectedYear);

    const filteredTransactions = selectedMonth
      ? filteredByYear.filter((tx) => dayjs(tx.date).month() === parseInt(selectedMonth))
      : filteredByYear;

    const totalIncome = filteredTransactions
      .filter((tx) => tx.type === "INCOME")
      .reduce((sum, tx) => sum + tx.amount, 0);

    const totalExpense = filteredTransactions
      .filter((tx) => tx.type === "EXPENSE")
      .reduce((sum, tx) => sum + tx.amount, 0);

    setSummary({
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
    });

    let groupedData: Record<number, { income: number; expense: number }> = {};
    if (selectedMonth !== null) {
      for (let day = 1; day <= 31; day++) {
        groupedData[day] = { income: 0, expense: 0 };
      }
      filteredTransactions.forEach(({ amount, type, date }) => {
        const dayIndex = dayjs(date).date();
        if (type === "INCOME") {
          groupedData[dayIndex].income += amount;
        } else {
          groupedData[dayIndex].expense += amount;
        }
      });
    } else {
      for (let i = 0; i < 12; i++) {
        groupedData[i] = { income: 0, expense: 0 };
      }
      filteredTransactions.forEach(({ amount, type, date }) => {
        const monthIndex = dayjs(date).month();
        if (type === "INCOME") {
          groupedData[monthIndex].income += amount;
        } else {
          groupedData[monthIndex].expense += amount;
        }
      });
    }

    const incomeData =
      selectedMonth !== null
        ? Array(31)
            .fill(0)
            .map((_, index) => groupedData[index + 1]?.income || 0)
        : Array(12)
            .fill(0)
            .map((_, index) => groupedData[index]?.income || 0);

    const expenseData =
      selectedMonth !== null
        ? Array(31)
            .fill(0)
            .map((_, index) => groupedData[index + 1]?.expense || 0)
        : Array(12)
            .fill(0)
            .map((_, index) => groupedData[index]?.expense || 0);

    setIncomeExpenseData({
      labels:
        selectedMonth !== null
          ? Array.from({ length: 31 }, (_, i) => `${i + 1}`)
          : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Income",
          data: incomeData,
          backgroundColor: Array(incomeData.length).fill("hsl(120, 70%, 60%)"), // Greenish hue
        },
        {
          label: "Expenses",
          data: expenseData,
          backgroundColor: Array(expenseData.length).fill("hsl(0, 70%, 60%)"), // Reddish hue
        },
      ],
    });

    setBalanceData({
      labels:
        selectedMonth !== null
          ? Array.from({ length: 31 }, (_, i) => `${i + 1}`)
          : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Balance",
          data: incomeData.map((income, index) => income - expenseData[index]),
          backgroundColor: incomeData.map((income, index) =>
            income - expenseData[index] >= 0 ? "hsl(220, 70%, 60%)" : "hsl(0, 70%, 60%)" // Blue for positive, Red for negative
          ),
        },
      ],
    });

    const categoryDataMap: Record<string, { amount: number; type: "INCOME" | "EXPENSE" }> = {};
    filteredTransactions.forEach(({ amount, type, category }) => {
      if (!categoryDataMap[category?.name]) {
        categoryDataMap[category?.name] = { amount: 0, type };
      }
      categoryDataMap[category?.name].amount += amount;
    });

    const categoryNames = Object.keys(categoryDataMap);
    const categoryColorsMap: Record<string, string> = {};
    const uniqueColors = generateColors(categoryNames.length);
    categoryNames.forEach((name, index) => {
      categoryColorsMap[name] = uniqueColors[index];
    });

    const expenseCategories = categoryNames.filter((name) => categoryDataMap[name].type === "EXPENSE");
    const incomeCategories = categoryNames.filter((name) => categoryDataMap[name].type === "INCOME");

    const expenseColors = expenseCategories.map((name) => categoryColorsMap[name]);
    const incomeColors = incomeCategories.map((name) => categoryColorsMap[name]);

    setPieChartData({
      labels: categoryNames,
      datasets: [
        {
          label: "Category Breakdown",
          data: categoryNames.map((name) => categoryDataMap[name].amount),
          backgroundColor: categoryNames.map((name) => categoryColorsMap[name]),
        },
      ],
    });

    setFilteredPieChartData({
      labels: pieChartType === "EXPENSE" ? expenseCategories : incomeCategories,
      datasets: [
        {
          label: `${pieChartType === "EXPENSE" ? "Expenses" : "Income"} by Category`,
          data: (pieChartType === "EXPENSE" ? expenseCategories : incomeCategories).map(
            (name) => categoryDataMap[name].amount
          ),
          backgroundColor: pieChartType === "EXPENSE" ? expenseColors : incomeColors,
        },
      ],
    });
  }, [data, selectedYear, pieChartType, selectedMonth]);

  const formatCurrency = (amount: number) => {
    return amount.toFixed(2) + " TND";
  };

  const exportPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const charts = document.querySelectorAll(".chart-container");

    if (!charts.length) {
      alert("No charts to export!");
      return;
    }

    for (let i = 0; i < charts.length; i++) {
      const chart = charts[i] as HTMLElement;
      const canvas = await html2canvas(chart);
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    }

    pdf.save("statistics_report.pdf");
  };

  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  if (fetching) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center rounded-lg bg-white p-8 shadow-lg">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-6 text-xl font-medium text-gray-700">Chargement de vos données financières...</p>
          <p className="mt-2 text-gray-500">Veuillez patienter un instant</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="w-full max-w-lg rounded-lg bg-red-50 p-8 text-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="mb-4 text-2xl font-bold text-red-700">Erreur de Chargement</h2>
          <p className="mb-4 text-red-600">{error.message}</p>
          <p className="mb-6 text-gray-700">Veuillez rafraîchir la page ou réessayer plus tard.</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-md bg-red-600 px-6 py-2 text-white transition hover:bg-red-700"
          >
            Rafraîchir la page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg mt-20">
        <div className="container mx-auto p-6">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="text-white">
              <h1 className="text-3xl font-bold">Statistiques Financières</h1>
              <p className="mt-1 opacity-90">Analyse détaillée de vos transactions financières</p>
            </div>
            <button
              onClick={exportPDF}
              className="flex items-center rounded-md bg-white px-6 py-3 font-medium text-blue-700 shadow-md transition hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 001 1h12a1 1 0 001-1V9.5a1 1 0 00-1-1h-4.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 008.586 6.5H4a1 1 0 00-1 1V17zm7-14a1 1 0 11-2 0 1 1 0 012 0zm7 14V7.414L12.586 3H7.414L3 7.414V17a1 1 0 001 1h12a1 1 0 001-1z"
                  clipRule="evenodd"
                />
              </svg>
              Exporter en PDF
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Filters Card */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <div className="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <h2 className="text-xl font-bold text-gray-800">Sélectionner la période</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative">
              <label className="mb-2 block font-medium text-gray-700">Année</label>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white p-3 pl-4 pr-10 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year === "ALL" ? "Toutes les années" : year}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative">
              <label className="mb-2 block font-medium text-gray-700">Mois</label>
              <div className="relative">
                <select
                  value={selectedMonth || ""}
                  onChange={(e) => setSelectedMonth(e.target.value || null)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white p-3 pl-4 pr-10 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Tous les mois</option>
                  {monthNames.map((month, index) => (
                    <option key={month} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
            <div className="flex items-center bg-green-50 p-4">
              <div className="mr-4 rounded-full bg-green-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Total des Revenus</h3>
            </div>
            <div className="p-6">
              <p className="mb-2 text-3xl font-bold text-green-600">{formatCurrency(summary.totalIncome)}</p>
              <p className="text-sm text-gray-500">
                {selectedMonth !== null
                  ? `Pour ${monthNames[parseInt(selectedMonth)]} ${selectedYear !== "ALL" ? selectedYear : ""}`
                  : `Pour ${selectedYear !== "ALL" ? selectedYear : "toutes les années"}`}
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
            <div className="flex items-center bg-red-50 p-4">
              <div className="mr-4 rounded-full bg-red-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Total des Dépenses</h3>
            </div>
            <div className="p-6">
              <p className="mb-2 text-3xl font-bold text-red-600">{formatCurrency(summary.totalExpense)}</p>
              <p className="text-sm text-gray-500">
                {selectedMonth !== null
                  ? `Pour ${monthNames[parseInt(selectedMonth)]} ${selectedYear !== "ALL" ? selectedYear : ""}`
                  : `Pour ${selectedYear !== "ALL" ? selectedYear : "toutes les années"}`}
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
            <div className="flex items-center bg-blue-50 p-4">
              <div className="mr-4 rounded-full bg-blue-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Balance</h3>
            </div>
            <div className="p-6">
              <p className={`mb-2 text-3xl font-bold ${summary.balance >= 0 ? "text-blue-600" : "text-red-600"}`}>
                {formatCurrency(summary.balance)}
              </p>
              <p className="text-sm text-gray-500">
                {selectedMonth !== null
                  ? `Pour ${monthNames[parseInt(selectedMonth)]} ${selectedYear !== "ALL" ? selectedYear : ""}`
                  : `Pour ${selectedYear !== "ALL" ? selectedYear : "toutes les années"}`}
              </p>
            </div>
          </div>
        </div>

        {/* Pie Chart Section */}
        {pieChartData && (
          <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
            <div className="border-b border-gray-100 p-6">
              <h2 className="text-center text-2xl font-bold text-gray-800">Répartition par Catégorie</h2>
            </div>
            <div className="border-b border-gray-100 p-6">
              <div className="mx-auto flex w-fit overflow-hidden rounded-lg bg-gray-100">
                <button
                  onClick={() => setPieChartType("EXPENSE")}
                  className={`px-8 py-3 font-medium transition ${
                    pieChartType === "EXPENSE" ? "bg-red-600 text-white" : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Dépenses
                </button>
                <button
                  onClick={() => setPieChartType("INCOME")}
                  className={`px-8 py-3 font-medium transition ${
                    pieChartType === "INCOME" ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Revenus
                </button>
              </div>
            </div>
            <div className="chart-container p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                <div className="mb-8 lg:mb-0 lg:w-1/2">
                  {/* Increased Pie Chart Size */}
                  <div className="h-96 md:h-[450px]">
                    <Pie
                      data={filteredPieChartData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          tooltip: {
                            callbacks: {
                              label: (tooltipItem) => {
                                const value = tooltipItem.raw as number;
                                const total = filteredPieChartData.datasets[0].data.reduce(
                                  (sum, val) => sum + val,
                                  0
                                );
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${tooltipItem.label}: ${value.toFixed(2)} TND (${percentage}%)`;
                              },
                            },
                          },
                          legend: { display: false },
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h3 className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold text-gray-800">
                      {pieChartType === "EXPENSE" ? "Détail des Dépenses" : "Détail des Revenus"}
                    </h3>
                    {filteredPieChartData.labels.length === 0 ? (
                      <div className="flex h-40 items-center justify-center">
                        <p className="text-center text-gray-500">
                          Aucune donnée disponible pour la période sélectionnée
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="space-y-3">
                          {filteredPieChartData.labels.map((label, index) => {
                            const amount = filteredPieChartData.datasets[0].data[index];
                            const total = filteredPieChartData.datasets[0].data.reduce(
                              (sum, val) => sum + val,
                              0
                            );
                            const percentage = ((amount / total) * 100).toFixed(1);

                            return (
                              <div
                                key={label}
                                className="flex items-center justify-between rounded-md p-2 transition hover:bg-gray-100"
                              >
                                <div className="flex items-center">
                                  <div
                                    className="mr-3 h-4 w-4 rounded"
                                    style={{
                                      backgroundColor:
                                        filteredPieChartData.datasets[0].backgroundColor[index],
                                    }}
                                  />
                                  <span className="font-medium text-gray-800">{label}</span>
                                </div>
                                <div className="flex items-center">
                                  <span className="mr-3 rounded-full bg-gray-200 px-2 py-1 text-xs font-bold text-gray-700">
                                    {percentage}%
                                  </span>
                                  <span
                                    className={`font-medium ${
                                      pieChartType === "EXPENSE" ? "text-red-600" : "text-green-600"
                                    }`}
                                  >
                                    {pieChartType === "EXPENSE"
                                      ? `- ${amount.toFixed(2)} TND`
                                      : `+ ${amount.toFixed(2)} TND`}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-6 border-t border-gray-200 pt-4">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-800">Total:</span>
                            <span
                              className={`text-lg font-bold ${
                                pieChartType === "EXPENSE" ? "text-red-600" : "text-green-600"
                              }`}
                            >
                              {pieChartType === "EXPENSE" ? "- " : "+ "}
                              {filteredPieChartData.datasets[0].data
                                .reduce((sum, val) => sum + val, 0)
                                .toFixed(2)}{" "}
                              TND
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bar Chart Section */}
        <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
          <div className="border-b border-gray-100 p-6">
            <h2 className="text-center text-2xl font-bold text-gray-800">Évolution Financière</h2>
          </div>
          <div className="border-b border-gray-100 p-6">
            <div className="mx-auto flex w-fit overflow-hidden rounded-lg border border-gray-200">
              <button
                onClick={() => setViewMode("incomeExpense")}
                className={`px-8 py-3 font-medium transition ${
                  viewMode === "incomeExpense"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Revenus/Dépenses
              </button>
              <button
                onClick={() => setViewMode("balance")}
                className={`px-8 py-3 font-medium transition ${
                  viewMode === "balance"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Balance
              </button>
            </div>
          </div>
          <div className="chart-container p-6">
            {/* Increased Bar Chart Size */}
            <div className="h-96 md:h-[500px]">
              {viewMode === "incomeExpense" && incomeExpenseData ? (
                <Bar
                  data={incomeExpenseData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top",
                        labels: { usePointStyle: true, font: { size: 12, weight: "bold" } },
                      },
                      tooltip: {
                        bodyFont: { size: 14 },
                        padding: 12,
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        callbacks: {
                          label: (context) =>
                            `${context.dataset.label}: ${context.parsed.y.toFixed(2)} TND`,
                        },
                      },
                    },
                    scales: {
                      x: { grid: { display: false }, ticks: { font: { size: 12 } } },
                      y: {
                        beginAtZero: true,
                        grid: { color: "rgba(0, 0, 0, 0.05)" },
                        ticks: {
                          font: { size: 12 },
                          callback: (value) => `${value} TND`,
                        },
                      },
                    },
                  }}
                />
              ) : viewMode === "balance" && balanceData ? (
                <Bar
                  data={balanceData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top",
                        labels: { usePointStyle: true, font: { size: 12, weight: "bold" } },
                      },
                      tooltip: {
                        bodyFont: { size: 14 },
                        padding: 12,
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        callbacks: {
                          label: (context) =>
                            `${context.dataset.label}: ${context.parsed.y.toFixed(2)} TND`,
                        },
                      },
                    },
                    scales: {
                      x: { grid: { display: false }, ticks: { font: { size: 12 } } },
                      y: {
                        beginAtZero: true,
                        grid: { color: "rgba(0, 0, 0, 0.05)" },
                        ticks: {
                          font: { size: 12 },
                          callback: (value) => `${value} TND`,
                        },
                      },
                    },
                  }}
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <p className="mt-4 text-gray-500">Chargement des graphiques en cours...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-gray-100 p-4 text-center">
            <p className="text-sm text-gray-500">
              {selectedMonth !== null
                ? `Données pour ${monthNames[parseInt(selectedMonth)]} ${selectedYear !== "ALL" ? selectedYear : ""}`
                : `Données pour ${selectedYear !== "ALL" ? "l'année " + selectedYear : "toutes les années"}`}
            </p>
          </div>
        </div>

        {/* No Data Placeholder */}
        {(!pieChartData || pieChartData.labels.length === 0) && (
          <div className="rounded-xl bg-white p-12 text-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="mt-4 text-xl font-bold text-gray-700">Aucune donnée financière</h3>
            <p className="mt-2 text-gray-500">
              Il n'y a pas de transactions pour la période sélectionnée. Essayez de modifier vos filtres ou d'ajouter de nouvelles transactions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}