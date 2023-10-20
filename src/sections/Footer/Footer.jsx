import React from 'react'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { RiTwitterXLine } from 'react-icons/ri'

import { NewsLetter } from '../../components'
import { images } from '../../constants'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer_container bg section_padding'>
            <NewsLetter />

            <div className="footer_links">
                <div className="footer_contact">
                    <h1 className="contact_title">Contact Us</h1>
                    <p className="p_opensans">Quai De La Tournelle, A Few Steps From Notre-Dame. Paris</p>
                    <p className="p_opensans">+04 123 345</p>
                    <p className="p_opensans">+05 123 456</p>
                </div>

                <div className="footer_social">
                    <img src={images.logo} alt="logo-img" />
                    <p className="p_opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
                    <img src={images.spoon} alt="spoon" className='spoon_img' style={{ marginTop: '15px' }} />

                    <div className="footer_social-links">
                        <FiFacebook />
                        <RiTwitterXLine />
                        <FiInstagram />
                    </div>
                </div>

                <div className="footer_work">
                    <h1 className="work_title">Working Hours</h1>
                    <p className="p_opensans">Monday - Friday :</p>
                    <p className="p_opensans" style={{ marginBottom: '1rem' }}>9AM - 11PM</p>
                    <p className="p_opensans">Saturday - Sunday :</p>
                    <p className="p_opensans">10AM - 12PM</p>
                </div>
            </div>

            <div className="footer_copyright">
                <p className="p_opensans">2023 RATATOUILLE. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
