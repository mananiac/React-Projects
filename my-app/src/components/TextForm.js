import React,  {useState} from 'react'

export default function TextForm(props) {

    const [ text , setText] = useState('');
    const handleUpClick = () => {

        console.log("button clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {

        console.log("button clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleChange = (event) =>  {

        console.log("text Changed " )
        setText(event.target.value)

    }
  return (
    <div>
        <h1> {props.heading}</h1>
        <div className="container my-3">
            <textarea className="form-control my-3" value={text} onChange={handleChange}id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>

        </div>

        <div className="container my-3">
            <h2> Your text summary </h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p> Time to read: {0.0008 * text.split(" ").length} minutes </p>
            <h2> Preview </h2>
            <p> {text}</p>
        </div>
    </div>
  )
}
