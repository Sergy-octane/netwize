import { useState } from "react";

function Register({ setCurrentPage }) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">

      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Crear cuenta
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-sm">

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>

            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmar contraseña
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
            <div className="mb-6 flex items-start gap-3">
  <input
    type="checkbox"
    checked={acceptedTerms}
    onChange={(e) => setAcceptedTerms(e.target.checked)}
    className="mt-1"
  />

  <p className="text-sm text-gray-600">
    Acepto los{" "}
    <button
      type="button"
      onClick={() => setCurrentPage("terms")}
      className="text-blue-600 hover:underline"
    >
      términos y condiciones
    </button>
  </p>
</div>
         <button
  disabled={!acceptedTerms}
  className={`w-full py-3 rounded-lg font-medium transition ${
    acceptedTerms
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  Crear cuenta
</button>
          <button
  onClick={() => setCurrentPage("terms")}
  className="text-sm text-blue-600 hover:underline mt-4"
>
  Leer términos y condiciones
</button>
        </div>

      </div>

    </div>
  );
}

export default Register;