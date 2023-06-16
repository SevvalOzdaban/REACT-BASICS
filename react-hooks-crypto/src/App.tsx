import React, { useEffect, useReducer, useRef, useState } from 'react';
import {  decrypt, encrypt } from './Utils/EncDec';
import $ from 'jquery'
import { dataReducer } from './Utils/dataReducer';

function App() {
  const [chipherText,setChipherText] = useState("")
  const [plainText,setPlainText] = useState("")
  const dataRef = useRef<HTMLInputElement>(null)
  const [state, dispatchData] = useReducer(dataReducer, 0)

  useEffect(() =>{
    setChipherText(encrypt("12345"))
    setPlainText(decrypt(chipherText))
  },[])

  const inputChange = () => {
    if(dataRef.current){
      dataRef.current.focus()
      dataRef.current.style.borderColor = "#ff00ff"
    }
  }
  const addButton = () =>{
    $("#addButton").text("ADD !!")
    dispatchData("add")
  }
  const minusButton = () =>{
    $("#minusButton").text("MINUS !!")
    dispatchData("minus")

  }
  return (
    <div className="container m-3">
      <h5>CryptoJs</h5>
      <h6>encrypt - {chipherText}</h6>
      <h6>decrypt - {plainText}</h6>
      <hr/>
      <input ref={dataRef} onChange={inputChange} className="form-control" placeholder='Text'/>
      <br/>
      <h4 className="ml-4">Sayaç: {state}</h4>
      <button id="addButton" className="btn btn-primary m-2" onClick={addButton}>ADD</button>
      
      <button id="minusButton" className="btn btn-primary m-2" onClick={minusButton}>MINUS</button>
    </div>
  );
}

export default App;
