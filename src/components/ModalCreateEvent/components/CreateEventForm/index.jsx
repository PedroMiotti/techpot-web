import React, { useState } from 'react'
import './style.css'

// Components
import TechpotInput from '../../../../shared/TechpotInput/index';
import TechpotSelectInput from '../../../../shared/TechpotSelect/index';
import TechpotTextArea from '../../../../shared/TechpotTextArea/index';

// Redux
import { useSelector } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Today } from '@material-ui/icons';

// AntD
import { Form, Select, DatePicker } from 'antd';
const { RangePicker } = DatePicker;

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

const CreateEventForm = ({ values, eventInfoForm, activeStep, isLastStep, handleBack, handleNext, criarEvento }) => {

    const classes = useStyles();

    const [form] = Form.useForm();

    const [buttonClicked, setButtonClicked] = useState('');

    const categoriesList = useSelector(state => state.entitie.event.categoriesList);

    const onFinish = formValues => {
        let formData = { 'eventInfoForm': formValues };
        if (buttonClicked === 'next') {
            isLastStep ? criarEvento(formData) : handleNext(formData)
        }
        else {
            handleBack(formData)
        }
    }

    const tipoEventoValues = [
        {
            "value": 1,
            "name": "Online"
        },
        {
            "value": 2,
            "name": "Presencial"
        },

    ];


    return (
        <>
            <Form
                form={form}
                name="createEvent"
                onFinish={onFinish}
                initialValues={eventInfoForm ? {
                    eventName: eventInfoForm.eventName || '',
                    eventDesc: eventInfoForm.eventDesc || '',
                    eventType: eventInfoForm.eventType || '',
                    eventCategory: eventInfoForm.eventCategory || '',
                    eventDate: eventInfoForm.eventDate || '',
                } : null}
                style={{ width: "100%" }}
                scrollToFirstError
            >
                <div className="createEvent-container">

                    <div className="createEvent-info-container font-techpot">
                        <div className="createEvent-info-nome  modalcreateEventContainerPadrao">
                            <Form.Item
                                name="eventName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'O nome do evento é obrigatório',
                                    },
                                ]}

                            >
                                <TechpotInput placeholder='Titulo do Evento' icon={<Today />} />
                            </Form.Item>
                        </div>

                        <div className="createEvent-info-desc  modalcreateEventContainerPadrao">
                            <Form.Item
                                name="eventDesc"
                                rules={[
                                    {
                                        required: true,
                                        message: 'A descrição do evento é obrigatório',
                                        max: 90
                                    },
                                ]}

                            >
                                <TechpotTextArea placeholder='Descrição do Evento' wordCount="90" />
                            </Form.Item>
                        </div>

                        <div className="createEvent-date-container">
                            <Form.Item
                                name="eventDate"
                                rules={[
                                    {
                                        type: 'array',
                                        required: true,
                                        message: 'A data do evento é obrigatório',
                                    },
                                ]}

                            >
                                <div className="createEvent-date">
                                    <RangePicker placeholder={["Data inicío", "Data Fim"]} showTime bordered={false} />
                                </div>
                            </Form.Item>

                        </div>

                        <div className="createEvent-info-privacy  modalcreateEventContainerPadrao">
                            <Form.Item
                                name="eventType"
                                rules={[
                                    {
                                        required: true,
                                        message: 'O tipo do evento é obrigatório',
                                    },
                                ]}

                            >
                                <Select placeholder="Tipo" size="large">
                                    {tipoEventoValues.map((tipo) => (
                                        <Select.Option className="font-techpot" key={tipo.value} value={tipo.value}>{tipo.name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="createEvent-info-privacy  modalcreateEventContainerPadrao">
                            <Form.Item
                                name="eventCategory"
                                rules={[
                                    {
                                        required: true,
                                        message: 'A categoria do evento é obrigatório',
                                    },
                                ]}

                            >
                                <Select placeholder="Categoria" size="large">
                                    {categoriesList.map((categoria) => (
                                        <Select.Option className="font-techpot" key={categoria.category_id} value={categoria.category_id}>{categoria.category_name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="createEvent-navButtons-Container">
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

export default CreateEventForm;

