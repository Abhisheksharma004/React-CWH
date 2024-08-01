import { useState } from "react"

function TextBox(props) {

    const handleOnClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted To Uppar Case", "success")
    }

    const handleOnClickLow = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted To Lower Case", "success")
    }
    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select()
        navigator.clipboard.writeText(text.value);
    }
    const removeExtraspace = () => {
        var newText = text.split(/[ ]+/)
        setText(newText.join(" "))

    }

    const ClearText = () => {
        let newText = ""
        setText(newText)
    }


    const hendleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (
        <>
        <div className="container mb-3">
            <h1>Text Formater</h1>
            <div className="mb-3">
                <textarea id="myBox" className="form-control" rows="8" value={text} onChange={hendleOnChange} placeholder='Enter Text Here'></textarea>
            </div>
            <button type="button" className="btn btn-outline-success mx-1" onClick={handleOnClick}>Conver to Upper Case</button>
            <button type="button" className="btn btn-outline-success mx-1" onClick={handleOnClickLow}>Conver to Lower Case</button>
            <button type="button" className="btn btn-outline-success mx-1" onClick={copyText}>Copy Text</button>
            <button type="button" className="btn btn-outline-success mx-1" onClick={removeExtraspace}>Remove Extra Space</button>
            <button type="button" className="btn btn-outline-danger mx-1" onClick={ClearText}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Text Summary</h2>
            <p>Count Word : {text.split(" ").length} and character : {text.length} </p>
            <p>{0.08 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextBox
