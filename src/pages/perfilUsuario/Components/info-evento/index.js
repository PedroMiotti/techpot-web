import React, { Component } from 'react';
import './styles.css';

// Assets
import hackatruck from '../../../../assets/HackaTruck.jpg'

class InfoEvento extends Component {
    render() {
        return(
            <div id="InfoEvento" className="font-techpot">
                <div id="NomeInfoEvento">
                    <h1>EVENTOS</h1>
                </div>
                <div id="VisualEventos">
                    <a href='/' >
                        <div className="eventoConatainer-imageContainer">
                            <img src={hackatruck} alt="Foto de Evento" />
                        </div>
                        <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                    </a>
                    <a href='/' >
                        <div className="eventoConatainer-imageContainer">
                            <img src={hackatruck} alt="Foto de Evento" />
                        </div>
                        <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                    </a>
                    <a href='/' >
                        <div className="eventoConatainer-imageContainer">
                            <img src={hackatruck} alt="Foto de Evento" />
                        </div>
                        <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                    </a>
                    <a href='/' >
                        <div className="eventoConatainer-imageContainer">
                            <img src={hackatruck} alt="Foto de Evento" />
                        </div>
                        <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                    </a>
                    <a href='/' >
                        <div className="eventoConatainer-imageContainer">
                            <img src={hackatruck} alt="Foto de Evento" />
                        </div>
                        <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                    </a>
                    <a href='/' >
                        <div className="eventoConatainer-imageContainer">
                            <img src={hackatruck} alt="Foto de Evento" />
                        </div>
                        <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                    </a>
                    <a href='/' >
                        <div className="eventoConatainer-imageContainer">
                            <img src={hackatruck} alt="Foto de Evento" />
                        </div>
                        <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                    </a>
                    <a href='/' >
                        <div className="eventoConatainer-imageContainer">
                            <img src={hackatruck} alt="Foto de Evento" />
                        </div>
                        <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                    </a>
                    <a href='/' >
                        <div className="eventoConatainer-imageContainer">
                            <img src={hackatruck} alt="Foto de Evento" />
                        </div>
                        <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                    </a>
                    <a href='/' >
                        <div className="eventoConatainer-imageContainer">
                            <img src={hackatruck} alt="Foto de Evento" />
                        </div>
                        <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                    </a>
                </div>
            </div>
        );
    }
}

export default InfoEvento;