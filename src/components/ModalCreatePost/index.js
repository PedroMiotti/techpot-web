import React, { useState, useEffect } from 'react'
import './style.css'

// Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "./Components/EditorToolbar";

// Components
import UserProfileImg from '../../shared/UserProfileImg/index';
// Icons
import { Close, Image, YouTube } from '@material-ui/icons';

// Material UI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const icon = {
    color: ' #7c7c7c',
    fontSize: 30,
    cursor: 'pointer'

};

const ModalCreatePost = ({ onClose }) => {

    const [postBody, setPostBody] = useState({ value: null });
    const [updateBtt, setUpdateBtt] = useState(false);

    const handleChange = value => {
        setPostBody({ value });
    };

    useEffect(() => {

        if (postBody.value !== null)
            setUpdateBtt(true)

        return () => {
            setUpdateBtt(false)
        }
    }, [postBody])


    return (
        <>
            <div className="modalCreatePost-Container">
                <div className="ModalCreatePost-top font-techpot">
                    <h2 className="font-techpot">Criar publicação</h2>

                    <Close onClick={onClose} style={{ "cursor": "pointer" }} />

                </div>

                <div className="modalCreatePost-userInfo">
                    <div className="modalCreatePost-profileimgcontainer">
                        <UserProfileImg />
                    </div>

                    <div className="modalCreatePost-userInfo-col2">
                        <h4 className="font-techpot">Pedro Miotti</h4>
                        <Select placeholder="Aonde postar">
                            <MenuItem value="0">Hackatruck</MenuItem>
                            <MenuItem value={10}>TECH</MenuItem>
                            <MenuItem value={20}>Gamelab</MenuItem>
                        </Select>
                    </div>
                </div>

                <div className="modalCreatePost-postBody" id='quillEditor'>
                    <EditorToolbar />
                    <ReactQuill value={postBody.value} onChange={handleChange} placeholder={"system.out.println(Oque voce está pensando ?) "} modules={modules} formats={formats} />
                </div>

                <div className="modalCreatePost-bottom">
                    <div className="modalCreatePost-media-row2">
                        {/* <Image style={icon}/>
                        <YouTube style={icon}/> */}
                    </div>

                    <div className="modalCreatePost-postbtt-col2">

                        <div className={updateBtt ? "modalCreatePost-postbttContainer-col2-active font-techpot" : " modalCreatePost-postbttContainer-col2 font-techpot"}>
                            <a href="">Postar</a>
                        </div>

                    </div>
                </div>

            </div>

            <div className="modalCreatePost-overlay" onClick={onClose}></div>

        </>
    )
}

export default ModalCreatePost
