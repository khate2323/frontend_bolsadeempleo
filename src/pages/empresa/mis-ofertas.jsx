import { useEffect, useState } from 'react';
import '../../styles/mis-ofertas.css';
import { apiService } from '../../services/api.service';
import { Link } from 'react-router-dom';

export default function MisOfertasPage() {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        const getAllOfferts = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'))
                if (user) {
                    const respuesta = await apiService.get(`/offerts/get-all-company?companyId=${user.id}`);
                    if (respuesta.status === 200) {
                        setPublicaciones(respuesta.data.data);
                    }
                }

            } catch (error) {
                alert(error.response?.data?.message || "Error al cargar las publicaciones");
            }
        };
        getAllOfferts();
    }, []);

    return (
        <div className="publicaciones-container">
            <h2>📢 Mis Publicaciones</h2>
            {publicaciones.length === 0 ? (
                <p className="no-publicaciones">No tienes ofertas publicadas aún.</p>
            ) : (
                publicaciones.map(pub => (
                    <div key={pub.id} className="card-publicacion">
                        <div className="info">
                            <h3>{pub.title}</h3>
                            <p><strong>📍 Ubicación:</strong> {pub.location}</p>
                            <p><strong>📋 Contrato:</strong> {pub.employment_type}</p>
                            <p><strong>🕒 Jornada:</strong> {pub.modality}</p>
                            <p><strong>💰 Salario:</strong> {pub.currency} ${pub.salary_min.toLocaleString()} - ${pub.salary_max.toLocaleString()}</p>
                            <span className={`estado ${pub.is_active ? 'activa' : 'inactiva'}`}>
                                {pub.is_active ? '✅ Activa' : '⛔ Inactiva'}
                            </span>
                        </div>
                        <div className="acciones">
                            <Link to={`/vacantes/${pub.id}`} className="ver btn-action">👁 Ver</Link>
                            <Link className="editar btn-action">✏️ Editar</Link>
                            <Link className="eliminar btn-action">🗑 Eliminar</Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
