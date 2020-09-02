import React from 'react';
import './style/index.css'

// Assets
    import postTestPicture from '../../assets/Rafa.jpg';

// Icons
    import { ImageOutlined } from '@material-ui/icons';

const PostBox = () => {
    return(
        <div className="postBoxContainer">

            <div className="postBoxUserPicture">
                <img src={postTestPicture} alt="UserProfilePic" className="postBoxProfilePic"/>
            </div>

            <div className="postBoxInfo">
                <input className="postBoxTextInput" placeholder="     No que está pensando ?"></input>

                <div className="postBoxButtonContainer">
                    <div className="postBoxImageMediaContainer">
                        <ImageOutlined style={{color:'#9e9e9e'}}/>
                        <a href="/" className="postBoxMediaButton"> Foto/Video</a>
                    </div>

                    <a href="/" className="postBoxSendButton">Postar</a>
                </div>

            </div>

        </div>
    )
}

export default PostBox;