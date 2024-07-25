import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [Form, setForm] = useState("login");

  return (
    <>
      {Form === "login" ? (
        <SignIn FormHandle={setForm} />
      ) : (
        <SignUp FormHandle={setForm} />
      )}
    </>
  );
}

export default App;
