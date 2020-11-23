import React, { useState } from 'react';
import './index.css';


// Components
import LogoTechPot from '../../shared/LogoTechPot/index'
import SnackLoad from '../../shared/Snackload/index'
import SnackMessage from '../../shared/Snackbar/index'


// Icons
import { Visibility, VisibilityOff } from '@material-ui/icons'

// Material UI
import { TextField, Grid, IconButton, InputAdornment } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../../store/_entities/User';


const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'var(--color-secundary)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--color-secundary)',
      color: '#fff !important',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#ddd',
      color: '#fff !important',

    },
    '& .MuiInput-underline': {
      borderBottomColor: '#ddd',
      color: '#fff !important',
      width: '100%',
      marginBottom: '15px'


    },
    '& .MuiOutlinedInput-root': {
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
    color: '#fff !important',
  },

  inputLabelFocused: {
    color: 'var(--color-secundary) !important',
  },

  gridInput: {
    flexGrow: 1
  },

  adornedEye: {
    color: '#fff'
  },

  customInputResponsive: {
    ["@media (max-width:960px)"]: {
      width: "100%",
    },
  }

}));



const Registro = () => {

  const classes = useStyles();

  // _entities
  const usuarioCreatedLoading = useSelector(state => state.entitie.user.loading);
  const usuarioCreatedFailed = useSelector(state => state.entitie.user.error);
  const usuarioCreatedErrorMessage = useSelector(state => state.entitie.user.errorMessage);

  const [nomeInput, setNomeInput] = useState('');
  const [sobrenomeInput, setSobrenomeInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');

  const dispatch = useDispatch();

  const criarUsuario = (event) => {
    event.preventDefault();

    // TODO --> Form validation
    // TODO --> Check if senha e senha2 match

    dispatch(createUser(nomeInput, sobrenomeInput, emailInput, senhaInput));

  }

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

  const customLabelInput = { classes: { root: classes.inputLabel, focused: classes.inputLabelFocused } }

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

          <form className="RegistroWrapperForm" onSubmit={criarUsuario}>
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
                  value={nomeInput}
                  onChange={e => setNomeInput(e.target.value)}
                  className={classes.customInputResponsive}
                />
              </Grid>
              <Grid item className="Registro-gridItem">
                <CustomTextFieldInline
                  label="Sobrenome"
                  InputLabelProps={customLabelInput}
                  value={sobrenomeInput}
                  onChange={e => setSobrenomeInput(e.target.value)}
                  className={classes.customInputResponsive}
                />
              </Grid>
            </Grid>

            <CustomTextField
              fullWidth
              label="E-mail"
              InputLabelProps={customLabelInput}
              value={emailInput}
              onChange={e => setEmailInput(e.target.value)}
            />

            <CustomTextField
              fullWidth
              label="Senha"
              value={senhaInput}
              onChange={e => setSenhaInput(e.target.value)}
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

            <button className="RegistroWrapperRegistroButton" type="submit">
              Criar conta
            </button>

          </form>

        </div>
      </div>

      {usuarioCreatedLoading && <SnackLoad show={usuarioCreatedLoading} />}

      {usuarioCreatedFailed && <SnackMessage message={usuarioCreatedErrorMessage} color={"error"} show={usuarioCreatedFailed} />}
    </div>
  );
}



export default Registro;


