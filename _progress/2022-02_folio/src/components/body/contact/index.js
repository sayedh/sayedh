import React from 'react'
import './contact.css';
import Separator from '../../common/seperator/index';
import SocialContact from '../../common/social-contact/index';

function Contact() {
    return ( 
        <div> 
        <Separator/>
        <label className='section-title'>Contact</label>
        <div className='contact-container'>
            <div className='contact-left'>
                <p>Want to get in touch? Contact me on any of the social platforms. </p>
                <SocialContact/>
            </div>
            <div className='download'>
                <a download href={require("../../../assets/SayedHaque-Resume.pdf")}>
                    <i class='fi-rr-cloud-download download-icon'/>
                    Download Resume
                </a>

            </div>
        </div>
        </div>
    )
}

export default Contact