import React from 'react'

import './AwardCard.scss'

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
    return (
        <div className='awards_card'>
            <img src={imgUrl} alt="award-img" />
            <div className="awards_content">
                <p className="p_cormorant" style={{ color: 'var(--color-golden)' }}>{title}</p>
                <p className="p_cormorant" >{subtitle}</p>
            </div>
        </div >
    )
}

export default AwardCard
