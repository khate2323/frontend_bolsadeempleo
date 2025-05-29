import { useEffect, useState } from "react";
import "../../styles/MisPostulacionesPage.css";

export default function MisPostulacionesPage() {
  const [postulaciones, setPostulaciones] = useState([]);

  useEffect(() => {
    setPostulaciones([
      {
        id: 1,
        cargo: "Desarrollador Frontend",
        empresa: "Tech Solutions S.A.S.",
        ubicacion: "Cali, Valle",
        estado: "En revisión",
        fechaPostulacion: "2025-05-22",
        vacanteId: 101,
      },
      {
        id: 2,
        cargo: "Diseñador UI/UX",
        empresa: "DesignPro",
        ubicacion: "Remoto",
        estado: "Rechazada",
        fechaPostulacion: "2025-05-15",
        vacanteId: 102,
      },
    ]);
  }, []);

  return (
    <div className="postulaciones-contenedor">
      <h1 className="titulo">📌 Mis Postulaciones</h1>

      {postulaciones.length === 0 ? (
        <p className="mensaje-vacio">No tienes postulaciones aún.</p>
      ) : (
        <div className="tarjetas">
          {postulaciones.map((p) => (
            <div key={p.id} className="tarjeta">
              <div className="tarjeta-encabezado">
                <h2>{p.cargo}</h2>
                <span className={`estado ${p.estado.replace(" ", "-").toLowerCase()}`}>
                  {p.estado}
                </span>
              </div>
              <p className="empresa">
                <strong>{p.empresa}</strong> | 📍 {p.ubicacion}
              </p>
              <p className="fecha">📅 Postulado el {new Date(p.fechaPostulacion).toLocaleDateString()}</p>

              <div className="acciones">
                <button
                  className="btn-detalles"
                  onClick={() => window.location.href = `/vacantes/${p.vacanteId}`}
                >
                  Ver detalles
                </button>
                {p.estado === "En revisión" && (
                  <button className="btn-cancelar">Cancelar</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}