import React, { useState } from 'react';
import './index.css';

// Components
    import LogoTechPot from '../../shared/LogoTechPot/index'

// Icons
    import { Visibility, VisibilityOff } from '@material-ui/icons' 

// Material UI
    import { TextField, Grid, IconButton, InputAdornment } from '@material-ui/core';
    import { withStyles, makeStyles } from '@material-ui/core/styles';


    const CustomTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: 'var(--color-secundary)',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'var(--color-secundary)',
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
              borderColor: 'var(--color-secundary)',
              color:'#fff !important',
              
            },
            '&:hover fieldset': {
              borderColor: 'var(--color-secundary)',
              color:'#fff !important',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--color-secundary)',
              color:'#fff !important',
            },
          },
        },
      })(TextField);

      const CustomTextFieldInline = withStyles({
        root: {
          "& label.Mui-focused": {
            color: "var(--color-secundary)",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "var(--color-secundary)",
            color: "#fff !important",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#ddd",
            color: "#fff !important",
          },
          "& .MuiInput-underline": {
            borderBottomColor: "#ddd",
            color: "#fff !important",
            width: "170px",
            marginBottom: "15px",
            ["@media (max-width:780px)"]: {
              width: "100%",
            },
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "var(--color-secundary)",
              color: "#fff !important",
            },
            "&:hover fieldset": {
              borderColor: "var(--color-secundary)",
              color: "#fff !important",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--color-secundary)",
              color: "#fff !important",
            },
          },
        },
      })(TextField);

      const useStyles = makeStyles((theme) => ({

        inputLabel: {
            color:'#fff !important',
        },

        inputLabelFocused: {
            color:'var(--color-secundary) !important',
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

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const customLabelInput = {classes: {root: classes.inputLabel,focused: classes.inputLabelFocused }}

    return (
      <div className="RegistroContainer font-techpot">
        <div className="RegistroWrapper">
          <div className="RegistroWrapperHeader">
            <LogoTechPot />
            <p>Bem vindo(a) comunindade TECH !</p>
          </div>

          <div className="RegistroWrapperBottom">
            <div className="RegistroWrapperButtons">
              <a href="/login">LOGIN</a>
              <a href="/registro">REGISTRAR</a>
            </div>

            <div className="RegistroWrapperForm">
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid item className="Registro-gridItem">
                  <CustomTextFieldInline
                    label="Nome"
                    InputLabelProps={customLabelInput} 
                  />
                </Grid>
                <Grid item className="Registro-gridItem">
                  <CustomTextFieldInline
                    label="Sobrenome"
                    InputLabelProps={customLabelInput}
                  />
                </Grid>
              </Grid>

              <CustomTextField
                fullWidth
                label="E-mail"
                InputLabelProps={customLabelInput}
              />

              <CustomTextField
                fullWidth
                label="Senha"
                InputLabelProps={customLabelInput}
                type={values.showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      className={classes.adornedEye}
                    >
                      <IconButton
                        aria-label="visibilidade senha"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility style={{ color: "#fff" }} />
                        ) : (
                          <VisibilityOff style={{ color: "#fff" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <CustomTextField
                fullWidth
                label="Confirme a senha"
                type={values.showPassword ? "text" : "password"}
                InputLabelProps={customLabelInput}
              />
            </div>

            <a href="/" className="RegistroWrapperRegistroButton">
              Criar conta
            </a>
          </div>
        </div>
      </div>
    );
}



export default Registro;


