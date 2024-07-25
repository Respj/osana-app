import { useState } from "react";

function SignUp({ FormHandle }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function handleSignUp(e) {
    e.preventDefault();
    console.log(Email, Password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="form-container">
      <h2>Zarejestruj się</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Wpisz swój adres email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          />
        </div>

        <div className="form-control">
          <input
            type="password"
            placeholder="Utwórz hasło"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
        </div>

        <button onClick={handleSignUp}>Zarejestruj się</button>
      </form>

      <p onClick={() => FormHandle("login")}>
        Masz już konto? <u>Zaloguj się</u>
      </p>
    </div>
  );
}

export default SignUp;
