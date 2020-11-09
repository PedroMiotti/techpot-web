import React from 'react';
import './styles/index.css';

//Icons
    import { Add, FormatBold } from '@material-ui/icons';

    const icon = {
        color: "#fff",
        fontSize: 30,
        fontWeight: FormatBold
      };

class EventoCriar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            file: null
        }

        this.handleChange = this.handleChange.bind(this)

    }
    handleChange(event) {
        this.setState({
            file: document.getElementById("EventoCriar-urlImg-input").value
        })
    }
    
    render(){
        return(
            <div id="EventoCriar-div-main" class="font-techpot">
                <div id="EventoCriar-div-header">
                    <h1>Criar Evento</h1>
                    <div className="separator"></div>
                </div>
                <div id="EventoCriar-div-wrap">
                    <div id="EventoCriar-div-left">
                        <input id="EventoCriar-nomeEvento-input" placeholder="*Nome do Evento"/>
                        <textarea id="EventoCriar-descEvento-input" placeholder="*Descreva seu evento..."></textarea>
                        <label for="EventoCriar-dataInicio">Início:</label>
                        <input type="date" id="EventoCriar-dataInicio" name="dataInicio"/>
                        <label for="EventoCriar-dataFim">Fim:</label>
                        <input type="date" id="EventoCriar-dataFim" name="dataFim"/>
    
                        <select name="cat" id="EventoCriar-category" placeholder="Categoria"></select>
                    </div>
    
                    <div id="EventoCriar-div-right">
                        <input id="EventoCriar-urlImg-input" placeholder="Url da imagem" onChange={this.handleChange}/>
                        <p>Prévia:</p>
                        <img id="EventoCriar-preview-img" src={this.state.file} />

                        <div id="EventoCriar-criar-btn">
                            <Add style={icon}/>
                            <h2>Confirmar</h2>
                        </div>
                        
    
    
    
                    </div>
    
                </div>
                
            </div>
        );

    }
    
}


export default EventoCriar;