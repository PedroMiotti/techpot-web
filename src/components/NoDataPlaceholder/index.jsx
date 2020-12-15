import React from 'react'
import './style.css'


// Assets
import empty from '../../assets/empty.png'

const NoDataPlaceholder = ({msg}) => {
    return (
        <div className="NoPostsPlaceholder-container font-techpot">
            <img src={empty} alt="" />
            <p>{msg}</p>
        </div>
    )
}

export default NoDataPlaceholder
