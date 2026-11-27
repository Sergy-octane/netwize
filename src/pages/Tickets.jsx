
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Tickets({ profile }) {
  const [tickets, setTickets] = useState([]);
  const [ticketSeleccionado, setTicketSeleccionado] = useState(null);
  const [historial, setHistorial] = useState([]);

  const [cargando, setCargando] = useState(true);
  const [procesando, setProcesando] = useState(false);
  const [cargandoHistorial, setCargandoHistorial] = useState(false);
  const [error, setError] = useState("");

  const [busqueda, setBusqueda] = useState("");
  const [nuevaObservacion, setNuevaObservacion] = useState("");
  const [visibilidad, setVisibilidad] = useState("publica");

  const [formulario, setFormulario] = useState({
    subject: "",
    description: "",
    category: "Redes",
    priority: "media",
  });

  const esTecnico = profile?.role === "tecnico";

  // Cargar los tickets desde Supabase.
  useEffect(() => {
    const cargarTickets = async () => {
      if (!profile?.id || !profile?.role) {
        setCargando(false);
        return;
      }

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
  }, [profile?.id, profile?.role]);

  // Contar tickets según su estado.
  const abiertos = tickets.filter(
    (ticket) => ticket.status === "abierto"
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

  // Actualizar los campos del formulario.
  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario((actual) => ({
      ...actual,
      [name]: value,
    }));
  };

  // Crear un nuevo ticket.
  const crearTicket = async (e) => {
    e.preventDefault();

    setError("");
    setProcesando(true);

    const { data, error: errorCreacion } = await supabase
      .from("tickets")
      .insert({
        subject: formulario.subject.trim(),
        description: formulario.description.trim(),
        category: formulario.category,
        priority: formulario.priority,
        created_by: profile.id,
        status: "abierto",
        assigned_to: null,
      })
      .select()
      .single();

    if (errorCreacion) {
      console.error("Error al crear ticket:", errorCreacion.message);
      setError("No se pudo crear el ticket. Inténtalo nuevamente.");
      setProcesando(false);
      return;
    }

    setTickets((actuales) => [data, ...actuales]);

    setFormulario({
      subject: "",
      description: "",
      category: "Redes",
      priority: "media",
    });

    setProcesando(false);
  };

  // Consultar el historial de un ticket.
  const cargarHistorial = async (ticketId) => {
    setCargandoHistorial(true);

    const { data, error } = await supabase
      .from("ticket_history")
      .select("*")
      .eq("ticket_id", ticketId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error al cargar historial:", error.message);
      setError("No fue posible cargar el historial del ticket.");
      setHistorial([]);
      setCargandoHistorial(false);
      return;
    }

    setHistorial(data || []);
    setCargandoHistorial(false);
  };

  // Abrir el detalle de un ticket.
  const abrirTicket = async (ticket) => {
    setError("");
    setTicketSeleccionado(ticket);
    setHistorial([]);
    setNuevaObservacion("");
    setVisibilidad("publica");

    await cargarHistorial(ticket.id);
  };

  // Agregar un comentario o procedimiento al historial.
  const agregarObservacion = async () => {
    if (!nuevaObservacion.trim()) {
      setError("Escribe una observación antes de continuar.");
      return;
    }

    setError("");
    setProcesando(true);

    const { data, error: errorObservacion } = await supabase
      .from("ticket_history")
      .insert({
        ticket_id: ticketSeleccionado.id,
        actor_id: profile.id,
        event_type: esTecnico ? "procedimiento" : "comentario",
        description: nuevaObservacion.trim(),
        visibility: esTecnico ? visibilidad : "publica",
      })
      .select()
      .single();

    if (errorObservacion) {
      console.error(
        "Error al registrar observación:",
        errorObservacion.message
      );

      setError("No se pudo guardar el registro en el historial.");
      setProcesando(false);
      return;
    }

    setHistorial((actual) => [...actual, data]);
    setNuevaObservacion("");
    setVisibilidad("publica");
    setProcesando(false);
  };

  // Cambiar el estado de un ticket.
  const cambiarEstado = async () => {
    const estadoActual = ticketSeleccionado.status;

    let nuevoEstado;

    if (estadoActual === "abierto") {
      nuevoEstado = "en_proceso";
    } else if (estadoActual === "resuelto") {
      nuevoEstado = "abierto";
    } else if (
      estadoActual === "en_proceso" ||
      estadoActual === "pendiente"
    ) {
      nuevoEstado = "resuelto";
    } else {
      setError("El estado actual del ticket no es válido.");
      return;
    }

    setError("");
    setProcesando(true);

    const cambios = {
      status: nuevoEstado,
      closed_at:
        nuevoEstado === "resuelto"
          ? new Date().toISOString()
          : null,
    };

    if (nuevoEstado === "en_proceso") {
      cambios.assigned_to = profile.id;
    }

    if (nuevoEstado === "abierto") {
      cambios.assigned_to = null;
    }

    const { data, error: errorEstado } = await supabase
      .from("tickets")
      .update(cambios)
      .eq("id", ticketSeleccionado.id)
      .select()
      .single();

    if (errorEstado) {
      console.error("Error al cambiar estado:", errorEstado.message);
      setError("No se pudo actualizar el estado del ticket.");
      setProcesando(false);
      return;
    }

    setTicketSeleccionado(data);

    setTickets((actuales) =>
      actuales.map((ticket) =>
        ticket.id === data.id ? data : ticket
      )
    );

    // Registrar el cambio en el historial.
    const { error: errorHistorial } = await supabase
      .from("ticket_history")
      .insert({
        ticket_id: data.id,
        actor_id: profile.id,
        event_type: "cambio_estado",
        description: `Estado cambiado de ${estadoActual} a ${nuevoEstado}.`,
        visibility: "publica",
      });

    if (errorHistorial) {
      console.error(
        "Error al registrar cambio de estado:",
        errorHistorial.message
      );

      setError(
        "El estado se actualizó, pero no se pudo registrar el cambio en el historial."
      );
    } else {
      await cargarHistorial(data.id);
    }

    setProcesando(false);
  };

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

  // Formatear fechas.
  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleString("es-CO");
  };

  return (
    <div className="max-w-6xl mx-auto">

      {error && (
        <p
          className="bg-red-100 text-red-700 p-4 rounded-lg mb-6"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </p>
      )}

      <h1 className="text-3xl font-bold mb-2">
        {esTecnico ? "Gestión de tickets" : "Mis tickets"}
      </h1>

      <p className="text-gray-600 mb-8">
        {esTecnico
          ? "Administra las solicitudes y documenta la atención técnica."
          : "Registra tus solicitudes y consulta su estado y seguimiento."}
      </p>

      {/* Resumen de tickets */}
      <section
        aria-label="Resumen de tickets"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">
            Tickets abiertos
          </p>

          <p className="text-4xl font-bold text-yellow-600 mt-2">
            {abiertos}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">
            Tickets resueltos
          </p>

          <p className="text-4xl font-bold text-green-600 mt-2">
            {resueltos}
          </p>
        </div>
      </section>

      {/* Detalle del ticket seleccionado */}
      {ticketSeleccionado ? (

        <section
          id="detalle-ticket"
          aria-labelledby="titulo-detalle-ticket"
          className="bg-white rounded-xl shadow p-6"
        >

          <button
            type="button"
            onClick={() => setTicketSeleccionado(null)}
            className="text-blue-600 hover:text-blue-800 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            ← Volver a los tickets
          </button>

          <div className="flex flex-wrap justify-between items-center gap-3 mb-6">

            <div>
              <h2
                id="titulo-detalle-ticket"
                className="text-2xl font-bold"
              >
                {ticketSeleccionado.ticket_number}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {ticketSeleccionado.subject}
              </p>
            </div>

            <span
              className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700"
              aria-label={`Estado del ticket: ${nombreEstado(ticketSeleccionado.status)}`}
            >
              {nombreEstado(ticketSeleccionado.status)}
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <h3 className="font-bold mb-3">
                Información del ticket
              </h3>

              <p className="text-gray-600 mb-2">
                <strong>Categoría:</strong> {ticketSeleccionado.category}
              </p>

              <p className="text-gray-600 mb-2">
                <strong>Prioridad:</strong> {ticketSeleccionado.priority}
              </p>

              <p className="text-gray-600 mb-2">
                <strong>Solicitante:</strong>{" "}
                {esTecnico ? "Usuario registrado" : "Tú"}
              </p>

              <p className="text-sm text-gray-400 mt-4">
                Creado: {formatearFecha(ticketSeleccionado.created_at)}
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">
                Descripción del problema
              </h3>

              <p className="text-gray-600 whitespace-pre-wrap">
                {ticketSeleccionado.description}
              </p>
            </div>

          </div>

          {/* Historial */}
          <section
            className="mt-8"
            aria-labelledby="titulo-historial-ticket"
            aria-busy={cargandoHistorial}
          >
            <h3
              id="titulo-historial-ticket"
              className="font-bold mb-4"
            >
              Historial y seguimiento
            </h3>

            {cargandoHistorial ? (

              <p
                className="text-gray-500"
                role="status"
                aria-live="polite"
              >
                Cargando historial...
              </p>

            ) : historial.length === 0 ? (

              <p className="text-gray-500 text-sm mb-4">
                Todavía no hay registros en el historial.
              </p>

            ) : (

              <div className="space-y-3 mb-6">

                {historial.map((registro) => (

                  <article
                    key={registro.id}
                    className="bg-gray-50 rounded-lg p-4"
                  >

                    <div className="flex flex-wrap justify-between gap-2 mb-2">

                      <span className="font-semibold text-gray-700">
                        {registro.actor_id === profile.id
                          ? "Tú"
                          : esTecnico
                            ? "Usuario / soporte técnico"
                            : "Soporte técnico"}
                      </span>

                      <span className="text-xs text-gray-500">
                        {registro.event_type}
                      </span>

                    </div>

                    <p className="text-gray-700 whitespace-pre-wrap">
                      {registro.description}
                    </p>

                    <div className="flex justify-between flex-wrap gap-2 mt-3">

                      <span className="text-xs text-gray-400">
                        {formatearFecha(registro.created_at)}
                      </span>

                      {registro.visibility === "interna" && (
                        <span className="text-xs font-semibold text-orange-700">
                          Nota interna
                        </span>
                      )}

                    </div>

                  </article>

                ))}

              </div>

            )}

            <label
              htmlFor="nueva-observacion"
              className="block text-sm font-medium mb-2"
            >
              {esTecnico
                ? "Procedimiento u observación técnica"
                : "Comentario para el equipo de soporte"}
            </label>

            <textarea
              id="nueva-observacion"
              value={nuevaObservacion}
              onChange={(e) => setNuevaObservacion(e.target.value)}
              placeholder={
                esTecnico
                  ? "Escribe un procedimiento u observación técnica..."
                  : "Escribe un comentario para el equipo de soporte..."
              }
              rows={3}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {esTecnico && (
              <div className="mt-3">
                <label
                  htmlFor="visibilidad-observacion"
                  className="block text-sm font-medium mb-2"
                >
                  Visibilidad del registro
                </label>

                <select
                  id="visibilidad-observacion"
                  value={visibilidad}
                  onChange={(e) => setVisibilidad(e.target.value)}
                  className="border rounded-lg p-2"
                >
                  <option value="publica">
                    Visible para el usuario
                  </option>

                  <option value="interna">
                    Solo personal técnico
                  </option>
                </select>
              </div>
            )}

            <button
              type="button"
              onClick={agregarObservacion}
              disabled={procesando}
              className="mt-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {procesando ? "Guardando..." : "Agregar al historial"}
            </button>

          </section>

          {/* Acciones exclusivas del técnico */}
          {esTecnico && (
            <div className="mt-8 border-t pt-6">

              <button
                type="button"
                onClick={cambiarEstado}
                disabled={procesando}
                className="px-5 py-3 rounded-lg text-white font-medium bg-green-600 hover:bg-green-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {procesando
                  ? "Actualizando..."
                  : ticketSeleccionado.status === "abierto"
                    ? "Tomar ticket"
                    : ticketSeleccionado.status === "resuelto"
                      ? "Reabrir ticket"
                      : "Marcar como resuelto"}
              </button>

            </div>
          )}

        </section>

      ) : (

        <>

          {/* Formulario exclusivo del usuario */}
          {!esTecnico && (
            <form
              onSubmit={crearTicket}
              aria-labelledby="titulo-crear-ticket"
              aria-busy={procesando}
              className="bg-white rounded-xl shadow p-6 mb-10"
            >

              <h2
                id="titulo-crear-ticket"
                className="text-xl font-bold mb-6"
              >
                Crear nuevo ticket
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="md:col-span-2">
                  <label
                    htmlFor="asunto-ticket"
                    className="block text-sm font-medium mb-2"
                  >
                    Asunto
                  </label>

                  <input
                    id="asunto-ticket"
                    type="text"
                    name="subject"
                    value={formulario.subject}
                    onChange={manejarCambio}
                    required
                    placeholder="Ej. No tengo conexión a Internet"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="categoria-ticket"
                    className="block text-sm font-medium mb-2"
                  >
                    Categoría
                  </label>

                  <select
                    id="categoria-ticket"
                    name="category"
                    value={formulario.category}
                    onChange={manejarCambio}
                    className="w-full border rounded-lg p-3"
                  >
                    <option value="Redes">Redes</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>
                    <option value="Accesos">Accesos</option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="prioridad-ticket"
                    className="block text-sm font-medium mb-2"
                  >
                    Prioridad
                  </label>

                  <select
                    id="prioridad-ticket"
                    name="priority"
                    value={formulario.priority}
                    onChange={manejarCambio}
                    className="w-full border rounded-lg p-3"
                  >
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                    <option value="critica">Crítica</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="descripcion-ticket"
                    className="block text-sm font-medium mb-2"
                  >
                    Descripción del problema
                  </label>

                  <textarea
                    id="descripcion-ticket"
                    name="description"
                    value={formulario.description}
                    onChange={manejarCambio}
                    required
                    rows={4}
                    placeholder="Describe detalladamente el problema..."
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              <button
                type="submit"
                disabled={procesando}
                className="mt-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {procesando ? "Creando ticket..." : "Crear ticket"}
              </button>

            </form>
          )}

          {/* Listado de tickets */}
          <section
            className="bg-white rounded-xl shadow p-6"
            aria-labelledby="titulo-listado-tickets"
            aria-busy={cargando}
          >

            <h2
              id="titulo-listado-tickets"
              className="text-xl font-bold mb-5"
            >
              {esTecnico ? "Tickets registrados" : "Mis solicitudes"}
            </h2>

            <label
              htmlFor="buscar-ticket"
              className="block text-sm font-medium mb-2"
            >
              Buscar ticket por número o asunto
            </label>

            <input
              id="buscar-ticket"
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Ej. NW-2026-00001"
              className="w-full border rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p
              className="text-sm text-gray-500 mb-4"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {busqueda.trim() && !cargando
                ? `${ticketsFiltrados.length} ticket(s) encontrado(s).`
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
                <p className="text-4xl mb-3" aria-hidden="true">
                  🎫
                </p>

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
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700"
                        aria-label={`Estado: ${nombreEstado(ticket.status)}`}
                      >
                        {nombreEstado(ticket.status)}
                      </span>

                      <button
                        type="button"
                        onClick={() => abrirTicket(ticket)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Ver ticket {ticket.ticket_number}
                      </button>

                    </div>

                  </article>

                ))}

              </div>

            )}

          </section>

        </>

      )}

    </div>
  );
}

export default Tickets;
