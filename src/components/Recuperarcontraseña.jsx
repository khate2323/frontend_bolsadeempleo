import React, { useState } from "react";
import("../styles/RecuperarContraseña.css")

const PasswordResetForm = () => {
  const [identificacion, setIdentificacion] = useState("");
  const [fechaExpedicion, setFechaExpedicion] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!identificacion || !fechaExpedicion || !correo) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (!correo.endsWith("@unimayor.edu.co")) {
      alert("Debe usar su correo institucional.");
      return;
    }

    console.log("Datos enviados:", { identificacion, fechaExpedicion, correo });
    alert("Solicitud enviada.");
  };

  return (
    <div className="container">
      <h2 className="title">
        <img src="/src/assets/img/logo.jpeg" alt="Logo" className="logoUnimayor" />
        {' '}Restaurar contraseña
        </h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          <span>Identificación*</span>
          <input
            type="text"
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
            className="input"
            required
          />
        </label>
        <label className="label">
          <span>Fecha expedición documento*</span>
          <input
            type="date"
            value={fechaExpedicion}
            onChange={(e) => setFechaExpedicion(e.target.value)}
            className="input"
            required
          />
        </label>
        <label className="label">
          <span>Correo institucional*</span>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="example@unimayor.edu.co"
            className="input"
            required
          />
        </label>
        <button type="submit" className="button">
          Restaurar
        </button>
      </form>
      <footer className="footer">
        Versión 1.0.0 - © 2025 - Campus UNIMAYOR <br />
        Institución Universitaria Colegio Mayor del Cauca
      </footer>
    </div>
  );
};

export default PasswordResetForm;
