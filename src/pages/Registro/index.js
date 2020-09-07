import React, { useState } from 'react';
import './index.css';

// Components
    import LogoTechPot from '../../shared/LogoTechPot/index'

// Icons
    import { Visibility, VisibilityOff } from '@material-ui/icons' 

// Material UI
    import { FormControl, TextField, Grid, IconButton, InputAdornment, Input, InputLabel } from '@material-ui/core';
    import { withStyles, makeStyles } from '@material-ui/core/styles';


    const CustomTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: '#d0094c',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#d0094c',
            color:'#fff !important',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#ddd',
            color:'#fff !important',
            
          },
          '& .MuiInput-underline': {
            borderBottomColor: '#ddd',
            color:'#fff !important',
            width: '100%',
            marginBottom: '15px'
            
            
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#d0094c',
              color:'#fff !important',
              
            },
            '&:hover fieldset': {
              borderColor: '#d0094c',
              color:'#fff !important',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d0094c',
              color:'#fff !important',
            },
          },
        },
      })(TextField);

      const CustomTextFieldInline = withStyles({
        root: {
          '& label.Mui-focused': {
            color: '#d0094c',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#d0094c',
            color:'#fff !important',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#ddd',
            color:'#fff !important',
            
          },
          '& .MuiInput-underline': {
            borderBottomColor: '#ddd',
            color:'#fff !important',
            width: '170px',
            marginBottom: '15px'
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#d0094c',
              color:'#fff !important',
              
            },
            '&:hover fieldset': {
              borderColor: '#d0094c',
              color:'#fff !important',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d0094c',
              color:'#fff !important',
            },
          },
        },
      })(TextField);

      const useStyles = makeStyles((theme) => ({

        inputLabel: {
            color:'#fff !important',
        },

        inputLabelFocused: {
            color:'#d0094c !important',
        },

        gridInput: {
            flexGrow: 1
        },

        adornedEye: {
          color: '#fff'
        },

      }));



const Registro = ( ) => {

    const classes = useStyles();

    const [values, setValues] = useState({
      password: '',
      showPassword: false,
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const customLabelInput = {classes: {root: classes.inputLabel,focused: classes.inputLabelFocused }}

    return(
        <div className="RegistroContainer font-techpot">
            <div className="RegistroWrapper">
                <div className="RegistroWrapperHeader">
                    <LogoTechPot />
                    <p>Bem vindo(a) comunindade TECH !</p>
                </div>

                <div className="RegistroWrapperBottom">
                    <div className="RegistroWrapperButtons">

                        <a href="/">LOGIN</a>
                        <a href="/">REGISTRAR</a>

                    </div>

                    <div className="RegistroWrapperForm">
                        <Grid container spacing={1} alignItems="center" justify='space-between' direction="row">
                          <Grid item> 

                            <CustomTextFieldInline label="Nome" InputLabelProps={customLabelInput}/>

                          </Grid>
                          <Grid item>
                            <CustomTextFieldInline label="Sobrenome" InputLabelProps={customLabelInput}/>

                          </Grid>
                        </Grid>

                        <CustomTextField fullWidth label="E-mail" InputLabelProps={customLabelInput}/>

                        <CustomTextField fullWidth label="Senha" InputLabelProps={customLabelInput} InputProps={{endAdornment: 
                                  <InputAdornment position="end" className={classes.adornedEye}>
                                    <IconButton aria-label="visibilidade senha" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} >
                                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment> 
                                  }} 
                        />

                        <CustomTextField fullWidth label="Confirme a senha" type={values.showPassword ? 'text' : 'password'} InputLabelProps={customLabelInput} />

                    </div>

                    <a href="/" className="RegistroWrapperRegistroButton">Criar conta</a>

                </div>
            </div>

        </div>
    )
}



export default Registro;


