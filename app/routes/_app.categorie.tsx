import { IconEdit, IconPlus, IconTrash, IconAlertCircle } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { useState, useEffect, useRef } from "react";
import { gql, useMutation, useQuery, useClient } from "urql";
import { userAtom } from "~/store/store";
import CategoryIconPicker, { icons } from "./CategoryIconPicker";

// GraphQL query to check if a category has transactions
const CHECK_CATEGORY_TRANSACTIONS = gql`
  query CHECK_CATEGORY_TRANSACTIONS($category_id: String!) {
    transactions(condition: { categoryId: $category_id }) {
      nodes {
        transactionId
      }
    }
    budgets(condition: { categoryId: $category_id }) {
      nodes {
        budgetId
      }
    }
  }
`;

// GraphQL queries and mutations
const GET_CATEGORIES = gql`
  query GET_USER_CATEGORIES3($userId: String!) {
    categories(condition: { userId: $userId }, orderBy: CREATED_AT_DESC) {
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

const ADD_CATEGORY = gql`
  mutation ADD_CATEGORY(
    $id: String!
    $userId: String!
    $name: String!
    $icon: String!
    $iconColor: String!
    $type: Typetransaction!
  ) {
    createCategory(
      input: {
        category: {
          id: $id
          userId: $userId
          name: $name
          icon: $icon
          iconColor: $iconColor
          type: $type
        }
      }
    ) {
      clientMutationId
    }
  }
`;

const DELETE_CATEGORY = gql`
  mutation DELETE_CATEGORY($id: String!) {
    deleteCategory(input: { id: $id }) {
      clientMutationId
    }
  }
