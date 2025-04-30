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
import { useEffect, useState, useMemo } from "react";
import { gql, useMutation, useQuery } from "urql";
import { userAtom } from "~/store/store";
import { icons } from "./CategoryIconPicker"; // Import icons from CategoryIconPicker

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
  createdAt?: string; // Added to track newly created budgets
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

function BudgetPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState(dayjs().format("YYYY-MM"));
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

  const [{ data: budgetData, fetching: fetchingBudgets }, getBudgets] =
    useQuery({
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
// Filter categories to only show EXPENSE type
const expenseCategories: Category[] = categoryData?.categories.nodes
  ? categoryData.categories.nodes.filter((cat: Category) => cat.type === "EXPENSE")
  : [];
  const budgets: Budget[] = budgetData?.budgets.nodes || [];
  const transactions: Transaction[] = transactionData?.transactions.nodes || [];

  // Set selected icon when a category is chosen
  useEffect(() => {
    if (categoryId) {
      const selectedCategory = expenseCategories.find((cat) => cat.id === categoryId);
      if (selectedCategory && selectedCategory.icon) {
        setSelectedIcon(selectedCategory.icon);
      }
    }
  }, [categoryId, expenseCategories]);

  // Format date for display
  const formatDate = (dateString: string): string => {
    return dayjs(dateString).format("DD/MM/YYYY");
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
        user_id: user?.oidcId,
        category_id: categoryId,
        amount: parseFloat(amount),
        month: new Date(month).toISOString(),
        alert_threshold: alertThreshold,
        created_at: new Date().toISOString(), // Add timestamp for sorting
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
    (budget) => dayjs(budget.month).format("YYYY-MM") === selectedMonth,
  );

  // Get budget category IDs to filter transactions
  const budgetCategoryIds = selectedMonthBudgets.map(budget => budget.categoryId);

  // Get total spent for selected month - Only for EXPENSE transactions in categories with budgets
  const selectedMonthSpent = transactions
    .filter((t) => 
      dayjs(t.date).format("YYYY-MM") === selectedMonth && 
      t.type === "EXPENSE" &&
      budgetCategoryIds.includes(t.categoryId) // Only include categories with budgets
    )
    .reduce((sum, t) => sum + t.amount, 0);

  // Get total budget for selected month
  const selectedMonthBudgetTotal = selectedMonthBudgets.reduce(
    (sum, b) => sum + b.amount,
    0,
  );

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setSelectedMonth(
      dayjs(selectedMonth).subtract(1, "month").format("YYYY-MM"),
    );
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setSelectedMonth(dayjs(selectedMonth).add(1, "month").format("YYYY-MM"));
  };

  // Get unique months from budgets for grouping
  const uniqueMonths = [
    ...new Set(budgets.map((budget) => dayjs(budget.month).format("YYYY-MM"))),
  ].sort((a, b) => dayjs(b).diff(dayjs(a)));

  return (
    <div className="mx-auto max-w-2xl p-6 mt-16">

      {/* Improved Summary Card */}
      {budgets.length > 0 && (
        <div className="mb-8 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-xl transition-all hover:shadow-2xl">
          <div className="p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight">Résumé Mensuel</h2>
              <div className="flex items-center space-x-3">
                <button
                  onClick={goToPreviousMonth}
                  className="rounded-full bg-white bg-opacity-10 p-2 transition-all hover:bg-opacity-20"
                >
                  <IconChevronLeft size={20} />
                </button>
                <span className="rounded-lg bg-white bg-opacity-10 px-3 py-1 text-sm font-medium">
                  {dayjs(selectedMonth).format("MMMM YYYY")}
                </span>
                <button
                  onClick={goToNextMonth}
                  className="rounded-full bg-white bg-opacity-10 p-2 transition-all hover:bg-opacity-20"
                >
                  <IconChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg bg-white bg-opacity-10 p-4">
                <p className="mb-2 text-sm text-blue-100 opacity-90">Total Budgeté </p>
                <p className="text-3xl font-bold tracking-tight">
                  {selectedMonthBudgetTotal.toFixed(2)} <span className="text-lg">TND</span>
                </p>
              </div>
              <div className="rounded-lg bg-white bg-opacity-10 p-4">
                <p className="mb-2 text-sm text-blue-100 opacity-90">Total Dépensé</p>
                <p className="text-3xl font-bold tracking-tight">
                  {selectedMonthSpent.toFixed(2)} <span className="text-lg">TND</span>
                </p>
                <p className="mt-1 text-xs text-blue-100 opacity-75">
                  *Catégories budgétées uniquement
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium">Progression</span>
                <span className="font-bold">
                  {selectedMonthBudgetTotal > 0
                    ? Math.min(
                        (selectedMonthSpent / selectedMonthBudgetTotal) * 100,
                        100,
                      ).toFixed(0)
                    : "0"}%
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-white bg-opacity-20">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-500"
                  style={{
                    width:
                      selectedMonthBudgetTotal > 0
                        ? `${Math.min((selectedMonthSpent / selectedMonthBudgetTotal) * 100, 100)}%`
                        : "0%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Display budgets for the selected month */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-700">
          Budgets pour {dayjs(selectedMonth).format("MMMM YYYY")}
        </h2>
        <div className="flex items-center">
          <IconFilter size={18} className="mr-2 text-gray-400" />
          <span className="text-sm text-gray-500">Filtrer par mois</span>
        </div>
      </div>

      {/* Display budgets for selected month */}
      <div className="space-y-4">
        {fetchingBudgets ? (
          <div className="flex items-center justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
          </div>
        ) : selectedMonthBudgets.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 py-12 text-center">
            <div className="mb-4 flex justify-center">
              <IconPigMoney size={48} className="text-gray-300" />
            </div>
            <p className="mb-2 text-gray-500">Aucun budget pour {dayjs(selectedMonth).format("MMMM YYYY")}</p>
            <p className="text-sm text-gray-400">
              Cliquez sur le bouton + pour ajouter un budget
            </p>
          </div>
        ) : (
          selectedMonthBudgets.map((budget: Budget) => {
            // Only consider EXPENSE transactions for the specific category
            const spent = transactions
              .filter(
                (t: Transaction) =>
                  t.categoryId === budget.categoryId &&
                  dayjs(t.date).format("YYYY-MM") === dayjs(budget.month).format("YYYY-MM") &&
                  t.type === "EXPENSE"
              )
              .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

            const progress = Math.min((spent / budget.amount) * 100, 100);
            const remaining = budget.amount - spent;
            const isOverspent = remaining < 0;

            let progressColor = "bg-green-500";
            let statusIcon = null;
            let statusClass = "text-green-500";

            if (progress >= (budget.alertThreshold || 80) && progress < 100) {
              progressColor = "bg-yellow-500";
              statusIcon = <IconAlertTriangle size={16} className="text-yellow-500" />;
              statusClass = "text-yellow-500";
            } else if (progress >= 100) {
              progressColor = "bg-red-500";
              statusIcon = <IconX size={16} className="text-red-500" />;
              statusClass = "text-red-500";
            } else {
              statusIcon = <IconCheck size={16} className="text-green-500" />;
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
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {IconComponent && (
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${iconColor}20` }}
                        >
                          <IconComponent size={24} style={{ color: iconColor }} />
                        </div>
                      )}
                      <div>
                        <h2 className="text-lg font-bold text-gray-800">
                          {budget.category?.name}
                        </h2>
                        <div className="mt-0.5 text-xs text-gray-500">
                          {formatDate(budget.month)} - {dayjs(budget.month).endOf("month").format("DD/MM/YYYY")}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className={`text-lg font-bold ${isOverspent ? "text-red-500" : "text-green-700"}`}>
                        {Math.abs(remaining).toFixed(2)} TND
                      </div>
                      <div className={`text-xs ${isOverspent ? "text-red-400" : "text-green-600"}`}>
                        {isOverspent ? "Dépassement" : "Restant"}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="mb-2 h-3 w-full overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`${progressColor} h-3 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1.5">
                        {statusIcon}
                        <span className={`font-medium ${statusClass}`}>
                          {progress.toFixed(0)}%
                        </span>
                      </div>
                      <div className="font-medium text-gray-700">
                        {spent.toFixed(2)} / {budget.amount.toFixed(2)} TND
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center text-xs text-gray-500">
                    <IconAlertTriangle size={14} className="mr-1.5" />
                    <span>Alerte à {budget.alertThreshold || 80}% de consommation</span>
                  </div>
                </div>

                <div className="flex border-t border-gray-100">
                  <button
                    className="flex flex-1 items-center justify-center space-x-1.5 py-3 font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
                    onClick={() => {
                      setCategoryId(budget.categoryId);
                      setAmount(budget.amount.toString());
                      setMonth(dayjs(budget.month).format("YYYY-MM"));
                      setAlertThreshold(budget.alertThreshold || 80);
                      setEditingBudget(budget);
                      setIsModalOpen(true);
                    }}
                  >
                    <IconPencil size={16} />
                    <span>Modifier</span>
                  </button>
                  <button
                    className="flex flex-1 items-center justify-center space-x-1.5 py-3 font-medium text-red-600 transition-colors hover:bg-red-50"
                    onClick={() => setConfirmDelete(budget.budgetId)}
                  >
                    <IconTrash size={16} />
                    <span>Supprimer</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Show all months section (collapsible) */}
      {budgets.length > 0 && uniqueMonths.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 border-b pb-2 text-lg font-bold text-gray-700">
            Historique des budgets
          </h2>
          
          <div className="space-y-8">
            {uniqueMonths.map((monthGroup) => {
              const monthBudgets = budgets.filter(
                (budget) => dayjs(budget.month).format("YYYY-MM") === monthGroup,
              );

              if (monthBudgets.length === 0) return null;

              return (
                <div key={monthGroup} className="pb-4">
                  <h3 className="mb-4 text-md font-semibold text-gray-700 border-l-4 border-indigo-500 pl-3">
                    {dayjs(monthGroup).format("MMMM YYYY")}
                  </h3>
                  <div className="space-y-2 pl-2">
                    {monthBudgets.map((budget) => {
                      const IconComponent = budget.category?.icon
                        ? getIconComponent(budget.category.icon)
                        : null;
                      
                      const iconColor = budget.category?.iconColor || 
                        icons.find((i) => i.value === budget.category?.icon)?.color || 
                        "#gray";
                      
                      return (
                        <div 
                          key={budget.budgetId} 
                          className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center">
                            {IconComponent && (
                              <div
                                className="flex h-8 w-8 items-center justify-center rounded-full mr-3"
                                style={{ backgroundColor: `${iconColor}20` }}
                              >
                                <IconComponent size={16} style={{ color: iconColor }} />
                              </div>
                            )}
                            <span className="font-medium text-gray-700">{budget.category?.name}</span>
                          </div>
                          <span className="font-bold text-gray-800">{budget.amount.toFixed(2)} TND</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <Fab
        className="fixed bottom-6 right-6 z-40 transform rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-5 text-white shadow-xl transition-transform hover:scale-110"
        onClick={() => {
          setCategoryId("");
          setAmount("");
          setMonth(dayjs().format("YYYY-MM"));
          setAlertThreshold(80);
          setEditingBudget(null);
          setIsModalOpen(true);
        }}
        icon={<IconPlus />}
      />

      {/* Enhanced Modal with improved dropdown */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-2xl font-semibold text-gray-800">
                {editingBudget ? "Modifier le budget" : "Ajouter un budget"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <IconX size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5">
  <div className="space-y-5">
    {/* Category selection with icon in dropdown */}
    <div>
      <label className="mb-2 block font-medium text-gray-700">
        Catégorie:
      </label>
      <div className="relative">
      <select
  className="w-full appearance-none rounded-lg border bg-white p-3 pl-10 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
  value={categoryId}
  onChange={(e) => {
    setCategoryId(e.target.value);
    const selectedCat = expenseCategories.find(
      (cat) => cat.id === e.target.value,
    );
    if (selectedCat && selectedCat.icon) {
      setSelectedIcon(selectedCat.icon);
    }
  }}
  required
>
  <option value="">Sélectionner une catégorie</option>
  {/* Make sure we're only mapping over EXPENSE categories */}
  {expenseCategories.map((cat) => (
    <option 
      key={cat.id} 
      value={cat.id} 
      className="py-2 pl-8"
      data-icon={cat.icon}
    >
      {cat.name}
    </option>
  ))}
</select>
        {/* Display icon for selected category */}
        {selectedIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
            {(() => {
              const IconComp = getIconComponent(selectedIcon);
              const iconColor = icons.find(
                (i) => i.value === selectedIcon,
              )?.color;
              return IconComp ? (
                <IconComp size={20} style={{ color: iconColor }} />
              ) : null;
            })()}
          </div>
        )}

        {/* Custom dropdown arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            className="h-5 w-5 text-gray-400"
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

                {/* Amount field */}
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Montant (TND):
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      className="w-full rounded-lg border bg-white p-3 pl-16 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      required
                    />
                    <div className="absolute left-3 top-1/2 flex -translate-y-1/2 transform items-center text-gray-500">
                      <span className="font-medium">TND</span>
                      <span className="mx-1">|</span>
                    </div>
                  </div>
                </div>

                {/* Month selection */}
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Mois:
                  </label>
                  <input
                    type="month"
                    className="w-full rounded-lg border bg-white p-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    required
                  />
                </div>

                {/* Alert threshold slider */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <label className="font-medium text-gray-700">
                      Seuil d'alerte:
                    </label>
                    <span className="text-sm font-medium text-blue-600">
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
                  <div className="mt-1 flex justify-between text-xs text-gray-500">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex justify-end space-x-3 pt-5">
                <button
                  type="button"
                  className="rounded-lg bg-gray-100 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
                >
                  {editingBudget ? "Mettre à jour" : "Enregistrer"}
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
                Confirmer la suppression
              </h3>
              <p className="text-gray-600">
                Êtes-vous sûr de vouloir supprimer ce budget ? Cette action est
                irréversible.
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="flex-1 rounded-lg bg-red-500 py-2.5 font-medium text-white transition-colors hover:bg-red-600"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BudgetPage;
