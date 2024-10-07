import { createRoot } from "react-dom/client";
import "./index.css"
import Route from "./routes/Route.jsx";
import { AppProvider } from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
<AppProvider>
<Route/>
</AppProvider>
);