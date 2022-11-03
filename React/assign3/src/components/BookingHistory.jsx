import React from 'react'
import { Link } from 'react-router-dom'

const BookingHistory = () => {
    const data = [
        {
            "Id": 1,
            "Date": "20-10-22",
            "Email": "John@gmail.com",
            "Address": "Pune",
            "Time": "8.00 PM ",
            "Hotel": "Golden Curry"
        },
        {
            "Id": 2,
            "Date": "21-10-22",
            "Email": "Virat@gmail.com",
            "Address": "Mumbai",
            "Time": "10.00 PM",
            "Hotel": "Azzuro"
        },
        {
            "Id": 3,
            "Date": "01-09-22",
            "Email": "Rohit@gmail.com",
            "Address": "Chennai",
            "Time": "4.00 PM",
            "Hotel": "Teera"
        }
    ]
    const createTable = () => {
        return (
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Time</th>
                        <th>Hotel</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => {
                        return (
                            <tr>
                                <td>{data.Id}</td>
                                <td>{data.Date}</td>
                                <td>{data.Email}</td>
                                <td>{data.Address}</td>
                                <td>{data.Time}</td>
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
            <button type="button" className="btn btn-dark"><Link to="/BookTable">Back</Link></button>
        </div>
    )
}

export default BookingHistory