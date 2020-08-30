import React from 'react';
import './style/index.css';

// Assets
    import postTestPicture from '../../assets/Flavio.jpg';

// Components
    import BottomLine from '../../shared/bottomLine/index';

// Icons
    import { FavoriteBorder, ChatBubbleOutline } from '@material-ui/icons'

const Post = () => {
    return(
        <div className="postContainer font-techpot">

            <div className="postHeader">
                <div className="postProfilePictureContainer">
                    <img src={postTestPicture} alt="postTestPicture" className="postUserPicture"/>
                </div>

                <div className="postInfo">
                    <p >FlavinhoGameplays</p>
                    <p className="postInfoSubtext">8d | Tech</p>
                </div>

            </div>

            <div className="postContent">
                <p className=""> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
            </div>

            <BottomLine/>

            <div className="postFooter">
                <div className="postCommentsContainer">
                    <ChatBubbleOutline style={{color:'#d0094c'}}/>
                    <p className="postCommentsText">12</p>
                </div>
                
                <div className="postLikesContainer">
                    <FavoriteBorder style={{color:'#d0094c'}}/>
                    <p className="postLikesText">186</p>
                </div>
            </div>
        </div>
    )
}



export default Post;



