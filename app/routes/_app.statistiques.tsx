import { Chart, registerables } from "chart.js";
import dayjs from "dayjs";
import html2canvas from "html2canvas";
import { useAtom } from "jotai";
import { jsPDF } from "jspdf";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { gql, useQuery } from "urql";
import { userAtom } from "~/store/store";
import { toast } from "react-toastify";

Chart.register(...registerables);

// TypeScript Interfaces (unchanged)
interface Transaction {
  transactionId: string;
  type: "INCOME" | "EXPENSE";
  date: string;
  amount: number;
  description?: string;
  category: { id: string; name: string };
}

interface TransactionsData {
  transactions: { nodes: Transaction[] };
}

interface ChartData {
  labels: string[];
  datasets: { label: string; data: number[]; backgroundColor: string[] }[];
}

interface TransactionSummary {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  incomeTransactions: number;
  expenseTransactions: number;
  topExpenseCategory?: { name: string; amount: number };
  topIncomeCategory?: { name: string; amount: number };
  averageIncome: number;
  averageExpense: number;
  largestIncome?: { amount: number; date: string; category: string };
  largestExpense?: { amount: number; date: string; category: string };
}

// GraphQL Query (unchanged)
const GET_TRANSACTIONS = gql`
  query GET_TRANSACTIONS3($userId: String!) {
    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {
      nodes {
        transactionId
        type
        date
        amount
        description
        category { id, name }
      }
    }
  }
`;

const monthNames = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

