
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Dashboard({ setCurrentPage }) {
  const [tickets, setTickets] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [busqueda, setBusqueda] = useState("");

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

  // Filtrar tickets por número o asunto.
  const ticketsFiltrados = tickets.filter((ticket) => {
    const texto = busqueda.toLowerCase().trim();

    return (
      ticket.ticket_number?.toLowerCase().includes(texto) ||
      ticket.subject?.toLowerCase().includes(texto)
    );
  });

  // Mostrar nombres comprensibles para los estados.
  const nombreEstado = (estado) => {
    const estados = {
      abierto: "Abierto",
      en_proceso: "En proceso",
      pendiente: "Pendiente",
      resuelto: "Resuelto",
    };

    return estados[estado] || estado;
  };

  // Colores según el estado.
  const colorEstado = (estado) => {
    const colores = {
      abierto: "bg-yellow-100 text-yellow-700",
      en_proceso: "bg-blue-100 text-blue-700",
      pendiente: "bg-orange-100 text-orange-700",
      resuelto: "bg-green-100 text-green-700",
    };

    return colores[estado] || "bg-gray-100 text-gray-700";
  };

  // Formatear fechas.
  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleString("es-CO");
  };

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
      <h1 className="text-3xl font-bold mb-2">
        Panel de gestión técnica
      </h1>

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
      <section
        className="mt-10 bg-white rounded-xl shadow p-6"
        aria-labelledby="titulo-listado-tickets"
        aria-busy={cargando}
      >
        <h2
          id="titulo-listado-tickets"
          className="text-xl font-bold mb-5"
        >
          Tickets registrados
        </h2>

        <label
          htmlFor="buscar-ticket-dashboard"
          className="block text-sm font-medium mb-2"
        >
          Buscar por número o asunto
        </label>

        <input
  id="buscar-ticket-dashboard"
  type="search"
  value={busqueda}
  onChange={(e) => setBusqueda(e.target.value)}
  placeholder="Ej. NW-2026-00001"
  title="Filtra los tickets registrados por su número o asunto."
  className="w-full border rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

        <p
          className="text-sm text-gray-500 mb-4"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {busqueda.trim() && !cargando
            ? `${ticketsFiltrados.length} ticket(s) encontrado(s).`
            : !cargando
              ? `${tickets.length} ticket(s) registrados.`
              : ""}
        </p>

        {cargando ? (
          <p
            className="text-center py-10 text-gray-500"
            role="status"
            aria-live="polite"
          >
            Cargando tickets...
          </p>
        ) : ticketsFiltrados.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 font-medium">
              {tickets.length === 0
                ? "Todavía no hay tickets registrados."
                : "No se encontraron tickets con esa búsqueda."}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {ticketsFiltrados.map((ticket) => (
              <article
                key={ticket.id}
                className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <p className="font-bold text-gray-800">
                    {ticket.ticket_number}
                  </p>

                  <p className="text-gray-700 mt-1">
                    {ticket.subject}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {ticket.category} · Prioridad: {ticket.priority}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {formatearFecha(ticket.created_at)}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${colorEstado(ticket.status)}`}
                  >
                    {nombreEstado(ticket.status)}
                  </span>

                 <button
  type="button"
  onClick={() => setCurrentPage("tickets")}
  title="Ir a la sección de gestión para consultar y administrar los tickets."
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
  Gestionar tickets
</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
