import React, { useRef, useState } from "react";
import Button from "./Button";
import { withRouter } from "react-router";

const LoginAuthentication = ({ history }) => {
  /*------------------------ useRef -------------------- */
  const userNameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [error, setError] = useState("");
  /*------------------------- login -------------------- */
  /**
   *
   * @param {e} input event handler
   */
  const handleLogin = (e) => {
    e.preventDefault();
    if (userNameInputRef.current && passwordInputRef.current) {
      if (
        userNameInputRef.current.value.length > 0 &&
        passwordInputRef.current.value.length > 0
      ) {
        if (
          userNameInputRef.current.value === "admin" &&
          passwordInputRef.current.value === "admin"
        ) {
          localStorage.setItem("token", "you`ve been logged in");
          history.push("/");
        } else {
          setError("Your username or password is invalid");
        }
      } else {
        setError("Plz enter your username and password");
      }
    }
  };
  /*---------------------------------------------------- */
  return (
    <div className="login-authentication-wrapper d-column">
      <div className="login-info">
        <p>
          <b>username:admin</b>
        </p>
        <p>
          <b>password:admin</b>
        </p>
      </div>
      <form className="form" onSubmit={handleLogin}>
        <input
          className="input"
          ref={userNameInputRef}
          type="text"
          placeholder="username"
        />
        <input
          className="input"
          ref={passwordInputRef}
          type="password"
          placeholder="password"
        />
        <div className="login-btn-wrapper">
          <Button className="btn">log in</Button>
        </div>
      </form>
      {error !== "" && <h6 className="error">{error}</h6>}
    </div>
  );
};

export default withRouter(LoginAuthentication);
