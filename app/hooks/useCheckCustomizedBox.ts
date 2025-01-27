import { Article } from "gql/graphql";
import { CartComposition } from "~/store/store";
import { Bread, isCustomBox } from "~/utils/help";

const useCheckCustomizedBox = (
  compositions: CartComposition[],
  box?: Article,
  bread?: Bread,
): { isCustomized: boolean } => {
  return { isCustomized: isCustomBox(compositions, box, bread) };
};

export default useCheckCustomizedBox;
