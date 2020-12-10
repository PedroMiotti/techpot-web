import React from 'react';
import './style.css';


//Assets
import eventImage from '../../../../assets/HackaTruck.jpg'
import RafaPic from '../../../../assets/Rafa.jpg'
import FlavioPic from '../../../../assets/Flavio.jpg'

// Moment
import * as moment from 'moment';
import 'moment/locale/pt-br';

// Helpers
import { firstLetterUppercase } from '../../../../helpers/UpperFirstLetter'

// Icons
import { CheckCircleOutlineOutlined } from '@material-ui/icons'

// Material UI
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles } from '@material-ui/core/styles';

// React Router
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: '35px',
    height: '35px',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const EventBox = ({ tituloEvento, dataEvento, tipoEvento, idEvento }) => {

  const classes = useStyles();

  const marginIcon = {
    marginRight: '6px'
  }

  const avatarBorder = {
    border: 0
  }

  // Formating date
  moment().locale('pt-br');
  const data = moment(dataEvento);
  const diaDoMes = data.date();
  const mes = data.format("MMMM");
  const ano = data.format('YYYY');
  const diaDaSemana = data.format("dddd");
  const horaInicio = data.format("LT");




  return (
    <div id="container-eventBox2" className="font-techpot">

      <Link to={`/evento/${idEvento}`}>
        <img src={eventImage} alt="eventImage" className="image-eventBox2" />
      </Link>
      <Link to={`/evento/${idEvento}`} className="eventBox2-bottom-Container-row1">
        <div className="eventBox2-DayBox">
          <h3>{diaDoMes}</h3>
        </div>
        <div id="eventBox2-bottom-details-row1" class="font-techpot">
          <h4 id="eventBox2-titulo">{firstLetterUppercase(diaDaSemana)}</h4>
          <p id="eventBox2-data">{firstLetterUppercase(mes)}, {ano}</p>
        </div>
      </Link>
      <Link to={`/evento/${idEvento}`} className="eventBox2-bottom-Container-row2">
        <div id="eventBox2-bottom-details" class="font-techpot">
          <h3 id="eventBox2-titulo">{tituloEvento}</h3>
          <p id="eventBox2-data">Começa às {horaInicio} &middot; {tipoEvento}</p>
        </div>
      </Link>

      <div className="eventBox2-bottom-Container-row3">
        <a href="/" className="eventBox2-VouBtt">
          <CheckCircleOutlineOutlined style={marginIcon} /> Vou
          </a>

        <div className="eventoBottom-Pessoas-avatar">
          <AvatarGroup max={3}>
            <Avatar
              alt="Remy Sharp"
              src={RafaPic}
              className={classes.small}
              style={avatarBorder}
            />
            <Avatar
              alt="Travis Howard"
              src={FlavioPic}
              className={classes.small}
              style={avatarBorder}
            />
            <Avatar alt="Cindy Baker" src={RafaPic} style={avatarBorder} />
            <Avatar alt="Agnes Walker" src={FlavioPic} style={avatarBorder} />
            <Avatar
              alt="Trevor Henderson"
              src={RafaPic}
              style={avatarBorder}
            />
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
};

export default EventBox;