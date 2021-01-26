import React, { useState } from "react";
import "./style.css";

// Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./Components/EditorToolbar";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../store/_entities/Post";
import { listPostByUser } from "../../store/_entities/Post";

// Components
import ModalContainer from "../../shared/ModalContainer/index";
import UserProfileImg from "../../shared/UserProfileImg/index";
import TechpotSelectInput from "../../shared/TechpotSelect/index";

// Hooks
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

// AntD
import { Form, Select } from "antd";

const icon = {
  color: " #7c7c7c",
  fontSize: 30,
  cursor: "pointer",
};

const ModalCreatePost = ({ onClose }) => {
  useLockBodyScroll();

  const [postBody, setPostBody] = useState({ value: null });
  const [postBodyHTML, setPostBodyHTML] = useState({ value: null });
  const [groupSelectInput, setGroupSelectInput] = useState("");

  // Usuario
  const usuarioId = useSelector((state) => state.entitie.user.id);
  const usuarioPerfil = useSelector((state) => state.entitie.user.profile);

  // Grupo
  const groupList = useSelector((state) => state.entitie.group.groupList);

  const handleChange = (content, delta, source, editor) => {
    setPostBodyHTML({ value: content });

    // Get text without html
    const text = editor.getText();
    setPostBody(text);
  };
  const dispatch = useDispatch();

  const criarPost = async (e) => {
    e.preventDefault();
     await dispatch( 
       createPost(postBody, postBodyHTML.value, usuarioId, groupSelectInput) 
     ); 

    onClose();
    await dispatch(listPostByUser(usuarioId));
  };

  return (
    <ModalContainer close={onClose} title="Criar Post">
      <div className="modalCreatePost-userInfo">
        <div className="modalCreatePost-profileimgcontainer">
          <UserProfileImg />
        </div>

        <div className="modalCreatePost-userInfo-col2">
          <h4 className="font-techpot">
            {usuarioPerfil.u.name + " " + usuarioPerfil.u.surname || " "}
          </h4>
          <Select placeholder="Grupo" size="large" onChange={(value) => setGroupSelectInput(value) }>
            {groupList.map((grupos) => (
              <Select.Option
                className="font-techpot"
                key={grupos.group_id}
                value={grupos.group_id}
              >
                {grupos.group_name}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>

      <div className="modalCreatePost-postBody" id="quillEditor">
        <EditorToolbar />
        <ReactQuill
          className="ql-custom"
          value={postBodyHTML.value}
          onChange={handleChange}
          placeholder={"system.out.println(Oque voce está pensando ?) "}
          modules={modules}
          formats={formats}
        />
      </div>

      <div className="modalCreatePost-bottom">
        <div className="modalCreatePost-media-row2">
          {/* <Image style={icon}/>
                        <YouTube style={icon}/> */}
        </div>

        <div className="modalCreatePost-postbtt-col2">
          <div
            onClick={criarPost}
            className="modalCreatePost-postbttContainer-col2-active font-techpot"
          >
            <a href="">Postar</a>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ModalCreatePost;
