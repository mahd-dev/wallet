import {
  IconAlertTriangle,
  IconChevronLeft,
  IconChevronRight,
  IconPigMoney,
  IconPlus,
  IconTrash,
  IconPencil,
  IconX,
  IconCheck,
  IconFilter,
  IconTrendingUp,
  IconTarget,
} from "@tabler/icons-react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { Fab } from "konsta/react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "urql";
import { userAtom } from "~/store/store";
import { icons } from "./CategoryIconPicker";
import "dayjs/locale/en";


ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

// Define types
interface Category {
  id: string;
  name: string;
  icon?: string;
  iconColor?: string;
  type: "EXPENSE" | "INCOME";
}

interface Budget {
  budgetId: string;
  userId: string;
  categoryId: string;
  amount: number;
  month: string;
  alertThreshold?: number;
  category?: Category;
  createdAt?: string;
}

interface Transaction {
  transactionId: string;
  type: string;
  categoryId: string;
  date: string;
  amount: number;
  category?: Category;
}

// GraphQL queries and mutations
const GET_CATEGORIES = gql`
  query GET_USER_CATEGORIES($userId: String!) {
    categories(condition: { userId: $userId, type: EXPENSE }, orderBy: CREATED_AT_DESC) {
      nodes {
        id
        name
        icon
        iconColor
        type
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
    $created_at: Datetime!
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
          createdAt: $created_at
        }
      }
    ) {
      clientMutationId
    }
  }
`;

const GET_BUDGETS = gql`
  query GET_BUDGETS($userId: String!) {
    budgets(orderBy: CREATED_AT_DESC, condition: { userId: $userId }) {
      nodes {
        budgetId
        userId
        categoryId
        amount
        month
        alertThreshold
        createdAt
        category {
          id
          name
          icon
          iconColor
          type
        }
      }
    }
  }
`;

