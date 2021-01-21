import React from 'react'
import Header from '../components/layout/Header'
import Content from '../components/layout/Content'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

const App = props => (

    <div className='App'>
        <Router>
            <Header />
            <Content />
        </Router>
    </div>

)

export default App;