import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    console.log("text Changed ");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "success");
  };

  const handleLoClick = () => {
    console.log("button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success");
  };

  const copyText = (event) => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied to Clipboard", "success");
  };

  const clearText = (event) => {
    setText("");
    props.showAlert("Cleared text area", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); // making an array
    setText(newText.join(" ")); // joining the array
    props.showAlert("Handled extra spaces", "success");
  };
  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      
      <div className="container my-3">
      <h1 className="mb-2"> {props.heading}</h1>
        <textarea
          className="form-control my-3"
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onChange={handleChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button disabled={text.length===0}className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={copyText}>
          Copy to Clipboard
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra spaces
        </button>
      </div>

      <div className="container my-3">
        <h2> Your text summary </h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters{" "}
        </p>
        <p> Time to read: {0.0008 * text.split(" ").length} minutes </p>
        <h2> Preview </h2>
        <p> {text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
