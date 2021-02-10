import React, { useState, useEffect } from 'react';
import './style.css'

// Component
import UserProfileImg from "../../../../../shared/UserProfileImg";
import TechpotInput from '../../../../../shared/TechpotInput';
import TechpotTextArea from '../../../../../shared/TechpotTextArea';
import SnackLoad from '../../../../../shared/Snackload/index'
import SnackMessage from '../../../../../shared/Snackbar/index'

// React Router
import { useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '../../../../../store/_entities/User';

// Material UI
import { PersonOutlineOutlined, LinkedIn, GitHub } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// AntD
import {
    Form,
    Input
} from 'antd';



const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),

    },
}));


const General = () => {

    const classes = useStyles();

    const [form] = Form.useForm();

    const usuarioPerfil = useSelector(state => state.entitie.user.profile);

    const userEditedLoading = useSelector(state => state.entitie.user.loading);
    const userEditedFailed = useSelector(state => state.entitie.user.error);
    const userEditedErrorMessage = useSelector(state => state.entitie.user.errorMessage);
    const userEditedSuccess = useSelector(state => state.entitie.user.success);
    const userEditedSuccessMessage = useSelector(state => state.entitie.user.successMessage);

    const { id } = useParams();

    const [nomeInput, setNomeInput] = useState('');
    const [bioInput, setBioInput] = useState('');
    const [ocupacaoInput, setOcupacaoInput] = useState('');
    const [linkedinInput, setLinkedinInput] = useState('');
    const [githubInput, setGithubInput] = useState('');

    const dispatch = useDispatch();


    const saveUserInfo = formValues => {

        dispatch(editUser(id, formValues))

    }

    useEffect(() => {

        let perfil = usuarioPerfil.u;
        if (perfil) {
            setNomeInput(perfil.name)
            if (perfil.bio) setBioInput(perfil.bio)
            if (perfil.ocupacao) setOcupacaoInput(perfil.occupation)
            if (perfil.linkedin) setLinkedinInput(perfil.linkedin)
            if (perfil.github) setGithubInput(perfil.github)
        }

        return () => {
            setNomeInput(null)
            setBioInput(null)
            setOcupacaoInput(null)
            setLinkedinInput(null)
            setGithubInput(null)
        }

    }, [usuarioPerfil.u])
  // TODO --> Create proper loading 
    if (nomeInput === '') {
        return <h1>Carregando</h1>
    }

    return (
        <>
            <div className="editUserContainer font-techpot">

                <div className="editPhotoContainer editUserContainerPadrao">
                    <div className="editUserContainerPadrao-col1 font-techpot">
                        <h2>Foto de perfil</h2>
                    </div>

                    <div className="editPhotoImage">
                        <UserProfileImg />
                    </div>
                </div>
                <Form
                    form={form}
                    name="editUser"
                    onFinish={saveUserInfo}
                    initialValues={{
                        nome: nomeInput || '',
                        bio: bioInput || "",
                        ocupacao: ocupacaoInput || "",
                        linkedin: linkedinInput || "",
                        github: githubInput || "",
                    }}
                    style={{ width: "100%" }}
                    scrollToFirstError
                >

                    <div className="editNameContainer editUserContainerPadrao">
                        <div className="editUserContainerPadrao-col1">
                            <h2>Nome</h2>
                        </div>

                        <div className="editUserContainerInput-row1">
                            <Form.Item
                                name="nome"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Seu nome é obrigatorio',
                                    },
                                ]}
                            >
                                <TechpotInput placeholder="Nome" icon={<PersonOutlineOutlined />} />
                            </Form.Item>

                            <Form.Item
                                name="sobrenome"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Seu sobrenome é obrigatorio',
                                    },
                                ]}
                            >
                                <TechpotInput placeholder="Sobrenome" icon={<PersonOutlineOutlined />} />
                            </Form.Item>

                        </div>

                    </div>

                    <div className="editBioContainer editUserContainerPadrao">
                        <div className="editUserContainerPadrao-col1">
                            <h2>Bio <span>- Conte-nos mais sobre voce</span></h2>
                        </div>
                        <div className="editUserContainerBio-row1">

                            <Form.Item
                                name="bio"
                            >
                                <TechpotTextArea placeholder="Bio" wordCount="180" />
                            </Form.Item>
                        </div>

                    </div>

                    <div className="editOcupacaoContainer editUserContainerPadrao">
                        <div className="editUserContainerPadrao-col1">
                            <h2>Ocupação </h2>
                        </div>


                        <div className="editUserContainerJob-row1">
                            <Form.Item
                                name="ocupacao"
                            >
                                <TechpotInput placeholder="Ocupação" />
                            </Form.Item>
                        </div>

                    </div>

                    <div className="editOcupacaoContainer editUserContainerPadrao">
                        <div className="editUserContainerPadrao-col1">
                            <h2>Social </h2>
                        </div>


                        <div className="editUserContainerSocial-row1">
                            <Form.Item
                                name="linkedin"
                            >
                                <TechpotInput placeholder="Linkedin" icon={<LinkedIn />} />
                            </Form.Item>
                            <Form.Item
                                name="github"
                            >
                                <TechpotInput placeholder="Github" icon={<GitHub />} />
                            </Form.Item>


                        </div>

                    </div>

                    <div className="editUserBottom">
                        <Form.Item noStyle>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: "#d0094d", color: "#fff" }}
                                className={classes.button}
                                type="submit"
                            >
                                Salvar
                    </Button >
                        </Form.Item>
                    </div>
                </Form>
            </div>

            {userEditedLoading && <SnackLoad show={userEditedLoading} />}

            {userEditedFailed && <SnackMessage message={userEditedErrorMessage} color={"error"} show={userEditedFailed} />}

            {userEditedSuccess && <SnackMessage message={userEditedSuccessMessage} color={"success"} show={userEditedSuccess} />}
        </>

    )

}


export default General;


// onClick={saveUserInfo}
