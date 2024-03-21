import React, { useContext, useState } from 'react'
import userContext from './Context/Context'
import pandaimg from '../image/panda image.jpg'

function Hooks() {
  const value = useContext(userContext)
  console.log(value);
    const [count,setCount]=useState(0)
    const[show,setShow]=useState(false)
    const[name,setName]=useState("")
  return (
    <>
    <h1>{value}<img src={pandaimg}width={"130px"}height={"100px"}></img></h1>
    <div className='text-center'>
        <button className='btn btn-sm btn-outline-primary m-5'onClick={()=>setCount(count-1)}disabled={count<=0}>-</button>
       {count}
        <button className='btn btn-sm btn-outline-danger m-5'onClick={()=>setCount(count+1)}disabled={count>=20}>+</button>
    </div>
    <div className=''>
    <button className={show ?'btn btn-sm btn-outline-danger m-5':'btn btn-sm btn-outline-primary m-5'}onClick={()=>setShow(!show)}>{show ?"Hide":"show" }</button>
    {
        show ?  <p>valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid      
        Line 21:33:  The href attribute requires a valid value to be accessible. Provide a valid,</p> :""
    }
    </div>
    {name} 
    <div>
        <label>NAME</label>
        <input placeholder='name' onChange={(event)=>setName(event.target.value)}/>
    </div>
   
    </>
  )
}

export default Hooks