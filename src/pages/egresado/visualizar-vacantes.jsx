import { useState } from "react";
import "../../styles/ListaVacantes.css"

const ListaVacantes = () => {
  const [seleccionada, setSeleccionada] = useState(null);

  const vacantes = [
    {
      id: "1",
      titulo: "Desarrollador Frontend",
      empresa: "Tech S.A.",
      ubicacion: "Popayán",
      descripcion: "Buscamos desarrollador frontend con experiencia en React.",
      requisitos: "HTML, CSS, JavaScript, React."
    },
    {
      id: "2",
      titulo: "Analista de Datos",
      empresa: "Data Corp",
      ubicacion: "Bogotá",
      descripcion: "Análisis de grandes volúmenes de datos.",
      requisitos: "Python, SQL, Power BI."
    }
  ];

  return (
    <div className="divvacantes">
      <h2>Vacantes disponibles</h2>

      {seleccionada ? (
        <div>
          <h3>{seleccionada.titulo}</h3>
          <p><strong>Empresa:</strong> {seleccionada.empresa}</p>
          <p><strong>Ubicación:</strong> {seleccionada.ubicacion}</p>
          <p><strong>Descripción:</strong> {seleccionada.descripcion}</p>
          <p><strong>Requisitos:</strong> {seleccionada.requisitos}</p>
          <button className="buttonvacantes" onClick={() => setSeleccionada(null)}>Volver</button>
        </div>
      ) : (
        <ul>
          {vacantes.map(vac => (
            <li key={vac.id} style={{ marginBottom: "1rem" }}>
              <h3>{vac.titulo}</h3>
              <p>{vac.empresa} - {vac.ubicacion}</p>
              <button className = "buttonvacantes" onClick={() => setSeleccionada(vac)}>Ver detalles</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaVacantes;
