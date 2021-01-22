import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from '../../views/examples/Home'
import Offers from '../../views/examples/Offers'
import Catalogue from '../../views/examples/Catalogue'
import Product from '../../views/examples/Product'


import './Content.css'

const Content = props => (

    <div className='Content'>
        <Switch>

            <Route path='/offers'>
                <Offers/>
            </Route>

            <Route path='/catalogue'>
                <Catalogue/>
            </Route>

            <Route path='/product/:id'>
                <Product/>
            </Route>

            <Route path='/'>
                <Home/>
            </Route>

        </Switch>
    </div>

)
export default Content;