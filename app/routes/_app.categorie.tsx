import { IconPlus, IconTrash, IconEdit } from "@tabler/icons-react";
import React, { useState } from "react";
import { gql, useMutation, useQuery } from "urql";
import CategoryIconPicker from "./CategoryIconPicker";
import { useAtom } from "jotai";
import { userAtom } from "~/store/store";
import { icons } from "./CategoryIconPicker"; // Import icons from CategoryIconPicker

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
  const [, addCategory] = useMutation(ADD_CATEGORY);
  const [, deleteCategory] = useMutation(DELETE_CATEGORY);
  const [, updateCategory] = useMutation(UPDATE_CATEGORY);
  const [{ data, error, fetching }, refetch] = useQuery({
    query: GET_CATEGORIES,
    variables: user?.oidcId ? { userId: user.oidcId } : undefined,
    pause: !user?.oidcId, // Ensures query runs only when user is available
    requestPolicy: "network-only",
  });

  const handleAddCategory = async () => {
    if (categoryName.trim() && selectedIcon && user?.oidcId) {
      const iconColor = icons.find(icon => icon.value === selectedIcon)?.color || "";

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

  const handleDeleteCategory = async (id: string) => {
    if (user?.oidcId) {
      const result = await deleteCategory({ id });
      if (result.data?.deleteCategory) {
        refetch();
      }
    }
  };

  const handleUpdateCategory = async () => {
    if (editingCategory && categoryName.trim() && selectedIcon && user?.oidcId) {
      const iconColor = icons.find(icon => icon.value === selectedIcon)?.color || "";

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
    (category: Category) => category.type === activeTab
  );

  return (
    <div className="max-w-4xl mx-auto pt-8 pb-12 px-4 sm:px-6 mt-10">
      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("EXPENSE")}
            className={`flex-1 py-4 text-lg font-medium transition-colors duration-200 ${
              activeTab === "EXPENSE"
                ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            EXPENSE
          </button>
          <button
            onClick={() => setActiveTab("INCOME")}
            className={`flex-1 py-4 text-lg font-medium transition-colors duration-200 ${
              activeTab === "INCOME"
                ? "text-green-600 border-b-2 border-green-600 bg-green-50"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            INCOME
          </button>
        </div>

        <div className="p-6 ">
          {/* Header and Add Button */}
          <div className="flex justify-between items-center mb-8 ">
            <h1 className="text-2xl font-bold text-gray-900">
              {activeTab === "EXPENSE" ? "EXPENSE CATEGORIES" : "INCOME CATEGORIES"}
            </h1>
            <button
              onClick={handleAddNew}
              className={`px-5 py-2.5 rounded-lg shadow-md text-white font-medium flex items-center gap-2 transition transform hover:scale-105 ${
                activeTab === "EXPENSE" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              <IconPlus size={20} />
              <span>Add {activeTab === "EXPENSE" ? "EXPENSE" : "INCOME"}</span>
            </button>
          </div>

          {/* Category Grid */}
          {fetching ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 p-4 rounded-lg text-red-700">
              <p>Error: {error.message}</p>
            </div>
          ) : filteredCategories?.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-4">No {activeTab} categories found</p>
              <button
                onClick={handleAddNew}
                className={`px-5 py-2.5 rounded-lg shadow text-white font-medium ${
                  activeTab === "EXPENSE" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                Create your first category
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredCategories?.map((category: Category) => {
                // Find the icon component for the current category
                const IconComponent = icons.find(icon => icon.value === category.icon)?.component;
                
                return (
                  <div
                    key={category.id}
                    className={`rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden ${
                      category.type === "EXPENSE" 
                        ? "border-l-4 border-blue-500" 
                        : "border-l-4 border-green-500"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${category.iconColor}15 0%, white 100%)`,
                    }}
                  >
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        {/* Icon */}
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm mr-4"
                          style={{ backgroundColor: `${category.iconColor}20`, border: `1px solid ${category.iconColor}50` }}
                        >
                          {IconComponent && (
                            <IconComponent 
                              size={24} 
                              style={{ color: category.iconColor }} 
                            />
                          )}
                        </div>
                        
                        {/* Name */}
                        <h3 className="font-medium text-lg text-gray-800">{category.name}</h3>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          onClick={() => handleEditCategory(category)}
                          className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
                          aria-label="Edit category"
                        >
                          <IconEdit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(category.id)}
                          className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-md transition-colors"
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

      {/* Add/Edit Category */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
            <h3 className="text-xl font-bold mb-6">
              {editingCategory ? "Edit Category" : "Add Category"}
            </h3>
            <div className="mb-4">
              <input
                type="text"
                value={categoryName}
                onChange={e => setCategoryName(e.target.value)}
                className="w-full p-3 border rounded-lg"
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
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={editingCategory ? handleUpdateCategory : handleAddCategory}
                className="px-6 py-2 bg-blue-600 text-white rounded-md"
              >
                {editingCategory ? "Save Changes" : "Add Category"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
