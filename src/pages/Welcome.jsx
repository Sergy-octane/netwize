function Welcome({ setCurrentPage }) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      
      <div className="text-center max-w-2xl">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Bienvenido a NetWize
        </h1>

        <p className="text-xl text-gray-600 mb-4">
          Aprende y practica soporte técnico Nivel 1.
        </p>

        <p className="text-gray-500 mb-8">
          Explora casos de soporte, practica con simulaciones
          y consulta conceptos técnicos en la Enciclopedia N1.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200">
    <h2 className="text-lg font-semibold text-gray-900 mb-2">
      Simulador N1
    </h2>
    <p className="text-gray-500 text-sm">
      Practica casos de soporte técnico mediante árboles de decisión.
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200">
    <h2 className="text-lg font-semibold text-gray-900 mb-2">
      Enciclopedia N1
    </h2>
    <p className="text-gray-500 text-sm">
      Consulta conceptos técnicos explicados de forma sencilla.
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200">
    <h2 className="text-lg font-semibold text-gray-900 mb-2">
      Práctica técnica
    </h2>
    <p className="text-gray-500 text-sm">
      Mejora tus conocimientos resolviendo diferentes situaciones.
    </p>
  </div>

</div>

        <button
          onClick={() => setCurrentPage("login")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition duration-200"
        >
          Comenzar
        </button>

      </div>

    </div>
  );  
}

export default Welcome;