import React, { useState, useRef } from 'react'
import './style.css'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createGroup } from '../../../../store/_entities/Group';


// Components
import TechpotInput from '../../../../shared/TechpotInput/index';
import TechpotSelectInput from '../../../../shared/TechpotSelect/index';
import TechpotTextArea from '../../../../shared/TechpotTextArea/index';


const ModalCreateGroup = () => {

    const [nomeInput, setNomeInput] = useState('');
    const [descInput, setDescInput] = useState('');

    const usuarioId = useSelector(state => state.entitie.user.id)

    const privacidadeInput = useRef();

    const dispatch = useDispatch();

    const criarGrupo = (() => {
        let privacyVal = privacidadeInput.current.value;

        dispatch(createGroup(nomeInput, descInput, privacyVal, usuarioId));
    })

    return (
        
            <div className="creategroup-container">
                <div className="creategroup-image-container">

                </div>

                <div className="creategroup-info-container font-techpot">
                    <div className="creategroup-info-nome  modalCreateGroupContainerPadrao">
                        {/* <label>Nome do grupo :</label> */}
                        {/* <input type="text" value={nomeInput} onChange={e => setNomeInput(e.target.value)}/> */}
                        <TechpotInput />
                    </div>

                    <div className="creategroup-info-desc  modalCreateGroupContainerPadrao">
                        {/* <label>Descrição :</label> */}
                        {/* <textarea cols="60" rows="5" value={descInput} onChange={e => setDescInput(e.target.value)}></textarea> */}
                        <TechpotTextArea />

                    </div>

                    <div className="creategroup-info-privacy  modalCreateGroupContainerPadrao">
                        {/* <label>Privacidade :</label>
                        <select ref={privacidadeInput}>
                            <option value='1'>Publico</option>
                            <option value='2'>Privado</option>
                        </select> */}

                        <TechpotSelectInput />
                    </div>
                </div>

                {/* <div className="creategroup-bottom font-techpot">

                    <a className="creategroup-createBtt" onClick={criarGrupo}>Criar</a>
                </div> */}

            </div>

    )
}

export default ModalCreateGroup;
