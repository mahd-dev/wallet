 
import { useState } from 'react';
//import { LoaderFunction } from "@remix-run/node";
import { Fab } from "konsta/react";
import { IconPlus } from "@tabler/icons-react";
import TransactionModal from '~/components/TransactionModal';
import { gql } from 'urql';
import { useMutation, useQuery } from "urql";
import { nanoid } from "nanoid";

/*export const loader: LoaderFunction = async () => {
  return new Response(
    JSON.stringify({ message: "" }), 
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
*/
export default function HomePage() {
  const [basicOpened, setBasicOpened] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleFabClick = () => {
    setBasicOpened(true);
    setIsEditing(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <Fab
        onClick={handleFabClick}
        className="fixed bottom-6 right-6 z-50 transform rounded-full bg-blue-500 p-5 text-white shadow-xl transition-transform hover:scale-110 hover:bg-blue-600"
        icon={<IconPlus />}
      />
      {basicOpened && (
        <TransactionModal 
          basicOpened={basicOpened} 
          setBasicOpened={setBasicOpened} 
          isEditing={isEditing} 
          setIsEditing={setIsEditing}
          setEditData={() => {}} 
          handleEdit={async () => {}} 
          onSuccess={() => {}} 
        />
      )}
    </div>
  );
}

