import React from 'react';


// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// Components
import ModalContainer from '../../shared/ModalContainer/index';
import CreateGroupImage from './components/CreateGroupImage/index';
import CreateGroupForm from './components/CreateGroupForm/index';
import CreateGroupInvite from './components/CreateGroupInvite/index';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        paddingBottom: '20px',

    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: "30px",
    },
}));

function getSteps() {
    return ['Imagem do grupo', 'Informações do grupo', 'Convide amigos'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <CreateGroupImage />;
        case 1:
            return <CreateGroupForm />;
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}

const CreateGroupModal = ({ onClose }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 0;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
        <ModalContainer close={onClose} title="Criar Post">
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
                                <div>
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                        Voltar
              </Button>
                                    {isStepOptional(activeStep) && (
                                        <Button
                                            variant="contained"
                                            style={{ backgroundColor: "#d0094d", color: "#fff" }}
                                            onClick={handleSkip}
                                            className={classes.button}
                                        >
                                            Pular
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: "#d0094d", color: "#fff"}}
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Próximo'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </ModalContainer>
    );
}


export default CreateGroupModal;