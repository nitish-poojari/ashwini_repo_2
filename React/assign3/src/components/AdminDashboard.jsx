import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
    let Hotels = [
        {
            "Id": 1,
            "Name": "Golden Curry",
            "Description": "North Indian, Chinese & Continental fare served in a casual space with cabanas & outdoor seating.",
            "Address": "Address: Chikali Rd, Shahunagar, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019",
        },
        {
            "Id": 2,
            "Name": "Teera",
            "Description": "Lively open-air destination with DJs & creative lighting offering classic meals, plus a pool.",
            "Address": "Address: Kaspate Corner, Hinjawadi Rd, Kaspate Wasti, Wakad, Pune, Maharashtra 411057",
        },
        {
            "Id": 3,
            "Name": "Twelve 21",
            "Description": "Sprawling, upscale establishment with a terrace offering international cuisine & cocktails.",
            "Address": "Address:Survey No-87, BRT Link Rd, opp. Ravet, Kiwale, Ravet, pune, Maharashtra 412101",
        },
        {
            "Id": 4,
            "Name": "Azzuro",
            "Description": "Expansive, blue-and-white location focused on casual, Greek-inspired plates & cocktails.",
            "Address": "Address: Main DP Chowk, Aundh-Wakad Rd, Jagtap Dairy, Vishal Nagar, Pune, Maharashtra 411027",
        },
        {
            "Id": 5,
            "Name": "The Tenth Floor",
            "Description": "Upscale rooftop bar & restaurant with a vibrant ambiance serving cocktails & international cuisine.",
            "Address": "Address: A unit of Atithya Dining LLP, 901, 902 Deron Height, Baner Rd, above Ranka Jewelers, Pune, Maharashtra 411045",
        },
        {
            "Id": 6,
            "Name": "URBO",
            "Description": "Lively, multi-level bar & lounge with global eats, live music, sports screenings & outdoor seating.",
            "Address": "Address: Beverly Hills Road 1A, Ganaraj Mangal Karyalay, Near Baner-Balewadi Road Baner, Pune, Maharashtra 411045",
        }
    ]
    let [newHotel, setNewHotel] = useState([...Hotels]);
    let [hotelObj, setHotelObj] = useState({});
    let onChangeHandle = (e) => {
        setHotelObj({ ...hotelObj, [e.target.id]: e.target.value })
    }
    let addHotel = () => {
        setNewHotel([...newHotel, hotelObj]);
    }
    function deleteHotelWithId(Id) {
        const hotel = Hotels.filter((li) => li.Id !== Id)
        setNewHotel(hotel)
    }
    return (
        <div>
            <div className='container'>
                <div className="row mb-5">
                    <div className="col">
                        <label className="col-sm-4 col-form-label">Id</label>
                        <input type="number" onChange={onChangeHandle} id='Id' className="form-control" />
                    </div>
                    <div className="col">
                        <label className="col-sm-4 col-form-label">Name</label>
                        <input type="text" onChange={onChangeHandle} id='Name' className="form-control" />
                    </div>
                    <div className="col">
                        <label className="col-sm-4 col-form-label">Description</label>
                        <input type="text" onChange={onChangeHandle} id='Description' className="form-control" />
                    </div>
                    <div className="col">
                        <label className="col-sm-4 col-form-label">Address</label>
                        <input type="text" onChange={onChangeHandle} id='Address' className="form-control" />
                    </div>

                    <div className="col">
                        <br />
                        <button onClick={addHotel} className='btn btn-success'>Add hotel</button>
                    </div>
                </div>
                <div className="hotelData">

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr className='table-dark'>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Address</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newHotel.map((hotel, Id) => {
                                    return (
                                        <tr key={Id}>
                                            <td>{hotel.Id}</td>
                                            <td>{hotel.Name}</td>
                                            <td>{hotel.Description}</td>
                                            <td>{hotel.Address}</td>
                                            <td><button type="button" className="btn btn-danger" onClick={() => deleteHotelWithId(hotel.Id)}>Delete</button></td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <button type="button" className="btn btn-dark"><Link to="/BookingList">Get All Bookings</Link></button>&nbsp;
            <button type="button" className="btn btn-dark"><Link to="/CancelledBookings">Get cancel Bookings</Link></button>&nbsp;
            <button type="button" className="btn btn-dark"><Link to="/UserList">Get All Users</Link></button>
        </div>
    )
}

export default AdminDashboard