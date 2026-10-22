
function Sidebar({ setCurrentPage, currentPage, menuAbierto, setMenuAbierto }) {
  const navegar = (pagina) => {
    setCurrentPage(pagina);
    setMenuAbierto(false);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("netwizeSession");
    setMenuAbierto(false);
    setCurrentPage("login");
  };

  return (
    <>
      {/* Botón del menú móvil */}
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        className={`sm:hidden fixed top-[68px] right-3 z-50 bg-gray-900 text-white p-2 rounded-lg shadow-lg ${
  menuAbierto ? "hidden" : "block"
}`}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
      >
        {menuAbierto ? (
          
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg>

        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Fondo oscuro al abrir el menú en móvil */}
      {menuAbierto && (
        <div
          className="sm:hidden fixed inset-0 z-30 bg-black/40"
          onClick={() => setMenuAbierto(false)}
        />
      )}

      {/* Barra lateral */}
      <aside
        className={`
  bg-gray-900 text-white w-64 p-6
  fixed inset-y-0 left-0 z-40 overflow-y-auto
  transform transition-transform duration-300
  sm:sticky sm:top-0 sm:translate-x-0 sm:min-h-screen
  ${menuAbierto ? "translate-x-0" : "-translate-x-full"}
`}
      >
        <h2 className="text-lg font-semibold mb-8">
          Menú
        </h2>

        <ul className="space-y-4 mt-10">
          <li
            onClick={() => navegar("dashboard")}
            className={`cursor-pointer transition-all duration-200 ${
              currentPage === "dashboard"
                ? "text-blue-400 font-semibold"
                : "hover:text-blue-400 hover:translate-x-1"
            }`}
          >
            Dashboard
          </li>

          <li
            onClick={() => navegar("simulator")}
            className={`cursor-pointer transition-all duration-200 ${
              currentPage === "simulator"
                ? "text-blue-400 font-semibold"
                : "hover:text-blue-400 hover:translate-x-1"
            }`}
          >
            Simulador
          </li>

          <li
            onClick={() => navegar("encyclopedia")}
            className={`cursor-pointer transition-all duration-200 ${
              currentPage === "encyclopedia"
                ? "text-blue-400 font-semibold"
                : "hover:text-blue-400 hover:translate-x-1"
            }`}
          >
            Enciclopedia
          </li>

          <li
            onClick={cerrarSesion}
            className="cursor-pointer transition-all duration-200 hover:text-red-400 hover:translate-x-1"
          >
            Cerrar sesión
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
