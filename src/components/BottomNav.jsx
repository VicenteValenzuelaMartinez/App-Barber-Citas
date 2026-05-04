import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { menuItems } from '../data/menuItems';
import { CiUser } from "react-icons/ci";
import { useAuth } from '../hooks/useAuth';

export default function BottomNav() {
  const [openUser, setOpenUser] = useState(false);
  const userRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setOpenUser(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Derive a short display label from the email (part before the @)
  const displayEmail = user?.userDetails ?? null;
  const displayName = displayEmail ? displayEmail.split("@")[0] : null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 text-white border-t border-zinc-800 shadow-md z-50">
      <div className="flex justify-around items-center py-2">

        {menuItems
          .filter(item => item.label !== 'Perfil')
          .map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  setOpenUser(false);
                  navigate(item.path);
                }}
                className="flex flex-col items-center text-xs hover:text-yellow-400 transition"
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </button>
            );
          })
        }

        <div className="relative" ref={userRef}>
          <button
            onClick={() => setOpenUser(!openUser)}
            className="flex flex-col items-center text-xs hover:text-yellow-400 transition"
          >
            <CiUser size={22} />
            <span>Perfil</span>
          </button>

          {openUser && (
            <div className="absolute bottom-14 right-0 bg-white text-black rounded-md shadow-lg w-56 z-50">
              <div className="p-3 border-b">
                <p className="font-semibold">Mi Cuenta</p>
              </div>

              {user ? (
                <>
                  <div className="p-3 flex items-center gap-2">
                    {/* Avatar circle with first letter of username */}
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-zinc-900 font-bold text-sm shrink-0">
                      {displayName?.charAt(0).toUpperCase() ?? "?"}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-medium truncate">{displayName}</p>
                      <p className="text-xs text-gray-500 truncate">{displayEmail}</p>
                    </div>
                  </div>
                  <div
                    className="p-3 border-t text-red-500 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setOpenUser(false);
                      logout();
                    }}
                  >
                    Cerrar Sesión
                  </div>
                </>
              ) : (
                <div
                  className="p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setOpenUser(false);
                    navigate("/login");
                  }}
                >
                  <CiUser size={18} />
                  <p className="text-sm font-medium">Iniciar Sesión</p>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}