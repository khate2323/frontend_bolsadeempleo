import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/layout.css";
import { usePermissions } from "../context/permissions.context";
import { useEffect } from "react";

export function Layout() {
  const location = useLocation();
  const { isCompany, isGraduated, isAdmin } = usePermissions();

  return (
    <div>
      {/* Header superior */}
      <header className="header">
        <div className="header-left">
          <button className="menu-button">☰</button>
          <span>
            Campus Unimayor
            <br />
            Sistema de egresados
          </span>
        </div>
        <div className="header-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Usuario"
            width={32}
            height={32}
            style={{
              borderRadius: "50%",
              backgroundColor: "#e0e0e0",
              padding: "4px",
            }}
          />
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <Link
          to="/home-empresa"
          className={location.pathname === "/home-empresa" ? "active" : ""}
        >
          🏠 Mi área
        </Link>
        {
          isCompany && (
            <Link
              to="/publicar-vacantes"
              className={location.pathname === "/publicar-vacantes" ? "active" : ""}
            >
              📤 Publicar vacantes
            </Link>
          )
        }

        {
          isCompany && (
            <Link
              to="/revisar-publicaciones"
              className={
                location.pathname === "/revisar-publicaciones" ? "active" : ""
              }
            >
              📄 Revisar publicaciones
            </Link>
          )
        }

        {
          isGraduated && (
            <Link
              to="/hoja-de-vida"
              className={
                location.pathname === "/hoja-de-vida" ? "active" : ""
              }
            >
              🧾 Hoja de vida
            </Link>
          )
        }

        {
          isGraduated && (
            <Link
              to="/mis-postulaciones"
              className={
                location.pathname === "/mis-postulaciones" ? "active" : ""
              }
            >
              📌 Mis postulaciones
            </Link>
          )
        }

        <Link
          to="/visualizar-vacantes"
          className={
            location.pathname === "/visualizar-vacantes" ? "active" : ""
          }
        >
          💼 Visualizar vacantes
        </Link>


      </nav>

      {/* Contenido dinámico */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
