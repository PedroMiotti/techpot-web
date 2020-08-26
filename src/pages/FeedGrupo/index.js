import React from 'react';
import './styles/index.css';

// Assets
    import groupImagePic from '../../assets/unnamed.png'


const FeedGrupo = ( ) => {
    return(
        <div className = "feedGrupoContainer">
            <div className="feedGrupoSideContainer">

                <div className="feedGrupoInfo">

                    <img src={groupImagePic} alt="GroupProfilePic" className="groupImage"/>
                    
                    <div className="feedGrupoInfoText">
                        <h1 className="font-techpot feedGrupoInfoTextName">Tech</h1>
                        <p className="font-techpot feedGrupoInfoTextMembros">193 Membros</p>
                        <p className="font-techpot feedGrupoInfoTextBIO">Grupo para todos os cursantes de TECH.</p>
                    </div>

                </div>

            </div>

            <div className="feedGrupoTopContainer">

                <div className="feedGrupoNavItems">
                    <a href="/" className="font-techpot">FEED</a>
                    <a href="/" className="font-techpot">SOBRE</a>
                    <a href="/" className="font-techpot">EVENTOS</a>
                    <a href="/" className="font-techpot">MEMBROS</a>
                </div>

                <div className="feedGrupoConvidarContainerButton">
                    <a href="/" className="font-techpot feedGrupoConvidarButton">+ Convidar</a>
                </div>

            </div>

        </div>
    )
}


export default FeedGrupo;