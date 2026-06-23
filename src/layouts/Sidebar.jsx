import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, ClipboardList, Users } from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Chamados",
    path: "/chamados",
    icon: ClipboardList,
  },
  {
    label: "Usuários",
    path: "/usuarios",
    icon: Users,
  },
];

function Sidebar() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname.startsWith(path);
  }

  return (
    <aside className="hidden lg:flex lg:w-72 flex-col border-r border-slate-200 bg-white shadow-sm">
      <div className="flex h-full flex-col px-6 py-8">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-500/20">
            <LayoutDashboard size={24} />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Help Desk
            </p>
            <h1 className="text-xl font-semibold text-slate-900">
              Painel Admin
            </h1>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-sky-600 text-white shadow"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition group-hover:bg-slate-200 ${active ? "bg-white text-sky-600" : ""}`}
                >
                  <Icon size={18} />
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 shadow-sm">
          <p className="font-semibold text-slate-900">Dica</p>
          <p className="mt-2 leading-relaxed">
            Use o menu para navegar entre os chamados e usuários. O painel
            global mostra métricas importantes.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
