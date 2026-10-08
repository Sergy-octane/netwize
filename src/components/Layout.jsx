import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import Dashboard from "../pages/Dashboard";
import Simulator from "../pages/Simulator";
import Encyclopedia from "../pages/Encyclopedia";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Terms from "../pages/Terms";
import ForgotPassword from "../pages/ForgotPassword";
import HelpButton from "./HelpButton";

function Layout() {

  const savedSession = localStorage.getItem("netwizeSession");

  const [currentPage, setCurrentPage] = useState(
    savedSession ? "dashboard" : "login"
  );
   const goToPage = (page) => {
    const session = localStorage.getItem("netwizeSession");

    if (
      ["dashboard", "simulator", "encyclopedia"].includes(page) &&
      !session
    ) {
      setCurrentPage("login");
      return;
    }

    setCurrentPage(page);
  };
  

  return (
    <div>
      <Navbar />
      
      <HelpButton />

      <div className="flex">
          
      {["dashboard", "simulator", "encyclopedia"].includes(currentPage) && (
  <Sidebar
  setCurrentPage={goToPage}
  currentPage={currentPage}
/>
)}

        <main className="flex-1 p-6 bg-gray-50">
          
          {currentPage === "welcome" && (<Welcome setCurrentPage={setCurrentPage} />)}

          {currentPage === "login" && (<Login setCurrentPage={setCurrentPage} />)}

          {currentPage === "register" && (<Register setCurrentPage={setCurrentPage} />)}

          {currentPage === "terms" && (<Terms setCurrentPage={setCurrentPage} />)}

          {currentPage === "forgotPassword" && (<ForgotPassword setCurrentPage={setCurrentPage} />)}
          
          {currentPage === "dashboard" && <Dashboard setCurrentPage={goToPage} />}

         {currentPage === "simulator" && <Simulator setCurrentPage={goToPage} />}

          {currentPage === "encyclopedia" && <Encyclopedia />}

        </main>
      </div>
    </div>
  );
}

export default Layout;