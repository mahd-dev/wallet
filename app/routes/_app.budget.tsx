import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useQuery, gql, useMutation } from "urql";
import { nanoid } from "nanoid";
import { Fab } from "konsta/react";
import { 
  IconPlus, IconPencil, IconTrash, IconAlertTriangle, IconCheck, IconX, 
  IconHome, IconCar, IconShoppingCart, IconSoup, IconHeart, IconBriefcase, IconPlane,
  IconGift, IconHealthRecognition, IconSportBillard, IconMusic, IconCamera, IconBook,
  IconSchool, IconBus, IconPigMoney, IconChevronLeft, IconChevronRight
} from "@tabler/icons-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { useAtom } from "jotai";
import { userAtom } from "~/store/store";

// Define types
interface Category {
  id: string;
  name: string;
  icon?: string;
}

interface Budget {
  budgetId: string;
  userId: string;
  categoryId: string;
  amount: number;
  month: string;
  alertThreshold?: number;
  category?: Category;
}

interface Transaction {
  transactionId: string;
  type: string;
  categoryId: string;
  date: string;
  amount: number;
  category?: Category;
}

interface Icon {
  name: string;
  component: React.ComponentType<React.ComponentProps<typeof IconHome>>;
  color: string;
  value: string;
}

// Define icons with colors (shared with CategoriesPage)
const icons: Icon[] = [
  { name: "Home", component: IconHome, color: "#DE3163", value: "home" },
  { name: "Car", component: IconCar, color: "#EF4444", value: "car" },
  { name: "Shopping", component: IconShoppingCart, color: "#3B82F6", value: "shopping" },
  { name: "Food", component: IconSoup, color: "#F59E0B", value: "food" },
  { name: "Health", component: IconHeart, color: "#22C55E", value: "health" },
  { name: "Work", component: IconBriefcase, color: "#8B5CF6", value: "work" },
  { name: "Travel", component: IconPlane, color: "#EC4899", value: "travel" },
  { name: "Gifts", component: IconGift, color: "#FBBF24", value: "gifts" },
  { name: "Medical", component: IconHealthRecognition, color: "#A855F7", value: "medical" },
  { name: "Sports", component: IconSportBillard, color: "#16A34A", value: "sports" },
  { name: "Music", component: IconMusic, color: "#FCD34D", value: "music" },
  { name: "Photography", component: IconCamera, color: "#EA580C", value: "photography" },
  { name: "Education", component: IconBook, color: "#38B2AC", value: "education" },
  { name: "School", component: IconSchool, color: "#4F46E5", value: "school" },
  { name: "Transport", component: IconBus, color: "#805AD5", value: "transport" },
  { name: "Savings", component: IconPigMoney, color: "#EAB308", value: "savings" },
];

