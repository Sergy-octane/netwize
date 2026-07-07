import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import Dashboard from "../pages/Dashboard";
import Simulator from "../pages/Simulator";

function Layout() {

  const [currentPage, setCurrentPage] = useState("simulator");

  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-50">

          {currentPage === "dashboard" && <Dashboard />}

          {currentPage === "simulator" && <Simulator />}

        </main>
      </div>
    </div>
  );
}

export default Layout;