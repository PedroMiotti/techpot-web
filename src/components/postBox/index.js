import React from 'react';
import './style/index.css'

// Assets
    import postTestPicture from '../../assets/Rafa.jpg';

const PostBox = () => {
    return(
        <div className="postBoxContainer">

            <div className="postBoxUserPicture">
                <img src={postTestPicture} alt="UserProfilePic" className="postBoxProfilePic"/>
            </div>

            <div className="postBoxInfo">
                <input className="postBoxTextInput" placeholder="No que está pensando ?"></input>

                <div className="postBoxButtonContainer">
                    <a href="#" className="postBoxMediaButton">Foto/Video</a>
                    <a href="#" className="postBoxSendButton">Postar</a>
                </div>

            </div>

        </div>
    )
}

export default PostBox;