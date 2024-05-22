import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(' ');
    //setText("new text"); wanto change the text
    //text="new text" wrong way
    const handleUpClick= ()=>
        {
            console.log("upper case clicked"+text);
            let newText=text.toUpperCase();
            setText(newText)
             props.showAlert("uppercase convertor","success");
            
          
            
        }
        const handleDownClick= ()=>
          {
              console.log("lower case clicked"+text);
              let newText1=text.toLowerCase();
              setText(newText1);
              props.showAlert("lowercase convertor","success");
              
              
          }


        const handleOnChange= (event)=>
            {
                console.log("on change");
                setText(event.target.value);
            }
            const handCapital=()=>
              {
            
let sap = ("")
setText(sap); // Name
            }

  return (
    <>
    <div className='container' Style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mh-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} Style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8" ></textarea>
      </div>
      <button className="btn btn-success mx-2" onClick={handleUpClick}>convert to UpperCase</button>
      <button className="btn btn-success  mx-2" onClick={handleDownClick}>convert to LowerCase</button>
      <button className="btn btn-success  mx-2" onClick={handCapital}>clear the text</button>
      
    </div>
     <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words  and {text.length} charcter</p>
      <p>{0.008*text.split("").length}  no of minutes</p>
      
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something to preview it here"}</p>
     </div>
    </>
  )
}
