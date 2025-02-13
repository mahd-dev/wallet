import { IconPlus } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { Block, Dialog, Fab } from "konsta/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { gql, useMutation } from "urql";
import { mainLayoutPropsAtom, userIdAtom } from "~/store/store";

const ADD_TRANSACTION_MUTATION = gql`
  mutation AddTransaction(
    $user_id: String!
    $category_id: String!
    $amount: Float!
    $date: Datetime!
    $description: String
    $transaction_id: String!
  ) {
    createTransaction(
      input: {
        transaction: {
          userId: $user_id
          categoryId: $category_id
          amount: $amount
          date: $date
          description: $description
          transactionId: $transaction_id
        }
      }
    ) {
      clientMutationId
    }
  }
`;

const categories = [
  "Alimentation",
  "Vie Sociale",
  "Transport",
  "Beauté",
  "Santé",
  "Éducation",
  "Cadeau",
  "Autres",
];

const HomePage = () => {
  useHydrateAtoms([[mainLayoutPropsAtom, { navbarTitle: "My Wallet" }]]);
  const [basicOpened, setBasicOpened] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("depense");
  const [result, mutate] = useMutation(ADD_TRANSACTION_MUTATION);
  const [currentUserId] = useAtom(userIdAtom);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const transactionData = Object.fromEntries(formData) as Record<
      string,
      string
    >;

    const variables = {
      user_id: currentUserId || "",
      category_id: category, // Updated to use selected category
      amount: parseFloat(transactionData.amount ?? "0"),
      date: new Date().toISOString(),
      description: transactionData.description || "",
      type: transactionData.type as "depense" | "revenu",
      transaction_id: nanoid(),
    };

    try {
      const response = await mutate(variables);
      if (response.error) {
        console.error("Mutation Error:", response.error);
      } else {
        console.log("Transaction Added Successfully:", response.data);
        setBasicOpened(false); // Close dialog after success
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
    }
  };

  return (
    <Block className="!my-0 mx-auto max-w-7xl pt-5">
      <Fab
        onClick={() => setBasicOpened(true)}
        className="fixed bottom-4 right-4 z-50 transform rounded-full bg-blue-500 p-4 text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-600"
        icon={<IconPlus />}
      />

      <Dialog
        opened={basicOpened}
        onBackdropClick={() => setBasicOpened(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 p-4 backdrop-blur-sm"
      >
        <div className="mx-4 w-full max-w-sm overflow-y-auto rounded-lg bg-white shadow-xl">
          <div className="p-4">
            <h2 className="mb-4 text-center text-xl font-bold text-gray-800">
              Ajouter une transaction
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Radio Buttons */}
              <div className="mb-4 flex justify-center gap-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="type"
                    value="depense"
                    checked={type === "depense"}
                    onChange={() => setType("depense")}
                    className="h-4 w-4 border-2 border-gray-300 text-blue-500"
                  />
                  <span className="text-gray-700">Dépense</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="type"
                    value="revenu"
                    checked={type === "revenu"}
                    onChange={() => setType("revenu")}
                    className="h-4 w-4 border-2 border-gray-300 text-blue-500"
                  />
                  <span className="text-gray-700">Revenu</span>
                </label>
              </div>

              {/* Amount Input */}
              <div className="mb-4">
                <input
                  type="number"
                  name="amount"
                  placeholder="0 TND"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-center text-2xl font-bold focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                />
              </div>

              {/* Category Carousel */}
              <div className="mb-4">
                <h3 className="mb-2 text-sm font-semibold text-gray-600">
                  Catégorie
                </h3>
                <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex space-x-3 overflow-x-auto pb-3">
                  {categories.map((catg) => (
                    <button
                      key={catg}
                      type="button"
                      onClick={() => setCategory(catg)}
                      className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        category === catg
                          ? "bg-blue-500 text-white shadow-sm"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {catg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setBasicOpened(false)}
                  className="flex-1 rounded-lg bg-gray-100 px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={result.fetching}
                  className="flex-1 rounded-lg bg-blue-500 px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {result.fetching ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Ajout...
                    </div>
                  ) : (
                    "Ajouter"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </Block>
  );
};

export default HomePage;
