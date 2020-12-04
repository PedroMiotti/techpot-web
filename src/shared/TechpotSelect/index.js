import React from 'react';

// Icons
import { PersonOutline, LockOutlined } from '@material-ui/icons'

// Material UI
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';




const CustomSelect = withStyles({
    root: {


        '& .MuiSelect-root': {
            color: 'var(--color-secundary)',
        },

        '& .MuiOutlinedInput-input': {
            padding: '5px',
        },

        '&  .MuiSelect-select': {
            borderBottomColor: '#ddd',
            color: '#fff !important',
            width: '250px'
        },

        '&  .MuiSelect-select:focus': {
            borderBottomColor: '#ddd',
            color: '#fff !important',
            width: '250px'
        },

        '& .MuiFormControl-root': {
            '& fieldset': {
                borderColor: 'var(--color-secundary)',
                color: '#fff !important',

            },
            '&:hover fieldset': {
                borderColor: 'var(--color-secundary)',
                color: '#fff !important',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'var(--color-secundary)',
                color: '#fff !important',
            },
        },

    },
})(Select);

const CustomFormControl = withStyles({
    root: {

        // Controls the text inside -- Option text
        '& .MuiSelect-root': {
            color: '#000',
            fontSize: "12px",
        },


        '& .MuiOutlinedInput-input': {
            padding: '12px',
        },

        '& .MuiFormLabel-root.Mui-focused': {
            color: "var(--color-secundary)",
            lineHeight: '15px'
        },

        '& .MuiFormLabel-root': {
            lineHeight: '0px'
        },

        '& .MuiFormLabel-filled': {
            lineHeight: '15px'
        },

        '& .MuiOutlinedInput-notchedOutline': {
            padding: '0 20px 0 13px',
            marginLeft: "-1.04px"
        },

        '& .MuiOutlinedInput-notchedOutline.Mui-focused': {
            border: "1px solid var(--color-secundary)",
        },


        // Controls inside the select
        '&  .MuiSelect-select': {
            backgroundColor: "#fff",
        },

        '& .MuiOutlinedInput-input.Mui-focused': {
            border: "1px solid var(--color-secundary)"
        },

    },
})(FormControl);




const useStyles = makeStyles((theme) => ({
}));



const TechpotSelectInput = ({child, state, changeCB}) => {

    const classes = useStyles();

    return (

        <CustomFormControl variant="outlined" >
            <InputLabel htmlFor="outlined-grupo-native-simple" >Grupo</InputLabel>
            <CustomSelect
                native
                label="Grupo"
                value={state}
                onChange={changeCB}
                inputProps={{
                    name: 'Grupo',
                    id: 'outlined-grupo-native-simple',
                }}

                style={{ fontSize: '12px', padding: '0px' }}
            >
                <option aria-label="None" value="" />

                {child}

            </CustomSelect>
        </CustomFormControl>
    )
}



export default TechpotSelectInput;


