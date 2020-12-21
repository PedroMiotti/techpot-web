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

// nomeInputProp, descInputProp, data_inicioProp, tipoSelectProp, data_fimProp, categoriaSelectInputProp

const CreateEventForm = ({ values, eventInfoForm, activeStep, isLastStep, handleBack, handleNext, criarEvento }) => {

    const classes = useStyles();

    const [form] = Form.useForm();

    const [buttonClicked, setButtonClicked] = useState('')

    // const [dataIniInput, setDataIniInput] = useState(data_inicioProp);
    // const [dataFimInput, setDataFimInput] = useState(data_fimProp);

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


    function onChangeDate(dates, dateStrings) {
        return
        // setDataIniInput(dates[0])
        // setDataFimInput(dates[1])
    }

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
                <div className="creategroup-container">

                    <div className="creategroup-info-container font-techpot">
                        <div className="creategroup-info-nome  modalCreateGroupContainerPadrao">
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

                        <div className="creategroup-info-desc  modalCreateGroupContainerPadrao">
                            <Form.Item
                                name="eventDesc"
                                rules={[
                                    {
                                        required: true,
                                        message: 'A descrição do evento é obrigatório',
                                    },
                                ]}

                            >
                                <TechpotTextArea placeholder='Descrição do Evento' wordCount="90" />
                            </Form.Item>
                        </div>

                        <div className="createEvent-date">
                            <Form.Item
                                name="eventDate"
                                rules={[
                                    {
                                        type: 'array',
                                        required: true,
                                        message: 'A data de inicío do evento é obrigatório',
                                    },
                                ]}

                            >
                                <RangePicker placeholder={["Data inicío", "Data Fim"]} onChange={onChangeDate} showTime bordered={false} />
                            </Form.Item>

                            {/* value={[dataIniInput, dataFimInput]} */}

                        </div>

                        <div className="creategroup-info-privacy  modalCreateGroupContainerPadrao">
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
                                        <option key={tipo.value} value={tipo.value}>{tipo.name}</option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="creategroup-info-privacy  modalCreateGroupContainerPadrao">
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
                                        <option key={categoria.category_id} value={categoria.category_id}>{categoria.category_name}</option>
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

export default CreateEventForm;

