import React, { useContext } from 'react'
import { FirstName,LastName } from '../App'

 const UseContext = () => {
  const fname= useContext(FirstName);
  const lname= useContext(LastName);
  console.log(fname);
  console.log(lname);

    return (
    <div className='position-absolute top-50 start-50 translate-middle'>
    <h1>Hello {fname} {lname}</h1>
    </div>
  )
}

export default UseContext
