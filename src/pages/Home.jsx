import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home(params) {
  const { miVariable } = useContext(AuthContext);

  return (
    <>
      <h1>Home page</h1>
      <p>{miVariable}</p>
    </>
  );
}

export default Home;
