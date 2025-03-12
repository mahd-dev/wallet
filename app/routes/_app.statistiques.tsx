import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useQuery, gql } from "urql";
import dayjs from "dayjs";
import { jsPDF } from "jspdf";

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
  query GET_TRANSACTIONS {
    transactions(orderBy: DATE_DESC) {
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
  const [{ data, fetching, error }] = useQuery<TransactionsData>({ query: GET_TRANSACTIONS });
  const [selectedYear, setSelectedYear] = useState<string>(dayjs().year().toString());
  const [incomeExpenseData, setIncomeExpenseData] = useState<ChartData | null>(null);
  const [balanceData, setBalanceData] = useState<ChartData | null>(null);
  const [pieChartData, setPieChartData] = useState<ChartData | null>(null);
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"incomeExpense" | "balance">("incomeExpense");
  const [pieChartType, setPieChartType] = useState<"INCOME" | "EXPENSE">("EXPENSE");

  // Function to generate unique colors
  const generateColors = (count: number) => {
    const colors: string[] = [];
    const hueStep = 360 / count; // Distribute hues evenly around the color wheel
    for (let i = 0; i < count; i++) {
      const color = `hsl(${i * hueStep}, 70%, 60%)`; // HSL format for vibrant colors
      colors.push(color);
    }
    return colors;
  };

  const [filteredPieChartData, setFilteredPieChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  }>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    if (!data) return;

    const transactions = data.transactions.nodes;
    const years = [...new Set(transactions.map((tx) => dayjs(tx.date).year().toString()))].sort((a, b) => Number(b) - Number(a));
    setAvailableYears(["ALL", ...years]);

    const filteredTransactions =
      selectedYear === "ALL" ? transactions : transactions.filter((tx) => dayjs(tx.date).year().toString() === selectedYear);

    const monthlyData = Array(12).fill(null).map(() => ({ income: 0, expense: 0 }));
    const categoryData: Record<string, number> = {};

    filteredTransactions.forEach(({ amount, type, date, category }) => {
      const monthIndex = dayjs(date).month();
      if (type === "INCOME") {
        monthlyData[monthIndex].income += amount;
      } else if (type === "EXPENSE") {
        monthlyData[monthIndex].expense += amount;
        categoryData[category.name] = (categoryData[category.name] || 0) + amount;
      }
    });

    setIncomeExpenseData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Income",
          data: monthlyData.map((data) => data.income),
          backgroundColor: Array(12).fill("rgba(75, 192, 192, 0.6)"),
        },
        {
          label: "Expenses",
          data: monthlyData.map((data) => data.expense),
          backgroundColor: Array(12).fill("rgba(255, 99, 132, 0.6)"),
        },
      ],
    });

    setBalanceData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Balance",
          data: monthlyData.map((data) => data.income - data.expense),
          backgroundColor: monthlyData.map((data) =>
            data.income - data.expense >= 0 ? "rgba(54, 162, 235, 0.6)" : "rgba(255, 99, 132, 0.6)"
          ),
        },
      ],
    });

    // Generate unique colors for categories
    const categoryDataMap: Record<string, { amount: number; type: "INCOME" | "EXPENSE" }> = {};

    filteredTransactions.forEach(({ amount, type, category }) => {
      if (!categoryDataMap[category.name]) {
        categoryDataMap[category.name] = { amount: 0, type };
      }
      categoryDataMap[category.name].amount += amount;
    });

    const categoryNames = Object.keys(categoryDataMap);
    const categoryColorsMap: Record<string, string> = {};

    // Generate colors and store them per category
    const uniqueColors = generateColors(categoryNames.length);
    categoryNames.forEach((name, index) => {
      categoryColorsMap[name] = uniqueColors[index]; // Assign unique color to each category
    });

    // Separate income and expense categories
    const expenseCategories = categoryNames.filter((name) => categoryDataMap[name].type === "EXPENSE");
    const incomeCategories = categoryNames.filter((name) => categoryDataMap[name].type === "INCOME");

    // Assign colors correctly
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
          data: (pieChartType === "EXPENSE" ? expenseCategories : incomeCategories).map((name) => categoryDataMap[name].amount),
          backgroundColor: pieChartType === "EXPENSE" ? expenseColors : incomeColors,
        },
      ],
    });

  }, [data, selectedYear, pieChartType]);

  if (fetching) return <p>Loading charts...</p>;
  if (error) return <p>Error loading transactions: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Statistiques Page</h1>

      <div className="mb-4 w-auto inline-block">
        <label className="block text-gray-700 font-medium">Select Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="mt-1 p-2 border rounded w-auto min-w-[120px]"
        >
          {availableYears.map((year) => (
            <option key={year} value={year}>
              {year === "ALL" ? "Show All Years" : year}
            </option>
          ))}
        </select>
      </div>

      {pieChartData && (
        <div className="mb-8 max-w-xs mx-auto">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setPieChartType("EXPENSE")}
              className={`px-6 py-2 text-sm font-medium ${pieChartType === "EXPENSE" ? "bg-gray-300" : ""}`}
            >
              Expenses
            </button>
            <button
              onClick={() => setPieChartType("INCOME")}
              className={`px-6 py-2 text-sm font-medium ${pieChartType === "INCOME" ? "bg-gray-300" : ""}`}
            >
              Income
            </button>
          </div>
          <Pie
            data={filteredPieChartData}
            options={{
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => {
                      return `${tooltipItem.label}: $${tooltipItem.raw}`;
                    },
                  },
                },
              },
            }}
          />
        </div>
      )}

      {viewMode === "incomeExpense" && incomeExpenseData ? (
        <Bar data={incomeExpenseData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      ) : viewMode === "balance" && balanceData ? (
        <Bar data={balanceData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      ) : (
        <p>Loading chart...</p>
      )}

      <div className="flex justify-center mt-6">
        <div className="flex bg-gray-100 p-1 rounded-md border border-gray-200">
          <button onClick={() => setViewMode("incomeExpense")} className="px-6 py-2 text-sm font-medium">
            Income/Expenses
          </button>
          <button onClick={() => setViewMode("balance")} className="px-6 py-2 text-sm font-medium">
            Balance
          </button>
        </div>
      </div>
    </div>
  );
}
