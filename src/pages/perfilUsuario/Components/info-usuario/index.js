import React from 'react';
import './styles.css';

// Component
import UserProfileImg from "../../../../shared/UserProfileImg/index"

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Helpers
import { firstLetterUppercase } from '../../../../helpers/UpperFirstLetter';

// Router
import { Link } from "react-router-dom";


// Material UI
import Fab from '@material-ui/core/Fab';
import { Edit, GitHub, LinkedIn } from '@material-ui/icons'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "absolute",
        bottom: "20px",
        right: "20px",
    },
}));

const InfoUsuario = () => {
    const classes = useStyles();


    const usuarioPerfil = useSelector(state => state.entitie.user.perfil);
    const usuarioId = useSelector(state => state.entitie.user.id);


    return (
        <div id="InfoUsuario" className="font-techpot">
            <div id="FotoUsuario">
                <UserProfileImg classe="navbarUserProfilePic" />
                <Link to={`/usuario/perfil/editar/${usuarioId}`} style={{ color: '#fff' }}>
                    <Fab color="secondary" aria-label="add" className={classes.fab}>
                        <Edit /> 
                    </Fab>
                </Link>
            </div>


            <div id="DescricaoUsuario">
                <h1>{usuarioPerfil.u ? firstLetterUppercase(usuarioPerfil.u.nome) + " " + firstLetterUppercase(usuarioPerfil.u.sobrenome) : "Usuario"} </h1>
                <p id="NickCat">
                    <p>@{usuarioPerfil.u ? firstLetterUppercase(usuarioPerfil.u.nome) + firstLetterUppercase(usuarioPerfil.u.sobrenome) : "Usuario"}</p>

                    {usuarioPerfil.u ?
                        usuarioPerfil.u.ocupacao ?
                            <p>&middot; {usuarioPerfil.u.ocupacao} </p>
                            :
                            null
                        :
                        null
                    }
                </p>

                <div id="Bio">
                    {usuarioPerfil.u ?
                        usuarioPerfil.u.bio ?
                            <h4>{usuarioPerfil.u.bio}</h4>
                            :
                            <a>Adicionar Biografia</a>
                        :
                        <a>Adicionar Biografia</a>
                    }
                </div>


                <div id="BotaoSocial">
                    {usuarioPerfil.u ?
                        usuarioPerfil.u.linkedin ?
                            <a>
                                <LinkedIn />
                                <h4>{usuarioPerfil.u.linkedin}</h4>
                            </a>
                            :
                            <p>
                                <LinkedIn />
                                <a>Add Linkedin</a>
                            </p>
                        :
                        <a>Add Linkedin</a>
                    }

                    {usuarioPerfil.u ?
                        usuarioPerfil.u.github ?
                            <a>
                                <GitHub />
                                <h4>{usuarioPerfil.u.github}</h4>
                            </a>
                            :
                            <p>
                                <GitHub />
                                <a>Add Gihub</a>
                            </p>
                        :
                        <a>Add Gihub</a>
                    }

                </div>
            </div>
        </div>
    );
}


export default InfoUsuario;