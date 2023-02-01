import React, { useState } from "react"

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }
  const handleOnChange = (event) => {
    setPrevText(text);
    setText(event.target.value);
    setNextText('');
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }
  const handleTitleCaseClick =()=>{
    let newText = text.trim().toLocaleLowerCase().split(' ').map(function(word){
      return word.replace(word[0],word[0].toUpperCase())
    }).join(' ');
    setText(newText);
    props.showAlert("Converted to titlecase!","success");
  }
  const handleSentenceCase = ()=>{
   var newString = text.trim().toLowerCase().charAt(0).toUpperCase() + text.slice(1);
   setText(newString);
   props.showAlert("Converted to sentencecase!","success");
  }
  const handleClearClick = () => {
    let newText = ""
    setText(newText)
    props.showAlert("Text Cleared!","success");
  }
  const handleProcessTextClick = () => {
    var vnewText =
      "Number of characters (including spaces): " + text.length
    var textWithoutSpace = text.replace(/\s+/g, "")
    vnewText +=
      " Number of characters (without spaces): " + textWithoutSpace.length
    setvText(vnewText);
    props.showAlert("Text is Processed!","success");  
  }
  const handleUndoClick = () =>{
    setNextText(text);
    setText(prevText);
    props.showAlert("Undo is Done!","success");
  }
  const handleRedoClick =()=>{
    setPrevText(text);
    setText(nextText);
    props.showAlert("Redo is Done!","success");

  }

  const handleEmailExtractorClick = ()=>{
   var newTextArr = text.trim().length>0?text.trim().match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi).join(' '):props.showAlert("Type Text To Extract Email!","danger");;
    setEmailArr(newTextArr);
    //props.showAlert("Email Extracted!","success");

  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);  
    props.showAlert("Text Copied!","success");

  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Spaces!","success");

  }

//   // youtube comment 1 
//   function countWords(){
//     let wc = text.split(" ").length;
//     text.split(" ").forEach((word) => {
//         if(!word.length){
//             wc -= 1;  
//         }
//     });

//     return wc;
// }

  
  const [text, setText] = useState("")
  const [vtext, setvText] = useState("")
  const [prevText, setPrevText] = useState('');
  const [nextText, setNextText] = useState('');
  const[emailText,setEmailArr] = useState('');
  //const [text, setText] = useState("Enter text here2")
  //hooks bina class banaye class feature use krne mai helpt karte hai
  //const[text, setText] ==> array destructuring
  //text = "new text" //wrong way to change the state
  //setText("new text") //correct way to change the state
  return (
    <>
      <div className="container" style={{color:props.mode==="light"||props.mode==="warning"||props.mode==="info"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.textBoxColorInfo.backgroundColor,color:props.textBoxColorInfo.color}}
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode} mx-2`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={handleTitleCaseClick}>
          Convert to TitleCase
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick ={handleSentenceCase}>
         Sentence Case 
         </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          className={`btn btn-${props.mode} mx-2`}
          onClick={handleProcessTextClick}
        >
          Process Text
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={handleUndoClick}>
         Undo
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick ={handleRedoClick}>
         Redo
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick ={handleEmailExtractorClick}>
         Email Extractor
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick ={handleCopy}>
        Copy Text 
        </button>
        <button className={`btn btn-${props.mode} mx-2`} onClick ={handleExtraSpaces}>
        Remove spaces
        </button>
      </div>
      <div className="container my-2" style={{color:props.mode==="light"||props.mode==="warning"||props.mode==="info"?"black":"white"}}>
        <h1>Your Text Summary</h1>
        {/* <p>
          {text.trim().length==0?0:text.trim().split(" ").length} words and {text.trim().length} characters
        </p> */}
        {/* youtube comment 1 */}
        {/* <p>
          {()=>countWords()} words and {text.trim().length} characters
        </p> */}
        {/* youtube comment 2  */}
         {/* <p>
          {text.split("  ").filter((word)=>{return word.length>0})} words and {text.trim().length} characters
        </p> */}
        {/* youtube comment 3 */}
        <p >{((text.trim().split(" ")).filter(function (element) {
                    return element !== "";
                })).length} words and {text.trim().length} characters </p>
        <p>{0.0008 * text.trim().split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.trim().length>0?text:"Enter something in the above textbox to preview it here"}</p>
        <p>{vtext}</p> 
        <p>{emailText}</p>
      </div>
    </>
  )
}
