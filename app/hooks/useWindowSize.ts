import { RefObject, useLayoutEffect, useState } from "react";

export const useDivSize = (ref?: RefObject<HTMLElement>) => {
  const div = ref?.current;
  const [initW, initH] =
    typeof window === "undefined"
      ? [360, 800]
      : [
          div?.offsetWidth || window.innerWidth,
          div?.offsetHeight || window.innerHeight,
        ];
  const [size, setSize] = useState<[number, number, "v" | "h"]>([
    initW,
    initH,
    initW > initH ? "h" : "v",
  ]);
  useLayoutEffect(() => {
    function updateSize() {
      const [w, h] = [
        div?.offsetWidth || window.innerWidth,
        div?.offsetHeight || window.innerHeight,
      ];
      setSize([w, h, w > h ? "h" : "v"]);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [div?.offsetHeight, div?.offsetWidth, ref]);
  return size;
};
