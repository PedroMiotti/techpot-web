import React from 'react';
import './style/index.css'


// Icons
    import CreateIcon from '@material-ui/icons/Create';

// Components
    import UserProfileImg from "../../shared/UserProfileImg/index"

const PostBox = ({open}) => {
    return(
        <div className="postBoxContainer">

            <div className="postBoxUserPicture">
                <UserProfileImg classe="postBoxProfilePic"/> 
            </div>

            <div className="postBoxInfo">
                <a className="postBoxTextInput" onClick={open}> <CreateIcon fontSize="small" style={{marginRight: '10px'}}/> Criar publicação </a>

            </div>


        </div>
    )
}

export default PostBox;
