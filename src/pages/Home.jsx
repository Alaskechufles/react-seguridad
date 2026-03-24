// ============================================
// ARCHIVO: Home.jsx
// PROPÓSITO: Página de inicio / Landing page
// ============================================
// Componente accesible a TODOS (no requiere autenticación)
// Muestra información sobre la aplicación y sus características

import { useContext } from "react";
// useContext: Hook para acceder a datos del contexto global

import { AuthContext } from "../context/AuthContext";
// Importamos el contexto para acceder a miVariable

/**
 * Componente Home
 * Función: Renderiza la página de inicio con información y features
 * Accesible: Sí, no requiere estar autenticado
 */
function Home(params) {
  // Accedemos al contexto global para obtener miVariable
  // miVariable: Estado de la aplicación (en este caso: "Activo")
  const { miVariable } = useContext(AuthContext);

  return (
    // ==================== CONTENEDOR PRINCIPAL ====================
    // min-h-screen: Altura mínima de 100% de la pantalla
    // bg-gradient-to-br: Gradiente de arriba-izquierda a abajo-derecha
    // py-12: Padding vertical de 3rem
    // px-4: Padding horizontal de 1rem (responsive para móviles)
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      {/* Contenedor con ancho máximo para mejor legibilidad */}
      {/* max-w-6xl: Ancho máximo de 72rem (1152px) */}
      {/* mx-auto: Centra el contenedor */}
      <div className="max-w-6xl mx-auto">
        {/* ==================== SECCIÓN HERO / BIENVENIDA ==================== */}
        {/* Hero: Sección principal y llamativa */}
        {/* mb-16: Margen inferior grande para separación */}
        <div className="text-center mb-16">
          {/* Título principal muy grande y visible */}
          {/* text-5xl: Tamaño de texto muy grande (3rem) */}
          {/* font-bold: Peso de fuente muy grueso */}
          {/* text-gray-800: Color gris muy oscuro */}
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Bienvenido a SecureApp
          </h1>
          {/* Subtítulo descriptivo */}
          {/* text-xl: Tamaño grande pero menos que el título */}
          {/* text-gray-600: Gris más claro para contraste */}
          <p className="text-xl text-gray-600 mb-8">
            Una aplicación segura para gestionar tu perfil y datos personales
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Seguridad</h2>
            <p className="text-gray-600">
              Tu información está protegida con los más altos estándares de
              seguridad
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">👤</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Perfil</h2>
            <p className="text-gray-600">
              Gestiona tu perfil de usuario con facilidad y personalización
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Rápido</h2>
            <p className="text-gray-600">
              Experiencia ágil y responsiva en cualquier dispositivo
            </p>
          </div>
        </div>

        {/* Status Card */}
        {miVariable && (
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Estado del Sistema</h3>
            <p className="text-lg">{miVariable}</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">¿Necesitas acceso a tu perfil?</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
