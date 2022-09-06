import React from 'react';
import './About.css';
import MehmetCabbar from '../images/mehmetCabbar.png'

function About() {
    return (
        <div id='about' className='aboutContainer'>
            <img src={MehmetCabbar} className='aboutImage' alt='Mehmet Cabbar' />
            <h3 className='aboutTitle'>Experience History w/Contact</h3>
            <div className='aboutContent'>
                <p>
                    I am from Istanbul / Turkey. I love taking my computer with me to hit the road, planning long bike trips and camping in nature. I think that traveling and personal growth and development are related to each other. I usually travel while developing code.  I like developing user-friendly code. It is my passion to empathize between the designer, the user, and business cases, to create a solution with the product. I am so open more experience. I want to join amazing brain storms, learning from another team member, sharing information, helping to others, getting help, then I want to create an international product, again and again. I love this spirit.
                </p>
                <p>Email address: mhmtcbbr@gmail.com</p>

            </div>
        </div>
    )
}

export default About