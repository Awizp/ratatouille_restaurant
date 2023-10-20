import React from 'react'

import { SubHeading } from '../../components'
import './NewsLetter.scss'

const NewsLetter = () => {
    return (
        <div className='newsletter_container'>
            <div className="newsletter_heading">
                <SubHeading title='News Letter' />
                <h1 className="headtext_cormorant">Subscribe To Our News Letter</h1>
                <p className="p_opensans">And never miss an update!</p>
            </div>

            <div className="newsletter_input flex_center">
                <input type="email" placeholder='Enter your email address' />
                <button className='custom_button'>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
