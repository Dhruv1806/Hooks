import React,{useState} from 'react';


export const UseMemo = () => {
    const [count,setCount]=useState(0);
    const[countIteam,setCountIteam]=useState(10);
    const updateCount=()=>{
       return setCount(count+1)
        
    } 
    // const countNumber=(num)=>{
    //     console.log("hello");
    //     for(let i=0; i<1000000000; i++){}
    //     return num;
    // }
    // const checkData=countNumber(count);
    
    const updateIteam=()=>{
        setCountIteam(countIteam*10)
    }
  return (
   <div className='position-absolute top-50 start-50 translate-middle'>
    <h1>UseMemo</h1>
    <h3>Count:{count}</h3>
    <h3>Iteam:{countIteam}</h3>
    <h3>Multi Count:{count * 5}</h3>
    <div>
    <button type="button" class="btn btn-secondary" onClick={updateCount}>Update Count</button>
    <button type="button" class="btn btn-secondary"onClick={updateIteam} >Update Iteam</button>
    </div>
   </div>
  )
  }
export default UseMemo;