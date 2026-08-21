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
          
       <Sidebar
  setCurrentPage={setCurrentPage}
  currentPage={currentPage}
        />

        <main className="flex-1 p-6 bg-gray-50">

          {currentPage === "dashboard" && <Dashboard setCurrentPage={setCurrentPage} />}

          {currentPage === "simulator" && <Simulator setCurrentPage={setCurrentPage} />}

        </main>
      </div>
    </div>
  );
}

export default Layout;