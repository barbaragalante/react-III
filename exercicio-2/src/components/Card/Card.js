import React from 'react'
// import Imgem from'../../assets/img/casa.jpg'

import './index.css'

const  Card = (props)=>{
    const { title, img, price } = props.produto;
    return(
    <div className="card">
        <img src={img} alt={title}></img>
        <p>{title}</p>
        <p>{price}</p>
    </div>
    )
    }

export default Card

