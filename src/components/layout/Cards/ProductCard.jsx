import React from 'react'
import './ProductCard.css'

export default props =>(
    <div className='product-card'><a href='/'>
        <div className='product-card-img'>
            <img src={props.src} />
        </div>
        <div className='product-card-body'>
            <p id='product-card-title'>{props.title}</p>
            <p>coleção {props.collection}</p>
            <p id='product-card-price'>R${props.price}</p>
        </div>
        <div className='product-card-buy-div'>
            <p>Comprar</p>
        </div>
    </a></div>  
)
