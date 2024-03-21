import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

export const Locationoption = [
    { label: "Chennai", value: "Chennai" },
    { label: "Kerala", value: "Kerala" },
    { label: "Andhara", value: "Andhara" },
    { label: "Karanataka", value: "Karanataka" },
]
export const Skilloption = [
    { label: "HTML", value: "HTML" },
    { label: "CSS", value: "CSS" },
    { label: "Java script", value: "Java script" },
    { label: "React", value: "React" },
    { label: "Bootstrap", value: "Bootstrap" },
]

function Form() {
    const Navigate=useNavigate()
    const [student, setStudent] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Mobil: "",
        Password: "",
        Location: "",
        Skill: [],
        Languages:[],
    })

    const [studentList, setStudentList] = useState([])

    const handlechange = (e, name) => {
        let value = e.target.value
        setStudent({ ...student, [name]: value })
    }
    const handleSubmit = () => {
        if (student.FirstName === "") {
            return toast.error ("FirstName required")
        }
        if (student.FirstName.length < 3) {
            return  toast.error ("min 3 words required")
        }
        if (student.LastName === "") {
            return  toast.error ("LastName required")
        }
        if (student.LastName.length < 1) {
            return  toast.error ("min 1 words required")
        }
        if (student.Email === "") {
            return  toast.error ("Email required")
        }
        if (student.Email.length < 8) {
            return toast.error ("min 8 words required")
        }
        if (student.Mobil === "") {
            return  toast.error ("Mobil required")
        }
        if (student.Mobil.length < 8) {
            return  toast.error ("min 8 words required")
        }
        if (student.Password === "") {
            return toast.error ("Password required")
        }
        if (student.Password.length < 6) {
            return  toast.error ("min 6 words required")
        }
        axios.post("https://65e9a8f7c9bf92ae3d39ce08.mockapi.io/Student",student).then((res)=>{
            toast.success("Student Created")
            Navigate("/Student")
        }).catch((err)=>{
            console.log(err);
        })
       

        setStudentList([...studentList, student]);

        setStudent({
            FirstName: "",
            LastName: "",
            Email: "",
            Mobil: "",
            Password: "",
            Location: "",
            Skill: [],
           
            
        })
    }
    const deleteStudent = (index) => {
        studentList.splice(index, 1)
        setStudentList([...studentList])
    };
    const handlecheckbox=(e,name)=>{
        if(e.target.checked){
          setStudent({...student,Languages:[...student.Languages,name]})
        }else {
          let index = student.Languages.findIndex((item)=>item===name)
          student.Languages.splice(index,1)
          setStudent({...student})
        }
       }
       useEffect (()=>{
        console.log("i am use effect");
       })
    return (
        <div className='container w-75 m-auto'>
            <div className='row'>
                <div className='col-6'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" maxLength={15} value={student.FirstName} onChange={(e) => handlechange(e, "FirstName")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" maxLength={10} value={student.LastName} onChange={(e) => handlechange(e, "LastName")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" maxLength={30} value={student.Email} onChange={(e) => handlechange(e, "Email")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Mobil</label>
                        <input type="tel" class="form-control" id="exampleInputEmail1" maxLength={15} value={student.Mobil} onChange={(e) => handlechange(e, "Mobil")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Password</label>
                        <input type="Password" class="form-control" id="exampleInputEmail1" maxLength={15} value={student.Password} onChange={(e) => handlechange(e, "Password")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div>
                        <label for="exampleInputEmail1" class="form-label">Location</label>
                    </div>
                    <Select options={Locationoption} value={Locationoption.filter((op) => op.value === student.Location)} onChange={(e) => setStudent({ ...student, Location: e.value })} />
                </div>
                <div className='col-6 mb-5'>
                    <div>
                        <label for="exampleInputEmail1" class="form-label">Skill</label>
                    </div>
                    <Select
                        isMulti
                        options={Skilloption}
                        value={Skilloption.filter((op) => { return student.Skill.some((pt) => pt === op.value) })}
                        onChange={(e) => setStudent({ ...student, Skill: e.map((op) => op.value) })} />
                </div>
                <div className='col-6'>
                   <div className='mb-3'><label>Languages</label></div> 
                    <div className='d-flex'>
                        <div class="form-check mx-3">
                            <input class="form-check-input" type="checkbox" value=""  onChange={(e)=>handlecheckbox(e,"Tamil")}/>
                            <label class="form-check-label">
                                Tamil
                            </label>
                        </div>
                        <div class="form-check mx-3">
                                <input class="form-check-input" type="checkbox" value="" onChange={(e)=>handlecheckbox(e,"English")}  />
                                <label class="form-check-label" >
                                   English
                                </label>
                            </div>
                            <div class="form-check mx-3">
                                <input class="form-check-input" type="checkbox" value="" onChange={(e)=>handlecheckbox(e,"Hindi")}  />
                                <label class="form-check-label" >
                                    Hindi
                                </label>
                            </div>
                    </div>
                </div>
            </div>
            <div><button className='btn btn-sm btn-outline-success' onClick={() => handleSubmit()}>Submite</button></div>
            <div>
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">s.no</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Location</th>
                            <th scope="col">Skill</th>
                            <th scope="col">Mobil</th>
                            <th scope="col">Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            studentList.map((list, index) => {
                                return <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{list.FirstName} </td>
                                    <td>{list.LastName}</td>
                                    <td>{list.Email}</td>
                                    <td>{list.Location}</td>
                                    <td>{list?.Skill?.join()}</td>
                                    <td>{list.Mobil}</td>
                                    <td>{list.Password}</td>
                                    <td>
                                        <button className='btn btn-sm btn-outline-danger rounded' onClick={() => deleteStudent(index)}>x</button>
                                    </td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form