import React from 'react'
import Setting from './Setting'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../redux/features/count';

function Home({parentdata}) {
  console.log(parentdata);

  const countValue = useSelector((state)=>state.count.value)
  const dispatch = useDispatch()
  return (
    <>
    <div>{parentdata.name}{parentdata.place}
        <Setting childdata={parentdata}></Setting>
    </div>
        <div className='text-center'>
        <button className='btn btn-sm btn-outline-primary m-5'
         onClick={()=>dispatch(decrement())}>
          -</button>
       {countValue}
        <button className='btn btn-sm btn-outline-danger m-5'
        onClick={()=>dispatch(increment())}>
          +</button>
    </div> 
    </>
  )
}

export default Home