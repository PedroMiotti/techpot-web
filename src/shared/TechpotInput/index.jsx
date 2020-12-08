import React from 'react';


// Material UI
import TextField from '@material-ui/core/TextField';


const TechpotInput = ({placeholder, value, onChange}) => {


    return (

        <TextField
            id="filled-secondary"
            label={placeholder}
            variant="filled"
            color="secondary"
            value={value}
            onChange={onChange}
        />

    )
}



export default TechpotInput;


