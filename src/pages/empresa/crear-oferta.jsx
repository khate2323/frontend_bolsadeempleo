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
  <h2>📄 Publicación de Vacante</h2>

  <div className="form-field">
    <label>Título del cargo</label>
    <div className="input-wrapper">
      <input type="text" {...register('title')} />
      <span className="icon">💼</span>
    </div>
  </div>

  <div className="form-field">
    <label>Número de vacantes</label>
    <div className="input-wrapper">
      <input type="number" {...register('vacancies')} />
      <span className="icon">👥</span>
    </div>
  </div>

  <div className="form-row">
    <div className="form-field">
      <label>Tipo de contrato</label>
      <input type="text" {...register('employment_type')} />
    </div>
    <div className="form-field">
      <label>Jornada laboral</label>
      <input type="text" {...register('modality')} />
    </div>
  </div>

  <div className="form-field">
    <label>Ubicación del trabajo</label>
    <input type="text" {...register('location')} />
  </div>

  <div className="form-field">
    <label>Descripción</label>
    <textarea rows="3" {...register('description')} />
  </div>

  <div className="form-row">
    <div className="form-field">
      <label>Salario mínimo</label>
      <input type="number" {...register('salary_min')} />
    </div>
    <div className="form-field">
      <label>Salario máximo</label>
      <input type="number" {...register('salary_max')} />
    </div>
    <div className="form-field">
      <label>Moneda</label>
      <input type="text" {...register('currency')} />
    </div>
  </div>

  <div className="form-field">
    <label>Requisitos</label>
    <textarea rows="2" {...register('requirements')} />
  </div>

  <div className="form-field">
    <label>Responsabilidades</label>
    <textarea rows="2" {...register('responsibilities')} />
  </div>

  <button type="submit">🚀 Publicar Oferta</button>
</form>

        </div>
    )
}