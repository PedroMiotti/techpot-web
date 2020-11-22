import React, { useEffect, useState } from 'react';
import './styles/index.css';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, listCategories, listTypes } from '../../store/_entities/Event';

//Icons
    import { Add, FormatBold } from '@material-ui/icons';


const EventoCriar = () => {

    const icon = {
        color: "#fff",
        fontSize: 30,
        fontWeight: FormatBold
      };

    // Estados
    const [ nomeInput, setNomeInput ] = useState('');
    const [descInput, setDescInput] = useState('');
    const [dataIniInput, setDataIniInput] = useState('');
    const [dataFimInput, setDataFimInput] = useState('');
    const [catInput, setCatInput] = useState('');
    const [typeInput, setTypeInput] = useState('');
    //const [imgInput, setImgInput] = useState('');
    const categoriesList = useSelector(state => state.entitie.event.categoriesList);
    const typesList = useSelector(state => state.entitie.event.typesList);

    const [ file, setFile ] = useState('');

    const handleChange = () => {

        setFile(document.getElementById("EventoCriar-urlImg-input").value);

    }

    //const eventCreateSuccess = useSelector(state => state.entitie.event.success);

    const dispatch = useDispatch();

   useEffect(() => {
        dispatch(listCategories());
   }, []);

   useEffect(()=>{
       dispatch(listTypes());
   }, []);

    const criarEvento = () =>{
        dispatch(createEvent(nomeInput, descInput, dataIniInput, 1, catInput, dataFimInput, typeInput))

    }

    return(

        <div id="EventoCriar-div-main" class="font-techpot">
                <div id="EventoCriar-div-header">
                    <h1>Criar Evento</h1>
                    <div className="separator"></div>
                </div>
                <div id="EventoCriar-div-wrap">
                    <div id="EventoCriar-div-left">
                        <input id="EventoCriar-nomeEvento-input" placeholder="*Nome do Evento" value={nomeInput} onChange={e => setNomeInput(e.target.value)}/>
                        <textarea id="EventoCriar-descEvento-input" placeholder="*Descreva seu evento..." value={descInput} onChange={e => setDescInput(e.target.value)}></textarea>
                        <label for="EventoCriar-dataInicio">Início:</label>
                        <input type="datetime-local" id="EventoCriar-dataInicio" name="dataInicio" value={dataIniInput} onChange={e => setDataIniInput(e.target.value)}/>
                        <label for="EventoCriar-dataFim">Fim:</label>
                        <input type="datetime-local" id="EventoCriar-dataFim" name="dataFim" value={dataFimInput} onChange={e => setDataFimInput(e.target.value)}/>
    
                        
                        
                        <select>
                            {categoriesList.map((categoria) => (
                                <option value={categoria.category_id} onChange={e => setCatInput(e.target.value)}>{categoria.category_name}</option>
                            ))}   
                        </select>

                        <select>
                            {typesList.map((tipo) => (
                                <option value={tipo.eventType_id} onChange={e => setTypeInput(e.target.value)}>{tipo.eventType_name}</option>
                            ))}   
                        </select>

                        
                    </div>
    
                    <div id="EventoCriar-div-right">
                        <input id="EventoCriar-urlImg-input" placeholder="Url da imagem" onChange={handleChange} />
                        <p>Prévia:</p>
                        <img id="EventoCriar-preview-img" src={file} />

                        <button id="EventoCriar-criar-btn" onClick={criarEvento} >
                            <Add style={icon}/>
                            Confirmar
                            
                        </button>
                        

                        

                        
                        
                        
    
    
    
                    </div>
    
                </div>
                
            </div>

    )
}


export default EventoCriar;