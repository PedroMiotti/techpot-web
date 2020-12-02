import React, { useEffect, useState, useRef } from 'react';
import './styles/index.css';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, listCategories, listTypes } from '../../store/_entities/Event';

//Icons
import { Add, FormatBold } from '@material-ui/icons';

// Components
import SnackMessage from '../../shared/Snackbar/index';



const EventoCriar = () => {

    const icon = {
        color: "#fff",
        fontSize: 30,
        fontWeight: FormatBold
    };

    // Estados
    const [nomeInput, setNomeInput] = useState('');
    const [descInput, setDescInput] = useState('');
    const [dataIniInput, setDataIniInput] = useState('');
    const [dataFimInput, setDataFimInput] = useState('');
    
    const eventCreatedSuccess = useSelector(state => state.entitie.event.success);
    const eventCreatedSuccessMessage = useSelector(state => state.entitie.event.successMessage);
    //
    const [showSnack, setSnack] = useState(false);
    //const [imgInput, setImgInput] = useState('');

    // Hook useRef = faz um referencia do objeto, tipo dar um $('classe').val() no jquery
    const typeInput = useRef();
    const catInput = useRef();

    const categoriesList = useSelector(state => state.entitie.event.categoriesList);
    const typesList = useSelector(state => state.entitie.event.typesList);
    const criadorId = useSelector(state => state.entitie.user.id);
    const eventCreatedErrorMessage = useSelector(state => state.entitie.event.errorMessage);
    const eventCreatedError = useSelector(state => state.entitie.event.error);


    const [file, setFile] = useState('');

    const handleChange = () => {

        setFile(document.getElementById("EventoCriar-urlImg-input").value);

    }

    

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(listTypes());
        dispatch(listCategories());

    }, []);

    const Snackbar = () => {
        return(
            <div>
                {eventCreatedError && <SnackMessage message={eventCreatedErrorMessage} color={"error"} show={eventCreatedError} />}
                {eventCreatedSuccess && <SnackMessage message={eventCreatedSuccessMessage} color={"success"} show={eventCreatedSuccess}/>}
            </div>
        )
    }

    const criarEvento = () => {
        let categoriaInput = catInput.current.value;
        let tipoInput = typeInput.current.value;

        dispatch(createEvent(nomeInput, descInput, dataIniInput, 1, categoriaInput, dataFimInput, tipoInput, criadorId))

        setSnack(true);
    }

    return (

        <div id="EventoCriar-div-main" class="font-techpot">
            <div id="EventoCriar-div-header">
                <h1>Criar Evento</h1>
                <div className="separator"></div>
            </div>
            <div id="EventoCriar-div-wrap">
                <div id="EventoCriar-div-left">
                    <input id="EventoCriar-nomeEvento-input" placeholder="*Nome do Evento" value={nomeInput} onChange={e => setNomeInput(e.target.value)} />
                    <textarea id="EventoCriar-descEvento-input" placeholder="*Descreva seu evento..." value={descInput} onChange={e => setDescInput(e.target.value)}></textarea>
                    <label for="EventoCriar-dataInicio">Início:</label>
                    <input type="datetime-local" id="EventoCriar-dataInicio" name="dataInicio" value={dataIniInput} onChange={e => setDataIniInput(e.target.value)} />
                    <label for="EventoCriar-dataFim">Fim:</label>
                    <input type="datetime-local" id="EventoCriar-dataFim" name="dataFim" value={dataFimInput} onChange={e => setDataFimInput(e.target.value)} />



                    <select ref={catInput}>
                        {categoriesList.map((categoria) => (
                            <option key={categoria.category_id}  value={categoria.category_id} >{categoria.category_name}</option>
                        ))}
                    </select>

                    <select ref={typeInput}>

                        {typesList.map((tipo) => (
                            <option key={tipo.eventType_id} value={tipo.eventType_id} >{tipo.eventType_name}</option>
                        ))}

                    </select>


                </div>

                <div id="EventoCriar-div-right">
                    <input id="EventoCriar-urlImg-input" placeholder="Url da imagem" onChange={handleChange} />
                    <p>Prévia:</p>
                    <img id="EventoCriar-preview-img" src={file} />

                    <button id="EventoCriar-criar-btn" onClick={criarEvento} >
                        <Add style={icon} />
                            Confirmar

                        </button>

                </div>

                
            </div>

            {showSnack ? <Snackbar /> : null}

        </div>

        

    )
}




export default EventoCriar;