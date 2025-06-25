import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormularioRegistro = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "Mínimo 3 caracteres")
        .required("Nombre es requerido"),
      email: Yup.string()
        .email("Formato inválido")
        .required("Email es requerido"),
      password: Yup.string()
        .min(6, "Mínimo 6 caracteres")
        .required("Contraseña es requerida"),
    }),
    onSubmit: (valores) => {
      alert(JSON.stringify(valores, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          name="nombre"
          onChange={formik.handleChange}
          value={formik.values.nombre}
        />
        {formik.errors.nombre && <p>{formik.errors.nombre}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <p>{formik.errors.email}</p>}
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <p>{formik.errors.password}</p>}
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
};

export default FormularioRegistro;