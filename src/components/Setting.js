import React from 'react'

function Setting({childdata}) {
  console.log(childdata)
  return (
    <div>
         {childdata.name}
    </div>
  )
}

export default Setting