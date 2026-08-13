  import { useState } from "react";
  import casos from "../data/casos.json";
  function Dashboard({ setCurrentPage }) {
  const [historial] = useState(() => {
    const historialGuardado = localStorage.getItem("historial");

    return historialGuardado
      ? JSON.parse(historialGuardado)
      : [];
  });
 const categorias = historial.map((registro) => {
  const casoEncontrado = casos.find(
    (caso) => caso.titulo === registro.caso
  );

  return casoEncontrado
    ? casoEncontrado.categoria
    : "Desconocida";
});

const conteoCategorias = {};

categorias.forEach((categoria) => {
  conteoCategorias[categoria] =
    (conteoCategorias[categoria] || 0) + 1;
});

const categoriaFrecuente = Object.entries(conteoCategorias)
  .sort((a, b) => b[1] - a[1])[0] || ["Ninguna", 0];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Bienvenido a NetWize
      </h1>

      <p className="text-gray-600 mb-8">
        Panel principal del simulador de soporte técnico.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Casos resueltos</h2>
          <p className="text-3xl font-bold mt-2">
          {historial.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Simulaciones</h2>
          <p className="text-3xl font-bold mt-2">
          {historial.length}
          </p>  
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Nivel</h2>
          <p className="text-3xl font-bold mt-2">N1</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
  <h2 className="text-gray-500">Categoría frecuente</h2>

  <p className="text-3xl font-bold mt-2">
    {categoriaFrecuente[0]}
  </p>

  <p className="text-sm text-gray-500 mt-1">
    {categoriaFrecuente[1]} caso(s)
  </p>
</div>

    <div className="mt-10 bg-white rounded-xl shadow p-6">
  <h2 className="text-xl font-bold mb-4">
    Categorías frecuentes
  </h2>

  {Object.keys(conteoCategorias).length === 0 ? (
    <p className="text-gray-500">
      Aún no hay estadísticas disponibles.
    </p>
  ) : (
    <div className="space-y-4">
      {Object.entries(conteoCategorias).map(
        ([categoria, cantidad]) => (
          <div key={categoria}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">
                {categoria}
              </span>

              <span className="text-gray-500">
                {cantidad} caso(s)
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{
                  width: `${(cantidad / historial.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        )
      )}
    </div>
  )}
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