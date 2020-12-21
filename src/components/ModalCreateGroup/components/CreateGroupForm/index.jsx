import React, { useState } from 'react'
import './style.css'

// Components
import TechpotInput from '../../../../shared/TechpotInput';
import TechpotTextArea from '../../../../shared/TechpotTextArea';

// Materia UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { GroupOutlined } from '@material-ui/icons';

// AntD
import { Form, Select } from 'antd';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        paddingBottom: '20px',

    },
    button: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),

    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: "30px",
    },
}));


const CreateGroupForm = ({ values, groupInfoForm, activeStep, isLastStep, handleBack, handleNext, criarGrupo }) => {

    const classes = useStyles();

    const [form] = Form.useForm();

    const [buttonClicked, setButtonClicked] = useState('')

    const onFinish = formValues => {
        let formData = { 'groupInfoForm': formValues };
        if (buttonClicked === 'next') {
            isLastStep ? criarGrupo(formData) : handleNext(formData)
        }
        else {
            handleBack(formData)
        }
    }

    const privacyValues = [
        {
            "value": 1,
            "name": "Publico"
        },
        {
            "value": 2,
            "name": "Privado"
        },

    ];

    return (
        <>
            <Form
                form={form}
                name="createGroup"
                onFinish={onFinish}
                initialValues={groupInfoForm ? {
                    nomeGrupo: groupInfoForm.nomeGrupo || '',
                    descGrupo: groupInfoForm.descGrupo || '',
                    tipoGrupo: groupInfoForm.tipoGrupo || '',
                } : null}
                style={{ width: "100%" }}
                scrollToFirstError
            >
                <div className="creategroup-container">

                    <div className="creategroup-info-container font-techpot">
                        <div className="creategroup-info-nome  modalCreateGroupContainerPadrao">
                            <Form.Item
                                name="nomeGrupo"
                                rules={[
                                    {
                                        required: true,
                                        message: 'O nome do grupo é obrigatorio',
                                    },
                                ]}
                            >
                                <TechpotInput placeholder='Nome do grupo' icon={<GroupOutlined />} />
                            </Form.Item>
                        </div>

                        <div className="creategroup-info-desc  modalCreateGroupContainerPadrao">
                            <Form.Item
                                name="descGrupo"
                                rules={[
                                    {
                                        required: true,
                                        message: 'A descrição do grupo é obrigatorio',
                                    },
                                ]}

                            >
                                <TechpotTextArea placeholder='Descrição do grupo' wordCount="120" />
                            </Form.Item>

                        </div>

                        <div className="creategroup-info-privacy  modalCreateGroupContainerPadrao">
                            <Form.Item
                                name="tipoGrupo"
                                rules={[
                                    {
                                        required: true,
                                        message: 'O tipo de privacidade do grupo é obrigatorio',
                                    },
                                ]}
                            >

                                <Select placeholder="Privacidade" size="large">
                                    {privacyValues.map((tipo) => (
                                        <Select.Option className="font-techpot" key={tipo.value} value={tipo.value}>{tipo.name}</Select.Option>
                                    ))}
                                </Select>

                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="CreateGroup-navButtons-Container">
                    <Button type="submit" disabled={activeStep === 0} onClick={() => setButtonClicked('back')} className={classes.button}>
                        Voltar
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        style={{ backgroundColor: "#d0094d", color: "#fff" }}
                        onClick={() => setButtonClicked('next')}
                        className={classes.button}
                    >
                        {isLastStep ? 'Criar' : 'Próximo'}
                    </Button>

                </div>
            </Form>
        </>

    )
}

export default CreateGroupForm;

