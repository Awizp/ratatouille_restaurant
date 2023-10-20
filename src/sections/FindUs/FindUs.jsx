import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './FindUs.scss'

const FindUs = () => {
    return (
        <div className='find_container bg wrapper section_padding' id='contact'>
            <div className="wrapper_img wrapper_img-reverse">
                <img src={images.findus} alt="contact" />
            </div>

            <div className="wrapper_info">
                <SubHeading title='Contact' />
                <h1 className="headtext_cormorant"
                    style={{ marginBottom: '3rem' }}
                >
                    Find Us
                </h1>

                <div className="find_content">
                    <p className='p_opensans'>Quai de la Tournelle, a few steps from Notre-Dame. Paris</p>
                    <p className='p_opensans' style={{ color: 'var(--color-golden)', margin: '2rem 0' }}>Opening Hours</p>
                    <p className='p_opensans'>Mon - Fri : 9AM - 11PM</p>
                    <p className='p_opensans'>Sat - Sun : 10AM - 12PM</p>
                </div>

                <button type='button' className='custom_button' style={{ marginTop: '2rem' }}>Visit Us</button>
            </div>
        </div>
    )
}

export default FindUs
