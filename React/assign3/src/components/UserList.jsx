import React from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {
    const data = [
        {
            "Id": 1,
            "Name": "John ",
            "Email": "John@gmail.com",
            "Address": "Pune",
            "Contact": 9999999999,
        },
        {
            "Id": 2,
            "Name": "Virat",
            "Email": "Virat@gmail.com",
            "Address": "Mumbai",
            "Contact": 8888888888
        },
        {
            "Id": 3,
            "Name": "Rohit",
            "Email": "Rohit@gmail.com",
            "Address": "Chennai",
            "Contact": 7777777777
        },
        {
            "Id": 4,
            "Name": "Rahul",
            "Email": "Rahul@gmail.com",
            "Address": "Banglore",
            "Contact": 6666666666
        },
        {
            "Id": 5,
            "Name": "Aishwarya",
            "Email": "Aish@gmail.com",
            "Address": "Chennai",
            "Contact": 5555555555
        }
    ]
    const createTable = () => {
        return (
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => {
                        return (
                            <tr>
                                <td>{data.Id}</td>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>{data.Address}</td>
                                <td>{data.Contact}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
    return (
        <div>
            {createTable()}
            <button type="button" className="btn btn-dark"><Link to="/AdminDashboard">Back</Link></button>
        </div>
    )
}

export default UserList