const GET_TRANSACTIONS = gql`
  query GET_USER_TRANSACTIONS2($userId: String!) {
    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {
      nodes {
        transactionId
        type
        categoryId
        date
        amount
        category {
          id
          name
          icon
          iconColor
          type
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

function BudgetPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState(dayjs().locale("en").format("YYYY-MM"));
  const [alertThreshold, setAlertThreshold] = useState(80);
  const [editingBudget, setEditingBudget] = useState<Budget | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [user] = useAtom(userAtom);
  const [selectedMonth, setSelectedMonth] = useState(dayjs().format("YYYY-MM"));

  // Queries and mutations
  const [{ data: categoryData }] = useQuery({
    query: GET_CATEGORIES,
    variables: { userId: user?.oidcId },
    pause: !user?.oidcId,
  });

  const [{ data: budgetData, fetching: fetchingBudgets }, getBudgets] = useQuery({
    query: GET_BUDGETS,
    variables: { userId: user?.oidcId },
    pause: !user?.oidcId,
  });

  const [{ data: transactionData }] = useQuery({
    query: GET_TRANSACTIONS,
    variables: user ? { userId: user.oidcId } : undefined,
    pause: !user,
  });

  const [, addBudget] = useMutation(ADD_BUDGET_MUTATION);
  const [, deleteBudget] = useMutation(DELETE_BUDGET);
  const [, editBudget] = useMutation(EDIT_BUDGET);

  // Filter categories to only show EXPENSE type
  const expenseCategories = categoryData?.categories.nodes
    ? categoryData.categories.nodes.filter((cat: Category) => cat.type === "EXPENSE")
    : [];
  const budgets = budgetData?.budgets.nodes || [];
  const transactions = transactionData?.transactions.nodes || [];

  // Set selected icon when a category is chosen
  useEffect(() => {
    if (categoryId) {
      const selectedCategory = expenseCategories.find((cat: Category) => cat.id === categoryId);
      if (selectedCategory && selectedCategory.icon) {
        setSelectedIcon(selectedCategory.icon);
      }
    }
  }, [categoryId, expenseCategories]);

  // Format date for display
  const formatDate = (dateString: string): string => {
    return dayjs(dateString).locale("en").format("DD/MM/YYYY");
  };

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
      // Add new budget with a createdAt timestamp
      await addBudget({
        budget_id: nanoid(),
        user_id: user?.oidcId || "",
        category_id: categoryId,
        amount: parseFloat(amount),
        month: new Date(month).toISOString(),
        alert_threshold: alertThreshold,
        created_at: new Date().toISOString(),
      });
    }
    setIsModalOpen(false);
    getBudgets();
  };

  // Handle delete budget
  const handleDelete = async (budgetId: string) => {
    await deleteBudget({ id: budgetId });
    setConfirmDelete(null);
    getBudgets();
  };

  // Get icon component by value
  const getIconComponent = (iconValue: string) => {
    const icon = icons.find((i) => i.value === iconValue);
    return icon ? icon.component : null;
  };

  // Get all budgets for the selected month
  const selectedMonthBudgets = budgets.filter(
    (budget: Budget) => dayjs(budget.month).format("YYYY-MM") === selectedMonth,
  );

  // Get budget category IDs to filter transactions
  const budgetCategoryIds = selectedMonthBudgets.map((budget: Budget) => budget.categoryId);

  // Get total spent for selected month - Only for EXPENSE transactions in categories with budgets
  const selectedMonthSpent = transactions
    .filter(
      (t: Transaction) =>
        dayjs(t.date).locale("en").format("YYYY-MM") === selectedMonth &&
        t.type === "EXPENSE" &&
        budgetCategoryIds.includes(t.categoryId),
    )
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

  // Get total budget for selected month
  const selectedMonthBudgetTotal = selectedMonthBudgets.reduce(
    (sum: number, b: Budget) => sum + b.amount,
    0,
  );

  // Calculate percentage for summary (properly handling values over 100%)
  const summaryPercentage = selectedMonthBudgetTotal > 0
    ? (selectedMonthSpent / selectedMonthBudgetTotal) * 100
    : 0;

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setSelectedMonth(dayjs(selectedMonth).subtract(1, "month").locale("en").format("YYYY-MM"));
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setSelectedMonth(dayjs(selectedMonth).add(1, "month").locale("en").format("YYYY-MM"));
  };

  // Set month in modal to match the selected month
  const openAddModal = () => {
    setCategoryId("");
    setAmount("");
    setMonth(selectedMonth);
    setAlertThreshold(80);
    setEditingBudget(null);
    setIsModalOpen(true);
  };

  // Get unique months from budgets for grouping
  const uniqueMonths = [
    ...new Set(budgets.map((budget: Budget) => dayjs(budget.month).locale("en").format("YYYY-MM"))),
  ].sort((a, b) => dayjs(String(b)).diff(dayjs(String(a))));

  // For budget insights
  const categoryTotals = budgetCategoryIds.length > 0
    ? budgetCategoryIds.map((catId: string) => {
        const catBudget = selectedMonthBudgets.find((b: Budget) => b.categoryId === catId);
        const catSpent: number = transactions
          .filter(
            (t: Transaction) =>
              t.categoryId === catId &&
              dayjs(t.date).locale("en").format("YYYY-MM") === selectedMonth &&
              t.type === "EXPENSE",
          )
          .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

        return {
          id: catId,
          name: catBudget?.category?.name || "Unknown",
          budget: catBudget?.amount || 0,
          spent: catSpent,
          icon: catBudget?.category?.icon,
          iconColor: catBudget?.category?.iconColor,
          percentage: catBudget?.amount ? (catSpent / catBudget.amount) * 100 : 0,
        };
      })
    : [];

  // Sort by percentage (highest first)
  const sortedCategories = [...categoryTotals].sort((a, b) => b.percentage - a.percentage);
  const topCategories = sortedCategories.slice(0, 3);

  // Calculate month-over-month trends (for the last 3 months)
  const getMonthlyTotals = () => {
    const currentMonth = dayjs(selectedMonth);
    const lastThreeMonths = Array.from({ length: 3 }).map((_, i) =>
      currentMonth.subtract(i, "month").format("YYYY-MM")
    );

    return lastThreeMonths.map((monthStr) => {
      // Get budgets for the month
      const monthBudgets = budgets.filter(
        (b: Budget) => dayjs(b.month).locale("en").format("YYYY-MM") === monthStr
      );
      // Calculate total budget for the month (same as selectedMonthBudgetTotal)
      const totalBudget = monthBudgets.reduce(
        (sum: number, b: Budget) => sum + b.amount,
        0
      );
      // Get category IDs for budgets in this month
      const monthBudgetCategoryIds = monthBudgets.map((b: Budget) => b.categoryId);
      // Calculate total spent for the month (same as selectedMonthSpent)
      const totalSpent = transactions
        .filter(
          (t: Transaction) =>
            dayjs(t.date).format("YYYY-MM") === monthStr &&
            t.type === "EXPENSE" &&
            monthBudgetCategoryIds.includes(t.categoryId)
        )
        .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

      return {
        month: dayjs(monthStr).format("MMM"),
        budget: totalBudget,
        spent: totalSpent,
      };
    }).reverse();
  };

  const monthlyTrends = getMonthlyTotals();

  return (
    <div className="container mx-auto max-w-4xl px-2 sm:px-4 py-4 sm:py-8 pb-20 sm:pb-24">
      {/* Summary Card - More compact and responsive */}
      <div className="mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-lg transition-all hover:shadow-xl mt-16">
        <div className="p-3 sm:p-4 md:p-5 text-white">
          <div className="mb-2 sm:mb-3 flex items-center justify-between">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">Monthly Summary</h2>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={goToPreviousMonth}
                className="rounded-full bg-white bg-opacity-10 p-1 sm:p-1.5 transition-all hover:bg-opacity-20"
              >
                <IconChevronLeft size={16} className="sm:w-5 sm:h-5" />
              </button>
              <span className="rounded-lg bg-white bg-opacity-10 px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium">
                {dayjs(selectedMonth).locale("en").format("MMMM YYYY")}
              </span>
              <button
                onClick={goToNextMonth}
                className="rounded-full bg-white bg-opacity-10 p-1 sm:p-1.5 transition-all hover:bg-opacity-20"
              >
                <IconChevronRight size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div className="rounded-lg bg-white bg-opacity-10 p-2 sm:p-3">
              <p className="mb-1 text-xs sm:text-sm text-blue-100 opacity-90">Total Budgeted</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                {selectedMonthBudgetTotal.toFixed(2)} <span className="text-xs sm:text-sm">TND</span>
              </p>
            </div>
            <div className="rounded-lg bg-white bg-opacity-10 p-2 sm:p-3">
              <p className="mb-1 text-xs sm:text-sm text-blue-100 opacity-90">Total Spent</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                {selectedMonthSpent.toFixed(2)} <span className="text-xs sm:text-sm">TND</span>
              </p>
            </div>
          </div>

          {/* Refined, slimmer progress bar */}
          <div className="mt-3 sm:mt-4 relative">
            <div className="mb-1 flex justify-between text-xs sm:text-sm">
              <span className="font-medium">Progress</span>
              <span className="font-bold">{summaryPercentage.toFixed(0)}%</span>
            </div>
            <div className="h-3 sm:h-4 w-full rounded-full bg-white bg-opacity-20 relative">
              <div
                className="h-3 sm:h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-500 flex items-center justify-center"
                style={{
                  width: Math.min(summaryPercentage, 100) + "%",
                }}
              >
                {summaryPercentage >= 35 && (
                  <span className="text-xs font-bold text-white">
                    {summaryPercentage.toFixed(0)}%
                  </span>
                )}
              </div>
              {summaryPercentage < 35 && (
                <span className="absolute inset-0 flex items-center justify-start px-2 text-xs font-bold text-white">
                  {summaryPercentage.toFixed(0)}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Display budgets for the selected month */}
      <div className="mb-3 sm:mb-4 flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-gray-700">
          Budgets for {dayjs(selectedMonth).locale("en").format("MMMM YYYY")}
        </h2>
        <div className="flex items-center">
          <IconFilter size={16} className="mr-1 sm:mr-2 text-gray-400" />
          <span className="text-xs sm:text-sm text-gray-500">Filter by month</span>
        </div>
      </div>

      {/* Display budgets for selected month */}
      {fetchingBudgets ? (
        <div className="flex items-center justify-center py-8 sm:py-12">
          <div className="h-8 w-8 sm:h-10 sm:w-10 animate-spin rounded-full border-b-2 border-blue-500"></div>
        </div>
      ) : selectedMonthBudgets.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 py-8 sm:py-12 text-center">
          <div className="mb-3 sm:mb-4 flex justify-center">
            <IconPigMoney size={36} className="sm:w-12 sm:h-12 text-gray-300" />
          </div>
          <p className="mb-1 sm:mb-2 text-base sm:text-lg text-gray-500">
            No budgets for {dayjs(selectedMonth).locale("en").format("MMMM YYYY")}
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            Click the + button to add a budget
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {selectedMonthBudgets.map((budget: Budget) => {
            const spent = transactions
              .filter(
                (t: Transaction) =>
                  t.categoryId === budget.categoryId &&
                  dayjs(t.date).locale("en").format("YYYY-MM") === dayjs(budget.month).locale("en").format("YYYY-MM") &&
                  t.type === "EXPENSE",
              )
              .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

            const actualProgress = (spent / budget.amount) * 100;
            const displayProgress = Math.min(actualProgress, 100);
            const remaining = budget.amount - spent;
            const isOverspent = remaining < 0;

            let progressColor = "bg-green-500";
            let statusIcon = null;
            let statusClass = "text-green-500";

            if (actualProgress >= (budget.alertThreshold || 80) && actualProgress < 100) {
              progressColor = "bg-yellow-500";
              statusIcon = <IconAlertTriangle size={14} className="sm:w-4 sm:h-4 text-yellow-500" />;
              statusClass = "text-yellow-500";
            } else if (actualProgress >= 100) {
              progressColor = "bg-red-500";
              statusIcon = <IconX size={14} className="sm:w-4 sm:h-4 text-red-500" />;
              statusClass = "text-red-500";
            } else {
              statusIcon = <IconCheck size={14} className="sm:w-4 sm:h-4 text-green-500" />;
              statusClass = "text-green-500";
            }

            const IconComponent = budget.category?.icon
              ? getIconComponent(budget.category.icon)
              : null;

            const iconColor =
              budget.category?.iconColor ||
              icons.find((i) => i.value === budget.category?.icon)?.color ||
              "#gray";

            return (
              <div
                key={budget.budgetId}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="p-3 sm:p-4">
                  <div className="mb-2 sm:mb-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      {IconComponent && (
                        <div
                          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${iconColor}20` }}
                        >
                          <IconComponent size={18} className="sm:w-5 sm:h-5" style={{ color: iconColor }} />
                        </div>
                      )}
                      <div>
                        <h2 className="text-base sm:text-lg font-bold text-gray-800">
                          {budget.category?.name}
                        </h2>
                        <div className="mt-0.5 text-xs text-gray-500">
                          {formatDate(budget.month)} - {dayjs(budget.month).endOf("month").locale("en").format("DD/MM/YYYY")}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2 sm:mb-3">
                    <div className="flex items-center justify-between mb-1 text-xs sm:text-sm">
                      <div className="flex items-center space-x-1">
                        {statusIcon}
                        <span className={`font-medium ${statusClass}`}>
                          Alert at {budget.alertThreshold || 80}%
                        </span>
                      </div>
                      <div className={`font-bold ${isOverspent ? "text-red-500" : "text-green-700"}`}>
                        {Math.abs(remaining).toFixed(2)} <span className="text-xs">TND</span>
                        <span className="ml-1 text-xs">{isOverspent ? "Overspent" : "Remaining"}</span>
                      </div>
                    </div>

                    {/* More refined progress bar with smaller height */}
                    <div className="h-5 sm:h-6 w-full overflow-hidden rounded-full bg-gray-100 relative">
                      <div
                        className={`${progressColor} h-5 sm:h-6 rounded-full transition-all duration-500 flex items-center justify-center`}
                        style={{ width: `${displayProgress}%` }}
                      >
                        {displayProgress >= 35 && (
                          <span className="text-xs font-bold text-white">
                            {actualProgress.toFixed(0)}%
                          </span>
                        )}
                      </div>
                      {displayProgress < 35 && (
                        <span className="absolute inset-0 flex items-center justify-start px-2 text-xs font-bold text-gray-600">
                          {actualProgress.toFixed(0)}%
                        </span>
                      )}
                    </div>

                    <div className="mt-1 flex justify-end items-center font-medium text-gray-700 text-xs sm:text-sm">
                      {spent.toFixed(2)} / {budget.amount.toFixed(2)} TND
                    </div>
                  </div>

                  <div className="flex border-t border-gray-100">
                    <button
                      className="flex flex-1 items-center justify-center space-x-1 py-2 text-xs sm:text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
                      onClick={() => {
                        setCategoryId(budget.categoryId);
                        setAmount(budget.amount.toString());
                        setMonth(dayjs(budget.month).format("YYYY-MM"));
                        setAlertThreshold(budget.alertThreshold || 80);
                        setEditingBudget(budget);
                        setIsModalOpen(true);
                      }}
                    >
                      <IconPencil size={14} className="sm:w-4 sm:h-4" />
                      <span>Edit</span>
                    </button>
                    <button
                      className="flex flex-1 items-center justify-center space-x-1 py-2 text-xs sm:text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                      onClick={() => setConfirmDelete(budget.budgetId)}
                    >
                      <IconTrash size={14} className="sm:w-4 sm:h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Budget Insights - More compact and responsive for mobile */}
      {budgets.length > 0 && (
        <div className="mt-6 sm:mt-8">
          <h2 className="mb-4 sm:mb-6 pb-2 text-lg sm:text-xl font-bold text-gray-700 border-b border-gray-200">
            <div className="flex items-center">
              <IconTarget className="mr-2 text-indigo-500 sm:w-6 sm:h-6" size={20} />
              Financial Insights
            </div>
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            {/* Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
              {/* Spending Trends */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-2 sm:p-3 border border-blue-100 min-h-[150px] sm:min-h-[180px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-1 sm:p-1.5 rounded-full mr-1 sm:mr-2">
                      <IconTrendingUp size={14} className="sm:w-4 sm:h-4 text-blue-600" />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-800">Spending Trends</h3>
                  </div>
                </div>

                {topCategories.length > 0 ? (
                  <div className="space-y-2 sm:space-y-2.5">
                    {topCategories.map((cat) => {
                      const IconComp = cat.icon ? getIconComponent(cat.icon) : null;
                      return (
                        <div key={cat.id} className="flex items-center">
                          {IconComp && (
                            <div
                              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mr-1 sm:mr-2"
                              style={{ backgroundColor: `${cat.iconColor || "#6B7280"}20` }}
                            >
                              <IconComp
                                size={10}
                                className="sm:w-3 sm:h-3"
                                style={{ color: cat.iconColor || "#6B7280" }}
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex justify-between text-[10px] sm:text-xs mb-0.5">
                              <span className="font-medium text-gray-700 truncate">{cat.name}</span>
                              <span className="font-bold text-gray-800">{cat.percentage.toFixed(0)}%</span>
                            </div>
                            {/* Slimmer category progress bars */}
                            <div className="h-1 sm:h-1.5 w-full bg-white rounded-full overflow-hidden">
                              <div
                                className={`h-1 sm:h-1.5 ${
                                  cat.percentage >= 100
                                    ? "bg-red-500"
                                    : cat.percentage >= 80
                                    ? "bg-yellow-500"
                                    : "bg-green-500"
                                } rounded-full`}
                                style={{ width: `${Math.min(cat.percentage, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-[10px] sm:text-sm text-gray-600 italic">No data available yet</p>
                )}
              </div>

              {/* Monthly Comparison */}
              <div className="bg-white rounded-lg p-2 sm:p-3 border border-gray-100 min-h-[150px] sm:min-h-[180px] overflow-x-auto">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-1 sm:p-1.5 rounded-full mr-1 sm:mr-2">
                      <IconTrendingUp size={14} className="sm:w-4 sm:h-4 text-indigo-600" />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-800">Monthly Comparison</h3>
                  </div>
                </div>
                <div>
                  {monthlyTrends.length > 0 ? (
                    <div className="space-y-3">
                      {monthlyTrends.map((item, index) => {
                        const saved = item.budget - item.spent;
                        const isSaved = saved >= 0;

                        return (
                          <div key={index} className="flex flex-col">
                            <div className="flex items-center mb-0.5">
                              <div className="w-10 text-[10px] sm:text-xs font-medium text-gray-600">{item.month}</div>
                              <div className="flex-1 ml-1 sm:ml-2">
                                <div className="relative h-4 sm:h-5 bg-gray-100 rounded-lg overflow-hidden">
                                  {/* Budget bar */}
                                  <div
                                    className="absolute top-0 left-0 h-4 sm:h-5 bg-blue-200 rounded-lg"
                                    style={{ width: `${item.budget > 0 ? 100 : 0}%` }}
                                  ></div>
                                  {/* Spent bar */}
                                  <div
                                    className="absolute top-0 left-0 h-4 sm:h-5 bg-indigo-500 rounded-lg"
                                    style={{
                                      width: `${item.budget > 0 ? (item.spent / item.budget) * 100 : 0}%`,
                                      maxWidth: "100%",
                                    }}
                                  ></div>
                                  <div className="absolute inset-0 flex items-center justify-between px-1 sm:px-2">
                                    <span className="text-[10px] sm:text-xs font-medium text-white">
                                      {item.spent.toFixed(0)} TND
                                    </span>
                                    <span className="text-[10px] sm:text-xs font-medium text-gray-800">
                                      {item.budget.toFixed(0)} TND
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Savings/Overspending indicator */}
                            <div className="flex items-center pl-11 sm:pl-12">
                              <div
                                className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${
                                  isSaved ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}
                              >
                                {isSaved ? (
                                  <div className="flex items-center">
                                    <IconCheck size={10} className="mr-0.5 sm:mr-1" />
                                    <span>Saved {Math.abs(saved).toFixed(0)} TND</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center">
                                    <IconX size={10} className="mr-0.5 sm:mr-1" />
                                    <span>Overspent {Math.abs(saved).toFixed(0)} TND</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-[10px] sm:text-sm text-gray-600 italic">No data available for comparison</p>
                  )}
                </div>
              </div>
            </div>

            {/* Budget Tips - Responsive */}
            <div className="bg-gray-50 p-3 sm:p-4 border-t border-gray-200">
              <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">Budget Tips</h4>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-1 sm:mr-2 text-xs sm:text-sm">•</span>
                  Try to keep your spending below 50% of the total budget for the first two weeks of the month
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-1 sm:mr-2 text-xs sm:text-sm">•</span>
                  Review your budgets monthly based on your actual spending habits
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Position Action Button */}
      <div className="fixed bottom-6 right-6">
        <Fab
          onClick={openAddModal}
          className="h-14 w-14 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-xl transition-shadow"
        >
          <IconPlus size={24} color="#fff" />
        </Fab>
      </div>

      {/* Enhanced Modal with Responsive Fixes for Tablet */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 sm:p-6 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-[22rem] sm:max-w-md md:max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b pl-4 pr-2 py-3 sm:pl-5 sm:pr-3 sm:py-4 mt-10">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {editingBudget ? "Edit Budget" : "Add Budget"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <IconX size={20} className="sm:h-6 sm:w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-5 md:p-6">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Category Selection */}
                <div>
                  <label className="mb-1.5 sm:mb-2 block text-sm sm:text-base font-medium text-gray-700">
                    Category:
                  </label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none rounded-lg border bg-white p-2.5 sm:p-3 md:p-3.5 pl-9 sm:pl-10 md:pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
                      value={categoryId}
                      onChange={(e) => {
                        setCategoryId(e.target.value);
                        const selectedCat = expenseCategories.find(
                          (cat: Category) => cat.id === e.target.value,
                        );
                        if (selectedCat && selectedCat.icon) {
                          setSelectedIcon(selectedCat.icon);
                        } else {
                          setSelectedIcon(null);
                        }
                      }}
                      required
                    >
                      <option value="">Select a category</option>
                      {expenseCategories.map((cat: Category) => (
                        <option
                          key={cat.id}
                          value={cat.id}
                          className="py-2 pl-8 sm:pl-10 md:pl-12"
                          data-icon={cat.icon}
                        >
                          {cat.name}
                        </option>
                      ))}
                    </select>

                    {selectedIcon && (
                      <div className="absolute left-2.5 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 transform">
                        {(() => {
                          const IconComp = getIconComponent(selectedIcon);
                          const iconColor = icons.find((i) => i.value === selectedIcon)?.color;
                          return IconComp ? (
                            <IconComp
                              size={16}
                              className="sm:h-5 sm:w-5 md:h-6 md:w-6"
                              style={{ color: iconColor }}
                            />
                          ) : null;
                        })()}
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3">
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Amount Field */}
                <div>
                  <label className="mb-1.5 sm:mb-2 block text-sm sm:text-base font-medium text-gray-700">
                    Amount (TND):
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      className="w-full rounded-lg border bg-white p-2.5 sm:p-3 md:p-3.5 pl-16 sm:pl-16 md:pl-20 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      required
                    />
                    <div className="absolute left-2 sm:left-3 md:left-4 top-1/2 flex -translate-y-1/2 transform items-center text-gray-500">
                      <span className="font-medium text-sm sm:text-base">TND</span>
                      <span className="mx-1 sm:mx-2">|</span>
                    </div>
                  </div>
                </div>

                {/* Month Selection */}
                <div>
                  <label className="mb-1.5 sm:mb-2 block text-sm sm:text-base font-medium text-gray-700">
                    Month:
                  </label>
                  <input
                    type="month"
                    className="w-full rounded-lg border bg-white p-2.5 sm:p-3 md:p-3.5 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    required
                  />
                </div>

                {/* Alert Threshold Slider */}
                <div>
                  <div className="mb-1.5 sm:mb-2 flex justify-between">
                    <label className="text-sm sm:text-base font-medium text-gray-700">
                      Alert Threshold:
                    </label>
                    <span className="text-sm sm:text-base font-medium text-blue-600">
                      {alertThreshold}%
                    </span>
                  </div>
                  <input
                    type="range"
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-blue-500"
                    min="0"
                    max="100"
                    step="5"
                    value={alertThreshold}
                    onChange={(e) => setAlertThreshold(Number(e.target.value))}
                  />
                  <div className="mt-1 flex justify-between text-xs sm:text-sm text-gray-500">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 flex justify-end space-x-3 pt-4 sm:pt-5">
                <button
                  type="button"
                  className="rounded-lg bg-gray-100 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-gray-700 transition-colors hover:bg-gray-200"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white transition-opacity hover:opacity-90"
                >
                  {editingBudget ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Delete Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-5 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <IconTrash size={28} className="text-red-500" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                Confirm Deletion
              </h3>
              <p className="text-gray-600">
                Are you sure you want to delete this budget? This action is irreversible.
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="flex-1 rounded-lg bg-red-500 py-2.5 font-medium text-white transition-colors hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BudgetPage;