import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import("../../styles/Login.css")



function LoginFormEmpresa() {
  const [showPassword, setShowPassword] = useState(false);
  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");
  const [rolSeleccionado, setRolSeleccionado] = useState("egresado");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rolSeleccionado, documento, password });
  };

  const navigate = useNavigate();


  return (
    <div className="wrapper">
      <div className="card">
        {/* Izquierda - Imagen */}
        <div className="left">
          <img
            src="/src/assets/img/PatioUnimayor.png"
            alt="Patio Unimayor"
            className="image"
          />
        </div>

        {/* Derecha - Formulario */}
        <div className="right">
          <img
            src="/src/assets/img/CampusUnimayor.png"
            alt="Campus Unimayor"
            className="logo"
          />

          <form onSubmit={handleSubmit} className="form">
            {/* Botones de rol */}
            <div className="rolButtonWrapper">
              <button
               className="rolButton bgegresado"
                type="button"
                onClick={() => {
                    setRolSeleccionado("egresado");
                    navigate("/");
                }}
              >
                Egresado
              </button>
              <button
              className="rolButton bgempresa"
                type="button"
                onClick={() => setRolSeleccionado("empresa")}
              >
                Empresa
              </button>
            </div>

            {/* Campo de identificación */}
            <input
              type="text"
              placeholder="Número de identificación"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              className="input"
              required
            />

            {/* Campo de contraseña con ícono */}
            <div className="passwordWrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
              <button
                type="button"
                className="eyeIcon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Botón ingresar */}
            <button type="submit" className="loginButton">
              Ingresar
            </button>
          </form>

          <p className="forgot">
            <a href="/Recuperar">¿Olvidó su contraseña? O asigne una nueva</a>
            <br />
            <br />
            <span>¿Eres empleador y aún no tienes cuenta?</span>
            <br />
            <br />
            <a href="/RegistroEmpresa">Registrar empresa</a>
          </p>
        </div>
      </div>
    </div>
  );
}


export default LoginFormEmpresa;