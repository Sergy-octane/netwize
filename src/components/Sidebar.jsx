
function Sidebar({
  setCurrentPage,
  currentPage,
  menuAbierto,
  setMenuAbierto,
  cerrarSesion,
  profile,
}) {
  const navegar = (pagina) => {
    setCurrentPage(pagina);
    setMenuAbierto(false);
  };

  const manejarCierreSesion = () => {
    setMenuAbierto(false);
    cerrarSesion();
  };
// Opciones comunes para todos los perfiles.
console.log("Perfil recibido en Sidebar:", profile);
const opciones = [
    { pagina: "about", nombre: "Acerca de NetWize" },
    {
      pagina: "tickets",
      nombre: profile?.role === "tecnico" ? "Gestión de tickets" : "Mis tickets",
    },
  ];

  // Opciones exclusivas del técnico.
if (profile?.role === "tecnico") {
  opciones.splice(
    1,
    0,
    { pagina: "dashboard", nombre: "Dashboard" }
  );
}

if (profile?.role === "usuario") {
  opciones.push({
    pagina: "simulator",
    nombre: "Simulador",
  });
}

opciones.push({
  pagina: "encyclopedia",
  nombre: "Enciclopedia",
});

  return (
    <>
      {/* Botón del menú móvil */}
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        className={`sm:hidden fixed top-13 right-3 z-50 bg-gray-900 text-white p-2 rounded-lg shadow-lg ${
          menuAbierto ? "hidden" : "block"
        }`}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
        title={menuAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
      >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
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
      </button>

      {/* Fondo oscuro del menú móvil */}
      {menuAbierto && (
        <div
          className="sm:hidden fixed inset-0 z-30 bg-black/40"
          onClick={() => setMenuAbierto(false)}
        />
      )}

      {/* Barra lateral */}
      <aside
  aria-label="Menú principal de navegación"
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
  {opciones.map((opcion) => (
    <li key={opcion.pagina}>
      <button
        type="button"
        onClick={() => navegar(opcion.pagina)}
        aria-current={currentPage === opcion.pagina ? "page" : undefined}
        className={`w-full text-left transition-all duration-200 ${
          currentPage === opcion.pagina
            ? "text-blue-400 font-semibold"
            : "hover:text-blue-400 hover:translate-x-1"
        }`}
      >
        {opcion.nombre}
      </button>
    </li>
  ))}

  <li>
    <button
      type="button"
      onClick={manejarCierreSesion}
      className="w-full text-left transition-all duration-200 hover:text-red-400 hover:translate-x-1"
    >
      Cerrar sesión
    </button>
  </li>
</ul>
      </aside>
    </>
  );
}

export default Sidebar;
