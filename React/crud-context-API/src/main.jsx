import { createRoot } from "react-dom/client";
import {App} from "./App"
import "./index.css"
import { UserStoreProvider } from "./context/userStore";
import { FunctionStoreProvider } from "./context/FunctionalStore";

createRoot(document.querySelector("#root")).render(
  <UserStoreProvider>
    <FunctionStoreProvider>
      <App/>
    </FunctionStoreProvider>
  </UserStoreProvider>
)