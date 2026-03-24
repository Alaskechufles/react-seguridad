// ============================================
// ARCHIVO: Profile.jsx
// PROPÓSITO: Página del perfil del usuario autenticado
// ============================================
// Esta página es protegida y solo accesible si:
// 1. El usuario está autenticado (user !== null)
// 2. Pasa por el componente PrivateRoute
// 3. Si no está autenticado, es redirigido a /login

import { useContext } from "react";
// useContext: Hook para acceder a datos del contexto global

import { AuthContext } from "../context/AuthContext";
// Importamos el contexto para acceder a user, miVariable y logout

/**
 * Componente Profile
 * Función: Muestra la información del usuario autenticado
 * Solo es visible si user !== null (usuario está logueado)
 */
function Profile(params) {
  // Accedemos al contexto global
  // miVariable: Estado de la aplicación
  // user: Nombre del usuario actual
  // logout: Función para cerrar sesión
  const { miVariable, user, logout } = useContext(AuthContext);

  return (
    // ==================== ESTRUCTURA PRINCIPAL ====================
    // min-h-screen: Altura mínima de 100vh
    // bg-gradient-to-br: Gradiente de arriba-izquierda a abajo-derecha
    // py-12: Padding vertical de 3rem
    // px-4: Padding horizontal de 1rem (responsive)
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      {/* Contenedor con ancho máximo */}
      {/* max-w-2xl: Ancho máximo de 42rem (672px) */}
      {/* mx-auto: Centra horizontalmente */}
      <div className="max-w-2xl mx-auto">
        {/* ENCABEZADO DEL PERFIL */}
        {/* Este es un banner llamativo con gradiente azul */}
        {/* rounded-xl: Bordes muy redondeados */}
        {/* shadow-2xl: Sombra pronunciada */}
        {/* text-white: Texto blanco para contraste */}
        {/* mb-8: Margen inferior para separación */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-2xl p-8 text-white mb-8">
          {/* Contenedor interno con flex para layout */}
          {/* justify-between: Espacio entre elementos */}
          {/* items-start: Alineación al inicio verticalmente */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Mi Perfil</h1>
              <p className="text-blue-100">Bienvenido a tu área personal</p>
            </div>
            <div className="text-5xl">👤</div>
          </div>
        </div>

        {/* TARJETA DE INFORMACIÓN */}
        {/* bg-white: Fondo blanco */}
        {/* rounded-xl: Bordes redondeados */}
        {/* shadow-lg: Sombra media para profundidad */}
        {/* p-8: Padding de 2rem en todos lados */}
        {/* mb-8: Margen inferior para separación */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          {/* SECCIÓN 1: NOMBRE DE USUARIO */}
          {/* pb-6: Padding bottom */}
          {/* border-b: Borde inferior para separación visual */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            {/* Etiqueta de la sección */}
            {/* uppercase: Texto en mayúsculas */}
            {/* text-gray-500: Color gris para subtítulo */}
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Usuario
            </h2>
            {/* Muestra el nombre del usuario desde el contexto */}
            {/* El valor viene de: user del AuthContext */}
            <p className="text-2xl font-bold text-gray-800">{user}</p>
          </div>

          {/* SECCIÓN 2: ESTADO */}
          {/* {miVariable && ...} es renderizado condicional */}
          {/* Solo muestra esta sección SI miVariable tiene un valor (truthy) */}
          {miVariable && (
            <div className="mb-6 pb-6 border-b border-gray-200">
              {/* Etiqueta de estado */}
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Estado
              </h2>
              {/* Valor del estado desde el contexto */}
              <p className="text-lg text-gray-700">{miVariable}</p>
            </div>
          )}

          {/* SECCIÓN 3: INFORMACIÓN DE CUENTA */}
          <div>
            {/* Título de la sección */}
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Información de Cuenta
            </h2>
            {/* Lista de viñetas con información */}
            {/* space-y-3: Espacio de 0.75rem entre elementos */}
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Acceso seguro confirmado
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Datos sincronizados
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Autenticación activa
              </li>
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Cerrar Sesión
        </button>

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>última sesión sincronizada recientemente</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
