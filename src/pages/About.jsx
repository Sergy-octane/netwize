
function About() {
  return (
    <div className="max-w-5xl mx-auto">

      {/* Encabezado */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 mb-8">
        <p className="text-blue-400 font-semibold mb-3">
          CONOCE NUESTRA PLATAFORMA
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Acerca de NetWize
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl">
          Soluciones de aprendizaje y formación en soporte técnico
          de Nivel 1.
        </p>
      </div>

      {/* Presentación */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          ¿Qué es NetWize?
        </h2>

        <p className="text-gray-600 leading-relaxed">
          NetWize es una plataforma web diseñada para apoyar
          el aprendizaje de soporte técnico de Nivel 1.
          Permite practicar situaciones comunes mediante
          simulaciones interactivas y consultar conceptos
          técnicos en una enciclopedia especializada.
        </p>
      </div>

      {/* Objetivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow-sm p-6">
         <div aria-hidden="true" className="text-3xl mb-4">🎯</div>

          <h2 className="text-xl font-bold mb-3">
            Nuestro objetivo
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Facilitar la formación en soporte técnico mediante
            herramientas prácticas que permitan desarrollar
            habilidades de diagnóstico y solución de problemas.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
        <div aria-hidden="true" className="text-3xl mb-4">💡</div>

          <h2 className="text-xl font-bold mb-3">
            Nuestra propuesta
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Ofrecer un entorno de aprendizaje sencillo,
            accesible e interactivo para fortalecer los
            conocimientos fundamentales del soporte técnico.
          </p>
        </div>

      </div>

      {/* Módulos */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">
          Nuestros módulos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="border rounded-lg p-5">
            <div aria-hidden="true" className="text-3xl mb-3">🖥️</div>
            <h3 className="font-bold mb-2">Simulador N1</h3>
            <p className="text-gray-600 text-sm">
              Practica diagnósticos y soluciones mediante
              árboles de decisión.
            </p>
          </div>

          <div className="border rounded-lg p-5">
           <div aria-hidden="true" className="text-3xl mb-3">📚</div>
            <h3 className="font-bold mb-2">Enciclopedia N1</h3>
            <p className="text-gray-600 text-sm">
              Consulta conceptos y conocimientos técnicos
              fundamentales.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <div aria-hidden="true" className="text-3xl mb-3">📊</div>
            <h3 className="font-bold mb-2">Dashboard</h3>
            <p className="text-gray-600 text-sm">
              Visualiza tu actividad, estadísticas e historial
              de simulaciones.
            </p>
          </div>

        </div>
      </div>

      {/* Tecnologías */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Tecnologías utilizadas
        </h2>

        <div className="flex flex-wrap gap-3">
          {["React", "JavaScript", "Vite", "Tailwind CSS",
            "LocalStorage", "Git", "GitHub", "Vercel"].map(
              (tecnologia) => (
                <span
                  key={tecnologia}
                  className="bg-blue-50 text-blue-800 px-4 py-2
                rounded-lg text-sm font-medium"
                >
                  {tecnologia}
                </span>
              )
            )}
        </div>
      </div>

      {/* Información corporativa */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-6">
          Información de contacto
        </h2>

        <div className="space-y-4 text-gray-600">

          <p>
            <strong className="text-gray-900">Sitio web:</strong>{" "}
            www.netwize.example
          </p>

          <p>
            <strong className="text-gray-900">Correo:</strong>{" "}
            contacto@netwize.example
          </p>

          <p>
            <strong className="text-gray-900">Teléfono:</strong>{" "}
            +57 000 000 0000
          </p>

          <p>
            <strong className="text-gray-900">Ubicación:</strong>{" "}
            Bogotá D. C., Colombia .
          </p>

          <p>
            <strong className="text-gray-900">Horario:</strong>{" "}
            Lunes a viernes: 8:00 am. - 5:00 pm.
          </p>

        </div>

        <p className="text-xs text-gray-400 mt-6">
          Los datos de contacto y horarios son demostrativos
          y no corresponden a canales reales de atención.
        </p>
      </div>

    </div>
  );
}

export default About;
