import { Link, Outlet, useLocation } from "react-router-dom";
import { usePermissions } from "../context/permissions.context";
import { useState, useEffect, useRef } from "react";
import "../styles/layout.css";

export function Layout() {
  const location = useLocation();
  const { isCompany, isGraduated, isAdmin } = usePermissions();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="layout-container">
      {/* Header */}
      <header className="layout-header">
        <div className="layout-header-left">
          <button className="menu-icon">☰</button>
          <div className="brand">
            <strong>Campus Unimayor</strong>
            <small>Sistema de Egresados</small>
          </div>
        </div>
        <div className="layout-header-right" ref={menuRef}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Avatar"
            className="avatar"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="menu-dropdown">
              {isGraduated && (
                <>
                  <Link to="/hoja-de-vida" className={location.pathname === "/hoja-de-vida" ? "active" : ""} onClick={() => setMenuOpen(false)}>🧾 Hoja de vida</Link>
                  <Link to="/mis-postulaciones" className={location.pathname === "/mis-postulaciones" ? "active" : ""} onClick={() => setMenuOpen(false)}>📌 Mis postulaciones</Link>
                </>
              )}
              <Link to="/configuracion" onClick={() => setMenuOpen(false)}>⚙️ Configuración</Link>
              <Link to="/" onClick={() => setMenuOpen(false)}>🚪 Cerrar sesión</Link>
            </div>
          )}
        </div>
      </header>

      {/* Navbar */}
      <nav className="layout-navbar">

        {isCompany && (
          <>
            <Link to="/home-empresa" className={location.pathname === "/home-empresa" ? "active" : ""}>
              🏠 Mi área
            </Link>
            <Link to="/publicar-vacantes" className={location.pathname === "/publicar-vacantes" ? "active" : ""}>
              📤 Publicar vacantes
            </Link>
            <Link to="/revisar-publicaciones" className={location.pathname === "/revisar-publicaciones" ? "active" : ""}>
              📄 Revisar publicaciones
            </Link>
          </>
        )}
        {isGraduated && (
          <>
            <Link to="/home-egresado" className={location.pathname === "/home-egresado" ? "active" : ""}>
              🏠 Mi área
            </Link>
            <Link to="/hoja-de-vida" className={location.pathname === "/hoja-de-vida" ? "active" : ""} onClick={() => setMenuOpen(false)}>🧾 Hoja de vida</Link>
            <Link to="/mis-postulaciones" className={location.pathname === "/mis-postulaciones" ? "active" : ""} onClick={() => setMenuOpen(false)}>📌 Mis postulaciones</Link>
            <Link to="/visualizar-vacantes" className={location.pathname === "/visualizar-vacantes" ? "active" : ""}>
              💼 Vacantes
            </Link>
          </>
        )}
      </nav>

      {/* Contenido principal */}
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  );
}
