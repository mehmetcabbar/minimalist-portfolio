import './Modal.css'
import Quide from '../images/quide.png';
import Modal from 'react-modal';


function ModalForQuide({ onRequestClose, isOpen, isClose }) {
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
                <img className='ModalquideImage' src={Quide} alt='quit buddy app' />
                <div className='modalSecondBox'>
                    <h4 className='modalTitle'>
                        Quide / React Native / Android - IOS
                    </h4>
                    <p className='modalContent'>
                        Quide was a marketplace for local experiences. It was aimed at travelers who wants to take maximum experience in short travel times. It served before the pandemic with over 1000 local experiences from 90 countries.
                    </p>
                    <h5 className='modalSecondTitle'>
                        Tecnic details
                    </h5>
                    <p className='modalContent'>
                        Platform: IOS & Android <br />
                        Code language: React Native / Year: 2020 <br />
                        Others: AWS, Mongo, Firebase, Redux <br />
                        Services language: Turkish <br />
                        Design: Sketch, Illustrator, Zeplin <br />
                        Coding percentage: 10% <br />
                        See how is it work: <a className='modalLink' href='https://www.youtube.com/watch?v=RCFOpEZ5vP4' rel='noreferrer' target='_blank'>Go Youtube</a>
                    </p>
                    <button onClick={isClose} className='modalButton'>Back</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalForQuide;