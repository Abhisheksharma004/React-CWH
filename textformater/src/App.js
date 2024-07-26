import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App(prop) {
  return (
    <>
        <Navbar title="Text Formater Abhishek" home="Home" about="About" fo="F&O" con="Contact" hep="Help?" />
        <div className="container">
        <TextBox />
        </div>
    </>
  );
}

export default App;
