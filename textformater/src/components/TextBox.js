import { useState } from "react"

function TextBox() {

    const handleOnClick = () => {
        console.log("Uppar case clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnClickLow = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const hendleOnChange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState("Enter Text Here...");

    return (
        <>
        <div className="container mb-3">
            <h1>Text Formater</h1>
            <div className="mb-3">
                <textarea className="form-control" rows="8" value={text} onChange={hendleOnChange} placeholder='Enter Text Here'></textarea>
            </div>
            <button type="button" className="btn btn-outline-success mx-1" onClick={handleOnClick}>Conver to Uppar Case</button>
            <button type="button" className="btn btn-outline-success mx-1" onClick={handleOnClickLow}>Conver to Lower Case</button>
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
