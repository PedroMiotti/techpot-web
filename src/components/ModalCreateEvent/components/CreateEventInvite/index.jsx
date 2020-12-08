import React, { useState } from 'react'
import './style.css'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createGroup } from '../../../../store/_entities/Group';


// Components
import TechpotInput from '../../../../shared/TechpotInput/index';
import TechpotSelectInput from '../../../../shared/TechpotSelect/index';
import TechpotTextArea from '../../../../shared/TechpotTextArea/index';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


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



const CreateEventInvite = ({ values, activeStep, isLastStep, handleBack, handleNext, criarEvento }) => {

    const classes = useStyles();


    const privacyValues = [
        {
            "value": 0,
            "name": "Privado"
        },
        {
            "value": 1,
            "name": "Publico"
        },

    ]

    return (

        <div className="creategroup-container">

            <div className="modalCreateGroupContainerPadrao">
                <TechpotSelectInput pad={20} placeholder="Amigos" child={
                    privacyValues.map((tipo) => (
                        <option key={tipo.value} value={tipo.value}>{tipo.name}</option>
                    ))
                } />

            </div>
            <div className="CreateGroup-navButtons-Container">
                <Button disabled={activeStep === 1} onClick={() => handleBack(values)} className={classes.button}>
                    Voltar
                    </Button>

                <Button
                    variant="contained"
                    style={{ backgroundColor: "#d0094d", color: "#fff" }}
                    onClick={isLastStep ? () => criarEvento(values) : () => handleNext(values)}
                    className={classes.button}
                >
                    {isLastStep ? 'Criar' : 'Próximo'}
                </Button>
            </div>
        </div>

    )
}

export default CreateEventInvite;
