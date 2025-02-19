import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { gql, useMutation, useSubscription } from "urql";

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
  mutation ADD_CATEGORY($id: String!, $name: String!) {
    createCategory(input: { category: { id: $id, name: $name } }) {
      clientMutationId
    }
  }
`;

const CategoriesPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const [
    ,
    //addCategoryResult
    addCategory,
  ] = useMutation(ADD_CATEGORY);
  const [{ data, error }] = useSubscription({ query: CATEGORY_SUBSCRIPTION });

  const handleAddCategory = async () => {
    if (categoryName.trim()) {
      await addCategory({
        id: crypto.randomUUID(), // Generate unique ID
        name: categoryName,
      });
      setCategoryName("");
    }
  };

  return (
    <div className="categories-page">
      <h1 className="mb-4 mt-10 text-xl font-semibold">Categories</h1>

      {/* Add Category Form */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="rounded border p-2"
        />
        <button
          onClick={handleAddCategory}
          className="ml-2 flex items-center rounded bg-blue-500 p-2 text-white"
        >
          <IconPlus size={18} />
          <span className="ml-1">Add Category</span>
        </button>
      </div>

      {/* Category List */}
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="category-list">
          {data?.categories?.nodes?.map((category: any) => (
            <div key={category.id} className="category-item">
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
