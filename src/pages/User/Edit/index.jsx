import React, { useState, useEffect } from 'react';
import './style.css'

// Component
import UserProfileImg from "../../../shared/UserProfileImg/index";
import LoadingScreen from '../../../components/LoadingScreen/index';

// React Router
import { Link, useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '../../../store/_entities/User';

// Material UI
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const icon = {
    color: "#fff",
    fontSize: 30,
    cursor: "pointer",
};


const Edit = () => {

    const usuarioPerfil = useSelector(state => state.entitie.user.perfil);

    const { id } = useParams();

    const [nomeInput, setNomeInput] = useState('');
    const [sobrenomeInput, setSobrenomeInput] = useState('');
    const [bioInput, setBioInput] = useState('');
    const [ocupacaoInput, setOcupacaoInput] = useState('');
    const [linkedinInput, setLinkedinInput] = useState('');
    const [githubInput, setGithubInput] = useState('');

    const [updateRender, setUpdateRender] = useState(false);

    const dispatch = useDispatch();


    const saveUserInfo = () => {

        dispatch(editUser(id, nomeInput, sobrenomeInput, bioInput, ocupacaoInput, linkedinInput, githubInput))

    }

    useEffect(() => {

        if (usuarioPerfil.u) {
            let perfil = usuarioPerfil.u;

            setNomeInput(perfil.nome)
            setSobrenomeInput(perfil.sobrenome)
            if (perfil.bio) setBioInput(perfil.bio)
            if (perfil.ocupacao) setOcupacaoInput(perfil.ocupacao)
            if (perfil.linkedin) setLinkedinInput(perfil.linkedin)
            if (perfil.github) setGithubInput(perfil.github)
        }

        return () => {
            setNomeInput(null)
            setSobrenomeInput(null)
            setBioInput(null)
            setOcupacaoInput(null)
            setLinkedinInput(null)
            setGithubInput(null)
        }

    }, [usuarioPerfil.u])


    return (


        <div className="editUserContainer font-techpot">

            <div className="editUserTitleBar">
                <Link to={`/usuario/perfil/${id}`}><ArrowBackIcon style={icon} /></Link>
                <h1>Editar perfil</h1>
            </div>

            <div className="editPhotoContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1 font-techpot">
                    <h2>Foto de perfil</h2>
                </div>

                <div className="editPhotoImage">
                    <UserProfileImg />
                </div>
            </div>

            <div className="editNameContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1">
                    <h2>Nome</h2>
                </div>

                <div className="editUserContainerInput-row1">
                    <input placeholder="Nome" value={nomeInput} onChange={e => setNomeInput(e.target.value)} />
                    <input placeholder="Sobrenome" value={sobrenomeInput} onChange={e => setSobrenomeInput(e.target.value)} />

                </div>

            </div>

            <div className="editBioContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1">
                    <h2>Bio <span>- Conte-nos mais sobre voce</span></h2>
                </div>


                <div className="editUserContainerBio-row1">
                    <textarea value={bioInput} onChange={e => setBioInput(e.target.value)}>

                    </textarea>
                </div>

            </div>

            <div className="editOcupacaoContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1">
                    <h2>Ocupação </h2>
                </div>


                <div className="editUserContainerJob-row1">
                    <input placeholder="Ocupação" value={ocupacaoInput} onChange={e => setOcupacaoInput(e.target.value)} />
                </div>

            </div>

            <div className="editOcupacaoContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1">
                    <h2>Social </h2>
                </div>


                <div className="editUserContainerSocial-row1">
                    <input placeholder="Linkedin" value={linkedinInput} onChange={e => setLinkedinInput(e.target.value)} />
                    <input placeholder="Github" value={githubInput} onChange={e => setGithubInput(e.target.value)} />

                </div>

            </div>

            <button onClick={saveUserInfo}> Salvar </button>

        </div>

    )

}


export default Edit;