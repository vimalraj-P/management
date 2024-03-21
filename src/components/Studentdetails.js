import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Studentdetails() {

    const params = useParams()

    const [Student,setStudentdetails]=useState({})
    
    const fetchStudentdetails=()=>{
        axios.get(`https://65e9a8f7c9bf92ae3d39ce08.mockapi.io/Student/${params.Studentid}`).then((res)=>{
           setStudentdetails(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchStudentdetails()
    },[])
    
    return (
        <div class="card" style={{width: "18rem"}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{Student.FirstName}{Student.LastName}</li>
          <li class="list-group-item">{Student.Email}</li>
          <li class="list-group-item">{Student.Mobil}</li>
          <li class="list-group-item">{Student.Password}</li>
          <li class="list-group-item">{Student?.Skill?.join()}</li>
        </ul>
      </div>
    )
}

export default Studentdetails