
import { useState } from "react";
import { supabase } from "../lib/supabase";

function UpdatePassword({ setCurrentPage }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const actualizarPassword = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!password || !confirmPassword) {
      setError("Completa ambos campos.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      setLoading(true);

      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) {
        setError(updateError.message);
        return;
      }

      setSuccess(
        "¡Contraseña actualizada correctamente! Ahora puedes iniciar sesión."
      );

      await supabase.auth.signOut();

      setTimeout(() => {
        setCurrentPage("login");
      }, 2500);
    } catch (err) {
      console.error("Error al actualizar contraseña:", err);
      setError("No fue posible actualizar la contraseña. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-3">
          Nueva contraseña
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Ingresa y confirma tu nueva contraseña para recuperar el acceso a tu cuenta.
        </p>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <form onSubmit={actualizarPassword}>
            <div className="mb-5">
              <label
                htmlFor="nueva-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nueva contraseña
              </label>

              <div className="relative">
                <input
                  id="nueva-password"
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <button
                  type="button"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  aria-label={
                    mostrarPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                  aria-pressed={mostrarPassword}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-600"
                >
                  {mostrarPassword ? "Ocultar" : "Ver"}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmar-nueva-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirmar nueva contraseña
              </label>

              <div className="relative">
                <input
                  id="confirmar-nueva-password"
                  type={mostrarConfirmacion ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setMostrarConfirmacion(!mostrarConfirmacion)
                  }
                  aria-label={
                    mostrarConfirmacion
                      ? "Ocultar confirmación"
                      : "Mostrar confirmación"
                  }
                  aria-pressed={mostrarConfirmacion}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-600"
                >
                  {mostrarConfirmacion ? "Ocultar" : "Ver"}
                </button>
              </div>
            </div>

            {error && (
              <p
                role="alert"
                aria-live="assertive"
                className="text-sm text-red-600 mb-4"
              >
                {error}
              </p>
            )}

            {success && (
              <p
                role="status"
                aria-live="polite"
                className="text-sm text-green-600 mb-4"
              >
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-medium transition ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {loading ? "Actualizando..." : "Guardar nueva contraseña"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
