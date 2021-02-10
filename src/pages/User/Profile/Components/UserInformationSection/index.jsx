import React from 'react';
import './styles.css';

// Component
import UserProfileImg from "../../../../../shared/UserProfileImg/index"


// Helpers
import { firstLetterUppercase } from '../../../../../helpers/UpperFirstLetter';
import { formatedUserName } from '../../../../../helpers/formatUserName';
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

const InfoUsuario = ({ usuarioPerfil, usuarioId, editPermission }) => {
    const classes = useStyles();

    return (
        <div id="InfoUsuario" className="font-techpot">
            <div id="FotoUsuario">
                <UserProfileImg />
                {editPermission &&
                    <Link to={`/usuario/perfil/editar/${usuarioId}`} style={{ color: '#fff' }}>
                        <Fab color="secondary" aria-label="add" className={classes.fab}>
                            <Edit />
                        </Fab>
                    </Link>
                }
            </div>


            <div id="DescricaoUsuario">
                <h1>{usuarioPerfil.u ? formatedUserName(usuarioPerfil.u.name)  : "Usuario"} </h1>

                <div id="NickCat">
                    <p>@{usuarioPerfil.u ? firstLetterUppercase(usuarioPerfil.u.username)  : "Usuario"}</p>

                    {usuarioPerfil.u ?
                        usuarioPerfil.u.occupation ?
                            <p>&middot; {usuarioPerfil.u.occupation} </p>
                            :
                            null
                        :
                        null
                    }
                </div>

                <div id="Bio">
                    {usuarioPerfil.u ?
                        usuarioPerfil.u.bio ?
                            <h4>{usuarioPerfil.u.bio}</h4>
                            :
                            <Link to={`/usuario/perfil/editar/${usuarioId}`} >Add Bio</Link>
                        :
                        <Link to={`/usuario/perfil/editar/${usuarioId}`} >Add Bio</Link>
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
                                <Link to={`/usuario/perfil/editar/${usuarioId}`} >Add Linkedin</Link>
                            </p>
                        :

                        <Link to={`/usuario/perfil/editar/${usuarioId}`} >Add Linkedin</Link>
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
                                <Link to={`/usuario/perfil/editar/${usuarioId}`} >Add Gihub</Link>
                            </p>
                        :
                        <Link to={`/usuario/perfil/editar/${usuarioId}`} >Add Gihub</Link>
                    }

                </div>
            </div>
        </div>
    );
}


export default InfoUsuario;
