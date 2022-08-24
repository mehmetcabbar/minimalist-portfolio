import React from 'react';
import './WebWorks.css';
import HorizontalScroll from 'react-scroll-horizontal';
import QuitWeb from '../images/quit-web.png';
import Mayso from '../images/mayso.png';
import VtlLog from '../images/vtllog.png';
import Candan from '../images/candanOzturk.png';
import KarincaWeb from '../images/karincaWeb.png';



function WebWorks() {
    const child = { width: `300px`, height: `300em` }
    const parent = { width: `100%`, height: `300px` }
    return (
        <div className='webWorkContainer'>
            <h3 className='webWorksTitle'>
                Website Development <br />
                w/ React Js - JavaScript - Wordpress - Bootstrap - HTML5 - CSS
            </h3>
            <div style={parent} className='webWorksWrapper'>
                <HorizontalScroll>
                    <div style={child} className='webWorkBox bg'>
                        <a href='https://quitbuddy.app/' rel="noreferrer" target='_blank' className='webLink'>
                            <img src={QuitWeb} className='webWorksImage' alt='quit buddy' />
                            <div className='webTitleBox'>
                                <h5 className='workLittleTitle'>Quit Buddy / Web Site <br /> w/ React Js</h5>
                            </div>
                        </a>
                    </div>
                    <div style={child} className='webWorkBox bg'>
                        <a href='http://en.maysogutma.com/' rel="noreferrer" target='_blank' className='webLink'>
                            <img src={Mayso} className='webWorksImage' alt='mayso ice machine and cooling system' />
                            <div className='webTitleBox'>
                                <h5 className='workLittleTitle'>Mayso Ice Machines / Web Site <br /> Wordpress - Bootstrap - HTML - CSS</h5>
                            </div>
                        </a>
                    </div>
                    <div style={child} className='webWorkBox bg'>
                        <a href='http://en.vtllog.com/' rel="noreferrer" target='_blank' className='webLink'>
                            <img src={VtlLog} className='webWorksImage' alt='vtl logistic' />
                            <div className='webTitleBox'>
                                <h5 className='workLittleTitle'>Vtl Logistics / Web Site <br /> Wordpress - Bootstrap - HTML - CSS</h5>
                            </div>
                        </a>
                    </div>
                    <div style={child} className='webWorkBox bg'>
                        <a href='http://candanozturk.com/' rel="noreferrer" target='_blank' className='webLink'>
                            <img src={Candan} className='webWorksImage' alt='painter candan ozturk' />
                            <div className='webTitleBox'>
                                <h5 className='workLittleTitle'>Painter Candan Öztürk / Web Site <br /> Wordpress - Bootstrap - HTML - CSS</h5>
                            </div>
                        </a>
                    </div>
                    <div style={child} className='webWorkBox bg'>
                        <a href='http://karincahazirlik.com/' rel="noreferrer" target='_blank' className='webLink'>
                            <img src={KarincaWeb} className='webWorksImage' alt='karinca' />
                            <div className='webTitleBox'>
                                <h5 className='workLittleTitle'>Karınca Hazırlık / Web Site <br /> Wordpress - Bootstrap - HTM - CSS</h5>
                            </div>
                        </a>
                    </div>
                </HorizontalScroll>

            </div>
        </div>

    )
}

export default WebWorks