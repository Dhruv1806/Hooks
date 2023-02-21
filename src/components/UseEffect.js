import React,{useState,useEffect} from 'react'

const UseEffect = () => {
  const [color,setColor]=useState("white");
  useEffect(()=>{
    document.body.style.backgroundColor=`${color}`;
    console.log(color);
  })
  return (
  <div>
    
    <div className="dropdown position-absolute top-50 start-50 translate-middle ">
  <button className="btn btn-secondary dropdown-toggle position-absolute top-50 start-50 translate-middle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button" onClick={()=>setColor("red")} >Red</button></li>
    <li><button className="dropdown-item" type="button" onClick={()=>setColor("green")}>Green</button></li>
    <li><button className="dropdown-item" type="button" onClick={()=>setColor("blue")}>Blue</button></li>
  </ul>
</div>
    {/* <button classNameName="btn btn-primary" onClick={()=>setColor(count+1)}>click</button> */}
  </div>
  )
}
export default UseEffect