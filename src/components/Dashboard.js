import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/features/count'

function Dashboard() {
  const countValue = useSelector((state)=>state.count.value)
  const dispatch = useDispatch()
  const data = [
    {
      name: "Primary card",
      color: "primary"
    },
    {
      name: "Warning card",
      color: "warning"
    },
    {
      name: "Success card",
      color: "success"
    },
    {
      name: "Danger card",
      color: "danger"
    },
  ]
  return (
    <>
      <div className='container'>
        <div className='row'>
          {
            data.map((list) => {
              return <div className='col-3'>
                <div class={`card bg-${list.color}`}>
                  <div class="card-header">
                    {list.name}
                  </div>
                  <div class="card-body">
                    View Details
                  </div>
                </div>
              </div>
            })
          }

        </div>
        <Link to={'Profile'}>
        <div>
          <button className='btn btn-sm btn-outline-primary my-5'>Profile</button>
        </div>
        </Link>
        <Outlet/>
        <div className='text-center'>
        <button className='btn btn-sm btn-outline-primary m-5'
         onClick={()=>dispatch(decrement())}>
          -</button>
       {countValue}
        <button className='btn btn-sm btn-outline-danger m-5'
        onClick={()=>dispatch(increment())}>
          +</button>
    </div> 
      </div>
    </>
  )
}

export default Dashboard