function Terms() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">

      <div className="w-full max-w-3xl">

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Términos y condiciones
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-sm">

          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Uso de NetWize
          </h2>

          <p className="text-gray-600 mb-6">
            NetWize es una aplicación educativa diseñada para
            practicar conocimientos relacionados con soporte técnico
            Nivel 1.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Uso responsable
          </h2>

          <p className="text-gray-600 mb-6">
            El usuario se compromete a utilizar la aplicación
            únicamente con fines educativos y de aprendizaje.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Información del usuario
          </h2>

          <p className="text-gray-600">
            La información proporcionada por el usuario será utilizada
            únicamente para las funciones relacionadas con la
            aplicación.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Terms;