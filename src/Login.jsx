import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <form action="">
          <h1>Zaloguj się</h1>
          <div>
            <input type="email" />
            <label htmlFor="">Email</label>
          </div>

          <div>
            <input type="password" />
            <label htmlFor="">Hasło</label>
          </div>

          <div>
            <div>
              <input type="checkbox" name="" />
              <label htmlFor="Zapamiętaj mnie"></label>
            </div>
            <span>Zapomniałaś hasła?</span>
          </div>
          <button type="submit">Zaloguj się</button>
          <div>
            <span>
              <link to="Register">Zarejestruj się</link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