const GET_CATEGORIES = gql`
  query GET_USER_CATEGORIES($userId: String!) {
    categories(condition: { userId: $userId }){
      nodes {
        id
        name
        icon
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
        }
      }
    ) {
      clientMutationId
    }
  }
`;
const GET_BUDGETS = gql`
  query GET_BUDGETS($userId: String!) {
      budgets(orderBy: MONTH_DESC, condition: { userId: $userId }) {
      nodes {
        budgetId
        userId
        categoryId
        amount
        month
        alertThreshold
        category {
          id
          name
          icon
        }
      }
    }
  }
`;
const GET_TRANSACTIONS = gql`
  query GET_USER_TRANSACTIONS2($userId: String!) {
    transactions(orderBy: DATE_DESC, condition: { userId: $userId })  {
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
    variables: { userId: user?.oidcId },  // Pass userId as a variable
    pause: !user?.oidcId, // Ensure query only runs when userId is available
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

  const categories: Category[] = categoryData?.categories.nodes || [];
  const budgets: Budget[] = budgetData?.budgets.nodes || [];
  const transactions: Transaction[] = transactionData?.transactions.nodes || [];
  
  // Set selected icon when a category is chosen
  useEffect(() => {
    if (categoryId) {
      const selectedCategory = categories.find((cat) => cat.id === categoryId);
      if (selectedCategory && selectedCategory.icon) {
        setSelectedIcon(selectedCategory.icon);
      }
    }
  }, [categoryId, categories]);
  
  // Format date for display
  const formatDate = (dateString: string): string => {
    return dayjs(dateString).format('DD/MM/YYYY');
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
      // Add new budget
      await addBudget({
        budget_id: nanoid(),
        user_id: user?.oidcId,
        category_id: categoryId,
        amount: parseFloat(amount),
        month: new Date(month).toISOString(),
        alert_threshold: alertThreshold,
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
    const icon = icons.find(i => i.value === iconValue);
    return icon ? icon.component : null;
  };

  // Get all budgets for the selected month
  const selectedMonthBudgets = budgets.filter(
    (budget) => dayjs(budget.month).format("YYYY-MM") === selectedMonth
  );
  
  // Get total spent for selected month
  const selectedMonthSpent = transactions
    .filter((t) => dayjs(t.date).format("YYYY-MM") === selectedMonth)
    .reduce((sum, t) => sum + t.amount, 0);
  
  // Get total budget for selected month
  const selectedMonthBudgetTotal = selectedMonthBudgets.reduce(
    (sum, b) => sum + b.amount, 0
  );
  
  // Navigate to previous month
  const goToPreviousMonth = () => {
    setSelectedMonth(dayjs(selectedMonth).subtract(1, 'month').format("YYYY-MM"));
  };
  
  // Navigate to next month
  const goToNextMonth = () => {
    setSelectedMonth(dayjs(selectedMonth).add(1, 'month').format("YYYY-MM"));
  };
  
  // Get unique months from budgets for grouping
  const uniqueMonths = [...new Set(budgets.map(budget => 
    dayjs(budget.month).format("YYYY-MM")
  ))].sort((a, b) => dayjs(b).diff(dayjs(a)));

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold mb-6 mt-20 text-gray-800">BUDGETS MENSUELS</h1>

      {/* Summary Card for selected month with navigation */}
      {budgets.length > 0 && (
        <div className="mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 text-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Résumé du mois</h2>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={goToPreviousMonth}
                  className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                >
                  <IconChevronLeft size={20} />
                </button>
                <span className="text-sm">{dayjs(selectedMonth).format('MMMM YYYY')}</span>
                <button 
                  onClick={goToNextMonth}
                  className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                >
                  <IconChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-blue-100 text-sm mb-1">Total budgété</p>
                <p className="text-2xl font-bold">{selectedMonthBudgetTotal.toFixed(2)} TND</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-1">Total dépensé</p>
                <p className="text-2xl font-bold">{selectedMonthSpent.toFixed(2)} TND</p>
              </div>
            </div>
            
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Progression</span>
                <span>
                  {selectedMonthBudgetTotal > 0 
                    ? Math.min((selectedMonthSpent / selectedMonthBudgetTotal) * 100, 100).toFixed(0) 
                    : "0"}%
                </span>
              </div>
              <div className="w-full bg-blue-300 bg-opacity-30 rounded-full h-2.5">
                <div 
                  className="bg-white h-2.5 rounded-full"
                  style={{ 
                    width: selectedMonthBudgetTotal > 0
                      ? `${Math.min((selectedMonthSpent / selectedMonthBudgetTotal) * 100, 100)}%`
                      : "0%"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Display budgets grouped by month */}
      <div className="space-y-8">
        {fetchingBudgets ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : budgets.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <div className="flex justify-center mb-4">
              <IconPigMoney size={48} className="text-gray-300" />
            </div>
            <p className="text-gray-500 mb-2">Aucun budget pour le moment</p>
            <p className="text-gray-400 text-sm">Cliquez sur le bouton + pour ajouter votre premier budget</p>
          </div>
        ) : (
          uniqueMonths.map((monthGroup) => {
            const monthBudgets = budgets.filter(
              (budget) => dayjs(budget.month).format("YYYY-MM") === monthGroup
            );
            
            if (monthBudgets.length === 0) return null;
            
            return (
              <div key={monthGroup} className="pb-4">
                <h2 className="text-lg font-bold mb-4 pb-2 border-b text-gray-700">
                  {dayjs(monthGroup).format('MMMM YYYY')}
                </h2>
                <div className="space-y-4">
                  {monthBudgets.map((budget: Budget) => {
                    const spent = transactions
                      .filter(
                        (t: Transaction) =>
                          t.categoryId === budget.categoryId &&
                          dayjs(t.date).format("YYYY-MM") === dayjs(budget.month).format("YYYY-MM")
                      )
                      .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

                    const progress = Math.min((spent / budget.amount) * 100, 100);
                    const remaining = budget.amount - spent;
                    
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
                    
                    const IconComponent = budget.category?.icon ? 
                      getIconComponent(budget.category.icon) : null;
                    
                    const iconColor = icons.find(i => i.value === budget.category?.icon)?.color || "#gray";

                    return (
                      <div key={budget.budgetId} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              {IconComponent && (
                                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${iconColor}20` }}>
                                  <IconComponent size={24} style={{ color: iconColor }} />
                                </div>
                              )}
                              <div>
                                <h2 className="text-lg font-bold text-gray-800">{budget.category?.name}</h2>
                                <div className="text-xs text-gray-500 mt-0.5">
                                  {formatDate(budget.month)} - {dayjs(budget.month).endOf('month').format('DD/MM/YYYY')}
                                </div>
                              </div>
                            </div>
                            <div className={`text-lg font-bold ${remaining < 0 ? 'text-red-500' : 'text-green-700'}`}>
                              {remaining.toFixed(2)} TND
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <div className="w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden">
                              <div
                                className={`${progressColor} h-3 rounded-full transition-all duration-500 ease-in-out`}
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                            
                            <div className="flex justify-between items-center text-sm">
                              <div className="flex items-center space-x-1.5">
                                {statusIcon}
                                <span className={`font-medium ${statusClass}`}>{progress.toFixed(0)}%</span>
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
                            className="flex-1 py-3 text-indigo-600 hover:bg-indigo-50 transition-colors flex items-center justify-center space-x-1.5 font-medium"
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
                            className="flex-1 py-3 text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center space-x-1.5 font-medium"
                            onClick={() => setConfirmDelete(budget.budgetId)}
                          >
                            <IconTrash size={16} />
                            <span>Supprimer</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>

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

      {/* Enhanced Modal with fixed dropdown and input */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-5 border-b">
              <h2 className="text-2xl font-semibold text-gray-800">
                {editingBudget ? 'Modifier le budget' : 'Ajouter un budget'}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <IconX size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-5">
              <div className="space-y-5">
                {/* Category selection with icon - Fixed to show icons in dropdown */}
                <div>
                  <label className="block font-medium mb-2 text-gray-700">Catégorie:</label>
                  <div className="relative">
                    <select
                      className="w-full p-3 pl-12 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none appearance-none"
                      value={categoryId}
                      onChange={(e) => {
                        setCategoryId(e.target.value);
                        const selectedCat = categories.find((cat: Category) => cat.id === e.target.value);
                        if (selectedCat && selectedCat.icon) {
                          setSelectedIcon(selectedCat.icon);
                        }
                      }}
                      required
                    >
                      <option value="">Sélectionner une catégorie</option>
                      {categories.map((cat: Category) => {
                        const catIcon = cat.icon ? icons.find(i => i.value === cat.icon) : null;
                        return (
                          <option key={cat.id} value={cat.id} className="py-2">
                            {cat.name}
                          </option>
                        );
                      })}
                    </select>
                    
                    {/* Display icon for selected category */}
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      {selectedIcon && (() => {
                        const IconComp = getIconComponent(selectedIcon);
                        const iconColor = icons.find(i => i.value === selectedIcon)?.color;
                        return IconComp ? (
                          <IconComp size={20} style={{ color: iconColor }} />
                        ) : null;
                      })()}
                    </div>
                    
                    {/* Custom dropdown arrow */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Amount field - Fixed spacing between TND and input */}
                <div>
                  <label className="block font-medium mb-2 text-gray-700">Montant (TND):</label>
                  <div className="relative">
                    <input
                      type="number"
                      className="w-full p-3 pl-16 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      required
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 flex items-center">
                      <span className="font-medium">TND</span>
                      <span className="mx-1">|</span>
                    </div>
                  </div>
                </div>
                
                {/* Month selection */}
                <div>
                  <label className="block font-medium mb-2 text-gray-700">Mois:</label>
                  <input
                    type="month"
                    className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    required
                  />
                </div>
                
                {/* Alert threshold slider */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-gray-700">Seuil d'alerte:</label>
                    <span className="text-sm font-medium text-blue-600">{alertThreshold}%</span>
                  </div>
                  <input
                    type="range"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    min="0"
                    max="100"
                    step="5"
                    value={alertThreshold}
                    onChange={(e) => setAlertThreshold(Number(e.target.value))}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex justify-end space-x-3 pt-5 mt-6">
                <button
                  type="button"
                  className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annuler
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  {editingBudget ? 'Mettre à jour' : 'Enregistrer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Delete Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm">
            <div className="text-center mb-5">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <IconTrash size={28} className="text-red-500" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Confirmer la suppression</h3>
              <p className="text-gray-600">Êtes-vous sûr de vouloir supprimer ce budget ? Cette action est irréversible.</p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Annuler
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="flex-1 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
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