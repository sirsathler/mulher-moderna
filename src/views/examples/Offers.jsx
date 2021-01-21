import React from 'react'
import ProductCard from '../../components/layout/Cards/ProductCard'
import './Offers.css'


const Offers = props => (
    <div className='offers-parent'>
        <p>Confira nossas melhores promoções, com entregas em <strong>todo o Brasil!</strong></p>
        <section className='bags-container'>
            <p className='offers-section-title'>Bolsas</p>
            <div className='bags-cards'>
                <ProductCard src='https://lh3.googleusercontent.com/proxy/AKn9Lt9jG_NCk92D_sZawYfRvF3iwa0K9lDGsZ45Y93btH8-gG-c0r5NUywA3zmB4sdgzLva68xpN4g6XFK973iOUir-ec6aiiNCSH_uPc12EGwG4Y8' title='BOLSA KAMARI' collection='Summer' price='109,90' />
                <ProductCard src='https://www.briardicalcados.com.br/wp-content/uploads/2019/07/22950_495978_20190611171225-600x600.png' title='BOLSA FLOWERY' collection='Jasmine' price='79,90' />
                <ProductCard src='https://pngimg.com/uploads/women_bag/women_bag_PNG6410.png' title='BOLSA SPRING' collection='Summer' price='49,90' />
                <ProductCard src='https://www.briardicalcados.com.br/wp-content/uploads/2019/07/22950_495978_20190611171225-600x600.png' title='BOLSA FLOWERY' collection='Jasmine' price='79,90' />
                <ProductCard src='https://www.briardicalcados.com.br/wp-content/uploads/2019/07/22950_495978_20190611171225-600x600.png' title='BOLSA FLOWERY' collection='Jasmine' price='79,90' />
                <ProductCard src='https://www.briardicalcados.com.br/wp-content/uploads/2019/07/22950_495978_20190611171225-600x600.png' title='BOLSA FLOWERY' collection='Jasmine' price='79,90' />
            </div>
        </section>
    </div>
)

export default Offers;