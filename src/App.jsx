import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;