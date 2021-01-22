import React, { useState, Component } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'

export default class Product extends Component {

    constructor(props){
        super(props)    
    }


    render() {
        return (
            <div className='product-parent'>
                <div className='product-container'>
                </div>
            </div>
        )
    }

}