import React from 'react';


// Material UI
import TextField from '@material-ui/core/TextField';


const TechpotTextArea = () => {


    return (

        <TextField
            id="standard-multiline-static"
            label="Descrição do grupo"
            multiline
            rows={4}
            variant="filled"
            color="secondary"
        />

    )
}



export default TechpotTextArea;