const Statistiques: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [{ data, fetching, error }] = useQuery<TransactionsData>({
    query: GET_TRANSACTIONS,
    variables: { userId: user ? user.oidcId : "" },
    pause: !user,
  });

  // State declarations (unchanged)
  const [selectedYear, setSelectedYear] = useState<string>(dayjs().year().toString());
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"incomeExpense" | "balance">("incomeExpense");
  const [pieChartType, setPieChartType] = useState<"INCOME" | "EXPENSE">("EXPENSE");
  const [incomeExpenseData, setIncomeExpenseData] = useState<ChartData | null>(null);
  const [balanceData, setBalanceData] = useState<ChartData | null>(null);
  const [pieChartData, setPieChartData] = useState<ChartData | null>(null);
  const [filteredPieChartData, setFilteredPieChartData] = useState<ChartData>({
    labels: [],
    datasets: [{ label: "", data: [], backgroundColor: [] }],
  });
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [summary, setSummary] = useState<TransactionSummary>({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    incomeTransactions: 0,
    expenseTransactions: 0,
    averageIncome: 0,
    averageExpense: 0,
  });
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const barChartRef = useRef<HTMLDivElement>(null);
  const pieChartRef = useRef<HTMLDivElement>(null);

  // Check viewport size (unchanged)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Utility Functions (unchanged)
  const generateColors = useCallback((count: number): string[] => {
    const colors: string[] = [];
    const hueStep = 360 / Math.max(count, 1);
    for (let i = 0; i < count; i++) {
      colors.push(`hsl(${i * hueStep}, 70%, 60%)`);
    }
    return colors;
  }, []);

  const formatCurrency = (amount: number): string => {
    return amount.toFixed(2) + " TND";
  };

  const formatDate = (dateString: string): string => {
    return dayjs(dateString).format("DD/MM/YYYY");
  };

  // Data Processing (unchanged)
  const processTransactions = useCallback((transactions: Transaction[]) => {
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

    const incomeTransactions = filteredTransactions.filter((tx) => tx.type === "INCOME");
    const expenseTransactions = filteredTransactions.filter((tx) => tx.type === "EXPENSE");
    const totalIncome = incomeTransactions.reduce((sum, tx) => sum + tx.amount, 0);
    const totalExpense = expenseTransactions.reduce((sum, tx) => sum + tx.amount, 0);
    const averageIncome = incomeTransactions.length ? totalIncome / incomeTransactions.length : 0;
    const averageExpense = expenseTransactions.length ? totalExpense / expenseTransactions.length : 0;

    const categoryMap = filteredTransactions.reduce(
      (acc, { amount, type, category }) => {
        if (!category?.name) return acc;
        acc[type][category.name] = (acc[type][category.name] || 0) + amount;
        return acc;
      },
      { INCOME: {}, EXPENSE: {} } as Record<"INCOME" | "EXPENSE", Record<string, number>>
    );

    const topExpenseCategory = Object.entries(categoryMap.EXPENSE).reduce(
      (max, [name, amount]) => (amount > (max?.amount || 0) ? { name, amount } : max),
      undefined as { name: string; amount: number } | undefined
    );

    const topIncomeCategory = Object.entries(categoryMap.INCOME).reduce(
      (max, [name, amount]) => (amount > (max?.amount || 0) ? { name, amount } : max),
      undefined as { name: string; amount: number } | undefined
    );

    const largestIncome = incomeTransactions.reduce(
      (max, tx) =>
        tx.amount > (max?.amount || 0)
          ? { amount: tx.amount, date: tx.date, category: tx.category.name }
          : max,
      undefined as { amount: number; date: string; category: string } | undefined
    );

    const largestExpense = expenseTransactions.reduce(
      (max, tx) =>
        tx.amount > (max?.amount || 0)
          ? { amount: tx.amount, date: tx.date, category: tx.category.name }
          : max,
      undefined as { amount: number; date: string; category: string } | undefined
    );

    setSummary({
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
      incomeTransactions: incomeTransactions.length,
      expenseTransactions: expenseTransactions.length,
      topExpenseCategory,
      topIncomeCategory,
      averageIncome,
      averageExpense,
      largestIncome,
      largestExpense,
    });

    let groupedData: Record<number, { income: number; expense: number }> = {};
    const isMonthly = selectedMonth !== null;
    const range = isMonthly ? 31 : 12;

    for (let i = 0; i < range; i++) {
      groupedData[i + (isMonthly ? 1 : 0)] = { income: 0, expense: 0 };
    }

    filteredTransactions.forEach(({ amount, type, date }) => {
      const index = isMonthly ? dayjs(date).date() : dayjs(date).month();
      if (type === "INCOME") {
        groupedData[index].income += amount;
      } else {
        groupedData[index].expense += amount;
      }
    });

    const incomeData = Array(range)
      .fill(0)
      .map((_, i) => groupedData[i + (isMonthly ? 1 : 0)]?.income || 0);
    const expenseData = Array(range)
      .fill(0)
      .map((_, i) => groupedData[i + (isMonthly ? 1 : 0)]?.expense || 0);

    setIncomeExpenseData({
      labels: isMonthly
        ? Array.from({ length: 31 }, (_, i) => `${i + 1}`)
        : ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
      datasets: [
        {
          label: "Revenus",
          data: incomeData,
          backgroundColor: Array(range).fill("hsl(120, 70%, 60%)"),
        },
        {
          label: "Dépenses",
          data: expenseData,
          backgroundColor: Array(range).fill("hsl(0, 70%, 60%)"),
        },
      ],
    });

    setBalanceData({
      labels: isMonthly
        ? Array.from({ length: 31 }, (_, i) => `${i + 1}`)
        : ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
      datasets: [
        {
          label: "Balance",
          data: incomeData.map((income, i) => income - expenseData[i]),
          backgroundColor: incomeData.map((income, i) =>
            income - expenseData[i] >= 0 ? "hsl(220, 70%, 60%)" : "hsl(0, 70%, 60%)"
          ),
        },
      ],
    });

    const categoryDataMap: Record<string, { amount: number; type: "INCOME" | "EXPENSE" }> = {};
    filteredTransactions.forEach(({ amount, type, category }) => {
      if (!category?.name) return;
      if (!categoryDataMap[category.name]) {
        categoryDataMap[category.name] = { amount: 0, type };
      }
      categoryDataMap[category.name].amount += amount;
    });

    const categoryNames = Object.keys(categoryDataMap);
    const colors = generateColors(categoryNames.length);
    const categoryColorsMap: Record<string, string> = {};
    categoryNames.forEach((name, i) => {
      categoryColorsMap[name] = colors[i];
    });

    setPieChartData({
      labels: categoryNames,
      datasets: [
        {
          label: "Répartition par Catégorie",
          data: categoryNames.map((name) => categoryDataMap[name].amount),
          backgroundColor: categoryNames.map((name) => categoryColorsMap[name]),
        },
      ],
    });

    const filteredCategories = categoryNames.filter(
      (name) => categoryDataMap[name].type === pieChartType
    );
    setFilteredPieChartData({
      labels: filteredCategories,
      datasets: [
        {
          label: `${pieChartType === "EXPENSE" ? "Dépenses" : "Revenus"} par Catégorie`,
          data: filteredCategories.map((name) => categoryDataMap[name].amount),
          backgroundColor: filteredCategories.map((name) => categoryColorsMap[name]),
        },
      ],
    });
  }, [selectedYear, selectedMonth, pieChartType, generateColors]);

  useEffect(() => {
    if (data?.transactions?.nodes) {
      processTransactions(data.transactions.nodes);
    }
  }, [data, processTransactions]);

  const exportPDF = useCallback(async () => {
    setIsExporting(true);
    const toastId = toast.loading("Exportation en cours...");
  
    try {
      if (!summary || !data?.transactions?.nodes || !barChartRef.current || !pieChartRef.current) {
        toast.update(toastId, {
          render: "Données ou graphiques non disponibles pour l'exportation",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
        setIsExporting(false);
        return;
      }
  
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - 2 * margin;
  
      // Compute pie chart data for both expense and income
      const categoryDataMap: Record<string, { amount: number; type: "INCOME" | "EXPENSE" }> = {};
      const filteredByYear =
        selectedYear === "ALL"
          ? data.transactions.nodes
          : data.transactions.nodes.filter((tx) => dayjs(tx.date).year().toString() === selectedYear);
      const filteredTransactions = selectedMonth
        ? filteredByYear.filter((tx) => dayjs(tx.date).month() === parseInt(selectedMonth))
        : filteredByYear;
  
      filteredTransactions.forEach(({ amount, type, category }) => {
        if (!category?.name) return;
        if (!categoryDataMap[category.name]) {
          categoryDataMap[category.name] = { amount: 0, type };
        }
        categoryDataMap[category.name].amount += amount;
      });
  
      const categoryNames = Object.keys(categoryDataMap);
      const colors = generateColors(categoryNames.length);
      const categoryColorsMap: Record<string, string> = {};
      categoryNames.forEach((name, i) => {
        categoryColorsMap[name] = colors[i];
      });
  
      const expensePieData: ChartData = {
        labels: categoryNames.filter((name) => categoryDataMap[name].type === "EXPENSE"),
        datasets: [
          {
            label: "Dépenses par Catégorie",
            data: categoryNames
              .filter((name) => categoryDataMap[name].type === "EXPENSE")
              .map((name) => categoryDataMap[name].amount),
            backgroundColor: categoryNames
              .filter((name) => categoryDataMap[name].type === "EXPENSE")
              .map((name) => categoryColorsMap[name]),
          },
        ],
      };
  
      const incomePieData: ChartData = {
        labels: categoryNames.filter((name) => categoryDataMap[name].type === "INCOME"),
        datasets: [
          {
            label: "Revenus par Catégorie",
            data: categoryNames
              .filter((name) => categoryDataMap[name].type === "INCOME")
              .map((name) => categoryDataMap[name].amount),
            backgroundColor: categoryNames
              .filter((name) => categoryDataMap[name].type === "INCOME")
              .map((name) => categoryColorsMap[name]),
          },
        ],
      };
  
      const captureChart = async (
        mode: "incomeExpense" | "balance" | "pieExpense" | "pieIncome"
      ): Promise<string | null> => {
        try {
          if (mode === "pieExpense" || mode === "pieIncome") {
            setPieChartType(mode === "pieExpense" ? "EXPENSE" : "INCOME");
            // Check if there's data for this chart type
            const hasData = mode === "pieExpense" 
              ? categoryNames.filter(name => categoryDataMap[name].type === "EXPENSE").length > 0
              : categoryNames.filter(name => categoryDataMap[name].type === "INCOME").length > 0;
  
            if (!hasData) {
              // Create an empty placeholder chart with gray color
              setFilteredPieChartData({
                labels: ["Aucune donnée"],
                datasets: [{
                  label: `${mode === "pieExpense" ? "Dépenses" : "Revenus"} par Catégorie`,
                  data: [1],
                  backgroundColor: ["#d3d3d3"] // Grey color for empty chart
                }]
              });
            }
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for chart update
            if (!pieChartRef.current) return null;
            const canvas = await html2canvas(pieChartRef.current, {
              scale: 3, // Increased scale for better clarity
              backgroundColor: "#ffffff",
              useCORS: true,
            });
            return canvas.toDataURL("image/png");
          } else {
            setViewMode(mode);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for chart update
            if (!barChartRef.current) return null;
            const canvas = await html2canvas(barChartRef.current, {
              scale: 3, // Increased scale for better clarity
              backgroundColor: "#ffffff",
              useCORS: true,
            });
            return canvas.toDataURL("image/png");
          }
        } catch (err) {
          console.error(`Erreur lors de la capture du graphique ${mode}:`, err);
          return null;
        }
      };
  
      const charts = {
        incomeExpense: await captureChart("incomeExpense"),
        balance: await captureChart("balance"),
        pieExpense: await captureChart("pieExpense"),
        pieIncome: await captureChart("pieIncome"),
      };
  
      if (!charts.incomeExpense || !charts.balance || !charts.pieExpense || !charts.pieIncome) {
        toast.update(toastId, {
          render: "Erreur lors de la capture des graphiques",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
        setIsExporting(false);
        return;
      }
  
      // ---- PAGE DE COUVERTURE ----
      const headerHeight = 50;
      pdf.setFillColor(41, 82, 163);
      pdf.rect(0, 0, pageWidth, headerHeight, "F");
      
      pdf.setFillColor(65, 105, 225);
      pdf.rect(0, headerHeight - 8, pageWidth, 8, "F");
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(28);
      pdf.setFont("helvetica", "bold");
      pdf.text("RAPPORT FINANCIER", pageWidth / 2, 30, { align: "center" });
      
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.text(`Généré le ${dayjs().format("DD/MM/YYYY")}`, pageWidth / 2, headerHeight - 12, { align: "center" });
  
      let currentY = 70;
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      
      let periodTitle;
      if (selectedMonth !== null) {
        periodTitle = `${monthNames[parseInt(selectedMonth)]} ${selectedYear !== "ALL" ? selectedYear : ""}`;
      } else {
        periodTitle = selectedYear !== "ALL" ? `Année ${selectedYear}` : "Toutes les données";
      }
      pdf.text(`Analyse financière : ${periodTitle}`, pageWidth / 2, currentY, { align: "center" });
      
      currentY += 20;
      const infoBoxHeight = 55;
      pdf.setDrawColor(220, 220, 220);
      pdf.setFillColor(245, 247, 250);
      pdf.roundedRect(margin, currentY, contentWidth, infoBoxHeight, 4, 4, "FD");
      
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(70, 70, 70);
      
      currentY += 15;
      pdf.text("Période analysée:", margin + 10, currentY);
      pdf.setFont("helvetica", "bold");
      pdf.text(periodTitle, margin + 60, currentY);
      
      pdf.setFont("helvetica", "normal");
      currentY += 12;
      pdf.text("Nombre de transactions:", margin + 10, currentY);
      pdf.setFont("helvetica", "bold");
      pdf.text(`${summary.incomeTransactions + summary.expenseTransactions}`, margin + 60, currentY);
      
      pdf.setFont("helvetica", "normal");
      currentY += 12;
      pdf.text("Utilisateur:", margin + 10, currentY);
      pdf.setFont("helvetica", "bold");
      pdf.text(user?.firstName || "Utilisateur", margin + 60, currentY);
  
      // Résumé Financier
      currentY += 30;
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(41, 82, 163);
      pdf.text("RÉSUMÉ FINANCIER", pageWidth / 2, currentY, { align: "center" });
      
      currentY += 15;
      const flowHeight = 90;
      pdf.setDrawColor(230, 230, 230);
      pdf.setFillColor(250, 250, 250);
      pdf.roundedRect(margin, currentY, contentWidth, flowHeight, 4, 4, "FD");
      
      const boxWidth = contentWidth / 3 - 10;
      const boxHeight = 70;
      pdf.setFillColor(235, 245, 235);
      pdf.setDrawColor(210, 230, 210);
      pdf.roundedRect(margin + 5, currentY + 10, boxWidth, boxHeight, 4, 4, "FD");
      
      pdf.setTextColor(0, 128, 0);
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text("REVENUS", margin + boxWidth/2 + 5, currentY + 25, { align: "center" });
      pdf.setFontSize(16);
      pdf.text(formatCurrency(summary.totalIncome), margin + boxWidth/2 + 5, currentY + 45, { align: "center" });
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.text(`${summary.incomeTransactions} transactions`, margin + boxWidth/2 + 5, currentY + 60, { align: "center" });
      
      pdf.setFillColor(245, 235, 235);
      pdf.setDrawColor(230, 210, 210);
      pdf.roundedRect(pageWidth - margin - boxWidth - 5, currentY + 10, boxWidth, boxHeight, 4, 4, "FD");
      
      pdf.setTextColor(180, 0, 0);
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text("DÉPENSES", pageWidth - margin - boxWidth/2 - 5, currentY + 25, { align: "center" });
      pdf.setFontSize(16);
      pdf.text(formatCurrency(summary.totalExpense), pageWidth - margin - boxWidth/2 - 5, currentY + 45, { align: "center" });
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.text(`${summary.expenseTransactions} transactions`, pageWidth - margin - boxWidth/2 - 5, currentY + 60, { align: "center" });
      
      pdf.setFillColor(235, 235, 245);
      pdf.setDrawColor(210, 210, 230);
      pdf.roundedRect(margin + boxWidth + 15, currentY + 20, boxWidth, boxHeight - 20, 4, 4, "FD");
      
      pdf.setTextColor(0, 0, 150);
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text("BALANCE", margin + boxWidth + 15 + boxWidth/2, currentY + 35, { align: "center" });
      pdf.setFontSize(18);
      pdf.text(formatCurrency(summary.balance), margin + boxWidth + 15 + boxWidth/2, currentY + 55, { align: "center" });
      
      pdf.setDrawColor(0, 128, 0);
      pdf.setLineWidth(0.5);
      pdf.line(margin + boxWidth + 5, currentY + 45, margin + boxWidth + 15, currentY + 45);
      pdf.line(margin + boxWidth + 15, currentY + 45, margin + boxWidth + 13, currentY + 43);
      pdf.line(margin + boxWidth + 15, currentY + 45, margin + boxWidth + 13, currentY + 47);
      
      pdf.setDrawColor(180, 0, 0);
      pdf.line(pageWidth - margin - boxWidth - 5, currentY + 45, pageWidth - margin - boxWidth - 15, currentY + 45);
      pdf.line(pageWidth - margin - boxWidth - 15, currentY + 45, pageWidth - margin - boxWidth - 13, currentY + 43);
      pdf.line(pageWidth - margin - boxWidth - 15, currentY + 45, pageWidth - margin - boxWidth - 13, currentY + 47);
  
      // Points forts
      currentY += flowHeight + 20;
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(41, 82, 163);
      pdf.text("POINTS CLÉS", pageWidth / 2, currentY, { align: "center" });
      
      currentY += 15;
      const highlightsHeight = 60;
      pdf.setDrawColor(230, 230, 230);
      pdf.setFillColor(250, 250, 250);
      pdf.roundedRect(margin, currentY, contentWidth, highlightsHeight, 4, 4, "FD");
      
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(70, 70, 70);
      
      let highlightsX = margin + 10;
      let highlightsY = currentY + 15;
      
      if (summary.topExpenseCategory) {
        pdf.setFont("helvetica", "bold");
        pdf.text("Principale catégorie de dépenses:", highlightsX, highlightsY);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${summary.topExpenseCategory.name} (${formatCurrency(summary.topExpenseCategory.amount)})`, 
          highlightsX, highlightsY + 10);
      }
      
      highlightsY += 25;
      if (summary.topIncomeCategory) {
        pdf.setFont("helvetica", "bold");
        pdf.text("Principale catégorie de revenus:", highlightsX, highlightsY);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${summary.topIncomeCategory.name} (${formatCurrency(summary.topIncomeCategory.amount)})`, 
          highlightsX, highlightsY + 10);
      }
      
      highlightsX = pageWidth / 2;
      highlightsY = currentY + 15;
      
      if (summary.largestExpense) {
        pdf.setFont("helvetica", "bold");
        pdf.text("Plus grande dépense:", highlightsX, highlightsY);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${formatCurrency(summary.largestExpense.amount)} (${summary.largestExpense.category})`, 
          highlightsX, highlightsY + 10);
      }
      
      highlightsY += 25;
      if (summary.largestIncome) {
        pdf.setFont("helvetica", "bold");
        pdf.text("Plus grand revenu:", highlightsX, highlightsY);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${formatCurrency(summary.largestIncome.amount)} (${summary.largestIncome.category})`, 
          highlightsX, highlightsY + 10);
      }
  
      // Helper: Get image natural dimensions
      function getImageSize(imgDataUrl: string): Promise<{ width: number; height: number }> {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve({ width: img.width, height: img.height });
          img.src = imgDataUrl;
        });
      }
  
      // ---- PAGE DES GRAPHIQUES DE CATÉGORIES (PIE CHARTS ONLY) ----
      pdf.addPage();
  
      // Header
      pdf.setFillColor(41, 82, 163);
      pdf.rect(0, 0, pageWidth, 20, "F");
      pdf.setTextColor(255);
      pdf.setFontSize(14);
      pdf.text("RÉPARTITION PAR CATÉGORIE", pageWidth / 2, 13, { align: "center" });
  
      currentY = margin + 25;
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(10);
      pdf.text(`Rapport pour la période: ${periodTitle}`, pageWidth / 2, currentY, { align: "center" });
  
      // Check if mobile
      const isMobile = window.innerWidth <= 768;
  
      if (isMobile) {
        const imageWidth = (pageWidth - margin * 2 - 10) / 2;
        const x1 = margin;
        const x2 = margin + imageWidth + 10;
  
        currentY += 5;
  
        // Titles
        pdf.setFontSize(12);
        pdf.setTextColor(60);
        pdf.text("DÉPENSES", x1 + imageWidth / 2, currentY, { align: "center" });
        pdf.text("REVENUS", x2 + imageWidth / 2, currentY, { align: "center" });
  
        currentY += 2; // Smaller space after title
  
        // Get actual image sizes
        const [expenseSize, incomeSize] = await Promise.all([
          getImageSize(charts.pieExpense),
          getImageSize(charts.pieIncome),
        ]);
  
        const expenseHeight = (expenseSize.height / expenseSize.width) * imageWidth;
        const incomeHeight = (incomeSize.height / incomeSize.width) * imageWidth;
  
        const maxHeight = Math.max(expenseHeight, incomeHeight);
  
        // Draw both charts at the same Y coordinate
        pdf.addImage(charts.pieExpense, "PNG", x1, currentY, imageWidth, expenseHeight);
        pdf.addImage(charts.pieIncome, "PNG", x2, currentY, imageWidth, incomeHeight);
  
        // Move currentY *precisely* just below the taller image
        currentY += maxHeight + 2; // only 2px gap after the charts
      } else {
        // Desktop layout
        const pieWidth = contentWidth;
        const pieHeight = 80;
        const pieX = (pageWidth - pieWidth) / 2;
  
        currentY += 15;
        pdf.setTextColor(180, 0, 0);
        pdf.setFontSize(14);
        pdf.text("DÉPENSES PAR CATÉGORIE", pageWidth / 2, currentY, { align: "center" });
        pdf.addImage(charts.pieExpense, "PNG", pieX, currentY + 10, pieWidth, pieHeight);
  
        currentY += pieHeight + 30;
        pdf.setTextColor(0, 128, 0);
        pdf.setFontSize(14);
        pdf.text("REVENUS PAR CATÉGORIE", pageWidth / 2, currentY, { align: "center" });
        pdf.addImage(charts.pieIncome, "PNG", pieX, currentY + 10, pieWidth, pieHeight);
      }
  
      // ---- PAGE DES GRAPHIQUES D'ÉVOLUTION ----
      pdf.addPage();
      pdf.setFillColor(41, 82, 163);
      pdf.rect(0, 0, pageWidth, 20, "F");
      pdf.setTextColor(255);
      pdf.setFontSize(14);
      pdf.text("ÉVOLUTION FINANCIÈRE", pageWidth / 2, 13, { align: "center" });
  
      currentY = margin + 20;
      pdf.setTextColor(0);
      pdf.setFontSize(16);
      const evolutionTitle = selectedMonth
        ? `pour ${monthNames[parseInt(selectedMonth)]} ${selectedYear}`
        : `pour ${selectedYear !== "ALL" ? "l'année " + selectedYear : "toutes les années"}`;
      pdf.text(`Revenus et Dépenses ${evolutionTitle}`, pageWidth / 2, currentY, { align: "center" });
  
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(10);
      const periodLabel = selectedMonth ? "Jour par jour" : "Mois par mois";
      pdf.text(`Évolution ${periodLabel}`, pageWidth / 2, currentY + 10, { align: "center" });
  
      currentY += 20;
      if (charts.incomeExpense) {
        const imgWidth = contentWidth * 0.9;
        const imgHeight = 80;
        const leftMargin = (pageWidth - imgWidth) / 2;
        pdf.addImage(charts.incomeExpense, "PNG", leftMargin, currentY, imgWidth, imgHeight);
      }
  
      currentY += 100;
      pdf.setTextColor(0);
      pdf.setFontSize(16);
      pdf.text(`Balance ${evolutionTitle}`, pageWidth / 2, currentY, { align: "center" });
  
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(10);
      pdf.text(`Évolution ${periodLabel}`, pageWidth / 2, currentY + 10, { align: "center" });
  
      currentY += 20;
      if (charts.balance) {
        const imgWidth = contentWidth * 0.9;
        const imgHeight = 80;
        const leftMargin = (pageWidth - imgWidth) / 2;
        pdf.addImage(charts.balance, "PNG", leftMargin, currentY, imgWidth, imgHeight);
      }
  
      // ---- PAGE DES CATÉGORIES PRINCIPALES ----
      pdf.addPage();
      currentY = margin;
      pdf.setFillColor(41, 82, 163);
      pdf.rect(0, 0, pageWidth, 20, "F");
      pdf.setTextColor(255);
      pdf.setFontSize(14);
      pdf.text("TOP CATÉGORIES", pageWidth / 2, 13, { align: "center" });
  
      currentY += 15;
      pdf.setTextColor(0);
      pdf.setFontSize(14);
      const topCategoriesTitle = selectedMonth
        ? `pour ${monthNames[parseInt(selectedMonth)]} ${selectedYear}`
        : `pour ${selectedYear !== "ALL" ? "l'année " + selectedYear : "toutes les périodes"}`;
      pdf.text(`Principales catégories ${topCategoriesTitle}`, pageWidth / 2, currentY, { align: "center" });
  
      // Fonction pour calculer le total par catégorie
      const calculateCategoryTotals = (transactions: Transaction[], type: "INCOME" | "EXPENSE") => {
        const categoryTotals: Record<string, { name: string; amount: number; count: number }> = {};
        
        transactions
          .filter(tx => tx.type === type && tx.category?.name)
          .forEach(tx => {
            const categoryName = tx.category.name;
            if (!categoryTotals[categoryName]) {
              categoryTotals[categoryName] = {
                name: categoryName,
                amount: 0,
                count: 0
              };
            }
            categoryTotals[categoryName].amount += tx.amount;
            categoryTotals[categoryName].count += 1;
          });
        
        return Object.values(categoryTotals)
          .sort((a, b) => b.amount - a.amount)
          .slice(0, 5);
      };
  
      // TOP 5 DES CATÉGORIES DE DÉPENSES
      currentY += 15;
      pdf.setTextColor(180, 0, 0);
      pdf.text("TOP 5 DES CATÉGORIES DE DÉPENSES", margin, currentY);
  
      currentY += 10;
      const topExpenseCategories = calculateCategoryTotals(filteredTransactions, "EXPENSE");
  
      pdf.setFillColor(240, 240, 240);
      pdf.rect(margin, currentY, contentWidth, 12, "F");
      pdf.setFontSize(13); 
      pdf.setTextColor(70, 70, 70);
      pdf.text("Montant total", margin + 5, currentY + 8);
      pdf.text("Catégorie", margin + 50, currentY + 8);
      pdf.text("Nombre de transactions", pageWidth - margin - 80, currentY + 8);
      pdf.text("% du total", pageWidth - margin - 25, currentY + 8);
  
      currentY += 12;
      if (topExpenseCategories.length === 0) {
        pdf.setFillColor(250, 250, 250);
        pdf.rect(margin, currentY, contentWidth, 12, "F");
        pdf.setTextColor(100, 100, 100);
        pdf.text("Aucune catégorie trouvée", margin + 5, currentY + 8);
        currentY += 12;
      } else {
        // Calculer le total des dépenses pour le pourcentage
        const totalExpenses = summary.totalExpense;
        
        topExpenseCategories.forEach((category, index) => {
          pdf.setFillColor(index % 2 === 0 ? 255 : 250, index % 2 === 0 ? 245 : 245, index % 2 === 0 ? 245 : 250);
          pdf.rect(margin, currentY, contentWidth, 12, "F");
          pdf.setTextColor(180, 0, 0);
          pdf.text(formatCurrency((category as { amount: number }).amount), margin + 5, currentY + 8);
          pdf.setTextColor(0);
          pdf.text((category as { name: string }).name, margin + 50, currentY + 8);
          pdf.text(`${(category as { count: number }).count} transactions`, pageWidth - margin - 80, currentY + 8);
          
          // Calculer et afficher le pourcentage des dépenses totales
          const percentage = (category.amount / totalExpenses * 100).toFixed(1);
          pdf.text(`${percentage}%`, pageWidth - margin - 25, currentY + 8);
          
          currentY += 12;
        });
      }
  
      // TOP 5 DES CATÉGORIES DE REVENUS
      currentY += 15;
      pdf.setTextColor(0, 128, 0);
      pdf.text("TOP 5 DES CATÉGORIES DE REVENUS", margin, currentY);
  
      currentY += 10;
      const topIncomeCategories = calculateCategoryTotals(filteredTransactions, "INCOME");
  
      pdf.setFillColor(240, 240, 240);
      pdf.rect(margin, currentY, contentWidth, 12, "F");
      pdf.setFontSize(12); 
      pdf.setTextColor(70, 70, 70);
      pdf.text("Montant total", margin + 5, currentY + 8);
      pdf.text("Catégorie", margin + 50, currentY + 8);
      pdf.text("Nombre de transactions", pageWidth - margin - 80, currentY + 8);
      pdf.text("% du total", pageWidth - margin - 25, currentY + 8);
  
      currentY += 12;
      if (topIncomeCategories.length === 0) {
        pdf.setFillColor(250, 250, 250);
        pdf.rect(margin, currentY, contentWidth, 12, "F");
        pdf.setTextColor(100, 100, 100);
        pdf.text("Aucune catégorie trouvée", margin + 5, currentY + 8);
        currentY += 12;
      } else {
        // Calculer le total des revenus pour le pourcentage
        const totalIncome = summary.totalIncome;
        
        topIncomeCategories.forEach((category, index) => {
          pdf.setFillColor(index % 2 === 0 ? 245 : 245, index % 2 === 0 ? 255 : 250, index % 2 === 0 ? 245 : 245);
          pdf.rect(margin, currentY, contentWidth, 12, "F");
          pdf.setTextColor(0, 128, 0);
          pdf.text(formatCurrency(category.amount), margin + 5, currentY + 8);
          pdf.setTextColor(0);
          pdf.text(category.name, margin + 50, currentY + 8);
          pdf.text(`${category.count} transactions`, pageWidth - margin - 80, currentY + 8);
          
          // Calculer et afficher le pourcentage des revenus totaux
          const percentage = (category.amount / totalIncome * 100).toFixed(1);
          pdf.text(`${percentage}%`, pageWidth - margin - 25, currentY + 8);
          
          currentY += 12;
        });
      }

     

      // Footer
      const footerY = pageHeight - 15;
      pdf.setDrawColor(200, 200, 200);
      pdf.setFillColor(240, 240, 240);
      pdf.rect(0, footerY - 10, pageWidth, 20, "F");
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(8);
      pdf.text(
        `Rapport financier généré le ${dayjs().format("DD/MM/YYYY à HH:mm")}`,
        pageWidth / 2,
        footerY,
        { align: "center" }
      );

      // Save PDF
      const fileName = `Rapport_Financier_${selectedYear}${
        selectedMonth ? "_" + monthNames[parseInt(selectedMonth)] : ""
      }.pdf`;
      pdf.save(fileName);
      toast.update(toastId, {
        render: "Rapport exporté avec succès",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Erreur lors de l'exportation PDF:", error);
      toast.update(toastId, {
        render: "Erreur lors de l'exportation PDF",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setIsExporting(false);
    }
  }, [summary, data, selectedYear, selectedMonth, generateColors]);

  if (fetching) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center rounded-lg bg-white p-4 sm:p-6 shadow-lg">
          <div className="h-10 w-10 sm:h-12 sm:w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-gray-700">Chargement de vos données financières...</p>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">Veuillez patienter un instant</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="w-full max-w-sm sm:max-w-md rounded-lg bg-red-50 p-4 sm:p-6 text-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-red-500"
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
          <h2 className="mb-3 text-lg sm:text-xl font-bold text-red-700">Erreur de Chargement</h2>
          <p className="mb-3 text-xs sm:text-sm text-red-600">{error.message}</p>
          <p className="mb-4 text-xs sm:text-sm text-gray-700">Veuillez rafraîchir la page ou réessayer plus tard.</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-md bg-red-600 px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm transition hover:bg-red-700"
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
<div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
  <div className="container mx-auto p-3 sm:p-4 md:p-6">
    <div className="flex flex-col space-y-3 md:flex-row md:items-center md:justify-between">
      <div className="text-white">
      <h1 className="text-xl sm:text-2xl md:text-2xl font-bold mt-14 sm:mt-10 md:mt-20">Statistiques Financières</h1>
        <p className="mt-1 text-xs sm:text-sm md:text-base opacity-90">Analyse détaillée de vos transactions financières</p>
      </div>
      <div className="flex justify-center md:justify-end md:mt-24">

     <button
  onClick={exportPDF}
  disabled={isExporting}
  className={`flex items-center rounded-md px-3 sm:px-4 py-1.5 sm:py-2 font-medium shadow-md transition text-xs sm:text-sm md:text-base z-10 md:mt-10 ${
    isExporting
      ? "bg-gray-400 text-white cursor-not-allowed"
      : "bg-white text-blue-700 hover:bg-gray-100"
  }`}
>
          {isExporting ? (
            <div className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 001 1h12a1 1 0 001-1V9.5a1 1 0 00-1-1h-4.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 008.586 6.5H4a1 1 0 00-1 1V17zm7-14a1 1 0 11-2 0 1 1 0 012 0zm7 14V7.414L12.586 3H7.414L3 7.414V17a1 1 0 001 1h12a1 1 0 001-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {isExporting ? "Exportation..." : " Exporter en PDF"}
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="container mx-auto p-3 sm:p-4 md:p-6">
        {/* Filters Card */}
        <div className="mb-3 sm:mb-4 md:mb-6 rounded-xl bg-white p-3 sm:p-4 md:p-6 shadow-md transition hover:shadow-lg">
          <div className="mb-2 sm:mb-3 md:mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 sm:mr-2 md:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-600"
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
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Sélectionner la période</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 md:grid-cols-2">
            <div className="relative">
              <label className="mb-1 block font-medium text-gray-700 text-xs sm:text-sm md:text-base">Année</label>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white p-1.5 sm:p-2 md:p-3 pl-2 sm:pl-3 md:pl-4 pr-6 sm:pr-8 md:pr-10 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm md:text-base"
                >
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year === "ALL" ? "Toutes les années" : year}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 sm:px-2 md:px-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
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
              <label className="mb-1 block font-medium text-gray-700 text-xs sm:text-sm md:text-base">Mois</label>
              <div className="relative">
                <select
                  value={selectedMonth || ""}
                  onChange={(e) => setSelectedMonth(e.target.value || null)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white p-1.5 sm:p-2 md:p-3 pl-2 sm:pl-3 md:pl-4 pr-6 sm:pr-8 md:pr-10 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm md:text-base"
                >
                  <option value="">Tous les mois</option>
                  {monthNames.map((month, index) => (
                    <option key={month} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 sm:px-2 md:px-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414 l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mb-3 sm:mb-4 md:mb-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 md:grid-cols-3">
          {/* Revenus Card */}
          <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
            <div className="flex items-center bg-green-50 p-2 sm:p-3 md:p-4">
              <div className="mr-2 sm:mr-3 md:mr-4 rounded-full bg-green-100 p-1.5 sm:p-2 md:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-600"
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
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">Total des Revenus</h3>
            </div>
            <div className="p-2 sm:p-4 md:p-6">
              <p className="mb-0.5 sm:mb-1 md:mb-2 text-lg sm:text-2xl md:text-3xl font-bold text-green-600">{formatCurrency(summary.totalIncome)}</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                {selectedMonth !== null
                  ? `Pour ${monthNames[parseInt(selectedMonth)]} ${selectedYear !== "ALL" ? selectedYear : ""}`
                  : `Pour ${selectedYear !== "ALL" ? selectedYear : "toutes les années"}`}
              </p>
            </div>
          </div>
         {/* Dépenses Card */}
<div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
  <div className="flex items-center bg-red-50 p-2 sm:p-3 md:p-4">
    <div className="mr-2 sm:mr-3 md:mr-4 rounded-full bg-red-100 p-1.5 sm:p-2 md:p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
      </svg>
    </div>
    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
      Total des Dépenses
    </h3>
  </div>
  <div className="p-2 sm:p-4 md:p-6">
    <p className="mb-0.5 sm:mb-1 md:mb-2 text-lg sm:text-2xl md:text-3xl font-bold text-red-600">
      {formatCurrency(summary.totalExpense)}
    </p>
    <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
      {selectedMonth !== null
        ? `Pour ${monthNames[parseInt(selectedMonth)]} ${
            selectedYear !== "ALL" ? selectedYear : ""
          }`
        : `Pour ${selectedYear !== "ALL" ? selectedYear : "toutes les années"}`}
    </p>
  </div>
</div>

{/* Centered Balance Card */}
<div className="flex justify-center sm:justify-start mt-4 w-full sm:w-auto">

<div className="w-[90%] sm:w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">

    <div className="flex items-center bg-blue-50 p-2 sm:p-3 md:p-4">
      <div className="mr-2 sm:mr-3 md:mr-4 rounded-full bg-blue-100 p-1.5 sm:p-2 md:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-600"
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
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
        Balance
      </h3>
    </div>
    <div className="p-2 sm:p-4 md:p-6">
      <p
        className={`mb-0.5 sm:mb-1 md:mb-2 text-lg sm:text-2xl md:text-3xl font-bold ${
          summary.balance >= 0 ? "text-blue-600" : "text-red-600"
        }`}
      >
        {formatCurrency(summary.balance)}
      </p>
      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
        {selectedMonth !== null
          ? `Pour ${monthNames[parseInt(selectedMonth)]} ${
              selectedYear !== "ALL" ? selectedYear : ""
            }`
          : `Pour ${
              selectedYear !== "ALL" ? selectedYear : "toutes les années"
            }`}
      </p>
    </div>
  </div>
</div>
</div>

        {/* Transactions Table */}

        {/* Pie Chart Section */}
        {pieChartData && (
          <div className="mb-3 sm:mb-4 md:mb-6 overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
            <div className="border-b border-gray-100 p-3 sm:p-4 md:p-6">
              <h2 className="text-center text-base sm:text-lg md:text-2xl font-bold text-gray-800">Répartition par Catégorie</h2>
            </div>
            <div className="border-b border-gray-100 p-3 sm:p-4 md:p-6">
              <div className="mx-auto flex w-fit overflow-hidden rounded-lg bg-gray-100">
                <button
                  onClick={() => setPieChartType("EXPENSE")}
                  className={`px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 font-medium transition text-xs sm:text-sm md:text-base ${
                    pieChartType === "EXPENSE" ? "bg-red-600 text-white" : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Dépenses
                </button>
                <button
                  onClick={() => setPieChartType("INCOME")}
                  className={`px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 font-medium transition text-xs sm:text-sm md:text-base ${
                    pieChartType === "INCOME" ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Revenus
                </button>
              </div>
            </div>
            <div className="chart-container p-3 sm:p-4 md:p-6">
              <div ref={pieChartRef} className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                <div className="mb-3 lg:mb-0 lg:w-1/2">
                  <div className="h-64 sm:h-80 md:h-96 lg:h-[400px]">
                    {filteredPieChartData.labels.length === 0 ? (
                      <Pie
                        data={{
                          labels: ["Aucune donnée"],
                          datasets: [
                            {
                              label: `${pieChartType === "EXPENSE" ? "Dépenses" : "Revenus"} par Catégorie`,
                              data: [1],
                              backgroundColor: ["#d3d3d3"], // Grey color for empty chart
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            tooltip: {
                              enabled: false, // Disable tooltip for empty chart
                            },
                            legend: { display: false },
                          },
                        }}
                      />
                    ) : (
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
                    )}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-lg bg-gray-50 p-2 sm:p-3 md:p-4">
                    <h3 className="mb-2 sm:mb-3 md:mb-4 border-b border-gray-200 pb-1 sm:pb-2 text-sm sm:text-base md:text-lg font-bold text-gray-800">
                      {pieChartType === "EXPENSE" ? "Détail des Dépenses" : "Détail des Revenus"}
                    </h3>
                    {filteredPieChartData.labels.length === 0 ? (
                      <div className="flex h-24 sm:h-32 md:h-40 items-center justify-center">
                        <p className="text-center text-xs sm:text-sm md:text-base text-gray-500">
                          Aucune donnée disponible pour la période sélectionnée
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="space-y-1 sm:space-y-2 md:space-y-3">
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
                                className="flex items-center justify-between rounded-md p-1 sm:p-1.5 md:p-2 transition hover:bg-gray-100"
                              >
                                <div className="flex items-center">
                                  <div
                                    className="mr-1 sm:mr-2 h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 rounded"
                                    style={{
                                      backgroundColor:
                                        filteredPieChartData.datasets[0].backgroundColor[index],
                                    }}
                                  />
                                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-800">{label}</span>
                                </div>
                                <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                                  <span className="rounded-full bg-gray-200 px-1 sm:px-1.5 py-0.5 text-[10px] sm:text-xs font-bold text-gray-700">
                                    {percentage}%
                                  </span>
                                  <span
                                    className={`text-[10px] sm:text-xs md:text-sm font-medium ${
                                      pieChartType === "EXPENSE" ? "text-red-600" : "text-green-600"
                                    }`}
                                  >
                                    {pieChartType === "EXPENSE"
                                      ? `-${amount.toFixed(2)} TND`
                                      : `+${amount.toFixed(2)} TND`}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-2 sm:mt-3 md:mt-4 md:mt-6 border-t border-gray-200 pt-1 sm:pt-2 md:pt-3 md:pt-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm md:text-lg font-bold text-gray-800">Total:</span>
                            <span
                              className={`text-xs sm:text-sm md:text-lg font-bold ${
                                pieChartType === "EXPENSE" ? "text-red-600" : "text-green-600"
                              }`}
                            >
                              {pieChartType === "EXPENSE" ? "-" : "+"}
                              {filteredPieChartData.datasets[0].data
                                .reduce((sum, val) => sum + val, 0)
                                .toFixed(2)} TND
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
        <div className="mb-3 sm:mb-4 md:mb-6 overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
          <div className="border-b border-gray-100 p-3 sm:p-4 md:p-6">
            <h2 className="text-center text-base sm:text-lg md:text-2xl font-bold text-gray-800">Évolution Financière</h2>
          </div>
          <div className="border-b border-gray-100 p-3 sm:p-4 md:p-6">
            <div className="mx-auto flex w-fit flex-col md:flex-row overflow-hidden rounded-lg border border-gray-200">
              <button
                onClick={() => setViewMode("incomeExpense")}
                className={`px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 font-medium transition text-xs sm:text-sm md:text-base ${
                  viewMode === "incomeExpense"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Revenus/Dépenses
              </button>
              <button
                onClick={() => setViewMode("balance")}
                className={`px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 font-medium transition text-xs sm:text-sm md:text-base ${
                  viewMode === "balance"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Balance
              </button>
            </div>
          </div>
          <div className="chart-container p-3 sm:p-4 md:p-6">
            <div ref={barChartRef} className="h-64 sm:h-80 md:h-96 md:h-[450px]">
              {viewMode === "incomeExpense" && incomeExpenseData ? (
                <Bar
                  data={incomeExpenseData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top",
                        labels: { usePointStyle: true, font: { size: 8, weight: "bold" } },
                      },
                      tooltip: {
                        bodyFont: { size: 10 },
                        padding: 8,
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        callbacks: {
                          label: (context) =>
                            `${context.dataset.label}: ${context.parsed.y.toFixed(2)} TND`,
                        },
                      },
                    },
                    scales: {
                      x: { grid: { display: false }, ticks: { font: { size: 8 } } },
                      y: {
                        beginAtZero: true,
                        grid: { color: "rgba(0, 0, 0, 0.05)" },
                        ticks: {
                          font: { size: 8 },
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
                        labels: { usePointStyle: true, font: { size: 8, weight: "bold" } },
                      },
                      tooltip: {
                        bodyFont: { size: 10 },
                        padding: 8,
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        callbacks: {
                          label: (context) =>
                            `${context.dataset.label}: ${context.parsed.y.toFixed(2)} TND`,
                        },
                      },
                    },
                    scales: {
                      x: { grid: { display: false }, ticks: { font: { size: 8 } } },
                      y: {
                        beginAtZero: true,
                        grid: { color: "rgba(0, 0, 0, 0.05)" },
                        ticks: {
                          font: { size: 8 },
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
                      className="mx-auto h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-400"
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
                    <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-gray-500">Chargement des graphiques en cours...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-gray-100 p-2 sm:p-3 md:p-4 text-center">
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
              {selectedMonth !== null
                ? `Données pour ${monthNames[parseInt(selectedMonth)]} ${selectedYear !== "ALL" ? selectedYear : ""}`
                : `Données pour ${selectedYear !== "ALL" ? "l'année " + selectedYear : "toutes les années"}`}
            </p>
          </div>
        </div>

        {/* No Data Placeholder */}
        {(!pieChartData || pieChartData.labels.length === 0) && (
          <div className="rounded-xl bg-white p-6 sm:p-8 md:p-12 text-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-gray-400"
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
            <h3 className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-xl font-bold text-gray-700">Aucune donnée financière</h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-500">
              Il n'y a pas de transactions pour la période sélectionnée. Essayez de modifier vos filtres ou d'ajouter de nouvelles transactions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistiques;