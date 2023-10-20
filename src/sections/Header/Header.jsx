import React from 'react'

import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Header.scss'

const Header = () => {
    return (
        <div className='header_container wrapper section_padding' id='home'>
            <div className='wrapper_info'>
                <SubHeading title='The Chase to New Flavour' />
                <h1>The Key to Fine Dining</h1>
                <p className='p_opensans'>Beautiful private spaces and dining rooms, flexible package options, and top-notch S&W service. Expect the exceptional.</p>
                <button type='button' className='custom_button'>Explore Menu</button>
            </div>
            <div className='wrapper_img'>
                <img src={images.welcome} alt="header-img" />
            </div>
        </div>
    )
}

export default Header
