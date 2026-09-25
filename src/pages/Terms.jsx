function Terms({ setCurrentPage }) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-8">

      <div className="w-full max-w-3xl">

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Términos y condiciones
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-sm">

          <p className="text-sm text-gray-500 mb-8">
            Última actualización: septiembre de 2026
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            1. Uso de NetWize
          </h2>

          <p className="text-gray-600 mb-6">
            NetWize es una aplicación educativa orientada al aprendizaje
            y práctica de conocimientos relacionados con soporte técnico
            Nivel 1. Su contenido está diseñado con fines académicos y
            de formación.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            2. Uso responsable
          </h2>

          <p className="text-gray-600 mb-6">
            El usuario se compromete a utilizar NetWize de manera
            responsable y únicamente para los fines permitidos por la
            aplicación. No deberá utilizar la plataforma para actividades
            que puedan afectar su funcionamiento o el de terceros.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            3. Cuenta de usuario
          </h2>

          <p className="text-gray-600 mb-6">
            Cuando se habilite el registro de usuarios, la información
            proporcionada deberá ser correcta y utilizada de manera
            responsable. El usuario será responsable de mantener la
            confidencialidad de sus credenciales de acceso.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            4. Uso educativo
          </h2>

          <p className="text-gray-600 mb-6">
            Los casos, conceptos y simulaciones disponibles en NetWize
            tienen como finalidad apoyar el aprendizaje de soporte técnico
            Nivel 1 y no sustituyen procedimientos técnicos oficiales
            de proveedores de servicios.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            5. Información proporcionada
          </h2>

          <p className="text-gray-600 mb-6">
            La información proporcionada por el usuario será utilizada
            únicamente para las funciones relacionadas con la aplicación
            dentro del alcance definido para el proyecto.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            6. Propiedad intelectual
          </h2>

          <p className="text-gray-600 mb-6">
            Los elementos, contenidos y estructura desarrollados
            específicamente para NetWize forman parte del proyecto
            académico y no deben ser utilizados de manera que afecten
            los derechos de sus respectivos autores o propietarios.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            7. Responsabilidad del usuario
          </h2>

          <p className="text-gray-600 mb-6">
            El usuario es responsable del uso que realice de la información
            presentada en la aplicación y de las acciones realizadas a
            partir de los conocimientos adquiridos mediante la plataforma.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            8. Disponibilidad del servicio
          </h2>

          <p className="text-gray-600 mb-6">
            NetWize es un proyecto académico y su funcionamiento puede
            estar sujeto a modificaciones, actualizaciones o cambios
            durante su desarrollo.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            9. Modificaciones
          </h2>

          <p className="text-gray-600 mb-6">
            Los términos y condiciones podrán ser modificados cuando sea
            necesario para reflejar cambios en las funcionalidades o en
            el alcance del proyecto.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            10. Aceptación
          </h2>

          <p className="text-gray-600 mb-8">
            El uso de las funciones que requieran aceptación de estos
            términos implica que el usuario ha leído y comprendido las
            condiciones descritas anteriormente.
          </p>

          <div className="border-t pt-6 text-center">
            <button
              onClick={() => setCurrentPage("register")}
              className="text-blue-600 hover:underline"
            >
              ← Volver al registro
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Terms;