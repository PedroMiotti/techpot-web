import React from 'react'
import './style.css'


// Assets
import empty from '../../assets/empty.png'

const NoPostsPlaceholder = () => {
    return (
        <div className="NoPostsPlaceholder-container font-techpot">
            <img src={empty} alt="" />
            <p>Opss parece que seu feed esta vazio !</p>
            {/* <button>Procurar</button>             */}
        </div>
    )
}

export default NoPostsPlaceholder
