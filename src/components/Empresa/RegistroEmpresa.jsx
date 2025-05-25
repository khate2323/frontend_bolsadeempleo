import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function RegistroEmpresaForm() {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [nitEmpresa, setNitEmpresa] = useState("");
  const [sectorEmpresarial, setSectorEmpresarial] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombreEmpresa, nitEmpresa, sectorEmpresarial, password });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {/* Imagen izquierda */}
        <div style={styles.left}>
          <img
            src="/src/assets/img/PatioUnimayor.png"
            alt="Patio Unimayor"
            style={styles.image}
          />
        </div>

        {/* Formulario a la derecha */}
        <div style={styles.right}>
          <img
            src="/src/assets/img/CampusUnimayor.png"
            alt="Campus Unimayor"
            style={styles.logo}
          />

          <div style={styles.subtitulo}>Formulario registro Empresa</div>

          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Nombre empresa */}
            <div style={styles.inputGroup}>
              <FaUser style={styles.icon} />
              <input
                type="text"
                placeholder="Nombre Empresa"
                value={nombreEmpresa}
                onChange={(e) => setNombreEmpresa(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            {/* NIT empresa */}
            <div style={styles.inputGroup}>
              <FaUser style={styles.icon} />
              <input
                type="text"
                placeholder="Nit Empresa"
                value={nitEmpresa}
                onChange={(e) => setNitEmpresa(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            {/* Sector empresarial */}
            <div style={styles.inputGroup}>
              <MdBusiness style={styles.icon} />
              <select
                value={sectorEmpresarial}
                onChange={(e) => setSectorEmpresarial(e.target.value)}
                style={{ ...styles.input, appearance: "none" }}
                required
              >
                <option value="">Red o sector Empresarial</option>
                <option value="tecnologia">Tecnología</option>
                <option value="salud">Salud</option>
                <option value="educacion">Educación</option>
                <option value="comercio">Comercio</option>
              </select>
              <IoIosArrowDown style={styles.iconRight} />
            </div>

            {/* Contraseña */}
            <div style={styles.inputGroup}>
              <FaUser style={styles.icon} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <button
                type="button"
                style={styles.iconRightButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Botón de registro */}
            <button type="submit" style={styles.registerButton}>
              Registrar empresa
            </button>
          </form>

          <div style={styles.loginLink}>
            <p>¿Ya tienes usuario como empresa?</p>
            <a href="LoginEmpresa" style={{ color: "#007bff" }}>
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
    background: "#f1faff",
    minHeight: "100vh",
  },
  card: {
    display: "flex",
    maxWidth: "1000px",
    width: "100%",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    borderRadius: "1rem",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
   image: {
    width: "100%",
    justifyContent: "center",
    padding: "1rem",
    borderRadius: "2rem",
    marginTop: "120px",
  },
  logo: {
    width: "100%",
  },
  subtitulo: {
    textAlign: "center",
    background: "#d3e9ff",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  inputGroup: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "0.75rem 2.5rem 0.75rem 2.5rem",
    borderRadius: "0.5rem",
    border: "1px solid #80bdff",
    backgroundColor: "#e8f0ff",
    fontSize: "1rem",
  },
  icon: {
    position: "absolute",
    left: "0.8rem",
    color: "#777",
    fontSize: "1rem",
  },
  iconRight: {
    position: "absolute",
    right: "0.8rem",
    color: "#555",
    pointerEvents: "none",
  },
  iconRightButton: {
    position: "absolute",
    right: "0.5rem",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#555",
  },
  registerButton: {
    backgroundColor: "#337ab8",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.75rem",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: "1rem",
    textAlign: "center",
    fontSize: "0.9rem",
  },
};

export default RegistroEmpresaForm;
