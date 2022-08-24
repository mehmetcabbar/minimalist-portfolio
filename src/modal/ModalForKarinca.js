import './Modal.css'
import Modal from 'react-modal';
import Karinca from '../images/karinca.png';

function ModalForKarinca({ onRequestClose, isOpen, isClose }) {
    return (
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
                <img className='karincaImage' src={Karinca} alt='quit buddy app' />
                <div className='modalSecondBox'>
                    <h4 className='modalTitle'>
                        Karınca / React Native / Android - IOS
                    </h4>
                    <p className='modalContent'>
                        Students have to prepare to university exam by using different books for each courses in Turkey. Tracking their progress is almost impossible with traditional way. With Karınca (which mean is Ant), we wanted to solve this problem in favor of the students.
                    </p>
                    <h5 className='modalSecondTitle'>
                        Tecnic details
                    </h5>
                    <p className='modalContent'>
                        Platform: IOS & Android <br />
                        Code language: React Native / Year: 2021 <br />
                        Others: AWS, Mongo, Firebase, Redux, Redux - Thunk etc. <br />
                        Coding percentage: 30% <br />
                        Download / Visit: <a className='modalLink' href='https://karincahazirlik.com/' rel='noreferrer' target='_blank'>www.karincahazirlik.com</a>
                    </p>
                    <button onClick={isClose} className='modalButton'>Back</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalForKarinca;