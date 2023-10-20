import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.scss'

const Chef = () => {
    return (
        <div className='chef_container wrapper bg section_padding'>
            <div className='wrapper_img wrapper_img-reverse'>
                <img src={images.chef} alt="chef-img" />
            </div>

            <div className='chef_heading wrapper_info'>
                <SubHeading title="Chef's word" />
                <h1 className='headtext_cormorant'>What We Believe In</h1>

                <div className="chef_content">
                    <div className='chef_content-quote'>
                        <img src={images.quote} alt="quote" />
                        <p className='p_opensans'>I know this sounds insane, but... well, the truth sounds insane sometimes, but that doesn't mean it's not.</p>
                    </div>
                    <p className='p_opensans'>And the truth is, I have no talent at all. But this rat, he's the one behind these recipes, he's the cook!</p>
                </div>

                <div className='chef_sign'>
                    <p className='p_cormorant'>Alfredo Linguini</p>
                    <p className='p_opensans'>Chef & Founder</p>
                    <img src={images.sign} alt="chef-sign" />
                </div>
            </div>
        </div>
    )
}

export default Chef
