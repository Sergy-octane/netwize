
import { useState } from "react";
import { supabase } from "../lib/supabase";

function Register({ setCurrentPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    const nombreLimpio = name.trim();
    const correoLimpio = email.trim().toLowerCase();

    if (!nombreLimpio || !correoLimpio || !password || !confirmPassword) {
      setError("Completa todos los campos.");
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

    if (!acceptedTerms) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }

    try {
      setLoading(true);

      const { data, error: registerError } = await supabase.auth.signUp({
        email: correoLimpio,
        password,
        options: {
          data: {
            full_name: nombreLimpio,
          },
        },
      });

      if (registerError) {
        if (
          registerError.message.toLowerCase().includes("already registered")
        ) {
          setError("Ya existe una cuenta con este correo.");
        } else {
          setError(registerError.message);
        }

        return;
      }

      if (data.session) {
        setSuccess("Cuenta creada correctamente. Iniciando sesión...");
      } else {
        setSuccess(
          "Cuenta creada correctamente. Revisa tu correo si necesitas confirmar el registro."
        );

        setTimeout(() => {
          setCurrentPage("login");
        }, 2500);
      }
    } catch (err) {
      console.error("Error al registrar usuario:", err);
      setError("Ocurrió un error al crear la cuenta. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const iconoOjo = (visible) =>
    visible ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 3l18 18" />
        <path d="M10.6 10.6a2 2 0 002.8 2.8" />
        <path d="M9.9 5.2A10.8 10.8 0 0112 5c5 0 8.3 4.5 9 7-.3 1.1-1 2.2-1.9 3.2" />
        <path d="M6.6 6.6C4.2 8 2.5 10.2 2 12c.7 2.5 4 7 10 7 1.2 0 2.3-.2 3.3-.6" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Crear cuenta
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="mb-5">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre
            </label>

            <input
              id="nombre"
              type="text"
              placeholder="Tu nombre"
              title="Escribe el nombre que deseas asociar a tu cuenta."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-5">
  <label
    htmlFor="correo-registro"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    Correo electrónico
  </label>

  <input
    id="correo-registro"
    type="email"
    placeholder="correo@ejemplo.com"
    title="Introduce el correo electrónico que utilizarás para iniciar sesión."
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

          <div className="mb-5">
            <label
              htmlFor="password-registro"

              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contraseña
            </label>

            <div className="relative">
              <input
                id="password-registro"
                type={mostrarPassword ? "text" : "password"}
                placeholder="••••••••"
                title="Crea una contraseña de al menos 6 caracteres."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                title={mostrarPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-lg"
              >
                {iconoOjo(mostrarPassword)}
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmar-password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirmar contraseña
            </label>

            <div className="relative">
              <input
                id="confirmar-password"
                type={mostrarConfirmacion ? "text" : "password"}
                placeholder="••••••••"
                title="Vuelve a escribir tu contraseña para confirmar que coincide."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setMostrarConfirmacion(!mostrarConfirmacion)
                }
                aria-label={
                  mostrarConfirmacion
                    ? "Ocultar confirmación de contraseña"
                    : "Mostrar confirmación de contraseña"
                }
                aria-pressed={mostrarConfirmacion}
                title={
  mostrarConfirmacion
    ? "Ocultar confirmación de contraseña"
    : "Mostrar confirmación de contraseña"
}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-lg"
              >
                {iconoOjo(mostrarConfirmacion)}
              </button>
            </div>
          </div>

          <div className="mb-6 flex items-start gap-3">
            <input
              id="aceptar-terminos"
              title="Marca esta casilla para aceptar los términos y condiciones."
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1"
            />

            <label
              htmlFor="aceptar-terminos"
              className="text-sm text-gray-600"
            >
              Acepto los{" "}
              <button
                type="button"
                onClick={() => setCurrentPage("terms")}
                title="Consultar los términos y condiciones antes de aceptarlos."
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                términos y condiciones
              </button>
            </label>
          </div>

          {error && (
            <p
              className="text-sm text-red-600 mb-4"
              role="alert"
              aria-live="assertive"
            >
              {error}
            </p>
          )}

          {success && (
            <p
              className="text-sm text-green-600 mb-4"
              role="status"
              aria-live="polite"
            >
              {success}
            </p>
          )}

          <button
            type="button"
            aria-label="Crear una cuenta nueva en NetWize"
            title="Crear cuenta"
            onClick={handleRegister}
            disabled={!acceptedTerms || loading}
            className={`w-full py-3 rounded-lg font-medium transition ${
              acceptedTerms && !loading
                ? "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </button>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              ¿Ya tienes una cuenta?{" "}
              <button
                type="button"
                onClick={() => setCurrentPage("login")}
                title="Ir a la página de inicio de sesión si ya tienes una cuenta."
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Inicia sesión
              </button>
            </p>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setCurrentPage("terms")}
              title="Abrir la página completa de términos y condiciones."
              className="text-sm text-blue-600 hover:underline mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              Leer términos y condiciones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
