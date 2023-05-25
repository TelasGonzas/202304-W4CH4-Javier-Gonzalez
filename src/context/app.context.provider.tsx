import { AppContext } from "./app.context";
import { UsePhone } from "../hooks/use.phone";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    phoneContext: UsePhone(),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
