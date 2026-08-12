  import { useState } from "react";
  function Dashboard({ setCurrentPage }) {
  const [historial] = useState(() => {
    const historialGuardado = localStorage.getItem("historial");

    return historialGuardado
      ? JSON.parse(historialGuardado)
      : [];
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Bienvenido a NetWize
      </h1>

      <p className="text-gray-600 mb-8">
        Panel principal del simulador de soporte técnico.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Casos resueltos</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Simulaciones</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Nivel</h2>
          <p className="text-3xl font-bold mt-2">N1</p>
        </div>

      </div>
      <div className="mt-10 bg-white rounded-xl shadow p-6">
  <h2 className="text-xl font-bold mb-4">
    Historial de casos
  </h2>

  {historial.length === 0 ? (
    <p className="text-gray-500">
      Aún no has resuelto ningún caso.
    </p>
  ) : (
    <ul className="space-y-3">
      {historial.map((registro, index) => (
  <li
    key={index}
    className="p-3 bg-gray-50 rounded-lg"
  >
    <p className="font-semibold">
      ✅ {registro.caso}
    </p>

    <p className="text-sm text-gray-500 mt-1">
      {registro.fecha}
    </p>
  </li>
))}
    </ul>
  )}
</div>
     <div className="mt-10">
  <button
    onClick={() => setCurrentPage("simulator")}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
  >
    Iniciar simulación
  </button>
</div>
    
    </div>
  );
}

export default Dashboard;