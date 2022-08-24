import './Modal.css'
import Modal from 'react-modal';
import QuitBuddy from '../images/quit-buddy.png';


function ModalForQuit({ onRequestClose, isOpen, isClose }) {
    return (
        <div>
            <Modal
                onRequestClose={onRequestClose}
                isOpen={isOpen}
                className='Modal'
                style={{
                    overlay: {
                        backgroundColor: '#f1f1f1'
                    },
                }}>
                <div className='quitModal'>
                    <img className='quitImage' src={QuitBuddy} alt='quit buddy app' />
                    <div className='modalSecondBox'>
                        <h4 className='modalTitle'>
                            Quit Buddy / React Native / Android - IOS
                        </h4>
                        <p className='modalContent'>
                            Have you quit smoking? Quit Buddy is the most companion you need on this journey. Explore your motivations. Track your achievements and see your health improvements. Check how much money you have saved whenever you want via Quit Buddy.
                        </p>
                        <h5 className='modalSecondTitle'>
                            Tecnic details
                        </h5>
                        <p className='modalContent'>
                            Platform: IOS & Android <br />
                            Code language: React Native / Year: 2022 <br />
                            Others: Firebase Auth, Redux, Redux - Persist, Redux - Thunk <br />
                            Coding percentage: 100% <br />
                            Download / Visit: <a className='modalLink' href='https://quitbuddy.app/' rel='noreferrer' target='_blank'>www.quitbuddy.app</a>
                        </p>
                        <button onClick={isClose} className='modalButton'>Back</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ModalForQuit;