import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar brandName="Abhishek" about="HelloAbout" gallery="HelloGallery" />
      <div className="container">
        <TextForm heading="Convert Text To UpparCase" />
      </div>
    </>
  );
}

export default App;
