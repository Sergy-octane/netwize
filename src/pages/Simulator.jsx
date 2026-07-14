import { useState } from "react";
import casos from "../data/casos.json";

function Simulator() {
  const [casoSeleccionado, setCasoSeleccionado] = useState(0);
  const [nodoActual, setNodoActual] = useState(0);
  const [solucion, setSolucion] = useState("");

  const caso = casos[casoSeleccionado];
  const nodo = caso.nodos[nodoActual];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-3">
        Simulador de Soporte
      </h1>

      <p className="text-gray-600 mb-10">
        Practica diagnósticos de soporte técnico nivel 1.
      </p>

      {/* Botones para seleccionar el caso */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => {
            setCasoSeleccionado(0);
            setNodoActual(0);
            setSolucion("");
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          No tengo internet
        </button>

        <button
          onClick={() => {
            setCasoSeleccionado(1);
            setNodoActual(0);
            setSolucion("");
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          WiFi lento
        </button>

        <button
          onClick={() => {
            setCasoSeleccionado(2);
            setNodoActual(0);
            setSolucion("");
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Problemas DNS
        </button>
      </div>

      {/* Tarjeta principal */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">

        <h2 className="text-xl font-semibold mb-4">
          Caso: {caso.titulo}
        </h2>

        <p className="text-lg mb-6">
          {nodo.pregunta}
        </p>

        {/* Botones Sí y No */}
        
        <div className="flex flex-col md:flex-row gap-4">

  {nodo.opciones.map((opcion, index) => (

    <button
      key={index}
      onClick={() => {

        if (opcion.siguiente !== undefined) {
          setNodoActual(opcion.siguiente - 1);
          setSolucion("");
        }

        if (opcion.solucion) {
          setSolucion(opcion.solucion);
        }

      }}
      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
    >
      {opcion.texto}
    </button>

       ))}

      </div>

        {/* Solución */}
        {solucion && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg">
            <h3 className="font-bold mb-2">Solución:</h3>
            <p>{solucion}</p>
          </div>
        )}

        {/* Botón volver */}
        <div className="mt-8 text-center">
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg rounded-lg transition">
            Volver al Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}

export default Simulator;