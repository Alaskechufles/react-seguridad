import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [miVariable, setMiVariable] = useState("Miguel");
  const [user, setUser] = useState(null);

  function login(email, password) {
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

    const current = dataBase.find((user) => user.email === email);
    if (current?.password === password) {
      setUser(current.username);
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ miVariable, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
