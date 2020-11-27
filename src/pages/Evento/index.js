import React, {useEffect} from 'react';
import './styles/index.css';
import { useParams } from 'react-router-dom';


// Assets
    import EventoTestImage from '../../assets/HackaTruck.jpg'
    import RafaPic from '../../assets/Rafa.jpg'
    import FlavioPic from '../../assets/Flavio.jpg'

// Icons
    import { CheckCircleOutlineOutlined, AddOutlined, AccessTime, Language } from '@material-ui/icons'

// Material UI
    import Avatar from '@material-ui/core/Avatar';
    import AvatarGroup from '@material-ui/lab/AvatarGroup';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { infoEvent, listInvitedEvent } from '../../store/_entities/Event';
import { firstLetterUppercase } from '../../helpers/UpperFirstLetter';

// Moment
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { getDefaultNormalizer } from '@testing-library/react';


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

    /* state = {
        valueInfo: null,
        loadingInfo: true,
        errorInfo: null,
    };
    this.getInfo();
    
    async getInfo(){
        try{
            this.setState({loadingInfo: true});
            const valueInfo = await useSelector(state => state.entitie.event.info);
            this.setState(valueInfo);

        } catch (error){
            this.setState({errorInfo: error});
        } finally {
            this.setState({loadingInfo: false});
        }
    } */
    
    const eventInfoList = useSelector(state => state.entitie.event.info);
    const inviteList = useSelector(state => state.entitie.event.inviteList);
    const subList = useSelector(state => state.entitie.event.subscribeList);

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(infoEvent(id));
        
    }, {})

    useEffect(() => {
        dispatch(listInvitedEvent(id));
        /* dispatch(listSubEvent(id)); */
    }, [])

    
    function hora(){
        // Formating date
        moment().locale('pt-br');
        const inicio = moment(eventInfoList.e.data_inicio); 
        var horaInicio = inicio.format("LT");
        var dataInicio = inicio.format("L");
        const fim = moment(eventInfoList.e.data_fim);
        var horaFim = fim.format("LT");
        var dataFim = fim.format("L");

        return {
            horaInicio,
            dataInicio,
            dataFim,
            horaFim
        };
    }
   
    
    
    return(
        <div className="eventoContainer font-techpot">

                <div className="eventoTopbarContainer">
                    <div className="eventoTopbarFirstRowContainer">
                        <img src={EventoTestImage} alt="EventoTestImage"/>
                    </div>

                    <div className="eventoTopbar-SecondRow-Container">
                        <div className="eventoTopbar-SecondRow-FirstColumn"> 
                            <h3>{eventInfoList.e ? `${hora().dataInicio} - ${hora().horaInicio}` : ""}</h3>
                            <h1>{eventInfoList.e ? firstLetterUppercase(eventInfoList.e.nome) : "Evento"}</h1>
                            <p>Evento {eventInfoList.e ? eventInfoList.e.tipoNome : ""}</p>
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
                            <p>{eventInfoList.e ? 
                                eventInfoList.e.data_fim ? 
                                `${hora().dataInicio} - ${hora().horaInicio} até ${hora().dataFim} - ${hora().horaFim}` 
                                : 
                                `${hora().dataInicio} - ${hora().horaInicio}` 
                            : ""}
                            </p>

                        </div>

                        <div className="eventoBottom-Detalhes-Tipo">
                            <Language style={redIcon}/>
                            <p>Evento {eventInfoList.e ? eventInfoList.e.tipoNome : ""}</p>
                        </div>
                        
                        <div className="eventoBottom-Detalhes-Desc">
                            <p>{eventInfoList.e ? eventInfoList.e.descricao : ""}</p>
                        </div>

                    </div>   

                    <div className="eventoBottom-col-2">
                    
                        <div className="eventoBottom-Pessoas">
                            <h1>Convidados</h1>

                            <div className="eventoBottom-Pessoas-stats">
                                <div className="eventoBottom-Pessoas-stats-vao">
                                    <h2>{subList ? subList.length : "-"}</h2>
                                    <p>VÃO</p>
                                </div>

                                <div className="eventoBottom-Pessoas-stats-confirmadas">
                                    <h2>{inviteList ? inviteList.length : "-"}</h2>
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
                                    <h4>{eventInfoList.e ? firstLetterUppercase(eventInfoList.e.criadorNome) + " " + firstLetterUppercase(eventInfoList.e.criadorSobrenome) : ""}</h4>
                                    <p>{eventInfoList.e ? eventInfoList.e.criadorJob ? firstLetterUppercase(eventInfoList.e.criadorJob) : "" : ""}</p>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>

            
        </div>
    )
}


export default Evento;