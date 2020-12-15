import React, { useEffect, useState } from 'react';
import './style.css'



const TechpotTextArea = ({ placeholder, value, onChange, icon, wordCount }) => {


    const [textLength, setTextLength] = useState(0);


    const charCount = (e) => {

        let current = e.target.value;
        let counter = current.length;

        setTextLength(counter);

    }

    return (

        <div className="TechpotTextArea-containerGroup">
            <label>{placeholder}</label>
            <div
                className={`TechpotTextArea-inputControl ${icon ? 'TechpotTextArea-hasIcon' : ''}`}>

                <textarea maxLength={wordCount} style={wordCount ? { resize: 'none', height: `calc(${wordCount}px / 2)` } : { resize: 'vertical' }} type="text" className="TechpotTextArea-input is-fade" value={value} onChange={wordCount ? (e) => { onChange(e); charCount(e); } : onChange} />

                {icon &&
                    <div className="TechpotTextArea-inputIcon">
                        {icon}
                    </div>
                }

            </div>

            {wordCount &&
                <div style={{ textAlign: 'right', width: '100%' }}>
                    <label>{textLength}/{wordCount}</label>
                </div>
            }

        </div>
    )
}



export default TechpotTextArea;


