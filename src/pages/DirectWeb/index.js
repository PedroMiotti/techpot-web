import React from 'react';
import './index.css';

// Icons
import { MoreHoriz } from '@material-ui/icons';

// Assets
    import userProfilePicture from '../../assets/Rafa.jpg';
    import contactProfilePicture from '../../assets/Flavio.jpg';
    import DirectBox from '../../components/DirectBox';


const icon = {
    color: '#fff',
    fontSize : 30,
    cursor: 'pointer'

};

const DirectWeb = () => {
    return(
        <div id="main-div-DirectWeb" className="font-techpot">
            <div id="left-main-div-DirectWeb">
                <div id="div-selfInfo-DirectWeb">
                    <div id="div-img-selfInfo-DirectWeb">
                        <img src={userProfilePicture}  alt="Profile pic user"/>
                    </div>

                    <MoreHoriz style={icon} />
                    
                </div>

                <div id="div-contacts-DirectWeb">
                    <DirectBox/>
                    <DirectBox/>
                    <DirectBox/>
                    <DirectBox/>
                    <DirectBox/>
                    <DirectBox/>
                    <DirectBox/>
                    <DirectBox/>
                    <DirectBox/>
                </div>

            </div>

            <div id="right-main-div-DirectWeb">
                <div id="div-userInfo-DirectWeb">
                    <div id="div-img-userInfo-DirectWeb">
                        <img src={contactProfilePicture}  alt="Profile pic user"/>
                        <h1>FlavinhoGameplays</h1>
                    </div>

                    <MoreHoriz style={icon} />

                </div>

                <div id= "div-messages-DirectWeb">sefsef</div>
                <div id= "div-input-DirectWeb">fsefes</div>

            </div>
        </div>
    )
}

export default DirectWeb;
