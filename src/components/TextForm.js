import React, {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const clear = ()=>{
    setText('')
  }

  const speak = ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }  

  const handleOnChange = (event)=>{
    setText(event.target.value);
  } 

  const copy = (event)=>{
    navigator.clipboard.writeText(text)
  }
  
  const removeSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
  } 

  const [text, setText] = useState('Enter text here.');

  return (
    <>
    <div className='container'>
    <h3>{props.heading}</h3>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    </div>
    <div className="container">
    <button className="btn btn-warning m-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary m-2" onClick={handleDownClick}>Convert to Lowercase</button>
    <button className="btn btn-info m-2" onClick={removeSpace}>Remove extra space</button>
    <button className="btn btn-success m-2" onClick={speak}>Speak</button>
    <button className="btn btn-secondary m-2" onClick={copy}>Copy</button>
    <button className="btn btn-danger m-2" onClick={clear}>Clear</button>
    
    </div>
    <div className="container" my-3>
      
      
    <div className="card my-3">
    <div className="card-header">
    <h5>Your text summay</h5>
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Mintues read.</p>
      </blockquote>
    </div>
    </div>

      
  <div class="card">
  <div class="card-header">
  <h5>Preview</h5>
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
    <p>{text}</p>
    </blockquote>
  </div>
</div>
      

    </div>
    </> 
  )
}
