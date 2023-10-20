import React from 'react'

import { images } from '../../constants'
import './About.scss'

const About = () => {
    return (
        <div className='about_container bg flex_center section_padding' id='about'>
            <div className='about_overlay flex_center'>
                <img src={images.R} alt="letter" />
            </div>

            <div className='about_content flex_center'>
                <div className='about_aboutus'>
                    <h1 className='headtext_cormorant'>About Us</h1>
                    <img src={images.spoon} alt="spoon-img" className='spoon_img' />
                    <p className='p_opensans'>Anyone can cook, but only the fearless can be great. Our Chef's are talented to serve you at their peak.</p>
                    <button className='custom_button' type='button'>Know More</button>
                </div>

                <div className='about_knife-img flex_center'>
                    <img src={images.knife} alt="knife-img" />
                </div>

                <div className='about_history'>
                    <h1 className='headtext_cormorant'>Our History</h1>
                    <img src={images.spoon} alt="spoon-img" className='spoon_img' />
                    <p className='p_opensans'>Not everyone can become a great artist, but a great artist can come from anywhere. Our Restaurant is also one of a kind.</p>
                    <button className='custom_button' type='button'>Know More</button>
                </div>
            </div>
        </div>
    )
}

export default About
