function Login({ setCurrentPage }) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">

      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Iniciar sesión
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-sm">

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

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Iniciar sesión
          </button>
            <div className="text-center mt-6">

  <button
  onClick={() => setCurrentPage("forgotPassword")}
  className="text-sm text-blue-600 hover:underline"
>
  ¿Olvidaste tu contraseña?
</button>

  <p className="text-sm text-gray-500 mt-4">
    ¿No tienes una cuenta?{" "}
    <button
  onClick={() => setCurrentPage("register")}
  className="text-blue-600 hover:underline"
>
  Regístrate
</button>
  </p>

  <div className="mt-4">
  <button
    onClick={() => setCurrentPage("welcome")}
    className="text-sm text-blue-600 hover:underline"
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