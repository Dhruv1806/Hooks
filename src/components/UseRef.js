import React,{useRef, useState} from 'react'


export const UseRef=()=> {
    const [name,setName]=useState();
    const inputElem = useRef(null);
    const submit=(e)=>{
        e.preventDefault();
        setName(inputElem.current.value);
    }

  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
        <h1>UseRef</h1>
        <h3>What is your lucky name:{name}<input type="text" ref={inputElem}/></h3>
        <button type='submit' onClick={submit}>Submit</button>

    </div>
  )
}
export default UseRef
