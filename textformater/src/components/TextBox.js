import React from 'react'

function TextBox() {
    return (
        <div className="container mb-5">
            <h1>Text Formater</h1>
            <div className="mb-3">
                <textarea className="form-control" rows="8" placeholder='Enter Text Here'></textarea>
            </div>
            <button type="button" className="btn btn-outline-success">Success</button>
        </div>
    )
}

export default TextBox
