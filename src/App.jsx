// ============================================
// ARCHIVO: App.jsx
// PROPÓSITO: Componente raíz de la aplicación
// ============================================
// Este es el componente principal que define:
// - La barra de navegación
// - Las rutas principales de la aplicación
// - El proveedor de autenticación global

import { Routes, Route, Link } from "react-router-dom";
// Routes: Componente que muestra diferentes componentes según la ruta
// Route: Define una ruta específica
// Link: Crea enlaces de navegación sin recargar la página

import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// Importamos los componentes de las páginas

import { AuthProvider } from "./context/AuthContext";
// AuthProvider envuelve la app y proporciona datos de autenticación a todos los componentes

import PrivateRoute from "./routes/PrivateRoute";
// PrivateRoute es un componente que protege rutas (solo acceso si el usuario está autenticado)

/**
 * Componente App
 * Función: Renderiza la estructura principal de la aplicación
 */
function App() {
  return (
    <>
      {/* BARRA DE NAVEGACIÓN */}
      {/* bg-gradient-to-r: Fondo con gradiente de izquierda a derecha */}
      {/* shadow-lg: Sombra grande para dar profundidad */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        {/* Contenedor con ancho máximo y padding */}
        {/* max-w-7xl: Ancho máximo de 80rem (1280px) */}
        {/* mx-auto: Centra el contenedor */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo/Nombre de la app */}
          <div className="text-white font-bold text-xl">SecureApp</div>

          {/* Contenedor de enlaces de navegación */}
          {/* gap-6: Espacio de 1.5rem entre elementos */}
          <div className="flex gap-6">
            {/* Link home: Navega a la página principal */}
            {/* to="/": Define la ruta destino */}
            {/* hover:text-blue-200: Cambia color al pasar mouse */}
            {/* transition-colors: Anima el cambio de color suavemente */}
            <Link
              to="/"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Home
            </Link>

            {/* Link perfil: Solo visible pero accesible desde navbar */}
            <Link
              to="/profile"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Profile
            </Link>

            {/* Link login: Navega a la página de autenticación */}
            <Link
              to="/login"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* SECCIÓN PRINCIPAL DE LA APLICACIÓN */}
      {/* min-h-screen: Altura mínima de 100% de la pantalla */}
      {/* bg-gray-50: Fondo gris muy claro */}
      <main className="min-h-screen bg-gray-50">
        {/* AuthProvider: Proveedor de contexto que envuelve toda la app */}
        {/* Proporciona valores: miVariable, user, login, logout */}
        <AuthProvider>
          {/* Routes: Contenedor de todas las rutas */}
          <Routes>
            {/* RUTA 1: HOME - Página principal, accesible a todos */}
            <Route path="/" element={<Home />}></Route>

            {/* RUTA 2: LOGIN - Página de autenticación */}
            <Route path="/login" element={<Login />}></Route>

            {/* RUTA 3: PROFILE - Página protegida */}
            {/* Usa PrivateRoute para verificar si el usuario está autenticado */}
            {/* Si no está autenticado, redirige a /login */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </main>
    </>
  );
}

export default App;
