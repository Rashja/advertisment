import React from "react";
import LoginAuthentication from "../components/LoginAuthentication";
import BodyCover from "../hoc/BodyCover";

const Login = () => {
  /*------------------------------------------------------ */
  return (
    <>
      <div className="top-template" />
      <LoginAuthentication />
    </>
  );
};

export default BodyCover(Login);
