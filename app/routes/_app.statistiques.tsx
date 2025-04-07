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

// Define TypeScript Interfacesc
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
  // GraphQL query to fetch transactions for the specific user
  const [{ data, fetching, error }] = useQuery<TransactionsData>({
    query: GET_TRANSACTIONS,
    variables: { userId: user ? user.oidcId : "" }, // Pass userId from the atom
    pause: !user, // Pause until user is available
  });
  const [selectedYear, setSelectedYear] = useState<string>(
    dayjs().year().toString(),
  );
  const [incomeExpenseData, setIncomeExpenseData] = useState<ChartData | null>(
    null,
  );
  const [balanceData, setBalanceData] = useState<ChartData | null>(null);
  const [pieChartData, setPieChartData] = useState<ChartData | null>(null);
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"incomeExpense" | "balance">(
    "incomeExpense",
  );
  const [pieChartType, setPieChartType] = useState<"INCOME" | "EXPENSE">(
    "EXPENSE",
  );
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null); // Null means whole year

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
    // Extract unique years from transactions
    const uniqueYears = Array.from(
      new Set(transactions.map((tx) => dayjs(tx.date).year().toString())),
    );
    setAvailableYears(["ALL", ...uniqueYears.sort()]);

    // Filter by year
    const filteredByYear =
      selectedYear === "ALL"
        ? transactions
        : transactions.filter(
            (tx) => dayjs(tx.date).year().toString() === selectedYear,
          );

    // Filter by month if selectedMonth is not null
    const filteredTransactions = selectedMonth
      ? filteredByYear.filter(
          (tx) => dayjs(tx.date).month() === parseInt(selectedMonth),
        )
      : filteredByYear;

    let groupedData: Record<number, { income: number; expense: number }> = {};

    if (selectedMonth !== null) {
      // Group by day if a specific month is selected
      for (let day = 1; day <= 31; day++) {
        groupedData[day] = { income: 0, expense: 0 };
      }

      filteredTransactions.forEach(({ amount, type, date }) => {
        const dayIndex = dayjs(date).date(); // Group by day
        if (!groupedData[dayIndex]) {
          groupedData[dayIndex] = { income: 0, expense: 0 };
        }

        if (type === "INCOME") {
          groupedData[dayIndex].income += amount;
        } else {
          groupedData[dayIndex].expense += amount;
        }
      });
    } else {
      // Group by month if the whole year is selected
      for (let i = 0; i < 12; i++) {
        groupedData[i] = { income: 0, expense: 0 };
      }

      filteredTransactions.forEach(({ amount, type, date }) => {
        const monthIndex = dayjs(date).month(); // Group by month
        if (!groupedData[monthIndex]) {
          groupedData[monthIndex] = { income: 0, expense: 0 };
        }

        if (type === "INCOME") {
          groupedData[monthIndex].income += amount;
        } else {
          groupedData[monthIndex].expense += amount;
        }
      });
    }

    // Prepare Income/Expense Data for Chart
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

    // Income/Expense Bar Chart Data
    setIncomeExpenseData({
      labels:
        selectedMonth !== null
          ? Array.from({ length: 31 }, (_, i) => `Day ${i + 1}`)
          : [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
      datasets: [
        {
          label: "Income",
          data: incomeData,
          backgroundColor: Array(incomeData.length).fill(
            "rgba(75, 192, 192, 0.6)",
          ),
        },
        {
          label: "Expenses",
          data: expenseData,
          backgroundColor: Array(expenseData.length).fill(
            "rgba(255, 99, 132, 0.6)",
          ),
        },
      ],
    });

    // Balance Bar Chart Data
    setBalanceData({
      labels:
        selectedMonth !== null
          ? Array.from({ length: 31 }, (_, i) => `Day ${i + 1}`)
          : [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
      datasets: [
        {
          label: "Balance",
          data:
            selectedMonth !== null
              ? incomeData.map((income, index) => income - expenseData[index])
              : incomeData.map((income, index) => income - expenseData[index]),
          backgroundColor:
            selectedMonth !== null
              ? incomeData.map((income, index) =>
                  income - expenseData[index] >= 0
                    ? "rgba(54, 162, 235, 0.6)"
                    : "rgba(255, 99, 132, 0.6)",
                )
              : incomeData.map((income, index) =>
                  income - expenseData[index] >= 0
                    ? "rgba(54, 162, 235, 0.6)"
                    : "rgba(255, 99, 132, 0.6)",
                ),
        },
      ],
    });

    // Category Data for Pie Chart
    const categoryDataMap: Record<
      string,
      { amount: number; type: "INCOME" | "EXPENSE" }
    > = {};

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
      categoryColorsMap[name] = uniqueColors[index]; // Assign unique color to each category
    });

    const expenseCategories = categoryNames.filter(
      (name) => categoryDataMap[name].type === "EXPENSE",
    );
    const incomeCategories = categoryNames.filter(
      (name) => categoryDataMap[name].type === "INCOME",
    );

    const expenseColors = expenseCategories.map(
      (name) => categoryColorsMap[name],
    );
    const incomeColors = incomeCategories.map(
      (name) => categoryColorsMap[name],
    );

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
          data: (pieChartType === "EXPENSE"
            ? expenseCategories
            : incomeCategories
          ).map((name) => categoryDataMap[name].amount),
          backgroundColor:
            pieChartType === "EXPENSE" ? expenseColors : incomeColors,
        },
      ],
    });
  }, [data, selectedYear, pieChartType, selectedMonth]);

  if (fetching) return <p>Loading charts...</p>;
  if (error) return <p>Error loading transactions: {error.message}</p>;

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

      const imgWidth = 190; // Adjust image width for A4
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (i > 0) pdf.addPage(); // Add a new page for each chart
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    }

    pdf.save("statistics_report.pdf");
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Statistiques Page</h1>

      <div className="mb-4">
        <label className="block font-medium text-gray-700">Select Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="mt-1 w-auto min-w-[120px] rounded border p-2"
        >
          {availableYears.map((year) => (
            <option key={year} value={year}>
              {year === "ALL" ? "Show All Years" : year}
            </option>
          ))}
        </select>
      </div>

      {/* New month selection */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Select Month:</label>
        <select
          value={selectedMonth || ""}
          onChange={(e) => setSelectedMonth(e.target.value || null)}
          className="mt-1 w-auto min-w-[120px] rounded border p-2"
        >
          <option value="">Show All Months</option>
          {[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ].map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>

        <button
          onClick={exportPDF}
          className="rounded-md bg-blue-600 px-6 py-2 text-white shadow-md hover:bg-blue-700"
        >
          Export PDF
        </button>
      </div>

      {pieChartData && (
        <div className="mx-auto mb-8 max-w-4xl">
          {/* Toggle Buttons */}
          <div className="mb-4 flex justify-center">
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

          {/* Layout with Pie Chart and Legend */}
          <div className="chart-container flex flex-col items-center justify-center gap-8 md:flex-row">
            {/* Enlarged Pie Chart */}
            <div className="max-w-lg flex-1">
              <h2 className="mb-4 text-center text-lg font-bold">
                DÉPENSES PAR CATÉGORIE
              </h2>
              <Pie
                data={filteredPieChartData}
                options={{
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: (tooltipItem) => {
                          return `${tooltipItem.label}: ${(tooltipItem.raw as number).toFixed(2)} TND`;
                        },
                      },
                    },
                    legend: {
                      display: false, // Hide built-in legend
                    },
                  },
                }}
              />
            </div>

            {/* Moved Category Labels & Totals */}
            <div className="w-full max-w-sm">
              {filteredPieChartData.labels.map((label, index) => {
                const amount = filteredPieChartData.datasets[0].data[index];
                const total = filteredPieChartData.datasets[0].data.reduce(
                  (sum, val) => sum + val,
                  0,
                );
                const percentage = ((amount / total) * 100).toFixed(1);

                return (
                  <div
                    key={label}
                    className="flex items-center justify-between py-2 text-sm"
                  >
                    {/* Color Indicator (Rectangle) */}
                    <div className="flex items-center">
                      <span
                        className="mr-2 inline-block h-3 w-4"
                        style={{
                          backgroundColor:
                            filteredPieChartData.datasets[0].backgroundColor[
                              index
                            ],
                        }}
                      />
                      <span className="font-medium text-gray-700">{label}</span>
                    </div>

                    {/* Percentage & Amount */}
                    <div className="flex items-center font-medium text-gray-700">
                      <span className="mr-2">{percentage}%</span>{" "}
                      {/* Add space between % and amount */}
                      <span
                        className={
                          pieChartType === "EXPENSE"
                            ? "text-red-600"
                            : "text-green-600"
                        }
                      >
                        {pieChartType === "EXPENSE"
                          ? `- ${amount.toFixed(2)} TND`
                          : `+ ${amount.toFixed(2)} TND`}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Total Amount */}
              <div className="mt-4 text-right text-lg font-bold text-red-600">
                Total: {pieChartType === "EXPENSE" ? "- " : "+ "}
                {filteredPieChartData.datasets[0].data
                  .reduce((sum, val) => sum + val, 0)
                  .toFixed(2)}{" "}
                TND
              </div>
            </div>
          </div>
        </div>
      )}

      {viewMode === "incomeExpense" && incomeExpenseData ? (
        <div className="chart-container">
          <Bar
            data={incomeExpenseData}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
            }}
          />
        </div>
      ) : viewMode === "balance" && balanceData ? (
        <div className="chart-container">
          <Bar
            data={balanceData}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
            }}
          />
        </div>
      ) : (
        <div className="mt-4 text-center text-gray-500">Loading charts...</div>
      )}

      <div className="mt-6 flex justify-center">
        <div className="flex rounded-md border border-gray-200 bg-gray-100 p-1">
          <button
            onClick={() => setViewMode("incomeExpense")}
            className="px-6 py-2 text-sm font-medium"
          >
            Income/Expenses
          </button>
          <button
            onClick={() => setViewMode("balance")}
            className="px-6 py-2 text-sm font-medium"
          >
            Balance
          </button>
        </div>
      </div>
    </div>
  );
}
