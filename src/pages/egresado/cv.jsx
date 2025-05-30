import { useEffect, useState } from "react";
import "../../styles/cv.css";
import { apiService } from "../../services/api.service";

function HojaDeVida() {
  const [editMode, setEditMode] = useState(false);
  const [perfil, setPerfil] = useState({
    nombre: "Guillermo Samboni",
    ciudad: "Popayán",
    email: "gsamrua7@gmail.com",
    telefono: "+57-3215100253",
    descripcion: "Soy una persona apasionada por el desarrollo de software y sistemas...",
    titulo: "Desarrollador de software",
    progreso: "87%",
    experiencias: [],
    estudios: [],
    idiomas: [],
  });

  const [sessionInfo, setSessionInfo] = useState({
    full_name: "",
    identification: "",
    phone: "",
    email: ""
  })

  const [cvInfo, setCvInfo] = useState({
    id: "",
    user_id: "",
    titulo: "",
    descripcion: "",
    foto_url: "",
    correo: "",
    telefono: "",
    sitio_web: "",
    estado_documento: "",
    fecha_actualizacion: "",
    direccion: "",
  })
  const [cvExperiences, setCvExperiences] = useState([{
    id: "",
    cv_id: "",
    cargo: "",
    empresa: "",
    descripcion: "",
    fecha_inicio: "",
    fecha_fin: ""
  }])

  const [nuevaExperiencia, setNuevaExperiencia] = useState({ cargo: "", empresa: "", descripcion: "" });
  const [nuevoEstudio, setNuevoEstudio] = useState({ titulo: "", institucion: "", fecha: "" });
  const [nuevoIdioma, setNuevoIdioma] = useState({ lengua: "", nivel: "" });

  const idiomasDisponibles = ["Español", "Inglés", "Francés", "Alemán", "Portugués"];
  const niveles = ["Básico", "Intermedio", "Avanzado", "Nativo"];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setSessionInfo({
      full_name: user.full_name,
      identification: user.identification,
      phone: user.phone,
      email: user.email,
    });

    const fetchData = async () => {
      try {
        const cvResponse = await apiService.get(`/cvs/get-cv-egresado/${user.id}`);
        const cv = cvResponse.data.data;
        setCvInfo(cv);

        const experiencesResponse = await apiService.get(`/cvs/get-cv-experiences/${cv.id}`);
        setCvExperiences(experiencesResponse.data.data);
      } catch (error) {
        console.error('Error fetching CV or experiences', error);
      }
    };

    fetchData();
  }, []);


  const createCvExperience = async () => {
    const response = await apiService.post(`/cvs/create-cv-experience`, {...nuevaExperiencia, cv_id:cvInfo.id});

  }

  const handleAgregarExperiencia = () => {
    setPerfil({
      ...perfil,
      experiencias: [...perfil.experiencias, nuevaExperiencia],
    });
    setNuevaExperiencia({ cargo: "", empresa: "", descripcion: "" });
  };

  const handleAgregarEstudio = () => {
    setPerfil({
      ...perfil,
      estudios: [...perfil.estudios, nuevoEstudio],
    });
    setNuevoEstudio({ titulo: "", institucion: "", fecha: "" });
  };

  const handleAgregarIdioma = () => {
    setPerfil({
      ...perfil,
      idiomas: [...perfil.idiomas, nuevoIdioma],
    });
    setNuevoIdioma({ lengua: "", nivel: "" });
  };

  const handleEliminar = (tipo, index) => {
    const copia = [...perfil[tipo]];
    copia.splice(index, 1);
    setPerfil({ ...perfil, [tipo]: copia });
  };

  return (
    <main className="contenedor">
      <button onClick={() => setEditMode(!editMode)} className="btn-editar">
        {editMode ? "Guardar cambios" : "Editar perfil"}
      </button>

      <section className="perfil">
        <div className="foto-nombre">
          <img src="/foto.jpg" alt="Foto de perfil" />
          <div>
            <h1>{sessionInfo.full_name}</h1>
            <p>{sessionInfo.identification}</p>
            <div className="contacto">
              <p><span className="icono">📧</span>{sessionInfo.email}</p>
              <p><span className="icono">📞</span>{sessionInfo.phone}</p>
            </div>
          </div>
        </div>
        <h2 editMode>{cvInfo.titulo || 'Titulo Profesional'}</h2>
        {editMode ? (
          <textarea
            className="textarea-descripcion"
            value={cvInfo.descripcion}
            onChange={(e) => setCvInfo({ ...cvInfo, descripcion: e.target.value })}
          />
        ) : (
          <p className="descripcion">{perfil.descripcion}</p>
        )}
      </section>

      <section className="experiencia">
        <h2>Experiencia Profesional</h2>
        {cvExperiences.map((exp, index) => (
          <div className="item" key={index}>
            <h3>{exp.cargo}</h3>
            <p className="institucion">{exp.empresa}</p>
            <p>{exp.descripcion}</p>
            {editMode && <button className="btn-eliminar" onClick={() => handleEliminar("experiencias", index)}>Eliminar</button>}
          </div>
        ))}
        {editMode && (
          <div className="formulario">
            <input placeholder="Cargo" value={nuevaExperiencia.cargo} onChange={(e) => setNuevaExperiencia({ ...nuevaExperiencia, cargo: e.target.value })} />
            <input placeholder="Empresa" value={nuevaExperiencia.empresa} onChange={(e) => setNuevaExperiencia({ ...nuevaExperiencia, empresa: e.target.value })} />
            <textarea placeholder="Descripción" value={nuevaExperiencia.descripcion} onChange={(e) => setNuevaExperiencia({ ...nuevaExperiencia, descripcion: e.target.value })} />
            <button onClick={createCvExperience}>Agregar experiencia</button>
          </div>
        )}
      </section>

      <section className="estudios">
        <h2>Formación Académica</h2>
        {perfil.estudios.map((edu, index) => (
          <div className="item" key={index}>
            <h3>{edu.titulo}</h3>
            <p className="institucion">{edu.institucion}</p>
            <p>{edu.fecha}</p>
            {editMode && <button className="btn-eliminar" onClick={() => handleEliminar("estudios", index)}>Eliminar</button>}
          </div>
        ))}
        {editMode && (
          <div className="formulario">
            <input placeholder="Título" value={nuevoEstudio.titulo} onChange={(e) => setNuevoEstudio({ ...nuevoEstudio, titulo: e.target.value })} />
            <input placeholder="Institución" value={nuevoEstudio.institucion} onChange={(e) => setNuevoEstudio({ ...nuevoEstudio, institucion: e.target.value })} />
            <input placeholder="Fecha" value={nuevoEstudio.fecha} onChange={(e) => setNuevoEstudio({ ...nuevoEstudio, fecha: e.target.value })} />
            <button onClick={handleAgregarEstudio}>Agregar estudio</button>
          </div>
        )}
      </section>

      <section className="idiomas">
        <h2>Idiomas</h2>
        <ul>
          {perfil.idiomas.map((idioma, index) => (
            <li key={index}>
              {idioma.lengua} - {idioma.nivel}
              {editMode && <button className="btn-eliminar" onClick={() => handleEliminar("idiomas", index)}>Eliminar</button>}
            </li>
          ))}
        </ul>
        {editMode && (
          <div className="formulario">
            <select value={nuevoIdioma.lengua} onChange={(e) => setNuevoIdioma({ ...nuevoIdioma, lengua: e.target.value })}>
              <option value="">Selecciona un idioma</option>
              {idiomasDisponibles.map((idioma) => (
                <option key={idioma} value={idioma}>{idioma}</option>
              ))}
            </select>
            <select value={nuevoIdioma.nivel} onChange={(e) => setNuevoIdioma({ ...nuevoIdioma, nivel: e.target.value })}>
              <option value="">Nivel</option>
              {niveles.map((nivel) => (
                <option key={nivel} value={nivel}>{nivel}</option>
              ))}
            </select>
            <button onClick={handleAgregarIdioma}>Agregar idioma</button>
          </div>
        )}
      </section>


    </main>
  );
}

export default HojaDeVida;
