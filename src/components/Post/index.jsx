import React from 'react';
import './style.css';

// Assets
import postTestPicture from '../../assets/Flavio.jpg';

// Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

// Components
import BottomLine from '../../shared/BottomLine/index';

// Icons
import { FavoriteBorder, ChatBubbleOutline, MoreVert } from '@material-ui/icons'

// React router 
import { Link } from 'react-router-dom';

// Helpers
import { DateFormatter } from '../../helpers/dataFormatter';


const Post = ({ post_body_html, post_body, id_criador, nome_criador, sobrenome_criador, data_criacao, grupo }) => {

  const dataCriacao = new DateFormatter(data_criacao);
  let relativeTime = dataCriacao.getRelativeTime();


  return (
    <div className="postContainer font-techpot">
      <div className="postHeader">

        <Link to={`/usuario/perfil/${id_criador}`}>
          <div className="postProfilePictureContainer">
            <img
              src={postTestPicture}
              alt="postTestPicture"
              className="postUserPicture"
            />
          </div>

          <div className="postInfo">
            <p>{nome_criador + " " + sobrenome_criador}</p>
            <p className="postInfoSubtext">{relativeTime} | {grupo}</p>
          </div>
        </Link>

        <div className="postHeader-editAction"> 
          <MoreVert />
        </div>

      </div>

      <div className="postContent" >
        <ReactQuill
          value={post_body_html || ""}
          readOnly={true}
          modules={{ syntax: true }}
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



