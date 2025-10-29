import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Dashboard } from "./components/Dashboard";
import { ProgramComparison } from "./components/ProgramComparison";
import { Recommendations } from "./components/Recommendations";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "dashboard":
        return <Dashboard />;
      case "compare":
        return <ProgramComparison />;
      case "recommendations":
        return <Recommendations />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      {renderPage()}
    </div>
  );
}