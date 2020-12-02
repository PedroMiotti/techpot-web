import React from 'react';
import './style/index.css';

// Assets
import postTestPicture from '../../assets/Flavio.jpg';

// Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

// Components
import BottomLine from '../../shared/bottomLine/index';

// Icons
import { FavoriteBorder, ChatBubbleOutline } from '@material-ui/icons'

const Post = ({ post_body_html, post_body, nome_criador, sobrenome_criador, data_criacao, grupo }) => {
  return (
    <div className="postContainer font-techpot">
      <div className="postHeader">

        <div className="postProfilePictureContainer">
          <img
            src={postTestPicture}
            alt="postTestPicture"
            className="postUserPicture"
          />
        </div>

        <div className="postInfo">
          <p>{nome_criador + " " + sobrenome_criador}</p>
          <p className="postInfoSubtext">8d | {grupo}</p>
        </div>

      </div>

      <div className="postContent" >
        <ReactQuill
          value={post_body_html || ""}
          readOnly={true}
          modules={{syntax: true}}
          theme={"bubble"}
          style={{ padding: 0 }}
        />
      </div>

      <BottomLine />

      <div className="postFooter">
        <div className="postCommentsContainer">
          <ChatBubbleOutline className="postIcon" />
          <p className="postCommentsText">12</p>
        </div>

        <div className="postLikesContainer">
          <FavoriteBorder className="postIcon" />
          <p className="postLikesText">186</p>
        </div>
      </div>
    </div>
  );
}



export default Post;



