
import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

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
import UpdatePassword from "../pages/UpdatePassword";
import HelpButton from "./HelpButton";
import About from "../pages/About";
import Tickets from "../pages/Tickets";

function Layout() {
  const [currentPage, setCurrentPage] = useState("login");
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Sesión y perfil del usuario
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);

  // Estados de carga y recuperación
  const [sessionReady, setSessionReady] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [profileError, setProfileError] = useState("");
  const [recoveryMode, setRecoveryMode] = useState(false);

  // 1. Consultar la sesión de Supabase
  useEffect(() => {
    let mounted = true;

    const cargarSesion = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!mounted) return;

      if (error) {
        console.error("Error al consultar la sesión:", error.message);
      }

      setSession(data?.session ?? null);
      setSessionReady(true);

      if (!data?.session) {
        setAuthLoading(false);
      }
    };

    cargarSesion();

    // Escuchar cambios en la sesión
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, nuevaSesion) => {
      if (!mounted) return;

      setSession(nuevaSesion);

      // El usuario viene desde el enlace de recuperación
      if (event === "PASSWORD_RECOVERY") {
        setRecoveryMode(true);
        setProfile(null);
        setProfileError("");
        setCurrentPage("updatePassword");
        setAuthLoading(false);
        return;
      }

      // El usuario cerró sesión
      if (event === "SIGNED_OUT") {
        setRecoveryMode(false);
        setProfile(null);
        setProfileError("");
        setCurrentPage("login");
        setAuthLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // 2. Consultar el perfil y el rol del usuario
  useEffect(() => {
    if (!sessionReady || recoveryMode) return;

    if (!session?.user?.id) {
      return;
    }

    let active = true;

    const cargarPerfil = async () => {
      setAuthLoading(true);
      setProfileError("");

      const { data, error } = await supabase
        .from("profiles")
        .select("id, full_name, email, phone, role")
        .eq("id", session.user.id)
        .single();

      if (!active) return;

      if (error) {
        console.error("Error al consultar el perfil:", error.message);
        setProfileError(error.message);
        setAuthLoading(false);
        return;
      }

      setProfile(data);

      // Cada rol comienza en su página correspondiente
      setCurrentPage(
        data.role === "tecnico" ? "dashboard" : "about"
      );

      setAuthLoading(false);
    };

    cargarPerfil();

    return () => {
      active = false;
    };
  }, [session?.user?.id, sessionReady, recoveryMode]);

  // 3. Controlar la navegación y los permisos
  const goToPage = (page) => {
    const paginasProtegidas = [
      "dashboard",
      "simulator",
      "encyclopedia",
      "about",
      "tickets",
    ];

    const paginasTecnico = ["dashboard"];

    if (paginasProtegidas.includes(page) && !session) {
      setMenuAbierto(false);
      setCurrentPage("login");
      return;
    }

    // Los usuarios normales no pueden entrar a páginas técnicas
    if (
      paginasTecnico.includes(page) &&
      profile?.role !== "tecnico"
    ) {
      setMenuAbierto(false);
      setCurrentPage("tickets");
      return;
    }

    setMenuAbierto(false);

    // El simulador es exclusivo para usuarios normales
    if (
      page === "simulator" &&
      profile?.role !== "usuario"
    ) {
      setMenuAbierto(false);
      setCurrentPage("about");
      return;
    }

    setCurrentPage(page);
  };

  // 4. Cerrar sesión
  const cerrarSesion = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  const mostrarSidebar =
    session &&
    profile &&
    ["dashboard", "simulator", "encyclopedia", "about", "tickets"].includes(
      currentPage
    );

  return (
    <div>
      <a
        href="#contenido-principal"
        title="Ir directamente al contenido principal y omitir la navegación."
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:bg-white focus:text-blue-700 focus:p-3 focus:rounded"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <HelpButton />

      <div className="flex min-h-screen">
        {mostrarSidebar && (
          <Sidebar
            setCurrentPage={goToPage}
            currentPage={currentPage}
            menuAbierto={menuAbierto}
            setMenuAbierto={setMenuAbierto}
            cerrarSesion={cerrarSesion}
            profile={profile}
          />
        )}

        <div className="flex flex-1 min-w-0 flex-col">
          <main
            id="contenido-principal"
            tabIndex="-1"
            className="flex-1 min-w-0 p-6 bg-gray-50"
          >
            {authLoading && (
              <div className="text-center py-10">
                <p className="text-gray-600">
                  Conectando con NetWize...
                </p>
              </div>
            )}

            {!authLoading && recoveryMode && (
              <UpdatePassword setCurrentPage={setCurrentPage} />
            )}

            {!authLoading && !recoveryMode && profileError && (
              <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-red-600 mb-2">
                  No se pudo cargar tu perfil
                </h2>

                <p className="text-gray-600 mb-4">
                  {profileError}
                </p>

                <button
                  type="button"
                  onClick={cerrarSesion}
                  title="Cerrar tu sesión y volver a la pantalla de inicio de sesión."
                  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cerrar sesión
                </button>
              </div>
            )}

            {!authLoading && !profileError && !recoveryMode && (
              <>
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

                {currentPage === "dashboard" &&
                  profile?.role === "tecnico" && (
                    <Dashboard setCurrentPage={goToPage} />
                  )}

                {currentPage === "simulator" &&
                  profile?.role === "usuario" && (
                    <Simulator setCurrentPage={goToPage} />
                  )}

                {currentPage === "encyclopedia" && session && (
                  <Encyclopedia />
                )}

                {currentPage === "about" && session && <About />}

                {currentPage === "tickets" && session && (
                  <Tickets profile={profile} />
                )}
              </>
            )}
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
