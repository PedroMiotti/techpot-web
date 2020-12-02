import React, { useState, useEffect, useRef } from 'react'
import './style.css'

// Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "./Components/EditorToolbar";

// Components
import UserProfileImg from '../../shared/UserProfileImg/index';
import ModalContainer from '../../shared/ModalContainer/index';

// Material UI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../../store/_entities/Post';

// Hooks 
import useLockBodyScroll from '../../hooks/useLockBodyScroll'

const icon = {
    color: ' #7c7c7c',
    fontSize: 30,
    cursor: 'pointer'

};

const ModalCreatePost = ({ onClose }) => {

    useLockBodyScroll();

    const [postBody, setPostBody] = useState({ value: null });
    const [postBodyHTML, setPostBodyHTML] = useState({ value: null });

    const [updateBtt, setUpdateBtt] = useState(false);

    const groupInput = useRef();

    // Usuario
    const usuarioId = useSelector(state => state.entitie.user.id);

    // Grupo
    const groupList = useSelector(state => state.entitie.group.groupList);

    const handleChange = (content) => {

        setPostBodyHTML({ value: content });

        // Get text without html
        // const text = editor.getText();
        // setPostBody(text);
    };

    const dispatch = useDispatch();

    const criarPost = (e) => {
        e.preventDefault()

        let grupoInput = groupInput.current.value;

        dispatch(createPost(postBody, postBodyHTML.value, usuarioId, grupoInput));

    }

    useEffect(() => {

        if (postBody.value !== null)
            setUpdateBtt(true)

        return () => {
            setUpdateBtt(false)
        }
        
    }, [postBody.value])


    return (

        <ModalContainer close={onClose} title="Criar Post">

            <div className="modalCreatePost-userInfo">
                <div className="modalCreatePost-profileimgcontainer">
                    <UserProfileImg />
                </div>

                <div className="modalCreatePost-userInfo-col2">
                    <h4 className="font-techpot">Pedro Miotti</h4>
                    <select placeholder="Aonde postar" ref={groupInput}> 

                        {groupList.map((grupos) => (
                            <option key={grupos.group_id} value={grupos.group_id}>{grupos.group_name}</option>
                        ))}

                    </select>
                </div>
            </div>

            <div className="modalCreatePost-postBody" id='quillEditor'>
                <EditorToolbar />
                <ReactQuill value={postBodyHTML.value} onChange={handleChange} placeholder={"system.out.println(Oque voce está pensando ?) "} modules={modules} formats={formats} />
            </div>

            <div className="modalCreatePost-bottom">
                <div className="modalCreatePost-media-row2">
                    {/* <Image style={icon}/>
                        <YouTube style={icon}/> */}
                </div>

                <div className="modalCreatePost-postbtt-col2">

                    <div onClick={criarPost} className={updateBtt ? "modalCreatePost-postbttContainer-col2-active font-techpot" : " modalCreatePost-postbttContainer-col2 font-techpot"}>
                        <a href="">Postar</a>
                    </div>

                </div>
            </div>

        </ModalContainer>

    )
}

export default ModalCreatePost
