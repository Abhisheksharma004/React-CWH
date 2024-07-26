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
        <div className="container mb-5">
            <h1>Text Formater</h1>
            <div className="mb-3">
                <textarea className="form-control" rows="8" value={text} onChange={hendleOnChange} placeholder='Enter Text Here'></textarea>
            </div>
            <button type="button" className="btn btn-outline-success" onClick={handleOnClick}>Conver to Uppar Case</button>
            <button type="button" className="btn btn-outline-success" onClick={handleOnClickLow}>Conver to Lower Case</button>
        </div>
    )
}

export default TextBox
