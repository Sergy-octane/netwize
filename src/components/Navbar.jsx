
function Navbar() {
  return (
    <nav
      aria-label="Barra superior de NetWize"
      className="bg-blue-700 text-white flex justify-between items-center px-6 py-4 shadow"
    >
      <h1
        title="NetWize: plataforma de soporte técnico de nivel 1."
        className="text-2xl font-bold transition-transform duration-200 hover:scale-105"
      >
        NetWize
      </h1>

      <p
        title="Soporte de tecnología de primer nivel."
        className="text-sm"
      >
        Soporte IT N1
      </p>
    </nav>
  );
}

export default Navbar;
