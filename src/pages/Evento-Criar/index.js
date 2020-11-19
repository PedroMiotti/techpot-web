import React, { useState } from 'react';
import './styles/index.css';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createEvent } from '../../store/_entities/Event';

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
    //const [imgInput, setImgInput] = useState('');

    const [ file, setFile ] = useState('');

    const handleChange = () => {

        setFile(document.getElementById("EventoCriar-urlImg-input").value);

    }

    const dispatch = useDispatch();

    const criarEvento = () =>{
        dispatch(createEvent(nomeInput, descInput, dataIniInput, 1, catInput, dataFimInput))

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
                        <input type="date" id="EventoCriar-dataInicio" name="dataInicio" value={dataIniInput} onChange={e => setDataIniInput(e.target.value)}/>
                        <label for="EventoCriar-dataFim">Fim:</label>
                        <input type="date" id="EventoCriar-dataFim" name="dataFim" value={dataFimInput} onChange={e => setDataFimInput(e.target.value)}/>
    
                        {/* <select name="cat" id="EventoCriar-category" placeholder="Categoria" value={catInput} onChange={e => setCatInput(e.target.value)}></select> */}
                        <input name="cat" id="EventoCriar-category" placeholder="Categoria" value={catInput} onChange={e => setCatInput(e.target.value)}></input>
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