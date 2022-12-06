import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const Navbar = () => {
    const { id } = useParams()
    console.log(id)
    const [user, setUser] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        await axios.get(`http://localhost:3000/user/${id}`)
            .then(response => {
                console.log(response.data.FirstName)
                const user = response.data
                console.log(user)
                setUser(user)
            }).catch(function (error) {
                console.log(error)
            })
    }
    return (
        <div className='Navbar'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <div className="dropdown">
                                    <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Welcome {user.FirstName}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li className="dropdown-item" >
                                            <Link className='nav-link' to={`/CreateBlog/${id}`}> Create </Link></li>
                                        <li className="dropdown-item" >
                                            <Link className='nav-link' to={`/Profile/${id}`}> Profile</Link></li>
                                        <li className="dropdown-item" >

                                            <Link className='nav-link' to={'/'}>
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar