import React from 'react'

import { images } from '../../constants'
import './SubHeading.scss'

const SubHeading = ({ title }) => {
    return (
        <div className='subhead_container'>
            <p className='p_cormorant'>{title}</p>
            <img src={images.spoon} alt="spoon-img" className='spoon_img' />
        </div>
    )
}

export default SubHeading
