import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import swal from 'sweetalert'
import { Locationoption, Skilloption } from './Form'

function Student() {
    const Navigate = useNavigate()
    const [Student, setStudent] = useState([])
    const [Loading, setLoading] = useState(true)
    const [isedit, setIsedit] = useState(false)
    const [editstudent, setEditstudent] = useState({})

    const fetchstudent = () => {
        axios.get('https://65e9a8f7c9bf92ae3d39ce08.mockapi.io/Student').then((res) => {
            setStudent(res.data);
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        fetchstudent()
    }, [])

    const deleteStudent = (studentid) => {
        console.log(studentid);

    }

    const ondelete = (studentid) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "warning",
            button: true,
            dangerMode: true,
        }).then((willdelete) => {
            if (willdelete) {
                axios.delete(`https://65e9a8f7c9bf92ae3d39ce08.mockapi.io/Student/${studentid}`).then((res) => {
                    swal("sucessfully deleted!", {
                        icon: "sucess",
                    })
                    fetchstudent()
                }).catch((err) => {
                    console.log(err);
                })
            } else {
                swal("your imaginary file is safe!");
            }
        })
    }
    const onedit = (data) => {
        setIsedit(!isedit)
        setEditstudent(data);
    }
    const handlechange = (e, name) => {
        let value = e.target.value
        setEditstudent({ ...editstudent, [name]: value })
    }

    const editupdate = () => {
        console.log(editstudent);
        axios.put(`https://65e9a8f7c9bf92ae3d39ce08.mockapi.io/Student/${editstudent.id}`, editstudent).then((res) => {
            console.log(res);
            setIsedit(!isedit)
            fetchstudent()
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-between align-item-center'>
                <div><h1>StudentList</h1></div>
                <div ><button className='btn btn-sm btn-outline-primary' onClick={() => Navigate("/Form")}>Add +</button></div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobil</th>
                        <th scope="col">Password</th>
                        <th scope="col">Skill</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Loading ? <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> :
                            Student.map((list, index) => {
                                return <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{list.FirstName} </td>
                                    <td>{list.LastName}</td>
                                    <td>{list.Email}</td>
                                    <td>{list.Mobil}</td>
                                    <td>{list.Password}</td>
                                    <td>{list.Skill.join()}</td>
                                    <td>
                                        <td>{list.Action}</td>
                                        <button className='btn btn-sm btn-outline-primary rounded mx-1' onClick={() => Navigate(`/Student/details/${list.id}`)}><i class="fa fa-eye" aria-hidden="true"></i></button>
                                        <button className='btn btn-sm btn-outline-warning rounded mx-1' onClick={() => onedit(list)}><i class="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                        <button className='btn btn-sm btn-outline-danger rounded mx-1' onClick={() => ondelete(list.id)}><i class="fa fa-trash-o" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                </tr>
                            })
                    }

                </tbody>
            </table>
            <Modal isOpen={isedit} toggle={() => setIsedit(!isedit)} size='lg' centered>
                <ModalHeader toggle={() => setIsedit(!isedit)}>
                    Edit Student
                </ModalHeader>
                <ModalBody>
                    <div className='container w-75 m-auto'>
                        <div className='row'>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" maxLength={15}
                                        value={editstudent.FirstName}
                                        onChange={(e) => handlechange(e, "FirstName")}
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" maxLength={10}
                                        value={editstudent.LastName}
                                        onChange={(e) => handlechange(e, "LastName")}
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" maxLength={30}
                                        value={editstudent.Email}
                                        onChange={(e) => handlechange(e, "Email")}
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Mobil</label>
                                    <input type="tel" class="form-control" id="exampleInputEmail1" maxLength={15}
                                        value={editstudent.Mobil}
                                        onChange={(e) => handlechange(e, "Mobil")}
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Password</label>
                                    <input type="Password" class="form-control" id="exampleInputEmail1" maxLength={15}
                                        value={editstudent.Password}
                                        onChange={(e) => handlechange(e, "Password")}
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div>
                                    <label for="exampleInputEmail1" class="form-label">Location</label>
                                </div>
                                <Select
                                    options={Locationoption}
                                    value={Locationoption.filter((op) => op.value === editstudent.Location)}
                                    onChange={(e) => setEditstudent({ ...editstudent, Location: e.value })}
                                />
                            </div>
                            <div className='col-6 mb-5'>
                                <div>
                                    <label for="exampleInputEmail1" class="form-label">Skill</label>
                                </div>
                                <Select
                                    isMulti
                                    options={Skilloption}
                                    value={Skilloption.filter((op) => { return editstudent?.Skill?.some((pt) => pt === op.value) })}
                                    onChange={(e) => setEditstudent({ ...editstudent, Skill: e.map((op) => op.value) })}
                                />
                            </div>

                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <div>
                        <button className='mx-2'>Cancel</button>
                        <button className='mx-2' onClick={() => editupdate()}>Update</button>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Student