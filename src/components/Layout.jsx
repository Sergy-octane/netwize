import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";

function Layout() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-50">
            <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default Layout;