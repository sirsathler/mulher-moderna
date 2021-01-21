import React from 'react'

import './NewsCards.css'

export default props => {

    const bgimage = props.link

    const newsStyle = {
        backgroundImage: 'url(' + bgimage + ')'
    }

    return (
        <div className='news-card'>
            <div className='news-info'>
                <a id='news-title'>{props.title}</a>
                <p id='news-description'>{props.description}</p>
                <a href=''><li className='read-more'>Ler mais</li></a>
            </div>
            <div className='news-img' style={newsStyle} />
        </div>
    )
}