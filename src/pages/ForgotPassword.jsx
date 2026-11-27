
import { useState } from "react";
import { supabase } from "../lib/supabase";

function ForgotPassword({ setCurrentPage }) {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const enviarInstrucciones = async (e) => {
    e.preventDefault();

    setMensaje("");
    setError("");

    const correoLimpio = correo.trim().toLowerCase();

    if (!correoLimpio) {
      setError("Por favor, ingresa tu correo electrónico.");
      return;
    }

    try {
      setLoading(true);

      const { error: resetError } =
        await supabase.auth.resetPasswordForEmail(correoLimpio, {
          redirectTo: window.location.origin,
        });

      if (resetError) {
        setError(resetError.message);
        return;
      }

      setMensaje(
        "Si existe una cuenta asociada a ese correo, recibirás un enlace para recuperar tu contraseña. Revisa también la carpeta de spam."
      );
    } catch (err) {
      console.error("Error al recuperar contraseña:", err);
      setError("No fue posible procesar la solicitud. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
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
                title="Introduce el correo electrónico asociado a la cuenta que deseas recuperar."
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
                aria-live="assertive"
                className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm"
              >
                {error}
              </div>
            )}

            {mensaje && (
              <div
                role="status"
                aria-live="polite"
                className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm"
              >
                <p className="font-semibold mb-1">
                  ✓ Solicitud procesada
                </p>
                <p>{mensaje}</p>
              </div>
            )}

            <button
              type="submit"
              aria-label="Enviar instrucciones para recuperar la contraseña"
              title="Enviar instrucciones de recuperación"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
  loading
    ? "bg-gray-400 text-white cursor-not-allowed"
    : "bg-blue-600 text-white hover:bg-blue-700"
}`}
            >
              {loading ? "Enviando..." : "Enviar instrucciones"}
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setCurrentPage("login")}
              title="Volver a la página de inicio de sesión."
              className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
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
