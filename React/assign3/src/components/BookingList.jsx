import React from 'react'
import { Link } from 'react-router-dom'

const BookingList = () => {
    const data = [
        {
            "Id": 1,
            "Name": "John ",
            "Email": "John@gmail.com",
            "Address": "Pune",
            "Contact": 9999999999,
            "Hotel": "Golden Curry"
        },
        {
            "Id": 2,
            "Name": "Virat",
            "Email": "Virat@gmail.com",
            "Address": "Mumbai",
            "Contact": 8888888888,
            "Hotel": "Azzuro"
        },
        {
            "Id": 3,
            "Name": "Rohit",
            "Email": "Rohit@gmail.com",
            "Address": "Chennai",
            "Contact": 7777777777,
            "Hotel": "Teera"
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
                        <th>Hotel</th>
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
                                <td>{data.Hotel}</td>
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

export default BookingList