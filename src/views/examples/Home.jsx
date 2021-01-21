import React from 'react'
import logo2 from '../../img/logo2.png'
import ProductCard from '../../components/layout/Cards/ProductCard'
import NewsCard from '../../components/layout/Cards/NewsCard'

import './Home.css'


const Home = props => (
    <div className='home'>
        <div className='daily-offer'>
            <div className='daily-offer-bar' />
            <div className='daily-offer-body'>
                <div className='daily-offer-img'>
                    <img src='https://www.briardicalcados.com.br/wp-content/uploads/2019/07/22950_495978_20190611171225-600x600.png' />
                </div>
                <div className='daily-offer-info'>
                    <img src={logo2} height='120px' />
                    <p id='daily-offer-title'>BOLSA HARMONIA</p>
                    <p id='daily-offer-collection'>coleção Jasmine</p>
                    <p>Por apenas</p>
                    <p id='daily-offer-price'>R$119,90</p>
                    <p>12x sem juros no cartão!</p>
                    <a href='/' className='buy-button'>Comprar agora!</a>
                </div>
            </div>
            <div className='daily-offer-bar' />
        </div>
            <section className='news-section'>
                <p id='news-header'>Últimas noticias!</p>
                <div className='news-container'>
                    <NewsCard title='Confira a nova coleção Jasmine!' description='Já está disponível para compra através do site, mercado livre e whatsapp a nova coleção Jasmine. Confira as fotos!' link='https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/01/cartier-bags-fashion-for-women-1546826071.jpg'/>
                    <NewsCard title='Promoção vindo aí!' description='Confira o calendário de promoção MULHER MODERNA para o ano de 2021!' link='https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/01/cartier-bags-fashion-for-women-1546826071.jpg'/>
                </div>
            </section>
            <section className='other-products'>
                <p id='other-products-title'>Confira também!</p>
                <div className='cards-container'>
                    <ProductCard src='https://www.briardicalcados.com.br/wp-content/uploads/2019/07/22950_495978_20190611171225-600x600.png' title='BOLSA FLOWERY' collection='Jasmine' price='79,90' />
                    <ProductCard src='https://www.briardicalcados.com.br/wp-content/uploads/2019/07/22950_495978_20190611171225-600x600.png' title='BOLSA FLOWERY' collection='Jasmine' price='79,90' />
                    <ProductCard src='https://www.briardicalcados.com.br/wp-content/uploads/2019/07/22950_495978_20190611171225-600x600.png' title='BOLSA FLOWERY' collection='Jasmine' price='79,90' />
                </div>
            </section>
    </div>
)

export default Home;