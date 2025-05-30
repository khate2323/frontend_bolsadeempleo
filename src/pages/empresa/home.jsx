import { Link } from 'react-router-dom';
import '../../styles/homeEmpresa.css';

export default function HomePage() {
    const empresa = {
        nombre: 'Tech Solutions S.A.S',
        area: 'Tecnología e Innovación',
        vacantesActivas: 3,
        postulacionesRecibidas: 57,
    };

    const ultimasVacantes = [
        { titulo: 'Desarrollador Frontend', fecha: '28/05/2025' },
        { titulo: 'Diseñador UX/UI', fecha: '22/05/2025' },
        { titulo: 'Tester QA', fecha: '19/05/2025' },
    ];

    return (
        <div className="homepage-container">
            <h1 className="homepage-title">👋 Bienvenido, {empresa.nombre}</h1>
            <p className="homepage-subtitle">
                Área registrada: <strong>{empresa.area}</strong>
            </p>

            <div className="cards-container">
                <div className="info-card blue">
                    <h2>📤 Vacantes activas</h2>
                    <p className="info-number">{empresa.vacantesActivas}</p>
                </div>

                <div className="info-card green">
                    <h2>📥 Postulaciones recibidas</h2>
                    <p className="info-number">{empresa.postulacionesRecibidas}</p>
                </div>
            </div>

            <div className="homepage-actions">
                <Link to="/publicar-vacantes" className="btn primary">
                    ➕ Publicar nueva vacante
                </Link>
                <Link to="/revisar-publicaciones" className="btn secondary">
                    📄 Ver publicaciones
                </Link>
            </div>

            <div className="section">
                <h3 className="section-title">🕒 Últimas vacantes publicadas</h3>
                <ul className="vacantes-list">
                    {ultimasVacantes.map((vacante, i) => (
                        <li key={i} className="vacante-item">
                            <span>{vacante.titulo}</span>
                            <span className="fecha">{vacante.fecha}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="section alert">
                <h3 className="section-title">📢 Recordatorio</h3>
                <p>
                    No olvides revisar las postulaciones pendientes antes de finalizar el mes.
                </p>
            </div>

            <div className="section support">
                <p>¿Necesitas ayuda? <Link to="/contacto">Contáctanos aquí</Link>.</p>
            </div>
        </div>
    );
}
