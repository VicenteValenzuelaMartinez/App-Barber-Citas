import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/.auth/me")
      .then((res) => res.json())
      .then((data) => {
        const principal = data?.clientPrincipal;
        setUser(principal ?? null);
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = () => {
    const returnUrl = window.location.pathname;
    window.location.href = `/.auth/login/aad?post_login_redirect_uri=${returnUrl}`;
  };

  const logout = () => {
    window.location.href = "/.auth/logout?post_logout_redirect_uri=/";
  };

  return { user, loading, login, logout };
}