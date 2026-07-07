function Simulator() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-3">
        Simulador de Soporte
      </h1>

      <p className="text-gray-600 mb-10">
        Practica diagnósticos de soporte técnico nivel 1.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">

        <h2 className="text-xl font-semibold mb-4">
          Caso: No tengo internet
        </h2>

        <p className="text-lg mb-6">
          ¿El router está encendido?
        </p>

       <div className="flex flex-col md:flex-row gap-4">

          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
            Sí
          </button>

          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition">
            No
          </button>

        </div>
    <div className="mt-8 text-center">
    <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition">
        Volver al Dashboard
    </button>
    </div>
      </div>

    </div>
  );
}

export default Simulator;