`;

const DELETE_TRANSACTION = gql`
  mutation DELETE_TRANSACTION($id: String!) {
    deleteTransaction(input: { transactionId: $id }) {
      clientMutationId
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

const UPDATE_CATEGORY = gql`
  mutation UPDATE_CATEGORY(
    $id: String!
    $name: String!
    $icon: String!
    $iconColor: String!
    $type: Typetransaction!
  ) {
    updateCategory(
      input: {
        id: $id
        patch: { name: $name, icon: $icon, iconColor: $iconColor, type: $type }
      }
    ) {
      clientMutationId
    }
  }
`;

type Category = {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  type: "EXPENSE" | "INCOME";
};

const CategoriesPage = () => {
  const [user] = useAtom(userAtom);
  const [activeTab, setActiveTab] = useState<"EXPENSE" | "INCOME">("EXPENSE");
  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null);
  const [hasTransactions, setHasTransactions] = useState(false);
  const [hasBudgets, setHasBudgets] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    icon?: string;
  }>({});
  
  // Refs for modal click-outside handling and scroll preservation
  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mutations and queries
  const [, addCategory] = useMutation(ADD_CATEGORY);
  const [, deleteCategory] = useMutation(DELETE_CATEGORY);
  const [, updateCategory] = useMutation(UPDATE_CATEGORY);
  const [, deleteTransaction] = useMutation(DELETE_TRANSACTION);
  const [, deleteBudget] = useMutation(DELETE_BUDGET);
  const [checkTransactionsResult, checkCategoryTransactions] = useQuery({
    query: CHECK_CATEGORY_TRANSACTIONS,
    pause: true,
  });
  
  const [{ data, error, fetching }, refetch] = useQuery({
    query: GET_CATEGORIES,
    variables: user?.oidcId ? { userId: user.oidcId } : undefined,
    pause: !user?.oidcId,
    requestPolicy: "cache-and-network",
  });

  // Preserve scroll position during refetch
  useEffect(() => {
    if (fetching && containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      return () => {
        if (containerRef.current) {
          containerRef.current.scrollTop = scrollTop;
        }
      };
    }
  }, [fetching]);

  // Helper for generating softer colors
  const generateSofterColor = (type: "EXPENSE" | "INCOME") => {
    return type === "EXPENSE" ? "#FF8A8A" : "#98E5B0";
  };

  const validateForm = () => {
    const errors: { name?: string; icon?: string } = {};
    
    if (!categoryName.trim()) {
      errors.name = "Category name is required";
    }
    
    if (!selectedIcon) {
      errors.icon = "Please select an icon";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddCategory = async () => {
    if (!validateForm()) return;

    if (user?.oidcId) {
      const iconColor =
        icons.find((icon) => icon.value === selectedIcon)?.color || "";

      const result = await addCategory({
        id: crypto.randomUUID(),
        userId: user.oidcId,
        name: categoryName,
        icon: selectedIcon as string,
        iconColor: iconColor,
        type: activeTab,
      });

      if (result.data?.createCategory) {
        refetch({ requestPolicy: "network-only" });
        setCategoryName("");
        setSelectedIcon(null);
        setSelectedColor(null);
        setIsModalOpen(false);
        setValidationErrors({});
      }
    }
  };

  const client = useClient();

  const initiateDeleteCategory = async (category: Category) => {
    setCategoryToDelete(category);
  
    if (user?.oidcId) {
      const result = await client
        .query(CHECK_CATEGORY_TRANSACTIONS, { category_id: category.id })
        .toPromise();
  
      const transactionsExist = result?.data?.transactions?.nodes.length > 0;
      const budgetsExist = result?.data?.budgets?.nodes.length > 0;
      
      setHasTransactions(transactionsExist);
      setHasBudgets(budgetsExist);
    }
  
    setIsDeleteModalOpen(true);
  };
  
  const confirmDeleteCategory = async () => {
    if (categoryToDelete && user?.oidcId) {
      try {
        const result = await client
          .query(CHECK_CATEGORY_TRANSACTIONS, { category_id: categoryToDelete.id })
          .toPromise();
        
        const transactions = result.data?.transactions?.nodes || [];
        for (const transaction of transactions) {
          await deleteTransaction({ id: transaction.transactionId });
        }

        const budgets = result.data?.budgets?.nodes || [];
        for (const budget of budgets) {
          await deleteBudget({ id: budget.budgetId });
        }

        const deleteCategoryResult = await deleteCategory({ id: categoryToDelete.id });
        
        if (deleteCategoryResult.data?.deleteCategory) {
          refetch({ requestPolicy: "network-only" });
          setIsDeleteModalOpen(false);
          setCategoryToDelete(null);
        }
      } catch (error) {
        console.error("Error deleting category and related items:", error);
      }
    }
  };

  const handleUpdateCategory = async () => {
    if (!validateForm()) return;

    if (editingCategory && user?.oidcId) {
      const iconColor =
        icons.find((icon) => icon.value === selectedIcon)?.color || "";

      const result = await updateCategory({
        id: editingCategory.id,
        name: categoryName,
        icon: selectedIcon as string,
        iconColor: iconColor,
        type: activeTab,
      });

      if (result.data?.updateCategory) {
        refetch({ requestPolicy: "network-only" });
        setCategoryName("");
        setSelectedIcon(null);
        setSelectedColor(null);
        setEditingCategory(null);
        setIsModalOpen(false);
        setValidationErrors({});
      }
    }
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setSelectedIcon(category.icon);
    setSelectedColor(category.iconColor);
    setActiveTab(category.type);
    setIsModalOpen(true);
    setValidationErrors({});
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
      setIsDeleteModalOpen(false);
      setValidationErrors({});
    }
  };

  useEffect(() => {
    if (isModalOpen || isDeleteModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, isDeleteModalOpen]);
  
  const handleAddNew = () => {
    setEditingCategory(null);
    setCategoryName("");
    setSelectedIcon(null);
    setSelectedColor(null);
    setIsModalOpen(true);
    setValidationErrors({});
  };

  const filteredCategories = data?.categories?.nodes?.filter(
    (category: Category) => category.type === activeTab,
  );

  return (
    <div
      ref={containerRef}
      className="mx-auto mt-12 max-w-4xl px-3 pb-12 pt-4 sm:mt-16 sm:px-6 overflow-auto"
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("EXPENSE")}
            className={`flex-1 py-3 text-base font-medium transition-colors duration-200 sm:py-4 sm:text-lg ${
              activeTab === "EXPENSE"
                ? "border-b-2 border-red-400 bg-red-50 text-red-500"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Expense
          </button>
          <button
            onClick={() => setActiveTab("INCOME")}
            className={`flex-1 py-3 text-base font-medium transition-colors duration-200 sm:py-4 sm:text-lg ${
              activeTab === "INCOME"
                ? "border-b-2 border-green-500 bg-green-50 text-green-500"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Income
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-6 flex items-center justify-center">
            <button
              onClick={handleAddNew}
              className={`flex transform items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:scale-105 sm:text-base ${
                activeTab === "EXPENSE"
                  ? "bg-red-400 hover:bg-red-500"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              <IconPlus size={18} />
              <span>
                {activeTab === "EXPENSE" ? "Ajouter une dépense" : "Ajouter un revenu"}
              </span>
            </button>
          </div>

          {fetching && !data ? (
            <div className="flex justify-center py-12">
              <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-gray-900 sm:h-12 sm:w-12"></div>
            </div>
          ) : error ? (
            <div className="rounded-lg bg-red-100 p-4 text-red-700">
              <p>Error: {error.message}</p>
            </div>
          ) : filteredCategories?.length === 0 ? (
            <div className="rounded-lg bg-gray-50 py-8 text-center sm:py-12">
              <p className="mb-4 text-sm text-gray-600 sm:text-base">
                No categories found
              </p>
              <button
                onClick={handleAddNew}
                className={`rounded-lg px-4 py-2 text-sm font-medium text-white shadow sm:px-5 sm:py-2.5 sm:text-base ${
                  activeTab === "EXPENSE"
                    ? "bg-red-400 hover:bg-red-500"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                Create your first category
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
              {filteredCategories?.map((category: Category) => {
                const IconComponent = icons.find(
                  (icon) => icon.value === category.icon,
                )?.component;

                return (
                  <div
                    key={category.id}
                    className={`overflow-hidden rounded-lg shadow-md transition-all duration-200 hover:shadow-lg sm:rounded-xl ${
                      category.type === "EXPENSE"
                        ? "border-l-4 border-red-400"
                        : "border-l-4 border-green-400"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${category.iconColor}15 0%, white 100%)`,
                    }}
                  >
                    <div className="p-3 sm:p-4">
                      <div className="mb-2 flex items-start sm:mb-3">
                        <div
                          className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full shadow-sm sm:h-12 sm:w-12"
                          style={{
                            backgroundColor: `${category.iconColor}20`,
                            border: `1px solid ${category.iconColor}50`,
                            borderRadius: "9999px",
                            minWidth: "2.5rem",
                          }}
                        >
                          {IconComponent && (
                            <IconComponent
                              size={20}
                              className="sm:text-2xl"
                              style={{ color: category.iconColor }}
                            />
                          )}
                        </div>

                        <h3 className="break-words text-sm font-medium text-gray-800 sm:text-lg">
                          <span
                            className="sm:hidden"
                            style={{
                              fontSize: category.name.length > 15 ? (
                                category.name.length > 25 ? '0.7rem' : '0.8rem'
                              ) : '0.875rem',
                            }}
                          >
                            {category.name}
                          </span>
                          <span className="hidden sm:inline">
                            {category.name}
                          </span>
                        </h3>
                      </div>

                      <div className="mt-2 flex justify-end gap-1 sm:mt-3 sm:gap-2">
                        <button
                          onClick={() => handleEditCategory(category)}
                          className="rounded-md bg-gray-100 p-1.5 text-gray-700 transition-colors hover:bg-gray-200 sm:p-2"
                          aria-label="Edit category"
                        >
                          <IconEdit size={14} className="sm:h-4 sm:w-4" />
                        </button>
                        <button
                          onClick={() => initiateDeleteCategory(category)}
                          className="rounded-md bg-red-100 p-1.5 text-red-600 transition-colors hover:bg-red-200 sm:p-2"
                          aria-label="Delete category"
                        >
                          <IconTrash size={14} className="sm:h-4 sm:w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-3 sm:p-4">
          <div ref={modalRef} className="w-full max-w-xs rounded-lg bg-white p-4 shadow-xl sm:max-w-sm sm:p-6">
            <h3 className="mb-4 text-lg font-bold sm:mb-6 sm:text-xl">
              {editingCategory ? "Edit Category" : "Add Category"}
            </h3>
            <div className="mb-4">
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className={`w-full rounded-lg border p-2.5 sm:p-3 ${
                  validationErrors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Category Name"
              />
              {validationErrors.name && (
                <p className="mt-1 text-xs text-red-500">{validationErrors.name}</p>
              )}
            </div>
            <CategoryIconPicker
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            {validationErrors.icon && (
              <p className="mt-1 text-xs text-red-500">{validationErrors.icon}</p>
            )}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setValidationErrors({});
                }}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={
                  editingCategory ? handleUpdateCategory : handleAddCategory
                }
                className={`rounded-md px-4 py-2 text-sm text-white sm:px-6 sm:text-base ${
                  activeTab === "EXPENSE"
                    ? "bg-red-400 hover:bg-red-500"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {editingCategory ? "Save Changes" : "Add Category"}
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-3 sm:p-4">
          <div ref={modalRef} className="w-full max-w-xs rounded-lg bg-white p-4 shadow-xl sm:max-w-md sm:p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
              Delete Category
            </h3>
            
            {(hasTransactions || hasBudgets) && (
              <div className="mb-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 sm:p-4">
                <IconAlertCircle size={24} className="mt-1 flex-shrink-0 text-red-500" />
                <div>
                  <h4 className="font-medium text-red-600">Warning!</h4>
                  <p className="mt-1 text-sm text-gray-700">
                    {hasTransactions && hasBudgets
                      ? "This will permanently delete all transactions and budgets associated with this category."
                      : hasTransactions
                      ? "This will permanently delete all transactions associated with this category."
                      : "This will permanently delete all budgets associated with this category."}
                  </p>
                </div>
              </div>
            )}
            
            <p className="mb-4 text-sm text-gray-600 sm:mb-6 sm:text-base">
              Are you sure you want to delete <span className="font-medium">"{categoryToDelete?.name}"</span>?
              {!hasTransactions && !hasBudgets && " This action cannot be undone."}
            </p>
            
            <div className="flex justify-end gap-3 sm:gap-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="rounded-md bg-gray-200 px-3 py-1.5 text-sm text-gray-800 hover:bg-gray-300 sm:px-4 sm:py-2 sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteCategory}
                className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600 sm:px-4 sm:py-2 sm:text-base"
              >
                {hasTransactions || hasBudgets ? "Delete All" : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;