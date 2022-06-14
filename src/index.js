import { createRoot } from "react-dom/client";

import App from "./App";
import SettingContextProvider from "./context/SettingsContext";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <SettingContextProvider>
    <App />
  </SettingContextProvider>
);
