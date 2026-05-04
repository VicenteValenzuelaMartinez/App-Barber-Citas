import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function MicrosoftLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="9" height="9" fill="#F25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
      <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
      <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
    </svg>
  );
}

export default function Login() {
  const { user, loading, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (!loading && user) {
      navigate(from, { replace: true });
    }
  }, [user, loading, from, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 60% 0%, rgba(234,179,8,0.08) 0%, transparent 60%)",
      }}
    >
      {/* Card */}
      <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-4 shadow-lg shadow-yellow-400/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#18181b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" />
              <line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
          </div>
          <h1 className="text-white text-2xl font-bold tracking-tight">Barbería</h1>
          <p className="text-zinc-400 text-sm mt-1">Inicia sesión para agendar tu cita</p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-zinc-700" />
          <span className="text-zinc-500 text-xs uppercase tracking-widest">Acceso</span>
          <div className="h-px flex-1 bg-zinc-700" />
        </div>

        <div className="flex flex-col gap-3">
  {/* Microsoft */}
  <button
    onClick={() => window.location.href = `/.auth/login/aad?post_login_redirect_uri=${from}`}
    className="w-full flex items-center justify-center gap-3 bg-white hover:bg-zinc-100 text-zinc-900 font-semibold text-sm py-3 px-4 rounded-xl transition-all shadow-md"
  >
    <MicrosoftLogo />
    Continuar con Microsoft
  </button>

  <button
    onClick={() => window.location.href = `/.auth/login/google?post_login_redirect_uri=${from}`}
    className="w-full flex items-center justify-center gap-3 bg-white hover:bg-zinc-100 text-zinc-900 font-semibold text-sm py-3 px-4 rounded-xl transition-all shadow-md"
  >
    Continuar con Google
  </button>
</div>
        <p className="text-zinc-500 text-xs text-center mt-6 leading-relaxed">
          Solo usamos tu cuenta para identificarte.
          <br />
          No compartimos tu información.
        </p>
      </div>

      <p className="text-zinc-600 text-xs mt-8">
        © {new Date().getFullYear()} Barbería · Todos los derechos reservados
      </p>
    </div>
  );
}