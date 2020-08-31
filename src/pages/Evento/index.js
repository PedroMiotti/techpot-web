import React from 'react';
import './styles/index.css';


// Assets
    import EventoTestImage from '../../assets/HackaTruck.jpg'

// Components

// Icons
    import { CheckCircleOutlineOutlined, AddOutlined, AccessTime, Language, Public } from '@material-ui/icons'


const marginIcon = {
    marginRight: '6px'
}



const Evento = () => {
    return(
        <div className="eventoContainer font-techpot">

                <div className="eventoTopbarContainer">
                    <div className="eventoTopbarFirstRowContainer">
                        <img src={EventoTestImage} alt="EventoTestImage"/>
                    </div>

                    <div className="eventoTopbar-SecondRow-Container">
                        <div className="eventoTopbar-SecondRow-FirstColumn"> 
                            <h3>31/12/2020 - DAS 14:30 AS 21:00</h3>
                            <h1>HACKA TRUCK - IBM</h1>
                            <p>Evento online</p>
                        </div>
                        
                    </div>

                    <hr style={{width: '600px', height: '1px ', color: "#fff", margin: '10px 0', opacity: 0.2}}/>

                    <div className="eventoTopbar-ThirdRow-Container">
                        <div className="eventoTopbar-ThirdRow-FirstColumn">
                            <a href="/evento">Sobre</a>
                        </div>

                        <div className="eventoTopbar-ThirdRow-SecondColumn">
                            <a href="/" className="eventoTopbar-ThirdRow-SecondColumn-Firstchild"><CheckCircleOutlineOutlined style={marginIcon}/> Vou</a>
                            <a href="/"><AddOutlined style={marginIcon}/>Convidar</a>
                        </div>

                    </div>
                </div>


                <div className="eventoBottomContainer">
                    <div className="eventoBottom-Detalhes">
                        <h1>Detalhes</h1>

                        <div className="eventoBottom-Detalhes-Horario">
                            <AccessTime />
                            <p>31/12/2020 - DAS 14:30 AS 21:00</p>

                        </div>

                        <div className="eventoBottom-Detalhes-Tipo">
                            <Language />
                            <p>Evento online</p>
                        </div>
                        
                        <div className="eventoBottom-Detalhes-Desc">
                            <p>Pessoal, queria divulgar a vocês o Projeto HackaTruck, que será composto por diversos cursos online envolvendo desde lógica de programação, programação orientada a objetose, linguagem Swift (Apple) e IoT.
                            Podem divulgar para todos os colegas de todos os cursos da ESPM, em nível nacional, além da palestra de sexta-feira agora.
                            Aproveitem!!!</p>
                        </div>

                    </div>                
                </div>

            
        </div>
    )
}


export default Evento;