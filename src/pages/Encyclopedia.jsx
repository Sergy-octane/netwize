import encyclopediaData from "../data/encyclopedia.json";

function Encyclopedia() {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Enciclopedia N1
      </h1>

      <p className="text-gray-600 mb-8">
        Conceptos básicos para soporte técnico de Nivel 1.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {encyclopediaData.map((concepto) => (

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
              🧒 ¿Qué es?
            </h3>

            <p className="text-gray-600 mb-4">
              {concepto.queEs}
            </p>

            <h3 className="font-semibold">
              🔧 ¿Para qué sirve?
            </h3>

            <p className="text-gray-600 mb-4">
              {concepto.paraQueSirve}
            </p>

            <h3 className="font-semibold">
              🧠 ¿Qué debo revisar como N1?
            </h3>

            <p className="text-gray-600">
              {concepto.revisarN1}
            </p>

          </div>

        ))}

      </div>
    </div>
  );
}

export default Encyclopedia;