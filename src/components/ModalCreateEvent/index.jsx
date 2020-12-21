import React, { useState, useEffect } from 'react';


// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, listCategories, listEvent } from '../../store/_entities/Event';


// Components
import ModalContainer from '../../shared/ModalContainer/index';
import CreateEventImage from './components/CreateEventImage/index';
import CreateEventForm from './components/CreateEventForm/index';
import CreateEventInvite from './components/CreateEventInvite/index';


// Helpers
import { DateFormatter } from '../../helpers/dataFormatter';


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



const CreateGroupModal = ({ onClose, imgSrcInput, eventInfoForm }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const steps = getSteps();

    const [formValues, setFormValues] = useState({
        imgSrcInput, eventInfoForm
    });


    // Usuario
    const usuarioId = useSelector(state => state.entitie.user.id)

    const dispatch = useDispatch();

    const criarEvento = (async () => {

        let { eventName, eventDesc, eventType, eventCategory, eventDate } = formValues.eventInfoForm;

        const dataInicio = new DateFormatter(eventDate[0]);
        let dataInicioISO = dataInicio.toSQLFormat();

        const dataFim = new DateFormatter(eventDate[1]);
        let dataFimISO = dataFim.toSQLFormat();

        await dispatch(createEvent(eventName, eventDesc, dataInicioISO, 1, eventCategory, dataFimISO, eventType, usuarioId))

        onClose();
        await dispatch(listEvent());

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
                <Stepper activeStep={activeStep} alternativeLabel>
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


export default CreateGroupModal;