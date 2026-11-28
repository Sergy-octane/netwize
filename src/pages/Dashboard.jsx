
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
