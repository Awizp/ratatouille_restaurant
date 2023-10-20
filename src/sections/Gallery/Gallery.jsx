import React, { useRef } from 'react'
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Gallery.scss'

const Gallery = () => {

    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef

        if (direction === 'left') {
            current.scrollLeft -= 300
        }
        else {
            current.scrollLeft += 300
        }
    }

    const imageItems = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

    return (
        <div className='gallery_container flex_center section_padding'>
            <div className="gallery_content">
                <SubHeading title='Instagram' />
                <h1 className='headtext_cormorant'>Photo Gallery</h1>
                <p className="p_opensans" style={{ color: 'var(--color-gray)' }}>Indulge in a visual feast of our restaurant creations on our vibrant Instagram page. Join us on a culinary journey that will tantalize your taste buds!</p>
                <button type='button' className='custom_button'>View more</button>
            </div>

            <div className="gallery_images">
                <div className="gallery_items" ref={scrollRef}>
                    {imageItems.map((image, i) => (
                        <div className="gallery_img-card" key={`galleryImg${i + 1}`}>
                            <img src={image} alt="gallery" />
                            <BsInstagram className='gallery_img-icon' />
                        </div>
                    ))}
                </div>

                <div className='gallery_arrow'>
                    <BsArrowLeftShort className='gallery_arrow_icon' onClick={() => scroll('left')} />
                    <BsArrowRightShort className='gallery_arrow_icon' onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    )
}

export default Gallery
