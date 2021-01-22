import React, { useState } from 'react'
import ProductCard from '../../components/layout/Cards/ProductCard'
import './Offers.css'


export default props => {
    
    let [filter, setFilter] = useState('Preço')
    let [bagList, setBagList] = useState([])
    
    function getJson(promise) {
        return promise.json()
    }
    
    fetch('https://my-json-server.typicode.com/sirsathler/mmapi/bags')
    .then(getJson)
    .then(jsonPromiseResponse => {
        setBagList(jsonPromiseResponse)
    })
    
    return (
        <div className='offers-parent'>
            <p>Confira nossas melhores promoções, com entregas em <strong>todo o Brasil!</strong></p>
            <div className='filter-parent'>
                <p>Filtrar por: </p>
                <p>{filter}</p>
            </div>
            <section className='bags-container'>
                <p className='offers-section-title'>Bolsas</p>
                <div className='bags-cards'>
                    {bagList.map(i => <ProductCard title={i.title} src={i.src} collection={i.collection} price={i.price} />)}
                </div>
            </section>
        </div>
    )

}


