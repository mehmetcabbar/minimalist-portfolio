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
                    I am from Istanbul / Turkey. I love taking my computer with me to hit the road, planning long bike trips and camping in nature. I think that traveling and personal growth and development are related to each other. I usually travel while developing code. I use redux and context api according to conditions in my work. I am so open to have more experiences on Redux. I also have experience for JavaScript, Firebase, GIT, Bootstrap, HTML, CSS, Adobe Illustrator, Photoshop, Sketch, Zeplin.
                </p>
                <p>Email address: mhmtcbbr@gmail.com</p>

            </div>
        </div>
    )
}

export default About