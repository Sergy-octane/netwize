import { useState } from "react";
import casos from "../data/casos.json";

function Simulator({ setCurrentPage }) {
  const [casoSeleccionado, setCasoSeleccionado] = useState(0);
  const [nodoActual, setNodoActual] = useState(0);
  const [solucion, setSolucion] = useState("");
  const [diagnostico, setDiagnostico] = useState("")
  const [historial, setHistorial] = useState(() => {
  const historialGuardado = localStorage.getItem("historial");

  return historialGuardado
    ? JSON.parse(historialGuardado)
    : [];
});

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
  {casos.map((casoItem, index) => (
    <button
      key={casoItem.id}
      onClick={() => {
        setCasoSeleccionado(index);
        setNodoActual(0);
        setSolucion("");
        setDiagnostico("");
      }}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
    >
      {casoItem.titulo}
    </button>
  ))}
</div>

      {/* Tarjeta principal */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">

        <h2 className="text-2xl font-bold mb-2">
  {caso.titulo}
</h2>

<div className="flex gap-4 text-sm text-gray-600 mb-4">
  <span>📂 Categoría: {caso.categoria}</span>
  <span>🎯 Nivel: {caso.nivel}</span>
</div>
   
<p className="text-gray-700 mb-6">
  {caso.descripcion}
</p>

<p className="text-sm text-gray-500 mb-2">
  Paso {nodoActual + 1} de {caso.nodos.length}
</p>

<p className="text-lg font-medium mb-6">
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
          setDiagnostico("");
          setSolucion("");
        }

        if (opcion.diagnostico) {
          setDiagnostico(opcion.diagnostico);
        }
        
        if (opcion.solucion) {
            setSolucion(opcion.solucion);

          const nuevoRegistro = {
            caso: caso.titulo,
            fecha: new Date().toLocaleString()
          };

const nuevoHistorial = [...historial, nuevoRegistro];

setHistorial(nuevoHistorial);

localStorage.setItem(
  "historial",
  JSON.stringify(nuevoHistorial)
);
        }

      }}
      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
    >
      {opcion.texto}
    </button>

       ))}

      </div>

        {/* Diagnóstico */}
        {diagnostico && (
          <div className="mt-6 p-4 bg-blue-100 border border-blue-400 rounded-lg">
          <h3 className="font-bold mb-2">🩺 Diagnóstico:</h3>
          <p>{diagnostico}</p>
          </div>
          )}

                {/* Solución */}
        {solucion && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg">
            <h3 className="font-bold mb-2">✅ Solución:</h3>
            <p>{solucion}</p>
          </div>
        )}

        {/* Botón volver */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              console.log("Click");
              setCurrentPage("dashboard");
            }}
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition"
          >
            Volver al Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}

export default Simulator;