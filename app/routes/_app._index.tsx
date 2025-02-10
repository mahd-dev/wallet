import { IconPlus } from "@tabler/icons-react";
import { useHydrateAtoms } from "jotai/utils";
import { Block, Dialog, DialogButton, Fab } from "konsta/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { gql, useMutation } from "urql";
import { mainLayoutPropsAtom } from "~/store/store";

const ADD_TRANSACTION_MUTATION = gql`
  mutation AddTransaction(
    $user_id: String!
    $category_id: String!
    $amount: BigFloat
    $date: Datetime!
    $description: String
    $transaction_id: String!
  ) {
    createTransaction(
      input: {
        transaction: {
          user_id: $user_id
          category_id: $category_id
          amount: $amount
          date: $date
          description: $description
          transaction_id: $transaction_id
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const transactionData = Object.fromEntries(formData) as Record<
      string,
      string
    >;

    const variables = {
      user_id: nanoid(),
      category_id: category, // Updated to use selected category
      amount: parseFloat(transactionData.amount ?? "0"),
      date: new Date().toISOString(),
      description: transactionData.description || "",
      type: transactionData.type as "depense" | "revenu",
      transaction_id: crypto.randomUUID(),
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
    <div>
      <Block className="!my-0 mx-auto max-w-7xl pt-5"></Block>
      <Fab
        onClick={() => setBasicOpened(true)}
        className="right-4-safe bottom-4-safe fixed z-20"
        icon={<IconPlus />}
      />
      <Dialog
        opened={basicOpened}
        onBackdropClick={() => setBasicOpened(false)}
        title="Ajouter une transaction"
        content={
          <form onSubmit={handleSubmit} className="p-4">
            {/* Radio buttons for selecting type */}
            <div className="mb-4 flex justify-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="type"
                  value="depense"
                  checked={type === "depense"}
                  onChange={() => setType("depense")}
                />
                <span>Dépense</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="type"
                  value="revenu"
                  checked={type === "revenu"}
                  onChange={() => setType("revenu")}
                />
                <span>Revenu</span>
              </label>
            </div>

            {/* Amount Input */}
            <input
              type="number"
              name="amount"
              placeholder="0 TND"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-md border p-2 text-center text-3xl font-bold"
            />

            {/* Category Selection - Horizontal Scrollable Buttons */}
            <div className="mt-4">
              <label
                htmlFor="category"
                className="mb-2 block text-lg font-semibold"
              >
                Catégorie
              </label>
              <div className="scrollbar-hide carousel carousel-center rounded-box bg-neutral flex space-x-4 overflow-x-auto p-2">
                {categories.map((catg) => (
                  <button
                    key={catg}
                    type="button"
                    onClick={() => setCategory(catg)}
                    className={`carousel-item rounded-lg px-4 py-2 text-white ${
                      category === catg ? "bg-blue-500" : "bg-gray-500"
                    }`}
                  >
                    {catg}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons - Placed Inside Flex Container */}
            <div className="mt-4 flex justify-between">
              <DialogButton onClick={() => setBasicOpened(false)}>
                Annuler
              </DialogButton>
              <DialogButton strong disabled={result.fetching}>
                {result.fetching ? "Ajout..." : "Ajouter"}
              </DialogButton>
            </div>
          </form>
        }
      />
    </div>
  );
};

export default HomePage;
