function Sidebar({ setCurrentPage, currentPage }) {


  return (
    <aside className="hidden sm:block bg-gray-900 text-white w-64 min-h-screen p-6">

      <h2 className="text-lg font-semibold mb-8">
        Menú
      </h2>

      <ul className="space-y-4">

       <li
  onClick={() => setCurrentPage("dashboard")}
  className={`cursor-pointer transition-all duration-200 ${
    currentPage === "dashboard"
      ? "text-blue-400 font-semibold"
      : "hover:text-blue-400 hover:translate-x-1"
  }`}
>
  Dashboard
</li>

        <li
  onClick={() => setCurrentPage("simulator")}
  className={`cursor-pointer transition-all duration-200 ${
    currentPage === "simulator"
      ? "text-blue-400 font-semibold"
      : "hover:text-blue-400 hover:translate-x-1"
  }`}
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