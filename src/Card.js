import React from 'react'

const Card = ({user}) =>{
    return(
        <div key={user.id} className="tc ba br3 dib pa3 ma2 grow shadow-5">
            <img src={`https://robohash.org/set_set4/bgset_bg2/${user.username}?size=200x200`} alt="user_pic"></img>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )
}

export default Card