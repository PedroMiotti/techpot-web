import React, { useState, useEffect } from 'react'
import './style.css'

// Components
import TechpotInput from '../../../../shared/TechpotInput/index';
import TechpotSelectInput from '../../../../shared/TechpotSelect/index';
import TechpotTextArea from '../../../../shared/TechpotTextArea/index';

// Materia UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { GroupOutlined } from '@material-ui/icons';



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


const CreateGroupForm = ({ values, nomeInputProp, descInputProp, groupSelectInputProp, activeStep, isLastStep, handleBack, handleNext, criarGrupo }) => {

    const classes = useStyles();

    const [nomeInput, setNomeInput] = useState(nomeInputProp);
    const [descInput, setDescInput] = useState(descInputProp);
    const [groupSelectInput, setGroupSelectInput] = useState(groupSelectInputProp);

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
            <div className="creategroup-container">

                <div className="creategroup-info-container font-techpot">
                    <div className="creategroup-info-nome  modalCreateGroupContainerPadrao">
                        <TechpotInput placeholder={'Nome do grupo'} value={nomeInput} onChange={e => setNomeInput(e.target.value)} icon={<GroupOutlined />}/>
                    </div>

                    <div className="creategroup-info-desc  modalCreateGroupContainerPadrao">
                        <TechpotTextArea placeholder={'Descrição do grupo'} value={descInput} onChange={e => setDescInput(e.target.value)} wordCount="255" />

                    </div>

                    <div className="creategroup-info-privacy  modalCreateGroupContainerPadrao">
                        <TechpotSelectInput pad={20} changeCB={(e) => setGroupSelectInput(e.target.value)} placeholder="Privacidade" state={groupSelectInput} child={
                            privacyValues.map((tipo) => (
                                <option key={tipo.value} value={tipo.value}>{tipo.name}</option>
                            ))
                        } />
                    </div>
                </div>
            </div>
            <div className="CreateGroup-navButtons-Container">
                <Button disabled={activeStep === 0} onClick={() => handleBack({ nomeInputProp: nomeInput, descInputProp: descInput, groupSelectInputProp: groupSelectInput })} className={classes.button}>
                    Voltar
                    </Button>

                <Button
                    variant="contained"
                    style={{ backgroundColor: "#d0094d", color: "#fff" }}
                    onClick={isLastStep ? () => criarGrupo({ nomeInputProp: nomeInput, descInputProp: descInput, groupSelectInputProp: groupSelectInput }) : () => handleNext({ nomeInputProp: nomeInput, descInputProp: descInput, groupSelectInputProp: groupSelectInput })}
                    className={classes.button}
                >
                    {isLastStep ? 'Criar' : 'Próximo'}
                </Button>
            </div>
        </>

    )
}

export default CreateGroupForm;

