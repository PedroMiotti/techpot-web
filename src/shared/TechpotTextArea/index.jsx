import React from 'react';


// Material UI
import TextField from '@material-ui/core/TextField';


const TechpotTextArea = ({ placeholder, value, onChange }) => {


    return (

        <TextField
            id="standard-multiline-static"
            label={placeholder}
            multiline
            rows={4}
            variant="filled"
            color="secondary"
            value={value}
            onChange={onChange}
        />

    )
}



export default TechpotTextArea;


