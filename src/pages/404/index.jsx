import React from 'react'
import './index.css'

// Router
    import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
      <div className="PageNotFound-container font-techpot">
        <div className="PageNotFound-textdiv">
            <h1>
                4<span>0</span>4
            </h1>

            <div className="PageNotFound-code">
                <p>
                    <span className="PageNotFound-funcName">Error404</span>( ){}
                </p>

                <p className="PageNotFound-indent">
                    <span className="PageNotFound-varMessage">message</span> = "
                    <span className="PageNotFound-stringMessage">
                    Opss, Pagina não encontrada
                    </span>
                    ";
                </p>

                <p>{"};"}</p>
            </div>
        </div>

        <Link to="/" className="PageNotFound-backButton">Voltar para home</Link>
      </div>
    );
}

export default PageNotFound;
