import React from 'react';
import './style/index.css';


const Login = ( ) => {
    return(
        <div className="loginContainer font-techpot">
            <div className="loginWrapper">
                <div className="loginWrapperHeader">
                    <h1>TECHPOT</h1>
                    <p>Bem vindo(a) comunindade TECH !</p>
                </div>

                <div className="loginWrapperBottom">
                    <div className="loginWrapperButtons">

                        <a href="#">LOGIN</a>
                        <a href="#">REGISTRAR</a>

                    </div>

                    <div className="loginWrapperForm">
                        <p>Usuario/E-mail</p>
                        <input placeholder="Usuario/E-mail"/>

                        <p>Senha</p>
                        <input placeholder="Senha"/>

                    </div>

                    <a href="#" className="loginWrapperLoginButton">LOGIN</a>

                </div>
            </div>

        </div>
    )
}



export default Login;