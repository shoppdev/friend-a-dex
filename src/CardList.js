import React from 'react'
import Card from './Card'

const CardList = ({ userList }) =>{
    
    return(
        <div>
            {
                userList.map((user, i) =>{
                    return <Card key={i} user={user} />
                })
            }
        </div>
    )
}

export default CardList