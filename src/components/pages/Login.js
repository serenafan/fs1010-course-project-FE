import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(true);

  const loginSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      setAuth(false);
    } else {
      sessionStorage.setItem("token", payload.token);

      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    }
  };

  return (
    <main className="contact-form">
        <form>
          <div>
            <h1 className="font">Login</h1>
            {!auth && <p>Invalid credentials, please try again</p>}
          </div>
          <section>
            <div className="g-1">
              <label className="label-email">Username*</label>
              <input
                className="form-field font"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value = {username}
                onChange ={e => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="g-1">
              <label className="label-password">Password*</label>
              <input
                className="form-field font"
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                value = {password}
                onChange ={e => setPassword(e.target.value)}
                required
              />
            </div>
          </section>
          <section className="g-1">
            <input className="form-btn font" type="submit" value="Sign In" onClick={loginSubmit} />
          </section>
        </form>
    </main>
  );
};

export default Login;
