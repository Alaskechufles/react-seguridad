import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile(params) {
  const { miVariable, user, logout } = useContext(AuthContext);

  return (
    <>
      <h1>Profile page</h1>
      <p>{user}</p>

      <button onClick={logout}>Cerrar Sesión</button>
    </>
  );
}

export default Profile;
