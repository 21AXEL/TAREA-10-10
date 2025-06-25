import React from 'react';
import ReactDOM from 'react-dom/client';

import ContadorPadre from './components/ContadorPadre';
import FormularioNombreCompleto from './components/FormularioNombreCompleto';
import FormularioRegistro from './components/FormularioRegistro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Ejercicio 2: Contador</h1>
    <ContadorPadre />

    <h1>Ejercicio 3: Formulario Nombre Completo</h1>
    <FormularioNombreCompleto />

    <h1>Ejercicio 4: Registro con Formik y Yup</h1>
    <FormularioRegistro />
  </React.StrictMode>
);