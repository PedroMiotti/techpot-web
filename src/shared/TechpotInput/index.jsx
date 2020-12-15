import React from 'react';
import './style.css'



const TechpotInput = ({ placeholder, value, onChange, icon }) => {


    return (

        <div className="techpotInput-containerGroup">
            <label>{placeholder}</label>
            <div 
                className={`techpotInput-inputControl ${icon ? 'techpotInput-hasIcon' : ''}`}>

                <input type="text" className="techpotInput-input is-fade" value={value} onChange={onChange}/>
                
                {icon &&
                    <div className="techpotInput-inputIcon">
                        {icon}
                    </div>
                }
            </div>
        </div>
    )
}



export default TechpotInput;


