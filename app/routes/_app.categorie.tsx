import { IconPlus, IconTrash, IconEdit } from "@tabler/icons-react";
import { useState } from "react";
import { gql, useMutation, useQuery } from "urql";

const CATEGORY_SUBSCRIPTION = gql`
  subscription CategorySubscription {
    categories {
      nodes {
        id
        name
      }
    }
  }
`;

const ADD_CATEGORY = gql`
  mutation ADD_CATEGORY($id: String!, $name: String!, $icon: String) {
    createCategory(input: { category: { id: $id, name: $name, icon: $icon } }) {
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
  mutation UPDATE_CATEGORY($id: String!, $name: String! ,$icon: String) {
    updateCategory(input: { id: $id, patch: { name: $name ,icon: $icon } }) {
      clientMutationId
    }
  }
`;

const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories {
      nodes {
        id
        name
      }
    }
  }
`;

type Category = {
  id: string;
  name: string;
};

const CategoriesPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [, addCategory] = useMutation(ADD_CATEGORY);
  const [, deleteCategory] = useMutation(DELETE_CATEGORY);
  const [, updateCategory] = useMutation(UPDATE_CATEGORY);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const [{ data, error, fetching }, refetch] = useQuery({
    query: GET_CATEGORIES,
    requestPolicy: "network-only",
  });

  const handleAddCategory = async () => {
    if (categoryName.trim() && selectedIcon) {
      const result = await addCategory({
        id: crypto.randomUUID(),
        name: categoryName,
        icon: selectedIcon,  // Include the icon here
      });
  
      if (result.data?.createCategory) {
        refetch();
        setCategoryName("");
        setSelectedIcon(null);  // Reset the icon after adding
      }
    }
  };

  
  const handleDeleteCategory = async (id: string) => {
    const result = await deleteCategory({ id });
    if (result.data?.deleteCategory) {
      refetch();
    }
  };

  const handleUpdateCategory = async () => {
    if (editingCategory && categoryName.trim()) {
      const result = await updateCategory({
        id: editingCategory.id,
        name: categoryName,
        icon: selectedIcon,  // Include the icon here
      });
  
      if (result.data?.updateCategory) {
        refetch();
        setCategoryName("");
        setSelectedIcon(null);  // Reset the icon after update
        setEditingCategory(null);
      }
    }
  };
  

  return (
    <div className="max-w-3xl mx-auto pt-20 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-center">
        <input
          type="text"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="w-full sm:flex-grow p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={editingCategory ? handleUpdateCategory : handleAddCategory}
          className={`flex items-center px-5 py-2.5 rounded-lg text-white text-lg font-medium transition ${
            editingCategory ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {editingCategory ? "Update" : "Add"}
        </button>
      </div>

      {fetching ? (
        <p className="text-center text-lg">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center text-lg">Error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.categories?.nodes?.map((category: Category) => (
            <div
              key={category.id}
              className="bg-gray-100 p-5 rounded-lg shadow-md border border-gray-300 flex flex-col items-center justify-between transition hover:bg-gray-200"
            >
              <p className="text-xl font-semibold mb-3">{category.name}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setCategoryName(category.name);
                    setEditingCategory(category);
                  }}
                  className="text-green-600 hover:text-green-800 p-2 rounded-lg transition"
                >
                  <IconEdit size={24} />
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="text-red-600 hover:text-red-800 p-2 rounded-lg transition"
                >
                  <IconTrash size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
