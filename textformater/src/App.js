import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
import { useState } from 'react';

function App(props) {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

  }

  return (
    <>
        <Navbar title="Text Formater Abhishek" home="Home" about="About" fo="F&O" con="Contact" hep="Help?" />
        <Alert alert={alert} />
        <div className="container">
        <TextBox showAlert={showAlert} />
        </div>
    </>
  );
}

export default App;
