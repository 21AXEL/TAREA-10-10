import React, { useState } from "react";

const CampoNombre = ({ nombre, setNombre }) => (
  <input
    type="text"
    placeholder="Nombre"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
  />
);

const CampoApellido = ({ apellido, setApellido }) => (
  <input
    type="text"
    placeholder="Apellido"
    value={apellido}
    onChange={(e) => setApellido(e.target.value)}
  />
);

const FormularioNombreCompleto = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const mostrarNombreCompleto = () => {
    alert(`Nombre completo: ${nombre} ${apellido}`);
  };

  return (
    <div>
      <CampoNombre nombre={nombre} setNombre={setNombre} />
      <CampoApellido apellido={apellido} setApellido={setApellido} />
      <button onClick={mostrarNombreCompleto}>Mostrar Nombre Completo</button>
      <p>Nombre completo en tiempo real: {nombre} {apellido}</p>
    </div>
  );
};

export default FormularioNombreCompleto;
