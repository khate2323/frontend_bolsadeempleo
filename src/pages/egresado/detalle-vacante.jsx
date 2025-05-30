import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/VacanteDetallePage.css";
import { usePermissions } from "../../context/permissions.context";
import { apiService } from "../../services/api.service";

export default function DetalleVacante() {
  const { id } = useParams();
  const [vacante, setVacante] = useState(null);
  const { isCompany, isGraduated, isAdmin } = usePermissions();


  useEffect(() => {
    const fetch = async () => {
      const response = await apiService.get(`/offerts/get-single/${id}`)
      console.log("response", response);

    }

    fetch()
    
    setVacante({
      id,
      titulo: "Desarrollador Frontend",
      empresa: "Tech Solutions S.A.S.",
      ubicacion: "Cali, Valle",
      modalidad: "Presencial",
      tipoContrato: "Término indefinido",
      salario: "$3.000.000 - $4.000.000",
      descripcion: "Buscamos un desarrollador frontend con experiencia en React, manejo de APIs REST, diseño responsive y buenas prácticas de desarrollo. Debe tener habilidades de trabajo en equipo y comunicación efectiva.",
      requisitos: [
        "Experiencia mínima de 2 años en desarrollo frontend",
        "Dominio de React.js y JavaScript moderno",
        "Conocimiento en consumo de APIs REST",
        "Manejo de Git y metodologías ágiles",
      ],
      fechaPublicacion: "2025-05-20",
    });
  }, [id]);

  if (!vacante) return <p>Cargando vacante...</p>;

  return (
    <div className="detalle-vacante">
      <h1>{vacante.titulo}</h1>
      <div className="subinfo">
        <span>🏢 {vacante.empresa}</span>
        <span>📍 {vacante.ubicacion}</span>
        <span>💼 {vacante.modalidad}</span>
      </div>

      <div className="info-principal">
        <div className="datos">
          <p><strong>Tipo de contrato:</strong> {vacante.tipoContrato}</p>
          <p><strong>Salario:</strong> {vacante.salario}</p>
          <p><strong>Publicado el:</strong> {new Date(vacante.fechaPublicacion).toLocaleDateString()}</p>
        </div>

        <div className="acciones">
          {isGraduated && (
            <button className="btn-postularse">Postularme</button>
          )}
          {isCompany && (
            <button className="btn-ver-postulantes">👀 Ver postulantes</button>
          )}
        </div>

      </div>

      <div className="descripcion">
        <h2>Descripción del cargo</h2>
        <p>{vacante.descripcion}</p>

        <h3>Requisitos</h3>
        <ul>
          {vacante.requisitos.map((req, idx) => (
            <li key={idx}>✅ {req}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
