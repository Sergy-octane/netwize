import { useState } from "react";

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function Register({ setCurrentPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Completa todos los campos.");
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

    const existingUser = JSON.parse(
      localStorage.getItem("netwizeUser")
    );

    if (
      existingUser &&
      existingUser.email.toLowerCase() === email.toLowerCase()
    ) {
      setError("Ya existe una cuenta con este correo.");
      return;
    }

    const passwordHash = await hashPassword(password);

    const user = {
      name,
      email: email.toLowerCase(),
      passwordHash,
    };

    localStorage.setItem("netwizeUser", JSON.stringify(user));

    setSuccess("Cuenta creada correctamente. Redirigiendo al inicio de sesión...");

    setTimeout(() => {
      setCurrentPage("login");
    }, 1500);
  };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          {error && (
            <p className="text-sm text-red-600 mb-4">
              {error}
            </p>
          )}

          {success && (
            <p className="text-sm text-green-600 mb-4">
              {success}
            </p>
          )}

          <button
            type="button"
            onClick={handleRegister}
            disabled={!acceptedTerms}
            className={`w-full py-3 rounded-lg font-medium transition ${
              acceptedTerms
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Crear cuenta
          </button>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              ¿Ya tienes una cuenta?{" "}
              <button
                type="button"
                onClick={() => setCurrentPage("login")}
                className="text-blue-600 hover:underline"
              >
                Inicia sesión
              </button>
            </p>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setCurrentPage("terms")}
              className="text-sm text-blue-600 hover:underline mt-4"
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