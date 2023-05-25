import { createContext } from "react";
import { UsePhone } from "../hooks/use.phone";

export type ContextStructure = {
  phoneContext: ReturnType<typeof UsePhone>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
