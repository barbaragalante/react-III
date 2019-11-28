import React from 'react'
import './index.css'

const  CardUser = (props)=>{
    const { title, img, price } = props.produto;
    return(
    <div className="card">
        <p>{props.login}</p>
        <p>{props.name}</p>
        <img src={props.img} alt={card-img}></img>
        <p>{price}</p>
    </div>
    )
    }

export default CardUser;