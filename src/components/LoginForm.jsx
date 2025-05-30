import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import('../styles/Login.css')
import { apiService } from "../services/api.service";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");
  const [rolSeleccionado, setRolSeleccionado] = useState("egresado");
  const [type, setType] = useState(3);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await apiService.post("/auth/login", { login: documento, password: password, type: type }, false)
      if (respuesta.status === 200) {
        console.log("respuesta", respuesta);

        localStorage.setItem("accessToken", respuesta.data.data.accessToken)
        localStorage.setItem("refreshToken", respuesta.data.data.refreshToken)

        if (respuesta.data.data.user.role_name === 'EMPRESA') {
          // navigate('/home-empresa')
          window.location.href='/home-empresa'
          return
        }
        if (respuesta.data.data.user.role_name === 'EGRESADO') {
          // navigate('/home-egresado')
          window.location.href='/home-egresado'
          return
        }
        if (respuesta.data.data.user.role_name === 'ADMINISTRADOR') {
          // navigate('/home-admin')
          window.location.href='/home-admin'
          return
        }

      }
    } catch (error) {
      alert(error.response.data.message)
    }
  };


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
                onClick={() => {
                  setRolSeleccionado("egresado")
                  setType(3)
                }}
                className={rolSeleccionado === "egresado" ? 'rolButton bgempresa' : 'rolButton'}
                type="button"
              >
                Egresado
              </button>
              <button
                type="button"
                onClick={() => {
                  setRolSeleccionado("empresa");
                  setType(2)
                }}
                className={rolSeleccionado === "empresa" ? 'rolButton bgempresa' : 'rolButton'}
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
            <button
              type="submit"
              className="loginButton"
            >
              Ingresar
            </button>
          </form>

          <p className="forgot">
            <a href="/Recuperar">¿Olvidó su contraseña? O asigne una nueva</a>
            <br />
            {
              rolSeleccionado === 'empresa' && (
                <div>
                  <span>¿Eres empleador y aún no tienes cuenta?</span>
                  <br />
                  <a href="/RegistroEmpresa">Registrar empresa</a>
                </div>
              )
            }
          </p>
        </div>
      </div>
    </div>
  );
}


export default LoginForm;