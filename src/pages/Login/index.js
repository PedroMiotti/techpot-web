import React, { useState } from 'react';
import './style/index.css';

// Components
import LogoTechPot from '../../shared/LogoTechPot/index'

// Icons
import { PersonOutline, LockOutlined } from '@material-ui/icons'

// Material UI
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';

// Redux
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/_entities/User';



const CssTextField = withStyles({
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
      width: '250px'
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

}));



const Login = () => {

  const classes = useStyles();

  const [emailInput, setEmailInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');

  const dispatch = useDispatch();

  const userLogin = (event) => {
    event.preventDefault();

    dispatch(loginUser(emailInput, senhaInput));

  }

  return (
    <div className="loginContainer font-techpot">
      <div className="loginWrapper">
        <div className="loginWrapperHeader">
          <LogoTechPot />
          <p>Bem vindo(a) comunindade TECH !</p>
        </div>

        <div className="loginWrapperBottom">
          <div className="loginWrapperButtons">

            <a href="/login">LOGIN</a>
            <a href="/registro">REGISTRAR</a>

          </div>

          <form className="loginWrapperForm" onSubmit={userLogin}>
            <Grid container spacing={1} alignItems="flex-end" justify='center' style={{ marginBottom: '15px' }}>
              <Grid item >
                <PersonOutline />
              </Grid>
              <Grid item>
                <CssTextField label="E-mail" value={emailInput} onChange={e => setEmailInput(e.target.value)} fullWidth InputLabelProps={{ classes: { root: classes.inputLabel, focused: classes.inputLabelFocused, } }} />

              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="flex-end" justify='center'>
              <Grid item >
                <LockOutlined />
              </Grid>
              <Grid item>
                <CssTextField label="Senha" value={senhaInput} onChange={e => setSenhaInput(e.target.value)} InputLabelProps={{ classes: { root: classes.inputLabel, focused: classes.inputLabelFocused, } }} />
              </Grid>
              <p className="logginForm-ForgotPasswd" style={{ margin: '2px 20px', marginLeft: 'auto' }}>Esqueceu a senha ?</p>
            </Grid>

            <button type="submit" className="loginWrapperLoginButton">LOGIN</button>
          </form>


        </div>
      </div>

    </div>
  )
}



export default Login;


