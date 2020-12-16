import React, { useState, useEffect } from 'react';
import './style.css'

// Component
import UserProfileImg from "../../../../../shared/UserProfileImg";
import TechpotInput from '../../../../../shared/TechpotInput';
import TechpotTextArea from '../../../../../shared/TechpotTextArea';


// React Router
import { useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '../../../../../store/_entities/User';

// Material UI
import { PersonOutlineOutlined, LinkedIn, GitHub } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),

    },
}));

const icon = {
    color: "#000",
    fontSize: 30,
    cursor: "pointer",
};


const General = () => {

    const classes = useStyles();

    const usuarioPerfil = useSelector(state => state.entitie.user.profile);

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

        let perfil = usuarioPerfil.u;
        if (perfil) {
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
                    <TechpotInput value={nomeInput} onChange={e => setNomeInput(e.target.value)} placeholder="Nome" icon={<PersonOutlineOutlined />} />
                    <TechpotInput placeholder="Sobrenome" value={sobrenomeInput} onChange={e => setSobrenomeInput(e.target.value)} icon={<PersonOutlineOutlined />} />
                </div>

            </div>

            <div className="editBioContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1">
                    <h2>Bio <span>- Conte-nos mais sobre voce</span></h2>
                </div>
                <div className="editUserContainerBio-row1">

                    <TechpotTextArea placeholder="Bio" value={bioInput} onChange={e => setBioInput(e.target.value)} wordCount="180" />

                </div>

            </div>

            <div className="editOcupacaoContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1">
                    <h2>Ocupação </h2>
                </div>


                <div className="editUserContainerJob-row1">
                    <TechpotInput placeholder="Ocupação" value={ocupacaoInput} onChange={e => setOcupacaoInput(e.target.value)} />
                </div>

            </div>

            <div className="editOcupacaoContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1">
                    <h2>Social </h2>
                </div>


                <div className="editUserContainerSocial-row1">
                    <TechpotInput placeholder="Linkedin" value={linkedinInput} onChange={e => setLinkedinInput(e.target.value)} icon={<LinkedIn />} />
                    <TechpotInput placeholder="Github" value={githubInput} onChange={e => setGithubInput(e.target.value)} icon={<GitHub />} />

                </div>

            </div>

            <Button
                variant="contained"
                style={{ backgroundColor: "#d0094d", color: "#fff" }}
                onClick={saveUserInfo}
                className={classes.button}
            >
                Salvar
            </Button >

        </div>

    )

}


export default General;