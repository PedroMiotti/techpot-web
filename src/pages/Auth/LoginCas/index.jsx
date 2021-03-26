import React from "react";
import "./style.css";

// Components
import LogoTechPot from "../../../shared/LogoTechPot/index";

const LoginCas = () => {
  // TODO --> Make the login URL hidden
  return (
    <div className="loginContainer font-techpot">
      <div className="loginWrapper">
        <div className="loginWrapperHeader">
          <LogoTechPot />
          <p>Bem vindo(a) comunindade TECH !</p>
        </div>
        <a className="loginButton" href="https://credenciamento.espm.br/ad/redir?callback=http://localhost:4000/usuario/login-cas">Login</a>
      
      </div>
    </div>
  );
};

export default LoginCas;
