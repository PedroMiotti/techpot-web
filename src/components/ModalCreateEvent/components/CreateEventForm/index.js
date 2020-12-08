import React, { useState, useEffect } from 'react'
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

// AntD
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
//Moment
// import 'moment/locale/pt-br';
// import locale from 'antd/es/date-picker/locale/pt-br';

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


const CreateEventForm = ({ values, nomeInputProp, descInputProp, data_inicioProp, tipoSelectProp, data_fimProp, categoriaSelectInputProp, activeStep, isLastStep, handleBack, handleNext, criarEvento }) => {

    const classes = useStyles();

    const [nomeInput, setNomeInput] = useState(nomeInputProp);
    const [descInput, setDescInput] = useState(descInputProp);
    const [categoriaSelectInput, setCategoriaSelectInput] = useState(categoriaSelectInputProp);
    const [tipoSelectInput, setTipoSelectInput] = useState(tipoSelectProp);
    const [dataIniInput, setDataIniInput] = useState(data_inicioProp);
    const [dataFimInput, setDataFimInput] = useState(data_fimProp);

    const categoriesList = useSelector(state => state.entitie.event.categoriesList);

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


    function onChange(dates, dateStrings) {
        setDataIniInput(dates[0])
        setDataFimInput(dates[1])
    }

    return (
        <>
            <div className="creategroup-container">

                <div className="creategroup-info-container font-techpot">
                    <div className="creategroup-info-nome  modalCreateGroupContainerPadrao">
                        <TechpotInput placeholder={'Titulo do Evento'} value={nomeInput} onChange={e => setNomeInput(e.target.value)} />
                    </div>

                    <div className="creategroup-info-desc  modalCreateGroupContainerPadrao">
                        <TechpotTextArea placeholder={'Descrição do Evento'} value={descInput} onChange={e => setDescInput(e.target.value)} />
                    </div>

                    <div className="createEvent-date  ">

                        <RangePicker placeholder={["Data inicio", "Data Fim"]} value={[dataIniInput, dataFimInput]} onChange={onChange} showTime bordered={false}/>
  
                    </div>

                    <div className="creategroup-info-privacy  modalCreateGroupContainerPadrao">
                        <TechpotSelectInput pad={20} changeCB={(e) => setTipoSelectInput(e.target.value)} placeholder="Tipo" state={tipoSelectInput} child={
                            tipoEventoValues.map((tipo) => (
                                <option key={tipo.value} value={tipo.value}>{tipo.name}</option>
                            ))
                        } />
                    </div>
                    <div className="creategroup-info-privacy  modalCreateGroupContainerPadrao">
                        <TechpotSelectInput pad={20} changeCB={(e) => setCategoriaSelectInput(e.target.value)} placeholder="Categoria" state={categoriaSelectInput} child={
                            categoriesList.map((categoria) => (
                                <option key={categoria.category_id} value={categoria.category_id}>{categoria.category_name}</option>
                            ))
                        } />
                    </div>
                </div>
            </div>
            <div className="CreateGroup-navButtons-Container">
                <Button disabled={activeStep === 0} onClick={() => handleBack({ nomeInputProp: nomeInput, descInputProp: descInput, data_inicioProp: dataIniInput, data_fimProp: dataFimInput, categoriaSelectInputProp: categoriaSelectInput, tipoSelectProp: tipoSelectInput })} className={classes.button}>
                    Voltar
                    </Button>

                <Button
                    variant="contained"
                    style={{ backgroundColor: "#d0094d", color: "#fff" }}
                    onClick={isLastStep ? () => criarEvento({ nomeInputProp: nomeInput, descInputProp: descInput, data_inicioProp: dataIniInput, data_fimProp: dataFimInput, categoriaSelectInputProp: categoriaSelectInput, tipoSelectProp: tipoSelectInput }) : () => handleNext({ nomeInputProp: nomeInput, descInputProp: descInput, data_inicioProp: dataIniInput, data_fimProp: dataFimInput, categoriaSelectInputProp: categoriaSelectInput, tipoSelectProp: tipoSelectInput })}
                    className={classes.button}
                >
                    {isLastStep ? 'Criar' : 'Próximo'}
                </Button>
            </div>
        </>

    )
}

export default CreateEventForm;

