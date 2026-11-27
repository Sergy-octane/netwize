
import { useState } from "react";
import { supabase } from "../lib/supabase";

function Login({ setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [cargando, setCargando] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (!email.trim() || !password) {
      setError("Completa el correo y la contraseña.");
      return;
    }

    setCargando(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

   if (error) {
  console.error("Error de Supabase:", error);

  setError(error.message);
  setCargando(false);
  return;
}

    // Layout detectará la sesión y consultará el rol automáticamente.
    setCargando(false);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Iniciar sesión
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="mb-5">
            <label
  htmlFor="correo"
  className="block text-sm font-medium text-gray-700 mb-2"
>
  Correo electrónico
</label>

           <input
  id="correo"
  type="email"
  autoComplete="email"
  placeholder="correo@ejemplo.com"
  title="Introduce el correo electrónico asociado a tu cuenta de NetWize."
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          </div>

          <div className="mb-6">
            <label
  htmlFor="password"
  className="block text-sm font-medium text-gray-700 mb-2"
>
  Contraseña
</label>

            <div className="relative">
              <input
               id="password"
  type={mostrarPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                title="Introduce la contraseña de tu cuenta."
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
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-600"
              >
                {mostrarPassword ? (
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
                )}
              </button>
            </div>
          </div>

          {error && (
  <p
    id="mensaje-error"
    className="text-sm text-red-600 mb-4"
    role="alert"
    aria-live="assertive"
  >
    {error}
  </p>
)}

          <button
            type="button"
            onClick={handleLogin}
            title="Validar tus credenciales e iniciar sesión en NetWize."
            disabled={cargando}
           className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {cargando ? "Verificando..." : "Iniciar sesión"}
          </button>

          <div className="text-center mt-6">
            <button
              onClick={() => setCurrentPage("forgotPassword")}
              title="Ir a la recuperación de contraseña si no puedes acceder a tu cuenta."
              className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              ¿Olvidaste tu contraseña?
            </button>

            <p className="text-sm text-gray-500 mt-4">
              ¿No tienes una cuenta?{" "}
              <button
                onClick={() => setCurrentPage("register")}
                title="Ir al formulario para crear una cuenta nueva."
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Regístrate
              </button>
            </p>

            <div className="mt-4">
              <button
                onClick={() => setCurrentPage("welcome")}
                title="Volver a la página de bienvenida para conocer NetWize."
                className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                ¿Qué es NetWize?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
