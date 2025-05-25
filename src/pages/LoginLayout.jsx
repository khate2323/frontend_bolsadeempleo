import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


function LoginLayout({ rolSeleccionado, setRolSeleccionado, children }) {
  const navigate = useNavigate();

  const handleRolChange = (rol) => {
    setRolSeleccionado(rol);
    navigate(rol === "egresado" ? "/" : "/LoginEmpresa");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.left}>
          <img
            src="/src/assets/img/PatioUnimayor.png"
            alt="Patio Unimayor"
            style={styles.image}
          />
        </div>

        <div style={styles.right}>
          <img
            src="/src/assets/img/CampusUnimayor.png"
            alt="Campus Unimayor"
            style={styles.logo}
          />

          {/* Botones de rol */}
          <div style={styles.rolButtonWrapper}>
            <button
              type="button"
              onClick={() => handleRolChange("egresado")}
              style={{
                ...styles.rolButton,
                backgroundColor: rolSeleccionado === "egresado" ? "#cce5ff" : "#f1f1f1",
              }}
            >
              Egresado
            </button>
            <button
              type="button"
              onClick={() => handleRolChange("empresa")}
              style={{
                ...styles.rolButton,
                backgroundColor: rolSeleccionado === "empresa" ? "#cce5ff" : "#f1f1f1",
              }}
            >
              Empresa
            </button>
          </div>

          {children}
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
    background: "#ffffff",
    minHeight: "90vh",
  },
  card: {
    display: "flex",
    maxWidth: "900px",
    justifyContent: "center",
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
    marginTop: "50px",
  },
  logo: {
    width: "100%",
  },
  rolButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1rem",
  },
  rolButton: {
    padding: "0.5rem 1.5rem",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

LoginLayout.propTypes = {
  rolSeleccionado: PropTypes.string.isRequired,
  setRolSeleccionado: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
