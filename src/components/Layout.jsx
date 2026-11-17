
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
import About from "../pages/About";
import Tickets from "../pages/Tickets";

function Layout() {
  const savedSession = localStorage.getItem("netwizeSession");

  const [currentPage, setCurrentPage] = useState(savedSession ? "about" : "login");

  const [menuAbierto, setMenuAbierto] = useState(false);

  const goToPage = (page) => {
    const session = localStorage.getItem("netwizeSession");

    if (
      ["dashboard", "simulator", "encyclopedia", "about", "tickets"].includes(page) &&
      !session
    ) {
      setMenuAbierto(false);
      setCurrentPage("login");
      return;
    }

    setMenuAbierto(false);
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar />

      <HelpButton />

      <div className="flex min-h-screen">
        {["dashboard", "simulator", "encyclopedia", "about", "tickets"].includes(
          currentPage
        ) && (
          <Sidebar
            setCurrentPage={goToPage}
            currentPage={currentPage}
            menuAbierto={menuAbierto}
            setMenuAbierto={setMenuAbierto}
          />
        )}

        <div className="flex flex-1 min-w-0 flex-col">
          <main className="flex-1 min-w-0 p-6 bg-gray-50">
            {currentPage === "welcome" && (
              <Welcome setCurrentPage={setCurrentPage} />
            )}

            {currentPage === "login" && (
              <Login setCurrentPage={setCurrentPage} />
            )}

            {currentPage === "register" && (
              <Register setCurrentPage={setCurrentPage} />
            )}

            {currentPage === "terms" && (
              <Terms setCurrentPage={setCurrentPage} />
            )}

            {currentPage === "forgotPassword" && (
              <ForgotPassword setCurrentPage={setCurrentPage} />
            )}

            {currentPage === "dashboard" && (
              <Dashboard setCurrentPage={goToPage} />
            )}

            {currentPage === "simulator" && (
              <Simulator setCurrentPage={goToPage} />
            )}

            {currentPage === "encyclopedia" && <Encyclopedia />}

            {currentPage === "about" && <About />}

            {currentPage === "tickets" && <Tickets />}
          </main>

          <footer className="bg-gray-900 text-gray-300 px-6 py-6 text-center">
            <p className="text-lg font-bold text-white">NetWize</p>

            <p className="text-sm mt-1">
              Plataforma de aprendizaje de soporte técnico Nivel 1.
            </p>

            <p className="text-xs text-gray-400 mt-3">
              © {new Date().getFullYear()} NetWize. Proyecto formativo SENA.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Layout;
