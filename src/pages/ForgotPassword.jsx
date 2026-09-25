function ForgotPassword({ setCurrentPage }) {
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

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Enviar instrucciones
          </button>

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