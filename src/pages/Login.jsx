// ============================================
// ARCHIVO: Login.jsx
// PROPÓSITO: Página de autenticación de usuarios
// ============================================
// Componente que renderiza un formulario de login donde:
// - Los usuarios ingresan email y contraseña
// - Se validan las credenciales
// - Se redirige según el resultado

import { useState } from "react";
// useState: Hook para crear y manejar estado local del componente

import { useContext } from "react";
// useContext: Hook para acceder a datos del contexto global

import { AuthContext } from "../context/AuthContext";
// Importamos el contexto de autenticación para acceder a login/user

import { Navigate, useNavigate } from "react-router-dom";
// Navigate: Componente para redirigir a otra ruta
// useNavigate: Hook para navegar programáticamente a otra página

/**
 * Componente Login
 * Función: Renderiza un formulario de login con validación
 */
function Login(params) {
  // ==================== ESTADOS LOCALES ====================

  // Estado 1: Almacena el email que el usuario escribe
  // Inicializa como string vacío
  const [emailUser, setEmailUser] = useState("");

  // Estado 2: Almacena la contraseña que el usuario escribe
  // Inicializa como string vacío
  const [passUser, setPassUser] = useState("");

  // ==================== ACCESO AL CONTEXTO ====================

  // Accedemos al contexto global de autenticación
  // user: El usuario autenticado (null si no hay sesión)
  // login: Función para validar credenciales
  const { user, login } = useContext(AuthContext);

  // ==================== PROTECCIÓN DE RUTA ====================

  // Si ya hay un usuario autenticado (user no es null),
  // lo redirigimos a /profile en lugar de mostrar el formulario de login
  // Esto previene que usuarios logueados vuelvan a la página de login
  if (user) {
    return <Navigate to="/profile" />;
  }

  // ==================== HOOK DE NAVEGACIÓN ====================

  // useNavigate: Hook que nos permite navegar a otras rutas desde JavaScript
  // Lo usamos para redirigir después de un login exitoso
  const navigate = useNavigate();

  /* const [form,setForm] = useState({
        email:"",
        password:""
    }) */
  // ==================== FUNCIONES DEL FORMULARIO ====================

  /**
   * Función: handleChange(e)
   * Propósito: Actualiza el estado cuando el usuario escribe en los inputs
   * Parámetro: e (evento del input)
   */
  function handleChange(e) {
    // e.target.name: El nombre del input ("email" o "password")
    // e.target.value: El valor que escribió el usuario

    // Si el campo que cambió es "email"
    if (e.target.name === "email") {
      // Actualiza el estado emailUser con el nuevo valor
      setEmailUser(e.target.value);
    }

    // Si el campo que cambió es "password"
    if (e.target.name === "password") {
      // Actualiza el estado passUser con el nuevo valor
      setPassUser(e.target.value);
    }
  }

  /**
   * Función: handleSubmit(e)
   * Propósito: Procesa el envío del formulario
   * Parámetro: e (evento del formulario)
   */
  function handleSubmit(e) {
    // preventDefault: Evita que el formulario recargue la página
    e.preventDefault();

    // Llama la función login del contexto con el email y password
    // login retorna true si es válido, false si no
    const success = login(emailUser, passUser);

    // Si el login fue exitoso
    if (success) {
      // Muestra mensaje de éxito al usuario
      alert("Credenciales Correctas - Pase usted señor");
      // Navega a la página de perfil
      navigate("/profile");
    } else {
      // Si las credenciales son incorrectas, muestra error
      alert("Credenciales incorrectas");
    }
  }

  return (
    // ==================== ESTRUCTURA HTML ====================
    // min-h-screen: Altura mínima de 100% de la ventana del navegador
    // flex: Usa flexbox para alinear elementos
    // items-center: Centra verticalmente el contenido
    // justify-center: Centra horizontalmente el contenido
    // bg-gray-100: Fondo gris claro
    // px-4: Padding horizontal de 1rem (responsive para móviles)
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* TARJETA DE LOGIN */}
      {/* bg-white: Fondo blanco */}
      {/* rounded-xl: Bordes redondeados (12px) */}
      {/* shadow-2xl: Sombra muy pronunciada para efecto 3D */}
      {/* w-full: Ancho 100% */}
      {/* max-w-md: Ancho máximo de 28rem (448px) */}
      {/* p-8: Padding de 2rem en todos los lados */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
        {/* ENCABEZADO */}
        {/* mb-8: Margen inferior de 2rem para separación */}
        <div className="text-center mb-8">
          {/* Título principal */}
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Bienvenido</h1>
          {/* Subtítulo descriptivo */}
          <p className="text-gray-600">Inicia sesión en tu cuenta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="correo@ejemplo.com"
              onChange={handleChange}
              value={emailUser}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={handleChange}
              value={passUser}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            Credenciales de prueba:
          </p>
          <p className="text-center text-xs text-gray-500 mt-2">
            Email: usuario@ejemplo.com
          </p>
          <p className="text-center text-xs text-gray-500">
            Contraseña: password123
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
