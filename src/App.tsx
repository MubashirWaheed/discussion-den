import { AppRoutes } from "@/routes";
import { AppProvider } from "./providers/app";

function App() {
  return (
    <div>
      <AppProvider>
        <h1>Discussion Den</h1>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
