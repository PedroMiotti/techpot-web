import React from 'react'

import './style.css'

// Icons
import { Close } from '@material-ui/icons';

// Hooks 
import useLockBodyScroll from '../../hooks/useLockBodyScroll'


const ModalContainer = ({ title, close, children }) => {

    useLockBodyScroll();

    return (
        <>
            <div className="modalContainer-container">
                <div className="modalContainer-top font-techpot">
                    <h2 className="font-techpot">{title}</h2>

                    <Close onClick={close} style={{ "cursor": "pointer" }} />

                </div>

                {children}

            </div>

            <div className="modalContainer-overlay" onClick={close}></div>

        </>
    )
}

export default ModalContainer;
