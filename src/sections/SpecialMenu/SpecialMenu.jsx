import React from 'react'

import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import './SpecialMenu.scss'

const SpecialMenu = () => {
    return (
        <div className='specialmenu_container flex_center section_padding' id='menu'>
            <div className="specialmenu_title">
                <SubHeading title='Menu That Fits You Palatte' />
                <h1 className='headtext_cormorant'>Today's Special</h1>
            </div>

            <div className="specialmenu_menu">
                <div className="specialmenu_wine flex_center">
                    <p className='specialmenu_wine_heading'>Wine & Beer</p>
                    <div className='specialmenu_wine_items'>
                        {data.wines.map((item, i) => (
                            <MenuItem key={item.title + i}
                                title={item.title}
                                price={item.price}
                                tags={item.tags}
                            />
                        ))}
                    </div>
                </div>

                <div className="specialmenu_img">
                    <img src={images.menu} alt="menu-img" />
                </div>

                <div className="specialmenu_cocktail flex_center">
                    <p className='specialmenu_cocktail_heading'>Cocktails</p>
                    <div className='specialmenu_cocktail_items'>
                        {data.cocktails.map((item, i) => (
                            <MenuItem key={item.title + i}
                                title={item.title}
                                price={item.price}
                                tags={item.tags}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <button type='button' className='custom_button'>View More</button>
        </div>
    )
}

export default SpecialMenu
