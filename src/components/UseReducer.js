import React,{useReducer} from 'react'
const reducer=(state,action)=>{
    if (action.type==="INCREMENT")
    {
        return state + 1;
    }
    else
    {
        return state - 1;
    }
    return state;
}
const initialState=0;
export const UseReducer = () => {
    const [state, dispatch]= useReducer(reducer, initialState);

    return (
    <div className='position-absolute top-50 start-50 translate-middle'>
        <h1>{state}</h1>
        <div>
        <button type="button" className="btn btn-success" onClick={()=>dispatch ({type:"INCREMENT"})}>Increment</button>
        <button type="button" className="btn btn-danger" onClick={()=>dispatch ({type:"DECREMENT"})}>Decrement</button>
        </div>
    </div>
  )
}
export default UseReducer
