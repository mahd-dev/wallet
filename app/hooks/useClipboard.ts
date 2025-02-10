import { useState } from "react";

export function useCLipboard(): [string | undefined, (value: string) => void] {
  const [cb, setCB] = useState<string | undefined>(undefined);
  // navigator.clipboard?.readText().then(setCB);
  const set = (value: string) => {
    navigator.clipboard?.writeText(value);
    setCB(value);
  };
  return [cb, set];
}
