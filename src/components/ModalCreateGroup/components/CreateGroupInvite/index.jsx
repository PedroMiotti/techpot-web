import React from 'react'
import './style.css'


// Components
import TechpotSelectInput from '../../../../shared/TechpotSelect/index';

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



const CreateGroupInvite = ({ values, nomeInputProp, descInputProp, groupSelectInputProp, activeStep, isLastStep, handleBack, handleNext, criarGrupo }) => {

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
                <TechpotSelectInput placeholder="Privacidade">

                    {privacyValues.map((tipo) => (
                        <option className="font-techpot" key={tipo.value} value={tipo.value}>{tipo.name}</option>
                    ))}

                </TechpotSelectInput>

            </div>
            <div className="CreateGroup-navButtons-Container">
                <Button disabled={activeStep === 1} onClick={() => handleBack(values)} className={classes.button}>
                    Voltar
                    </Button>

                <Button
                    variant="contained"
                    style={{ backgroundColor: "#d0094d", color: "#fff" }}
                    onClick={isLastStep ? () => criarGrupo(values) : () => handleNext(values)}
                    className={classes.button}
                >
                    {isLastStep ? 'Criar' : 'Próximo'}
                </Button>
            </div>
        </div>

    )
}

export default CreateGroupInvite;
