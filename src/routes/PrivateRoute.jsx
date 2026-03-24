// ============================================
// ARCHIVO: PrivateRoute.jsx
// PROPÓSITO: Proteger rutas que requieren autenticación
// ============================================
// Este es un "guardián" que verifica si el usuario está autenticado
// Patrón común en React: Route Guard o Protected Route
// Si no está autenticado, redirige a login
// Si está autenticado, muestra el componente solicitado

import { useContext } from "react";
// useContext: Hook para acceder a datos del contexto

import { AuthContext } from "../context/AuthContext";
// Contexto global que contiene la información de user

import { Navigate } from "react-router-dom";
// Navigate: Componente que redirige a otra ruta

/**
 * Componente PrivateRoute
 * Función: Envuelve componentes que requieren autenticación
 *
 * Cómo funciona:
 * 1. Verifica si hay un usuario autenticado
 * 2. Si NO hay usuario → Redirige a /login
 * 3. Si HAY usuario → Muestra el componente hijo (children)
 *
 * Uso en App.jsx:
 * <PrivateRoute>
 *   <Profile />
 * </PrivateRoute>
 */
function PrivateRoute({ children }) {
  // Accedemos al usuario desde el contexto global
  // user: null si no está autenticado, string si está autenticado
  const { user } = useContext(AuthContext);

  // VALIDACIÓN: Si NO hay usuario (!user es true)
  if (!user) {
    // Redirige a la página de login
    // El usuario verá el formulario de login en lugar de la página protegida
    return <Navigate to="/login" />;
  }

  // Si LLEGAMOS AQUÍ, significa que el usuario ESTÁ autenticado
  // Retornamos el componente hijo (Profile, Dashboard, etc.)
  return children;
}

export default PrivateRoute;
