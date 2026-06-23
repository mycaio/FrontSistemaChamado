import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Bell, Search, UserCircle2 } from "lucide-react";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/chamados": "Chamados",
  "/chamados/criar": "Criar Chamado",
  "/usuarios": "Usuários",
  "/usuarios/criar": "Criar Usuário",
};

function Navbar() {
  const { pathname } = useLocation();

  const pageTitle = useMemo(() => {
    if (pathname.startsWith("/chamados/editar")) return "Editar Chamado";
    if (pathname.startsWith("/usuarios/editar")) return "Editar Usuário";
    return pageTitles[pathname] ?? "Painel";
  }, [pathname]);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
              Sistema de Chamados
            </p>
            <h1 className="text-2xl font-semibold text-slate-900">
              {pageTitle}
            </h1>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative hidden sm:block">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                <Search size={16} />
              </span>
              <input
                type="search"
                placeholder="Buscar..."
                className="h-11 w-full min-w-[220px] rounded-full border border-slate-200 bg-slate-50 px-11 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50"
            >
              <Bell size={20} />
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
            >
              <UserCircle2 size={20} />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
