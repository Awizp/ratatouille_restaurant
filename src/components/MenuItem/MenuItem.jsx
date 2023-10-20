import React from 'react'

import './MenuItem.scss'

const MenuItem = ({ title, tags, price }) => {
    return (
        <div className='menuitem'>
            <div className="menuitem_heading">
                <div className="menuitem_name">
                    <p className='p_cormorant' style={{ color: 'var(--color-golden)' }}>{title}</p>
                </div>

                <div className='menuitem_dash' />

                <div className="menuitem_price">
                    <p className='p_cormorant'>{price}</p>
                </div>
            </div>

            <div className='menuitem_sub'>
                <p className='p_opensans' style={{ color: 'var(--color-gray)' }}>{tags}</p>
            </div>
        </div>
    )
}

export default MenuItem
