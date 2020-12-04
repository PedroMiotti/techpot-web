import React, { useState, useEffect } from 'react';


// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, listCategories, listEvent } from '../../store/_entities/Event';


// Components
import ModalContainer from '../../shared/ModalContainer/index';
import CreateEventImage from './components/CreateEventImage/index';
import CreateEventForm from './components/CreateEventForm/index';
import CreateEventInvite from './components/CreateEventInvite/index';

// Moment
import * as moment from 'moment';


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
    return ['Imagem do evento', 'Informações do evento', 'Convide amigos'];
}



const CreateGroupModal = ({ onClose, imgSrcInput, nomeInputProp, descInputProp, data_inicioProp, tipoSelectProp, data_fimProp, categoriaSelectInputProp }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const steps = getSteps();

    const [formValues, setFormValues] = useState({
        imgSrcInput, nomeInputProp, descInputProp, data_inicioProp, tipoSelectProp, data_fimProp, categoriaSelectInputProp
    });


    // Usuario
    const usuarioId = useSelector(state => state.entitie.user.id)

    // Evento
    const eventCreatedSuccess = useSelector(state => state.entitie.event.success);

    const dispatch = useDispatch();

    const criarEvento = (() => {
        let dataInicioISO = moment(formValues.data_inicioProp).format('YYYY-MM-DD HH:mm:ss');
        let dataFimISO = moment(formValues.data_fimProp).format('YYYY-MM-DD HH:mm:ss');

        dispatch(createEvent(formValues.nomeInputProp, formValues.descInputProp, dataInicioISO, 1, formValues.categoriaSelectInputProp, dataFimISO, formValues.tipoSelectProp, usuarioId))

        if (!eventCreatedSuccess) {
            onClose();
            dispatch(listEvent());
        }

    })

    useEffect(() => {

        dispatch(listCategories());

    }, []);


    const getStepContent = (step) => {
        const isLastStep = (activeStep === steps.length - 1);
        switch (step) {
            case 0:
                return <CreateEventImage {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext} criarEvento={criarEvento} />;
            case 1:
                return <CreateEventForm {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext} criarEvento={criarEvento} />;
            case 2:
                return <CreateEventInvite {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext} criarEvento={criarEvento} />;
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

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("Ops ! Esse passo não é opcional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <ModalContainer close={onClose} title="Criar Evento">
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
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
                            </Button>
                        </div>
                    ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

                            </div>
                        )}
                </div>
            </div>
        </ModalContainer>
    );
}


export default CreateGroupModal;