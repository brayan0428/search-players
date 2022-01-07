import { AppProvider } from "./context/AppContext";
import Home from "./Home";

function App() {
  return (
    <AppProvider>
      <div className="container mt-5">
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
