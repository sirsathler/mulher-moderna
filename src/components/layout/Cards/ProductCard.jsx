import React from 'react'
import './ProductCard.css'

export default props =>(
    <div className='ProductCard'><a href='/'>
        <div className='ProductCard-img'>
            <img src={props.src} />
        </div>
        <div className='ProductCard-body'>
            <p id='ProductCard-title'>{props.title}</p>
            <p>coleção {props.collection}</p>
            <p id='ProductCard-price'>R${props.price}</p>
        </div>
    </a></div>  
)
