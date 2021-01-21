import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from '../../views/examples/Home'
import Offers from '../../views/examples/Offers'
import Catalogue from '../../views/examples/Catalogue'

import './Content.css'

const Content = props => (

    <div className='Content'>
        <Switch>
            <Route path='/home'>
                <Home/>
            </Route>

            <Route path='/offers'>
                <Offers/>
            </Route>

            <Route path='/catalogue'>
                <Catalogue/>
            </Route>
        </Switch>
    </div>

)
export default Content;