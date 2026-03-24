// ============================================
// ARCHIVO: AuthContext.jsx
// PROPÓSITO: Manejo centralizado de autenticación
// ============================================
// Este archivo usa Context API de React para:
// - Almacenar datos de usuario globalmente
// - Compartir funciones de login/logout
// - Evitar pasar props en múltiples niveles

import { createContext, useState } from "react";
// createContext: Crea un contexto (almacén global de datos)
// useState: Hook para crear estado en React

// Creamos el contexto que será compartido por toda la aplicación
// PASO 1: Crear el contexto
export const AuthContext = createContext();
// Este contexto será usado por useContext() en otros componentes

/**
 * Componente AuthProvider
 * Función: Proporciona los datos de autenticación a toda la aplicación
 * Similar a una tienda centralizada donde todos pueden traer datos
 */
export function AuthProvider({ children }) {
  // PASO 2: Crear estados que serán compartidos

  // Estado 1: Variable de estado de la aplicación
  // Inicializa con el valor "Activo"
  const [miVariable, setMiVariable] = useState("Activo");

  // Estado 2: Almacena el nombre del usuario autenticado
  // Inicializa como null (significa que no hay usuario logueado)
  const [user, setUser] = useState(null);

  /**
   * Función: login(email, password)
   * Propósito: Valida las credenciales del usuario
   * Parámetros: email (string), password (string)
   * Retorna: true si las credenciales son válidas, false si no
   */
  function login(email, password) {
    // BASE DE DATOS DE PRUEBA
    // En una aplicación real, esto vendría de un servidor
    const dataBase = [
      {
        email: "admin@admin.com",
        password: "1234",
        username: "Diego",
      },
      {
        email: "user@user.com",
        password: "5678",
        username: "Juan",
      },
      {
        email: "guest@guest.com",
        password: "9012",
        username: "Invitado",
      },
    ];

    // Busca el usuario con el email proporcionado
    // find(): Devuelve el PRIMER elemento que cumple la condición
    const current = dataBase.find((user) => user.email === email);

    // Verifica si el usuario existe (current) Y si la contraseña coincide
    // El operador ?. es "optional chaining" - accede a password solo si current existe
    if (current?.password === password) {
      // Si las credenciales son válidas, actualiza el estado user
      setUser(current.username);
      // Retorna true para indicar que el login fue exitoso
      return true;
    }
    // Si las credenciales no coinciden, retorna false
    return false;
  }

  /**
   * Función: logout()
   * Propósito: Cierra la sesión del usuario actual
   * Parámetros: ninguno
   * Retorna: nada
   */
  function logout() {
    // Establece el usuario en null (lo "elimina" de la sesión)
    setUser(null);
  }

  // PASO 3: Compartir los datos a través del Provider
  return (
    // Provider: "Proveedor" que distribuye los datos a todos los componentes dentro
    <AuthContext.Provider value={{ miVariable, user, login, logout }}>
      {/* 
        'value': Los datos que queremos compartir
        miVariable: Estado de la aplicación
        user: Nombre del usuario autenticado
        login: Función para autenticarse
        logout: Función para cerrar sesión
      */}
      {children}
      {/* Los componentes hijos reciben acceso a todos estos datos */}
    </AuthContext.Provider>
  );
}
