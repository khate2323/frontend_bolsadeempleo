import { useEffect, useState } from 'react';
import('../../styles/empresa.css')
import { apiService } from '../../services/api.service';

export default function MisOfertasPage() {

    const [publicaciones, setPublicaciones] = useState([])


    useEffect(() => {
        const getAllOfferts = async () => {
            try {
                const respuesta = await apiService.get('/offerts/get-all')
                if (respuesta.status === 200) {
                    console.log("respuesta=>", respuesta.data.data);
                    setPublicaciones(respuesta.data.data)
                }
            } catch (error) {
                alert(error.response.data.message)
            }
        }
        getAllOfferts()
    }, [])





    return (
        <div className="publicaciones-container">
            <h2>Mis Publicaciones</h2>
            {publicaciones.map(pub => (
                <div key={pub.id} className="card-publicacion">
                    <div className="info">
                        <h3>{pub.title}</h3>
                        <p><strong>Ubicación:</strong> {pub.location}</p>
                        <p><strong>Contrato:</strong> {pub.employment_type}</p>
                        <p><strong>Jornada:</strong> {pub.modality}</p>
                        <p><strong>Salario:</strong> {pub.currency} ${pub.salary_min.toLocaleString()} - ${pub.salary_max.toLocaleString()}</p>
                        <p className={`estado ${pub.is_active}`}>Estado: {pub.is_active}</p>
                    </div>
                    <div className="acciones">
                        <button className="ver">👁 Ver</button>
                        <button className="editar">✏️ Editar</button>
                        <button className="eliminar">🗑 Eliminar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}