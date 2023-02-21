// import React, { useState } from 'react'

// export default function UseState ()
// {
//     const bioData=[
//         {
//             id:0, name: "Dhruv", age:22
//         },{
//             id:1,name:"sneh",age:21
//         },{
//             id:2, name:"zeel",age:20
//         }
//     ]
//     const [myArray,setMyArray]=useState(bioData);
//     const clear=()=>{
//         setMyArray([]);
//     }
//     const removeElem=(id)=>{
//         const myNewArray = myArray.filter((curElem)=>{
//             return curElem.id!== id
//         })
//         setMyArray(myNewArray)
//     }
//     return(
//         <div className="position-absolute top-50 start-50 translate-middle ">
//             {
//                 myArray.map((curElm) =>{
//                     return (<h1>Name:{curElm.name} & Age:{curElm.age} 
//                         <button  type="button" className="btn btn-danger" onClick={()=>removeElem(curElm.id)}>remove</button>        
//                     </h1>
//                 )})
//             }
//             <button  type="button" className="btn btn-primary position-absolute top-60 start-50 " onClick={clear}>Clear</button>

//         </div>        
//     )
// }

import React,{useState} from 'react'

export default function UseState(){
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [city, setCity] = useState();
    const [email, setEmail] = useState();
    const [allEntry,setAllEntry]=useState([]);
    // const Fname=useRef(null);
    // const Lname=useRef(null);
    // const City=useRef(null);
    
    const Submit =()=>{
       
    }
  return (
    <>
    <form >
    <div className="mb-3">
        <label htmlFor="Fname" className="form-label">First Name</label>
        <input type="text" className="form-control" id="Fname" aria-describedby="emailHelp" value={fname} onChange={(e)=>setFname(e.target.value)}/>
    </div>
    <div className="mb-3">
        <label htmlFor="Lname" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="Lname" aria-describedby="emailHelp"  value={lname} onChange={(e)=>setLname(e.target.value)}/>
    </div>
    <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city" aria-describedby="emailHelp" value={city} onChange={(e)=>setCity(e.target.value)}/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={Submit}>Submit</button>
</form>

<table className="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">City</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{city}</td>
      <td>{email}</td>
    </tr>
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
</>
  )
}

