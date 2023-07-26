import React from 'react'
import { useState } from 'react';
export default function TextForm(props) {
    const handleOnClick = ()=>{
        // console.log("change to upper case")
        let  newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("on changes called")
        setText(event.target.value)
       
    }
    const [text, setText] = useState('');
  return (
    <>
<div className="mb-3"  style={{color:props.mode==='dark'? 'gray': 'white'}}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
  <textarea className="form-control mb-3" style={{backgroundColor:props.mode==='dark'? 'gray': 'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
  <button type="button" onClick={handleOnClick} style={{backgroundColor:props.mode==='dark'? 'white': 'gray'}} className="btn btn-primary mx-3">Conver To Uppercase</button>
  <button type="button" onClick={handleLoClick}  className="btn btn-primary">Conver To LowerCase</button>
</div>
<div className="mb-3">
  <h2>Your Text Summrey</h2>
  <p>You have total words {text.split(" ").length} and total character is {text.length}</p>
  <h4>Summery:- {text}</h4>
</div>
</>
  )
}
