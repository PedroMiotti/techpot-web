import React, {useState, useEffect} from 'react';
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
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
// React router 
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { likePost, unlikePost } from '../../store/_entities/Post';

// Helpers
import { DateFormatter } from '../../helpers/dataFormatter';
import { formatedUserName } from '../../helpers/formatUserName';

const Post = ({ post_id ,post_body_html, post_body, id_criador, nome_criador, data_criacao, grupo, like_count }) => {

  const [ isPostLiked, setIsPostLiked] = useState(false);
  const [ likeCount, setLikeCount ] = useState(like_count);

  const dataCriacao = new DateFormatter(data_criacao);

  let relativeTime = dataCriacao.getRelativeTime();

  // Usuario
  const user_id = useSelector(state => state.entitie.user.id);

  // Post 
  const postLikedByUser = useSelector(state => state.entitie.post.postsUserLiked);

  const dispatch = useDispatch();

  useEffect(() => {
    
    if(postLikedByUser.includes(post_id)) setIsPostLiked(!isPostLiked)
  
  }, [])

  const handleLike = () => {
    setIsPostLiked(true);
    setLikeCount(likeCount + 1);
    dispatch(likePost(user_id, post_id));
  }

  const handleUnlike = () => {
    setIsPostLiked(false);
    setLikeCount(likeCount - 1);
    dispatch(unlikePost(user_id, post_id));
  }

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
            <p>{formatedUserName(nome_criador)}</p>
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
          {/* <button onClick={isPostLiked ? handleLike : handleUnlike }>Like</button> */}
          <input type='checkbox' className='like-btn'/>
          {/* <FavoriteBorder className="postIcon like-icon" /> */}
          <a onClick={!isPostLiked ? handleLike : handleUnlike }>{ isPostLiked ? <HeartFilled className="postIcon" /> : <HeartOutlined className="postIcon"/> } </a>
          <p className="postLikesText">{!likeCount  ? '0' : likeCount}</p>
        </div>
      </div>
    </div>
  );
}



export default Post;



