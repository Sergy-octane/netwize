import { useState } from "react";
import casos from "../data/casos.json";

function Simulator() {

  const [casoSeleccionado, setCasoSeleccionado] = useState(0);

  const caso = casos[casoSeleccionado];
  
  const [nodoActual, setNodoActual] = useState(0);

  const nodo = caso.nodos[nodoActual];
  

  return (
  
    <div>

      <h1 className="text-4xl font-bold mb-3">
        Simulador de Soporte
      </h1>

      <p className="text-gray-600 mb-10">
        Practica diagnósticos de soporte técnico nivel 1.
      </p>
      <div className="flex flex-wrap gap-3 mb-8">

  <button
    onClick={() => setCasoSeleccionado(0)}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
  >
    No tengo internet
  </button>

  <button
    onClick={() => setCasoSeleccionado(1)}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
  >
    WiFi lento
  </button>

  <button
    onClick={() => setCasoSeleccionado(2)}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
  >
    Problemas DNS
  </button>

</div>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">

       <h2 className="text-xl font-semibold mb-4">
        Caso: {caso.titulo}
      </h2>

      <p className="text-lg mb-6">
        {nodo.pregunta}
      </p>

       <div className="flex flex-col md:flex-row gap-4">

        <button
         onClick={() => {
           if (nodo.opciones[0].siguiente !== undefined) {
            setNodoActual(nodo.opciones[0].siguiente - 1);
          }
          }}
        className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
>
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