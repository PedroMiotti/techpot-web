import React from 'react';
import './styles.css';

// Components
    import InfoUser from './Components/InfoUser/index.jsx';
    import UserGroups from './Components/UserGroups/index.jsx';
    import UserEvents from './Components/UserEvents/index.jsx';



const Profile = () => {
    return(
        <div id="PerfilUsuario font-techpot">
        
            <InfoUser />
            
            <div className="sp"></div>

            <UserGroups />

            <div className="sp"></div>

            <UserEvents />

        </div>
    );
    
}

export default Profile;