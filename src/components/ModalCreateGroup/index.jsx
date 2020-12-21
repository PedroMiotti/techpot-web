import React, { useState } from 'react';


// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createGroup, listGroup } from '../../store/_entities/Group';


// Components
import ModalContainer from '../../shared/ModalContainer/index';

import CreateGroupImage from './components/CreateGroupImage/index';
import CreateGroupForm from './components/CreateGroupForm/index';
import CreateGroupInvite from './components/CreateGroupInvite/index';
import { createAsyncThunk } from '@reduxjs/toolkit';




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

function getSteps() {
    return ['Imagem do grupo', 'Informações do grupo', 'Convide amigos'];
}


const CreateGroupStepper = ({ onClose, imgSrcInput, groupInfoForm }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const steps = getSteps();

    const [formValues, setFormValues] = useState({
        imgSrcInput, groupInfoForm
    });


    // Usuario
    const usuarioId = useSelector(state => state.entitie.user.id)

    const dispatch = useDispatch();

    const criarGrupo = (async () => {

        let { nomeGrupo, descGrupo, tipoGrupo } = formValues.groupInfoForm;

        await dispatch(createGroup(nomeGrupo, descGrupo, tipoGrupo, usuarioId))

        onClose();
        await dispatch(listGroup(usuarioId));

    })

    const getStepContent = (step) => {
        const isLastStep = (activeStep === steps.length - 1);
        switch (step) {
            case 0:
                return <CreateGroupImage {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext} criarGrupo={criarGrupo} />;
            case 1:
                return <CreateGroupForm {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext} criarGrupo={criarGrupo} />;
            case 2:
                return <CreateGroupInvite {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext} criarGrupo={criarGrupo} />;
            default:
                return 'Unknown step';
        }
    }

    const isStepOptional = (step) => {
        return step === 3;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = (newValues) => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setFormValues({ ...formValues, ...newValues });
        setActiveStep(activeStep + 1);
        setSkipped(newSkipped);

    };

    const handleBack = (newValues) => {
        setFormValues({ ...formValues, ...newValues });
        setActiveStep(activeStep - 1);
    };


    return (
        <ModalContainer close={onClose} title="Criar Grupo">
            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Opcional</Typography>;
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>

                    <div>
                        <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                    </div>

                </div>
            </div>
        </ModalContainer>
    );
}


export default CreateGroupStepper;