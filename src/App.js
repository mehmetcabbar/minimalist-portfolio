import './App.css';
import Navbar from './navbar/Navbar';
import Hello from './hello/Hello';
import Works from './works/Works';
import About from './about/About';
import Footer from './footer/Footer';
import Modal from 'react-modal';
import WebWorks from './webWorks/WebWorks'

Modal.setAppElement('#root')

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hello />
      <Works />
      <WebWorks />
      <About />
      <Footer />
    </div>
  );
}

export default App;
