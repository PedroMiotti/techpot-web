import React, { Fragment } from 'react'
import './style.css'


// Components
import BottomLine from '../../shared/BottomLine/index'
import UserProfileImg from "../../shared/UserProfileImg/index"

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../../store/_entities/User'

// Helpers
import { firstLetterUppercase } from '../../helpers/UpperFirstLetter';

// Router
import { Link } from "react-router-dom";


const ModalUserPreferences = ({ anchorLeft, anchorTop, onClose }) => {


  const usuarioPerfil = useSelector(state => state.entitie.user.perfil);
  const usuarioId = useSelector(state => state.entitie.user.id)

  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(USER_LOGOUT())
  }


  return (
    <Fragment>
      <div
        className="ModalUserPreferencesContainer font-techpot"
        style={{ top: anchorTop, left: anchorLeft }}
      >

        <div className="ModalUserPreferences-topbar">
          <div className="ModalUserPreferences-topbar-row1">

            <div className="ModalUserPreferencesProfilePicContainer">
              <UserProfileImg />
            </div>

            <div className="ModalUserPreferences-topbar-col2" >
              <h3>{usuarioPerfil.u ? firstLetterUppercase(usuarioPerfil.u.nome) + " " + firstLetterUppercase(usuarioPerfil.u.sobrenome) : "Usuario"}</h3>

              {usuarioPerfil.u ?
                        usuarioPerfil.u.ocupacao ?
                            <p> {firstLetterUppercase(usuarioPerfil.u.ocupacao)}</p>
                            :
                            null
                        :
                        null
                    }
            </div>

            <div></div>

          </div>

          <div className="BotaoMeuPerfilContainer" onClick={onClose}>
            <Link to={`/usuario/perfil/${usuarioId}`} className="BotaoMeuPerfil">Meu perfil</Link>
          </div>

        </div>

        <BottomLine />

        <div className="ModalUserPreferences-bottom" onClick={onClose, logoutUser}>
          <p>Sair</p>
        </div>
      </div>
      <div className="ModalUserPreferences-overlay" onClick={onClose}></div>
    </Fragment>
  );
}



export default ModalUserPreferences;
