import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { useState } from "react";
import { gql, useMutation, useQuery } from "urql";
import { userAtom } from "~/store/store";
import CategoryIconPicker, { icons } from "./CategoryIconPicker";
import { useClient } from "urql";


// GraphQL query to check if a category has transactions
const CHECK_CATEGORY_TRANSACTIONS = gql`
  query CHECK_CATEGORY_TRANSACTIONS($category_id: String!) {
    transactions(condition: { categoryId: $category_id }) {
      nodes {
       transactionId
      }
    }
  }
`;

// GraphQL queries and mutations
const GET_CATEGORIES = gql`
  query GET_USER_CATEGORIES3($userId: String!) {
    categories(condition: { userId: $userId }) {
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
  
  // Mutations and queries
  const [, addCategory] = useMutation(ADD_CATEGORY);
  const [, deleteCategory] = useMutation(DELETE_CATEGORY);
  const [, updateCategory] = useMutation(UPDATE_CATEGORY);
  const [checkTransactionsResult, checkCategoryTransactions] = useQuery({
    query: CHECK_CATEGORY_TRANSACTIONS,
    pause: true, // Start paused so it only runs when we call it
  });
  
  const [{ data, error, fetching }, refetch] = useQuery({
    query: GET_CATEGORIES,
    variables: user?.oidcId ? { userId: user.oidcId } : undefined,
    pause: !user?.oidcId, // Ensures query runs only when user is available
    requestPolicy: "network-only",
  });

  const handleAddCategory = async () => {
    if (categoryName.trim() && selectedIcon && user?.oidcId) {
      const iconColor =
        icons.find((icon) => icon.value === selectedIcon)?.color || "";

      const result = await addCategory({
        id: crypto.randomUUID(),
        userId: user.oidcId,
        name: categoryName,
        icon: selectedIcon,
        iconColor: iconColor,
        type: activeTab, // Ensure correct type is used
      });

      if (result.data?.createCategory) {
        refetch();
        setCategoryName("");
        setSelectedIcon(null);
        setSelectedColor(null);
        setIsModalOpen(false);
      }
    }
  };

  const client = useClient(); // Get the Urql client

  const initiateDeleteCategory = async (category: Category) => {
    setCategoryToDelete(category);
  
    if (user?.oidcId) {
      const result = await client
        .query(CHECK_CATEGORY_TRANSACTIONS, { category_id: category.id })
        .toPromise();
  
      setHasTransactions(result?.data?.transactions?.nodes.length > 0);
    }
  
    setIsDeleteModalOpen(true);
  };
  
  

  const confirmDeleteCategory = async () => {
    if (categoryToDelete && user?.oidcId) {
      const result = await deleteCategory({ id: categoryToDelete.id });
      if (result.data?.deleteCategory) {
        refetch();
        setIsDeleteModalOpen(false);
        setCategoryToDelete(null);
      }
    }
  };

  const handleUpdateCategory = async () => {
    if (
      editingCategory &&
      categoryName.trim() &&
      selectedIcon &&
      user?.oidcId
    ) {
      const iconColor =
        icons.find((icon) => icon.value === selectedIcon)?.color || "";

      const result = await updateCategory({
        id: editingCategory.id,
        name: categoryName,
        icon: selectedIcon,
        iconColor: iconColor,
        type: activeTab,
      });

      if (result.data?.updateCategory) {
        refetch();
        setCategoryName("");
        setSelectedIcon(null);
        setSelectedColor(null);
        setEditingCategory(null);
        setIsModalOpen(false);
      }
    }
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setSelectedIcon(category.icon);
    setSelectedColor(category.iconColor);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingCategory(null);
    setCategoryName("");
    setSelectedIcon(null);
    setSelectedColor(null);
    setIsModalOpen(true);
  };

  // Filter categories based on the active tab
  const filteredCategories = data?.categories?.nodes?.filter(
    (category: Category) => category.type === activeTab,
  );

  return (
    <div className="mx-auto mt-10 max-w-4xl px-4 pb-12 pt-8 sm:px-6">
      {/* Tabs */}
      <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("EXPENSE")}
            className={`flex-1 py-4 text-lg font-medium transition-colors duration-200 ${
              activeTab === "EXPENSE"
                ? "border-b-2 border-blue-600 bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            EXPENSE
          </button>
          <button
            onClick={() => setActiveTab("INCOME")}
            className={`flex-1 py-4 text-lg font-medium transition-colors duration-200 ${
              activeTab === "INCOME"
                ? "border-b-2 border-green-600 bg-green-50 text-green-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            INCOME
          </button>
        </div>

        <div className="p-6">
          {/* Header and Add Button */}
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              {activeTab === "EXPENSE"
                ? "EXPENSE CATEGORIES"
                : "INCOME CATEGORIES"}
            </h1>
            <button
              onClick={handleAddNew}
              className={`flex transform items-center gap-2 rounded-lg px-5 py-2.5 font-medium text-white shadow-md transition hover:scale-105 ${
                activeTab === "EXPENSE"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              <IconPlus size={20} />
              <span>Add {activeTab === "EXPENSE" ? "EXPENSE" : "INCOME"}</span>
            </button>
          </div>

          {/* Category Grid */}
          {fetching ? (
            <div className="flex justify-center py-12">
              <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-gray-900"></div>
            </div>
          ) : error ? (
            <div className="rounded-lg bg-red-100 p-4 text-red-700">
              <p>Error: {error.message}</p>
            </div>
          ) : filteredCategories?.length === 0 ? (
            <div className="rounded-lg bg-gray-50 py-12 text-center">
              <p className="mb-4 text-gray-600">
                No {activeTab} categories found
              </p>
              <button
                onClick={handleAddNew}
                className={`rounded-lg px-5 py-2.5 font-medium text-white shadow ${
                  activeTab === "EXPENSE"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                Create your first category
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {filteredCategories?.map((category: Category) => {
                // Find the icon component for the current category
                const IconComponent = icons.find(
                  (icon) => icon.value === category.icon,
                )?.component;

                return (
                  <div
                    key={category.id}
                    className={`overflow-hidden rounded-xl shadow-md transition-all duration-200 hover:shadow-lg ${
                      category.type === "EXPENSE"
                        ? "border-l-4 border-blue-500"
                        : "border-l-4 border-green-500"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${category.iconColor}15 0%, white 100%)`,
                    }}
                  >
                    <div className="p-5">
                      <div className="mb-3 flex items-center">
                        {/* Icon */}
                        <div
                          className="mr-4 flex h-12 w-12 items-center justify-center rounded-full shadow-sm"
                          style={{
                            backgroundColor: `${category.iconColor}20`,
                            border: `1px solid ${category.iconColor}50`,
                            borderRadius: "9999px", // Forces full circle shape
                            overflow: "hidden", 
                          }}
                        >
                          {IconComponent && (
                            <IconComponent
                              size={24}
                              style={{ color: category.iconColor }}
                            />
                          )}
                        </div>

                        {/* Name */}
                        <h3 className="text-lg font-medium text-gray-800">
                          {category.name}
                        </h3>
                      </div>

                      {/* Actions */}
                      <div className="mt-4 flex justify-end gap-2">
                        <button
                          onClick={() => handleEditCategory(category)}
                          className="rounded-md bg-gray-100 p-2 text-gray-700 transition-colors hover:bg-gray-200"
                          aria-label="Edit category"
                        >
                          <IconEdit size={16} />
                        </button>
                        <button
                          onClick={() => initiateDeleteCategory(category)}
                          className="rounded-md bg-red-100 p-2 text-red-600 transition-colors hover:bg-red-200"
                          aria-label="Delete category"
                        >
                          <IconTrash size={16} />
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

      {/* Add/Edit Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full rounded-lg bg-white p-8 shadow-xl sm:w-96">
            <h3 className="mb-6 text-xl font-bold">
              {editingCategory ? "Edit Category" : "Add Category"}
            </h3>
            <div className="mb-4">
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full rounded-lg border p-3"
                placeholder="Category Name"
                required
              />
            </div>
            <CategoryIconPicker
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={
                  editingCategory ? handleUpdateCategory : handleAddCategory
                }
                className="rounded-md bg-blue-600 px-6 py-2 text-white"
              >
                {editingCategory ? "Save Changes" : "Add Category"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Delete Category
            </h3>
            <p className="mb-6 text-gray-600">
              {hasTransactions
                ? `This category "${categoryToDelete?.name}" has transactions associated with it. Deleting it will affect these transactions. Are you sure you want to proceed?`
                : `Are you sure you want to delete the category "${categoryToDelete?.name}"?`}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteCategory}
                className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                {hasTransactions ? "Delete Anyway" : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;