import React from 'react'
import './style.css'


// Material UI
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

// Assets
import ghost from '../../assets/ghost.png'

const NoGroupsPlaceholder = () => {
    return (
        <div className="NoGroupsPlaceholder-container font-techpot">
            {/* <SentimentVeryDissatisfiedIcon style={{color: '#fff', fontSize: "200px"}}/> */}
            <img src={ghost} alt="" />
            <p>Parece que você ainda não participa de nenhum grupo !</p>
            <button>Procurar</button>            
        </div>
    )
}

export default NoGroupsPlaceholder
