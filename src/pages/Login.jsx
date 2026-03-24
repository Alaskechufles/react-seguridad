import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function Login(params) {
  const [emailUser, setEmailUser] = useState("");
  const [passUser, setPassUser] = useState("");

  const { user, login } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/profile" />;
  }

  const navigate = useNavigate();

  /* const [form,setForm] = useState({
        email:"",
        password:""
    }) */
  function handleChange(e) {
    /* setForm({
            ...form,
            [e.target.name]:e.target.value
        }) */
    if (e.target.name === "email") {
      setEmailUser(e.target.value);
    }
    if (e.target.name === "password") {
      setPassUser(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const success = login(emailUser, passUser);
    if (success) {
      alert("Credenciales Correctas - Pase usted señor");
      navigate("/profile");
    } else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={handleChange} />
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </>
  );
}

export default Login;
