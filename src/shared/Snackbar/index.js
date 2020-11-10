
import React, { useState } from 'react'

// Style
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const SnackMessage = ({message, color, show}) => {
    const [open, setOpen] = useState(show);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(!show);
    };

    return(
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={color}>
                {message}
            </Alert>
        </Snackbar>
    )
}


export default SnackMessage;