import React from 'react';
import './style/index.css';

// Components
    import LogoTechPot from '../../shared/LogoTechPot/index'

// Icons
    import { PersonOutline, LockOutlined, VisibilityOff } from '@material-ui/icons' 
    import TextField from '@material-ui/core/TextField';
    import Grid from '@material-ui/core/Grid';

    import {
        fade,
        ThemeProvider,
        withStyles,
        makeStyles,
        createMuiTheme,
      } from '@material-ui/core/styles';


    const CssTextField = withStyles({
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
            width: '240px'
            
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
        }

      }));



const Login = ( ) => {

    const classes = useStyles();

    return(
        <div className="loginContainer font-techpot">
            <div className="loginWrapper">
                <div className="loginWrapperHeader">
                    <LogoTechPot />
                    <p>Bem vindo(a) comunindade TECH !</p>
                </div>

                <div className="loginWrapperBottom">
                    <div className="loginWrapperButtons">

                        <a href="/">LOGIN</a>
                        <a href="/">REGISTRAR</a>

                    </div>

                    <div className="loginWrapperForm">
                        <Grid container spacing={1} alignItems="flex-end" justify='center'  style={{marginBottom: '15px'}}>
                            <Grid item >
                                <PersonOutline />
                            </Grid>
                            <Grid item > 
                                <CssTextField label="Usuario/E-mail" fullWidth InputLabelProps={{ classes: {root: classes.inputLabel,focused: classes.inputLabelFocused,}}}/>
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} alignItems="flex-end"  justify='center'>
                            <Grid item >
                                <LockOutlined />
                            </Grid>
                            <Grid item > 
                                <CssTextField label="Senha" InputLabelProps={{ classes: {root: classes.inputLabel,focused: classes.inputLabelFocused,}}} />
                            </Grid>
                        </Grid>

                    </div>

                    <a href="/" className="loginWrapperLoginButton">LOGIN</a>

                </div>
            </div>

        </div>
    )
}



export default Login;


