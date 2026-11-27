
import { useState } from "react";
import conceptos from "../data/encyclopedia.json";

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function Encyclopedia() {
  const [busqueda, setBusqueda] = useState("");

  const conceptosFiltrados = conceptos.filter((concepto) => {
    const textoBusqueda = normalizarTexto(busqueda.trim());

    return (
      normalizarTexto(concepto.titulo).includes(textoBusqueda) ||
      normalizarTexto(concepto.categoria).includes(textoBusqueda) ||
      normalizarTexto(concepto.queEs).includes(textoBusqueda) ||
      normalizarTexto(concepto.paraQueSirve).includes(textoBusqueda) ||
      normalizarTexto(concepto.revisarN1).includes(textoBusqueda)
    );
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Enciclopedia N1
      </h1>

      <p className="text-gray-600 mb-8">
        Conceptos básicos para soporte técnico de Nivel 1.
      </p>

      {/* Buscador */}
      <div className="relative mb-3">
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          aria-hidden="true"
        >
          🔍
        </span>

        <label htmlFor="buscar-concepto" className="sr-only">
          Buscar conceptos en la enciclopedia
        </label>

        <input
          id="buscar-concepto"
          type="text"
          placeholder="Buscar concepto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          aria-describedby="informacion-busqueda"
          className="w-full p-3 pl-12 border rounded-lg outline-none
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition duration-200"
        />
      </div>

      {/* Información de búsqueda */}
      <p
        id="informacion-busqueda"
        className="text-sm text-gray-500 mb-8"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {busqueda.trim() ? (
          <>
            Resultados para: <strong>"{busqueda}"</strong>
            {" — "}
            {conceptosFiltrados.length} concepto(s) encontrado(s).
          </>
        ) : (
          `Mostrando ${conceptosFiltrados.length} conceptos disponibles.`
        )}
      </p>

      {/* Conceptos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conceptosFiltrados.length > 0 ? (
          conceptosFiltrados.map((concepto) => (
            <div
              key={concepto.titulo}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-xl font-bold mb-2">
                {concepto.titulo}
              </h2>

              <p className="text-sm text-blue-600 mb-4">
                {concepto.categoria}
              </p>

              <h3 className="font-semibold">
                <span aria-hidden="true">🧒 </span>
                ¿Qué es?
              </h3>

              <p className="text-gray-600 mb-4">
                {concepto.queEs}
              </p>

              <h3 className="font-semibold">
                <span aria-hidden="true">🔧 </span>
                ¿Para qué sirve?
              </h3>

              <p className="text-gray-600 mb-4">
                {concepto.paraQueSirve}
              </p>

              <h3 className="font-semibold">
                <span aria-hidden="true">🧠 </span>
                ¿Qué debo revisar como N1?
              </h3>

              <p className="text-gray-600">
                {concepto.revisarN1}
              </p>
            </div>
          ))
        ) : (
          <p
            className="text-gray-500 col-span-full text-center"
            role="status"
            aria-live="polite"
          >
            <span aria-hidden="true">🔍 </span>
            No se encontraron conceptos.
          </p>
        )}
      </div>
    </div>
  );
}

export default Encyclopedia;
