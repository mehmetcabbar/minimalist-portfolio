import './Hello.css'
import React from 'react'

function Hello() {
    return (
        <div className='helloContainer'>
            <h1 className='helloTitle'>HELLO!  - I AM MEHMET</h1>
            <div className='helloText'>
                <p>
                    I am happy to see you here. I'm a front-end developer and a former product designer. I love developing mobile apps for cross platforms via react native. This is an excellent way to manage time and limited resources. I take care to rediscover the opportunities created by technology and to be a part of these solutions via some projects as a developer. Okay, it's enough to talk, let's see some works!
                </p>
            </div>
            <div className='helloFollow'>
                Follow me:
                <a target='_blank' rel="noreferrer" href='https://github.com/mehmetcabbar' className='helloSocialIcon'>
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/mehmet-cabbar-87a884143/' className='helloSocialIcon'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a target='_blank' rel="noreferrer" href='https://www.instagram.com/aboutpersonalstuff/' className='helloSocialIcon'>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </div>
        </div>
    )
}

export default Hello