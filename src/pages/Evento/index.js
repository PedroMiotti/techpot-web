import React from 'react';
import './styles/index.css';


// Assets
    import EventoTestImage from '../../assets/HackaTruck.jpg'
    import RafaPic from '../../assets/Rafa.jpg'
    import FlavioPic from '../../assets/Flavio.jpg'


// Components
    import BottomLine from '../../shared/bottomLine/index'

// Icons
    import { CheckCircleOutlineOutlined, AddOutlined, AccessTime, Language } from '@material-ui/icons'

// Material UI
    import Avatar from '@material-ui/core/Avatar';
    import AvatarGroup from '@material-ui/lab/AvatarGroup'; 


const marginIcon = {
    marginRight: '6px'
}

const redIcon = {
    color: '#999'
}

const avatarBorder = {
    border: 0
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
                            <AccessTime style={redIcon}/>
                            <p>31/12/2020 - DAS 14:30 AS 21:00</p>

                        </div>

                        <div className="eventoBottom-Detalhes-Tipo">
                            <Language style={redIcon}/>
                            <p>Evento online</p>
                        </div>
                        
                        <div className="eventoBottom-Detalhes-Desc">
                            <p>Pessoal, queria divulgar a vocês o Projeto HackaTruck, que será composto por diversos cursos online envolvendo desde lógica de programação, programação orientada a objetose, linguagem Swift (Apple) e IoT.
                            Podem divulgar para todos os colegas de todos os cursos da ESPM, em nível nacional, além da palestra de sexta-feira agora.
                            Aproveitem!!!</p>
                        </div>

                    </div>   

                    <div className="eventoBottom-col-2">
                    
                        <div className="eventoBottom-Pessoas">
                            <h1>Convidados</h1>

                            <div className="eventoBottom-Pessoas-stats">
                                <div className="eventoBottom-Pessoas-stats-vao">
                                    <h2>300</h2>
                                    <p>VÃO</p>
                                </div>

                                <div className="eventoBottom-Pessoas-stats-confirmadas">
                                    <h2>578</h2>
                                    <p>CONVIDADAS</p>
                                </div>
                            </div>

                            <hr style={{border: 0, display:'block', backgroundColor:'#b8b6b6', height: "2px" , width: "100%", opacity: 0.2, borderRadius: '15px',position: "relative", zIndex: 1}}/>

                            <div className="eventoBottom-Pessoas-avatar">
                                <AvatarGroup max={4} >
                                    <Avatar alt="Remy Sharp" src={RafaPic} style={avatarBorder}/>
                                    <Avatar alt="Travis Howard" src={FlavioPic} style={avatarBorder}/>
                                    <Avatar alt="Cindy Baker" src={RafaPic} style={avatarBorder}/>
                                    <Avatar alt="Agnes Walker" src={FlavioPic} style={avatarBorder}/>
                                    <Avatar alt="Trevor Henderson" src={RafaPic} style={avatarBorder}/>
                                </AvatarGroup>
                            </div>

                        </div>     

                        <div className="eventoBottom-Oganizador">
                            <h1>Organizador</h1>

                            <div className="eventoBottom-Oganizador-card">
                                <div className="eventoBottom-organizador-profilePic">
                                    <img src={FlavioPic} alt="postTestPicture" className="organizadorProfilepic"/>
                                </div>
                                <div className="eventoBottom-Oganizador-card-info">
                                    <h4>Flavinho Gameplayz</h4>
                                    <p>Professor</p>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>

            
        </div>
    )
}


export default Evento;