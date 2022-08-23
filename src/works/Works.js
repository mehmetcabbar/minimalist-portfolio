import './Works.css'
import React, { useState } from 'react';
import QuitBuddy from '../images/quit-buddy.png';
import Karinca from '../images/karinca.png';
import Quide from '../images/quide.png';
import ReactNativeLogo from '../images/react-native-logo.svg';
import Modal from 'react-modal';
import ModalForQuit from '../modal/ModalForQuit';
import ModalForKarinca from '../modal/ModalForKarinca';
import ModalForQuide from '../modal/ModalForQuide';



Modal.setAppElement('#root')

function Works() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    function handleShowing() {
        setIsOpen(true)
    }
    function handleShowing1() {
        setIsOpen1(true)
    }
    function handleShowing2() {
        setIsOpen2(true)
    }

    return (
        <div>
            <div id='works' className='worksContainer'>
                <div className='worksBox'>
                    <a href='/#' onClick={handleShowing} className='worksBoxLink'>
                        <div className='BoxForQuit'>
                            <h4 className='worksTitle'>
                                Quit Buddy / React Native / Android - IOS
                            </h4>
                            <img className='quitImage' src={QuitBuddy} alt='quit buddy app' />
                        </div>
                    </a>
                    <div className='ReactBox'>
                        <img src={ReactNativeLogo} className='react-logo' alt='React Native Logo' />
                        <div className='ReactText'>Mobile Apps <br /> w/ React Native</div>
                        <div className='lastBoxforReact'>Alert.alert('I love react native')</div>
                    </div>
                </div>
                <div className='worksBoxSecond'>

                    <div onClick={handleShowing1} className='karincaBox'>
                        <a className='lastLink' href='/#'>
                            <img className='karincaImage' src={Karinca} alt='quit buddy app' />
                            <h4 className='karincaTitle'>
                                Karınca / React Native / Android - IOS
                            </h4>
                        </a>

                    </div>

                    <a className='worksBoxLink' href='/#'>
                        <div onClick={handleShowing2} className='worksBoxFour'>
                            <img className='quideImage' src={Quide} alt='quit buddy app' />
                            <h4 className='quideTitle'>
                                Quide / React Native / Android - IOS
                            </h4>
                        </div>
                    </a>
                </div>
            </div>
            {/* This is modal area */}
            <ModalForQuit
                onRequestClose={() => setIsOpen(false)}
                isOpen={isOpen}
                isClose={() => setIsOpen(false)}
            />
            <ModalForKarinca
                onRequestClose={() => setIsOpen1(false)}
                isOpen={isOpen1}
                isClose={() => setIsOpen1(false)}
            />
            <ModalForQuide
                onRequestClose={() => setIsOpen2(false)}
                isOpen={isOpen2}
                isClose={() => setIsOpen2(false)}
            />
        </div>
    )
}

export default Works