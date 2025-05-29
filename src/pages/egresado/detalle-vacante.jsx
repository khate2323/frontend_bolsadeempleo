import { useParams } from "react-router-dom";
import vacantes from "./visualizar-vacantes";

const DetalleVacante = () => {
  const { id } = useParams();
  const vacante = vacantes.find(v => v.id === id);

  if (!vacante) return <p>Vacante no encontrada.</p>;

  return (
    <div>
      <h2>{vacante.titulo}</h2>
      <p><strong>Empresa:</strong> {vacante.empresa}</p>
      <p><strong>Ubicación:</strong> {vacante.ubicacion}</p>
      <p><strong>Descripción:</strong> {vacante.descripcion}</p>
      <p><strong>Requisitos:</strong> {vacante.requisitos}</p>
    </div>
  );
};

export default DetalleVacante;
