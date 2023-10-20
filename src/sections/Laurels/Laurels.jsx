import React from 'react'

import { SubHeading, AwardCard } from '../../components'
import { images, data } from '../../constants'
import './Laurels.scss'

const Laurels = () => {
    return (
        <div className='laurels_container bg wrapper section_padding' id='awards'>
            <div className="wrapper_info">
                <SubHeading title='Awards & Recognition' />
                <h1 className="headtext_cormorant">Our Laurels</h1>

                <div className="laurels_awards">
                    {data.awards.map((award, i) => (
                        <AwardCard key={award.title + i} award={award} />
                    ))}
                </div>
            </div>
            <div className="wrapper_img">
                <img src={images.laurels} alt="laurels" width={500} height={500} />
            </div>
        </div>
    )
}

export default Laurels
