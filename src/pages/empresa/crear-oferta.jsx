import { useForm } from "react-hook-form"
import { apiService } from "../../services/api.service"
import { useNavigate } from "react-router-dom";
import('../../styles/empresa.css')



export default function CrearOfertaPage() {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate();

    const guardar = async (dataFormulario) => {
        try {
            const respuesta = await apiService.post("/offerts/create-offert", dataFormulario)
            console.log("Datos del formulario", dataFormulario);
            if (respuesta.status === 200) {
                alert("Oferta creada con éxito")
                navigate('/revisar-publicaciones')

            }
        } catch (error) {
            console.log(error.response.data);

        }
    }

    return (
        <div className="form-container">
            <h2>Formulario publicación de vacantes</h2>
            <form onSubmit={handleSubmit(guardar)} className="vacante-form">
                <label>
                    Título del cargo:
                    <input type="text" name="title" {...register('title')} />
                    <span className="icon">💼</span>
                </label>

                <label>
                    Número de vacantes:
                    <input type="number" name="vacancies" {...register('vacancies')} />
                    <span className="icon">👥</span>
                </label>

                <label>
                    Tipo de contrato:
                    <input type="text" name="employment_type"  {...register('employment_type')} />
                    <span className="icon">📄</span>
                </label>

                <label>
                    Jornada laboral:
                    <input type="text" name="modality"  {...register('modality')} />
                    <span className="icon">🗓️</span>
                </label>

                <label>
                    Ubicación del trabajo:
                    <input type="text" name="location" {...register('location')} />
                    <span className="icon">📍</span>
                </label>

                <label className="description-label">
                    Descripción:
                    <textarea name="description" rows="3" {...register('description')} />
                </label>

                <label>
                    Salario mínimo:
                    <input type="number" name="salary_min" {...register('salary_min')} />
                </label>

                <label>
                    Salario máximo:
                    <input type="number" name="salary_max" {...register('salary_max')} />
                </label>

                <label>
                    Moneda:
                    <input type="text" name="currency" {...register('currency')} />
                </label>

                <label>
                    Requisitos:
                    <textarea name="requirements" rows="2" {...register('requirements')} />
                </label>

                <label>
                    Responsabilidades:
                    <textarea name="responsibilities" rows="2"  {...register('responsibilities')} />
                </label>

                <button type="submit">Publicar</button>
            </form>
        </div>
    )
}