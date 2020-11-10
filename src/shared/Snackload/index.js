
import React, { useState } from 'react'

// Style
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';


const SnackLoad = ({show}) => {
    const [open, setOpen] = useState(show);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(!show);
    };

    return(
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <CircularProgress />
        </Snackbar>
    )
}


export default SnackLoad;