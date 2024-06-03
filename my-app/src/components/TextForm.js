import React from "react";

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
      <div class="mb-3 my-5">
        <textarea
          class="form-control"
          id="ex1"
          rows="8"
        />
      </div>
      <button className="btn btn-primary">Convert</button>
    </div>
  );
}
