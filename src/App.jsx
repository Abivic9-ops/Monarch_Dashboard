import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { useState } from "react";

function App() {

  const[sideBarCollapsed, setSideBarCollapsed] = useState(false);
const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:from-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          collapsed={sideBarCollapsed}
          onToggle={()=>setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage}
         onPageChange={setCurrentPage}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
        </div>

      </div>
    </div>
  );
}

export default App;