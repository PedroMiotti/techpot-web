import React from 'react'
import './style.css'


const SectionContainer = ({titulo, child}) => {
    return (
        <div className="sectionContainer-container font-techpot">

            <div className="sectionContainer-titulo">
                <h1>{titulo}</h1>
            </div>

            <div className="sectionContainer-body">
                
                {child}

            </div>
        </div>
    )
}

export default SectionContainer
