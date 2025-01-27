import { useHydrateAtoms } from "jotai/utils";
import { Block } from "konsta/react";
import { mainLayoutPropsAtom } from "~/store/store";

const HomePage = () => {
  useHydrateAtoms([[mainLayoutPropsAtom, { navbarTitle: "GhaliFood" }]]);

  return (
    <div>
      <Block className="!my-0 mx-auto max-w-7xl pt-5"></Block>
    </div>
  );
};

export default HomePage;
