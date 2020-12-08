import React from 'react'

import './style.css'

// Icons
import { Close } from '@material-ui/icons';

// Hooks 
import useLockBodyScroll from '../../hooks/useLockBodyScroll'

// React animations
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const ModalContainer = ({ title, close, children }) => {

    useLockBodyScroll();

    return (
        <>
            <Slide top>

                <div className="modalContainer-container">
                    <div className="modalContainer-top font-techpot">
                        <h2 className="font-techpot">{title}</h2>

                        <Close onClick={close} style={{ "cursor": "pointer" }} />

                    </div>

                    {children}

                </div>

            </Slide>
            
            <Fade>
                <div className="modalContainer-overlay" onClick={close}></div>
            </Fade>

        </>
    )
}

export default ModalContainer;
