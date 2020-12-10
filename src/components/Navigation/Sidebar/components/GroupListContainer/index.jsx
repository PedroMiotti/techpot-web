import React from 'react'
import './style.css'


// Assets
import groupListTestPic from '../../../../../assets/unnamed.png';


const GroupListContainer = () => {
    return(
        <div className="groupListContainer">
             <div className="groupListPictureContainer">
                <img src={groupListTestPic} alt="groupListPicture" className="groupListPicture"/>
            </div>

            <div className="groupListInfoContainer">
                <h3>Tech</h3>
                <p>193 Membros</p>
            </div>

        </div>
    )
}



export default GroupListContainer;