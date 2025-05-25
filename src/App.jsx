import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginFormEmpresa from "./components/Empresa/LoginEmpresa";
import RegistroEmpresaForm from "./components/Empresa/RegistroEmpresa";
import PasswordResetForm from "./components/recuperarcontraseña";
import MiArea from "./pages/MiArea";
import('./styles/Login.css')


function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="LoginEmpresa" element={<LoginFormEmpresa />} />
        <Route path="RegistroEmpresa" element={<RegistroEmpresaForm/>} />
        <Route path="Recuperar" element={<PasswordResetForm/>} />
        <Route path="Perfil" element={<MiArea/>} />

    </Routes>
    </Router>
  );
}

export default App;