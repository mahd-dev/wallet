import { IconPlus } from "@tabler/icons-react";
import { useHydrateAtoms } from "jotai/utils";
import { Block, Dialog, DialogButton, Fab } from "konsta/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { gql, useMutation } from "urql";
import { mainLayoutPropsAtom } from "~/store/store";
/*
const ALL_TRANSACTIONS_QUERY = gql`
  query Transactions{
    transactions {
      nodes{
        transaction_id
        amount
        date
        description
        type
        user_id 
        category_id
      }
    }
  }
`;*/
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
      category_id: transactionData.category,
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
        className="fixed z-20 right-4-safe bottom-4-safe"
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

            {/* Category Selection */}
            <div className="mt-4">
              <label
                htmlFor="fcatgr"
                className="mb-1 block text-lg font-semibold"
              >
                Catégorie
              </label>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-md border p-2"
              >
                <option value="">Sélectionner une catégorie</option>
                <option value="Alimentation">Alimentation</option>
                <option value="Transport">Transport</option>
                <option value="Divertissement">Divertissement</option>
                <option value="Logement">Logement</option>
              </select>
            </div>

            <button type="submit" className="w-full">
              <DialogButton disabled={result.fetching}>
                {result.fetching ? "Ajout..." : "Ajouter"}
              </DialogButton>
            </button>
          </form>
        }
        buttons={
          <DialogButton onClick={() => setBasicOpened(false)}>
            Annuler
          </DialogButton>
        }
      />
    </div>
  );
};

export default HomePage;
