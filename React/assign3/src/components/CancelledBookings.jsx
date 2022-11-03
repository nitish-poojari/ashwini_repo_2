import React from 'react'
import { Link } from 'react-router-dom'

const CancelledBookings = () => {
    const data = [
        {
            "Id": 1,
            "Name": "Rahul",
            "Reason": "Xyz",
            "Email": "Rahul@gmail.com",
            "Hotel": "Twelve 21",
            "Contact": 6666666666
        },
        {
            "Id": 2,
            "Name": "Aishwarya",
            "Reason": "...",
            "Email": "Aish@gmail.com",
            "Hotel": "URBO",
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
                        <th>Reason</th>
                        <th>Email</th>
                        <th>Hotel</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => {
                        return (
                            <tr>
                                <td>{data.Id}</td>
                                <td>{data.Name}</td>
                                <td>{data.Reason}</td>
                                <td>{data.Email}</td>
                                <td>{data.Hotel}</td>
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

export default CancelledBookings