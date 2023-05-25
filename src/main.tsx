import React from "react";
import ReactDOM from "react-dom/client";
import { AppContextProvider } from "./context/app.context.provider";
import { App } from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
