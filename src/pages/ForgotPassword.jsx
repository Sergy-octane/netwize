
import { useState } from "react";

function ForgotPassword({ setCurrentPage }) {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const enviarInstrucciones = (e) => {
    e.preventDefault();

    setMensaje("");
    setError("");

    const correoLimpio = correo.trim();

    if (!correoLimpio) {
      setError("Por favor, ingresa tu correo electrónico.");
      return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correoLimpio)) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    setMensaje(
      `Se ha simulado el envío de las instrucciones de recuperación al correo ${correoLimpio}.`
    );
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-3">
          Recuperar contraseña
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Ingresa tu correo electrónico y te enviaremos instrucciones
          para recuperar tu cuenta.
        </p>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <form onSubmit={enviarInstrucciones}>
            <div className="mb-6">
              <label
                htmlFor="correo-recuperacion"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Correo electrónico
              </label>

              <input
                id="correo-recuperacion"
                type="email"
                placeholder="correo@ejemplo.com"
                value={correo}
                onChange={(e) => {
                  setCorreo(e.target.value);
                  setMensaje("");
                  setError("");
                }}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {error && (
              <div
                role="alert"
                className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm"
              >
                {error}
              </div>
            )}

            {mensaje && (
              <div
                role="status"
                className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm"
              >
                <p className="font-semibold mb-1">
                  ✓ Solicitud procesada
                </p>
                <p>{mensaje}</p>
                <p className="mt-2 text-green-700">
                  Esta es una demostración: no se ha enviado ningún correo real.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Enviar instrucciones
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={() => setCurrentPage("login")}
              className="text-sm text-blue-600 hover:underline"
            >
              ← Volver a iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
