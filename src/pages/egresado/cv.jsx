import "../../styles/Hojadevida.css"; 

function HojaDeVida() {
  const perfil = {
    nombre: "Guillermo Samboni",
    ciudad: "Popayán",
    email: "gsamrua7@gmail.com",
    telefono: "+57-3215100253",
    descripcion:
      "Soy una persona apasionada por el desarrollo de software y sistemas, con una amplia experiencia en esta área y un enfoque centrado en la calidad humana. Mi trayectoria se ha enfocado en crear soluciones tecnológicas innovadoras que satisfagan las necesidades del cliente y mejoren su experiencia...",
    titulo: "Desarrollador de software",
    progreso: "87%",
    experiencias: [
      {
        cargo: "Instructor informática",
        empresa: "Servicio Nacional de Aprendizaje SENA",
        descripcion:
          "Con una destacada trayectoria como instructor de informática en el SENA...",
      },
    ],
    estudios: [
      {
        titulo: "Universidad / Carrera tecnológica",
        institucion: "SENA",
        fecha: "Abril 2020 - Abril 2022",
      },
    ],
    idiomas: [
      { lengua: "Español", nivel: "Nativo" },
      { lengua: "Inglés", nivel: "Básico" },
    ],
  };

  return (
    <main className="contenedor">
      <section className="perfil">
        <div className="foto-nombre">
          <img src="/foto.jpg" alt="Foto de perfil" />
          <div>
            <h1>{perfil.nombre}</h1>
            <p>{perfil.ciudad}</p>
            <div className="contacto">
              <p>
                <span className="icono">📧</span> {perfil.email}
              </p>
              <p>
                <span className="icono">📞</span> {perfil.telefono}
              </p>
            </div>
          </div>
        </div>
        <h2>{perfil.titulo}</h2>
        <p className="descripcion">{perfil.descripcion}</p>
      </section>

      <section className="experiencia">
        <h2>Mis experiencias profesionales</h2>
        {perfil.experiencias.map((exp) => (
          <div className="item" key={exp.id}>
            <h3>{exp.cargo}</h3>
            <p className="institucion">{exp.empresa}</p>
            <p>{exp.descripcion}</p>
          </div>
        ))}
      </section>

      <section className="estudios">
        <h2>Mis estudios</h2>

        {perfil.estudios.map((edu) => (
          <div className="item" key={edu.id}>
            <h3>{edu.titulo}</h3>
            <p className="institucion">{edu.institucion}</p>
            <p>{edu.fecha}</p>
          </div>
        ))}
      </section>

      <section className="idiomas">
        <h2>Idiomas</h2>
        <ul>
          {perfil.idiomas.map((idioma) => (
            <li key={idioma.id}>
              {idioma.lengua} - {idioma.nivel}
            </li>
          ))}
        </ul>
      </section>

      <footer className="progreso">
        <p>
          Progreso: <span>{perfil.progreso}</span>
        </p>
      </footer>
    </main>
  );
}

export default HojaDeVida;
