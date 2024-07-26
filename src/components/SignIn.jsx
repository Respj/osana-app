import { useState } from "react";

function SignIn({ FormHandle }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!Password || !Email) return;
    console.log(Email, Password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="form-container">
      <h2>Zaloguj się</h2>
      <form onSubmit={handleLogin}>
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
            placeholder="Wpisz swoje hasło"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
        </div>

        <button onClick={handleLogin}>Zaloguj się</button>
      </form>
      <p>Nie masz jeszcze konta?</p>
      <p class="link" onClick={() => FormHandle("signup")}>
        <u>Zarejestruj się</u>
      </p>
    </div>
  );
}

export default SignIn;
