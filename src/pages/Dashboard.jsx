
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Dashboard({ setCurrentPage }) {
  const [tickets, setTickets] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  

  // Consultar tickets desde Supabase.
  useEffect(() => {
    const cargarTickets = async () => {
      setCargando(true);
      setError("");

      const { data, error } = await supabase
        .from("tickets")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error al cargar tickets:", error.message);
        setError("No fue posible cargar los tickets.");
        setCargando(false);
        return;
      }

      setTickets(data || []);
      setCargando(false);
    };

    cargarTickets();
  }, []);

  // Calcular estadísticas.
  const totalTickets = tickets.length;

  const abiertos = tickets.filter(
    (ticket) => ticket.status === "abierto"
  ).length;

  const enProceso = tickets.filter(
    (ticket) => ticket.status === "en_proceso"
  ).length;

  const pendientes = tickets.filter(
    (ticket) => ticket.status === "pendiente"
  ).length;

  const resueltos = tickets.filter(
    (ticket) => ticket.status === "resuelto"
  ).length;

  // Calcular los tickets por categoría.
  const categorias = Object.entries(
    tickets.reduce((acumulado, ticket) => {
      const categoria = ticket.category || "Otros";
      acumulado[categoria] = (acumulado[categoria] || 0) + 1;
      return acumulado;
    }, {})
  ).sort((a, b) => b[1] - a[1]);

  // Identificar los asuntos que más se repiten.
  const asuntosFrecuentes = Object.values(
    tickets.reduce((acumulado, ticket) => {
      const asunto = ticket.subject?.trim() || "Sin asunto";
      const clave = asunto.toLowerCase();

      if (!acumulado[clave]) {
        acumulado[clave] = { nombre: asunto, cantidad: 0 };
      }

      acumulado[clave].cantidad++;
      return acumulado;
    }, {})
  )
    .sort((a, b) => b.cantidad - a.cantidad)
    .slice(0, 5);

  // Calcular tickets por prioridad.
  const prioridades = [
    { nombre: "Crítica", valor: "critica", color: "bg-red-500" },
    { nombre: "Alta", valor: "alta", color: "bg-orange-500" },
    { nombre: "Media", valor: "media", color: "bg-yellow-500" },
    { nombre: "Baja", valor: "baja", color: "bg-green-500" },
  ].map((prioridad) => ({
    ...prioridad,
    cantidad: tickets.filter(
      (ticket) => ticket.priority === prioridad.valor
    ).length,
  }));

  // Calcular porcentajes para las gráficas.
  const calcularPorcentaje = (cantidad) =>
    totalTickets === 0
      ? 0
      : Math.round((cantidad / totalTickets) * 100);


 
  const estadisticas = [
    {
      titulo: "Total de tickets",
      cantidad: totalTickets,
      descripcion: "Solicitudes registradas",
      color: "text-blue-600",
    },
    {
      titulo: "Tickets abiertos",
      cantidad: abiertos,
      descripcion: "Esperando atención",
      color: "text-yellow-600",
    },
    {
      titulo: "En proceso",
      cantidad: enProceso,
      descripcion: "En atención técnica",
      color: "text-blue-600",
    },
    {
      titulo: "Pendientes",
      cantidad: pendientes,
      descripcion: "Pendientes de seguimiento",
      color: "text-orange-600",
    },
    {
      titulo: "Resueltos",
      cantidad: resueltos,
      descripcion: "Tickets finalizados",
      color: "text-green-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      Panel de seguimiento

      <p className="text-gray-600 mb-8">
        Resumen general de las solicitudes de soporte técnico.
      </p>

      {error && (
        <p
          className="bg-red-100 text-red-700 p-4 rounded-lg mb-6"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </p>
      )}

      {/* Estadísticas */}
      <section
        aria-label="Estadísticas de tickets"
        aria-busy={cargando}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {cargando ? (
          <p role="status" aria-live="polite" className="text-gray-500">
            Cargando estadísticas...
          </p>
        ) : (
          estadisticas.map((estadistica) => (
            <div
              key={estadistica.titulo}
              className="bg-white rounded-xl shadow p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm text-gray-500">
                {estadistica.titulo}
              </p>

              <p
                className={`text-4xl font-bold mt-2 ${estadistica.color}`}
              >
                {estadistica.cantidad}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                {estadistica.descripcion}
              </p>
            </div>
          ))
        )}
      </section>


      {/* Análisis de incidencias */}
      <section className="mt-10" aria-label="Análisis de incidencias">

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Análisis de incidencias
        </h2>

        <p className="text-gray-600 mb-6">
          Identifica las categorías y los problemas que generan
          más solicitudes de soporte.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Tickets por categoría */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-bold mb-5">
              Tickets por categoría
            </h3>

            {categorias.length === 0 ? (
              <p className="text-gray-500">
                Todavía no hay datos disponibles.
              </p>
            ) : (
              <div className="space-y-5">
                {categorias.map(([nombre, cantidad]) => (
                  <div key={nombre}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {nombre}
                      </span>

                      <span className="text-gray-600 text-sm">
                        {cantidad} ({calcularPorcentaje(cantidad)}%)
                      </span>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all"
                        style={{
                          width: `${calcularPorcentaje(cantidad)}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tickets por prioridad */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-bold mb-5">
              Tickets por prioridad
            </h3>

            <div className="space-y-5">
              {prioridades.map((prioridad) => (
                <div key={prioridad.valor}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">
                      {prioridad.nombre}
                    </span>

                    <span className="text-gray-600 text-sm">
                      {prioridad.cantidad} (
                      {calcularPorcentaje(prioridad.cantidad)}%)
                    </span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div
                      className={`${prioridad.color} h-3 rounded-full transition-all`}
                      style={{
                        width: `${calcularPorcentaje(prioridad.cantidad)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Problemas más frecuentes */}
        <div className="bg-white rounded-xl shadow p-6 mt-6">
          <h3 className="text-lg font-bold mb-2">
            Problemas más frecuentes
          </h3>

          <p className="text-gray-500 text-sm mb-5">
            Asuntos que aparecen repetidamente en los tickets.
          </p>

          {asuntosFrecuentes.length === 0 ? (
            <p className="text-gray-500">
              Todavía no hay datos disponibles.
            </p>
          ) : (
            <div className="space-y-4">
              {asuntosFrecuentes.map((asunto, indice) => (
                <div
                  key={asunto.nombre}
                  className="flex items-center justify-between gap-4 border-b pb-3 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 font-bold rounded-lg px-3 py-2">
                      {indice + 1}
                    </span>

                    <span className="text-gray-700 font-medium">
                      {asunto.nombre}
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">
                    {asunto.cantidad}{" "}
                    {asunto.cantidad === 1 ? "ticket" : "tickets"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </section>


      {/* Listado general de tickets */}
      {/* Acceso a la gestión de tickets */}
<section className="mt-10 bg-white rounded-xl shadow p-8">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        Administración de solicitudes
      </h2>

      <p className="text-gray-600">
        Consulta, busca y administra los tickets registrados
        desde el módulo de gestión.
      </p>
    </div>

    <button
      type="button"
      onClick={() => setCurrentPage("tickets")}
      title="Ir al módulo de gestión de tickets."
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Consultar tickets
    </button>
  </div>
</section>
    </div>
  );
}

export default Dashboard;
