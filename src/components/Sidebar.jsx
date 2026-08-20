function Sidebar({ setCurrentPage }) {

  console.log("Sidebar recibió:", setCurrentPage);

  return (
    <aside className="hidden md:block bg-gray-900 text-white w-64 min-h-screen p-6">

      <h2 className="text-lg font-semibold mb-8">
        Menú
      </h2>

      <ul className="space-y-4">

        <li
        onClick={() => setCurrentPage("dashboard")}
        className="cursor-pointer hover:text-blue-400 transition"
          >
     Dashboard
        </li>

        <li
        onClick={() => setCurrentPage("simulator")}
        className="cursor-pointer hover:text-blue-400 transition"
        >
        Simulador
        </li>

        <li className="cursor-pointer hover:text-blue-400 transition">
          Enciclopedia
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;