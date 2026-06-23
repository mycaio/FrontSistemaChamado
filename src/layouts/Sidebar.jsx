import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname.startsWith(path);
  }

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-8">Help Desk</h1>

      <nav className="flex flex-col gap-3">
        <Link
          to="/dashboard"
          className={`p-3 rounded ${
            isActive("/dashboard") ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/chamados"
          className={`p-3 rounded ${
            isActive("/chamados") ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          Chamados
        </Link>

        <Link
          to="/usuarios"
          className={`p-3 rounded ${
            isActive("/usuarios") ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          Usuários
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
