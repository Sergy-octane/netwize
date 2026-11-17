
import { useState } from "react";

function obtenerTickets() {
  try {
    const guardados = localStorage.getItem("tickets");
    return guardados ? JSON.parse(guardados) : [];
  } catch {
    return [];
  }
}

function Tickets() {
  const [tickets, setTickets] = useState(obtenerTickets);

  const [ticketSeleccionado, setTicketSeleccionado] = useState(null);
  const [nuevaObservacion, setNuevaObservacion] = useState("");

  const [formulario, setFormulario] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    problema: "",
    procedimientos: "",
  });

  const guardarTickets = (nuevosTickets) => {
    setTickets(nuevosTickets);
    localStorage.setItem("tickets", JSON.stringify(nuevosTickets));
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const crearTicket = (e) => {
    e.preventDefault();

    const nuevoTicket = {
      id: `TK-${Date.now().toString().slice(-6)}`,
      ...formulario,
      estado: "Abierto",
      fecha: new Date().toLocaleString("es-CO"),
      observaciones: [],
    };

    guardarTickets([nuevoTicket, ...tickets]);

    setFormulario({
      nombre: "",
      telefono: "",
      correo: "",
      problema: "",
      procedimientos: "",
    });
  };

  const cambiarEstado = (id) => {
    const nuevosTickets = tickets.map((ticket) =>
      ticket.id === id
        ? {
            ...ticket,
            estado: ticket.estado === "Abierto" ? "Resuelto" : "Abierto",
          }
        : ticket
    );

    guardarTickets(nuevosTickets);
    setTicketSeleccionado(
      nuevosTickets.find((ticket) => ticket.id === id)
    );
  };

  const agregarObservacion = (id) => {
    if (!nuevaObservacion.trim()) return;

    const nuevosTickets = tickets.map((ticket) =>
      ticket.id === id
        ? {
            ...ticket,
            observaciones: [
              ...ticket.observaciones,
              {
                texto: nuevaObservacion.trim(),
                fecha: new Date().toLocaleString("es-CO"),
              },
            ],
          }
        : ticket
    );

    guardarTickets(nuevosTickets);
    setTicketSeleccionado(
      nuevosTickets.find((ticket) => ticket.id === id)
    );
    setNuevaObservacion("");
  };

  const abiertos = tickets.filter(
    (ticket) => ticket.estado === "Abierto"
  ).length;

  const resueltos = tickets.filter(
    (ticket) => ticket.estado === "Resuelto"
  ).length;

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-2">
        Gestión de tickets
      </h1>

      <p className="text-gray-600 mb-8">
        Registra, documenta y realiza seguimiento a las solicitudes
        de soporte técnico.
      </p>

      {/* Resumen de tickets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Tickets abiertos</p>
          <p className="text-4xl font-bold text-yellow-600 mt-2">
            {abiertos}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Tickets resueltos</p>
          <p className="text-4xl font-bold text-green-600 mt-2">
            {resueltos}
          </p>
        </div>

      </div>

      {/* Detalle del ticket seleccionado */}
      {ticketSeleccionado ? (

        <div className="bg-white rounded-xl shadow p-6">

          <button
            onClick={() => setTicketSeleccionado(null)}
            className="text-blue-600 hover:text-blue-800 mb-6"
          >
            ← Volver a los tickets
          </button>

          <div className="flex flex-wrap justify-between items-center gap-3 mb-6">

            <h2 className="text-2xl font-bold">
              {ticketSeleccionado.id}
            </h2>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                ticketSeleccionado.estado === "Abierto"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {ticketSeleccionado.estado}
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <h3 className="font-bold mb-3">Datos de contacto</h3>

              <p className="text-gray-600 mb-2">
                <strong>Nombre:</strong> {ticketSeleccionado.nombre}
              </p>

              <p className="text-gray-600 mb-2">
                <strong>Teléfono:</strong> {ticketSeleccionado.telefono}
              </p>

              <p className="text-gray-600 break-all">
                <strong>Correo:</strong> {ticketSeleccionado.correo}
              </p>

              <p className="text-sm text-gray-400 mt-4">
                Creado: {ticketSeleccionado.fecha}
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Problema reportado</h3>

              <p className="text-gray-600 whitespace-pre-wrap">
                {ticketSeleccionado.problema}
              </p>
            </div>

          </div>

          <div className="mt-8">
            <h3 className="font-bold mb-3">
              Procedimientos realizados
            </h3>

            <div className="bg-gray-50 rounded-lg p-4 text-gray-700 whitespace-pre-wrap">
              {ticketSeleccionado.procedimientos}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold mb-3">
              Seguimiento y observaciones
            </h3>

            {ticketSeleccionado.observaciones.length === 0 ? (
              <p className="text-gray-500 text-sm mb-4">
                Todavía no hay observaciones registradas.
              </p>
            ) : (
              <div className="space-y-3 mb-5">

                {ticketSeleccionado.observaciones.map(
                  (observacion, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <p className="text-gray-700 whitespace-pre-wrap">
                        {observacion.texto}
                      </p>

                      <p className="text-xs text-gray-400 mt-2">
                        {observacion.fecha}
                      </p>
                    </div>
                  )
                )}

              </div>
            )}

            <textarea
              value={nuevaObservacion}
              onChange={(e) => setNuevaObservacion(e.target.value)}
              placeholder="Escribe una nueva observación o procedimiento..."
              rows={3}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={() => agregarObservacion(ticketSeleccionado.id)}
              className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              Agregar observación
            </button>
          </div>

          <div className="mt-8 border-t pt-6">

            <button
              onClick={() => cambiarEstado(ticketSeleccionado.id)}
              className={`px-5 py-3 rounded-lg text-white font-medium ${
                ticketSeleccionado.estado === "Abierto"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-yellow-600 hover:bg-yellow-700"
              }`}
            >
              {ticketSeleccionado.estado === "Abierto"
                ? "Marcar como resuelto"
                : "Reabrir ticket"}
            </button>

          </div>

        </div>

      ) : (

        <>

          {/* Formulario para crear ticket */}
          <form
            onSubmit={crearTicket}
            className="bg-white rounded-xl shadow p-6 mb-10"
          >

            <h2 className="text-xl font-bold mb-6">
              Crear nuevo ticket
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Nombre completo
                </label>

                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  required
                  placeholder="Nombre de la persona"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Número de teléfono
                </label>

                <input
                  type="tel"
                  name="telefono"
                  value={formulario.telefono}
                  onChange={manejarCambio}
                  required
                  placeholder="Ej. 3001234567"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  name="correo"
                  value={formulario.correo}
                  onChange={manejarCambio}
                  required
                  placeholder="correo@ejemplo.com"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Descripción del problema
                </label>

                <textarea
                  name="problema"
                  value={formulario.problema}
                  onChange={manejarCambio}
                  required
                  rows={3}
                  placeholder="Describe el problema reportado..."
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Procedimientos realizados
                </label>

                <textarea
                  name="procedimientos"
                  value={formulario.procedimientos}
                  onChange={manejarCambio}
                  required
                  rows={3}
                  placeholder="Ej. Se realizó ping, se verificó la dirección IP..."
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            <button
              type="submit"
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              Crear ticket
            </button>

          </form>

          {/* Listado de tickets */}
          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-5">
              Tickets registrados
            </h2>

            {tickets.length === 0 ? (

              <div className="text-center py-10">
                <p className="text-4xl mb-3">🎫</p>

                <p className="text-gray-600 font-medium">
                  Todavía no hay tickets registrados.
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Crea tu primer ticket para comenzar.
                </p>
              </div>

            ) : (

              <div className="space-y-4">

                {tickets.map((ticket) => (

                  <div
                    key={ticket.id}
                    className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >

                    <div>
                      <p className="font-bold text-gray-800">
                        {ticket.id} · {ticket.nombre}
                      </p>

                      <p className="text-gray-600 text-sm mt-1">
                        {ticket.problema}
                      </p>

                      <p className="text-xs text-gray-400 mt-2">
                        {ticket.fecha}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          ticket.estado === "Abierto"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {ticket.estado}
                      </span>

                      <button
                        onClick={() => setTicketSeleccionado(ticket)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                      >
                        Ver ticket
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </>

      )}

    </div>
  );
}

export default Tickets;
