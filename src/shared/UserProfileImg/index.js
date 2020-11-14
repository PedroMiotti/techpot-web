import React from 'react';


// Assets
    import userProfilePlaceholder from "../../assets/profilePlaceholder6.jpg";

const UserProfileImage = ({ classe }) => {

    return(

        <img src={userProfilePlaceholder} className={classe} alt="User profile pic"></img>

    )

}


export default UserProfileImage;