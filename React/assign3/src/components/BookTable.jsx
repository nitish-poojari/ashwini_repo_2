import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BookTable = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [members, setMembers] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const validateUser = () => {
        console.log(`Name=${name}`)
        console.log(`Date=${date}`)
        console.log(`Time=${time}`)
        console.log(`Members=${members}`)
        console.log(`Email=${email}`)
        console.log(`Contact=${contact}`)
    }
    const readName = (e) => {
        setName(e.target.value)
    }
    const readDate = (e) => {
        setDate(e.target.value)
    }
    const readTime = (e) => {
        setTime(e.target.value)
    }
    const readMembers = (e) => {
        setMembers(e.target.value)
    }
    const readEmail = (e) => {
        setEmail(e.target.value)
    }
    const readContact = (e) => {
        setContact(e.target.value)
    }
    const shoot = () => {
        alert("Table Booked Successfully !");
    }
    return (
        <div className="back" style={{
            background: `url(${"./images/background.webp"})`
        }}>
            <center>
                <p className='tcolor'><b>RESERVE YOUR TABLE HERE !</b></p>
                <div className='form'>
                    <label className='tcolor'>Name</label>
                    <input className='textbox' onChange={readName} type='text' />
                </div>
                <div className='form'>
                    <label className='tcolor'>Date</label>
                    <input className='textbox' onChange={readDate} type='date' />
                </div>

                <div className='form'>
                    <label className='tcolor'>Time</label>
                    <input className='textbox' onChange={readTime} type='time' />
                </div>
                <div className='form'>
                    <label className='tcolor'>Members</label>
                    <input className='textbox' onChange={readMembers} type='number' />
                </div>
                <div className='form'>
                    <label className='tcolor'>Email</label>
                    <input className='textbox' onChange={readEmail} type='email' placeholder='abc@xxx.com' />
                </div>
                <div className='form'>
                    <label className='tcolor'> Contact</label>
                    <input className='textbox' onChange={readContact} type='text' />
                </div>
                <div className='form'>
                    <button className="btn btn-dark" onClick={event => { validateUser(); shoot() }} >
                        <Link to="/BookTable">BOOK TABLE</Link></button>&nbsp;
                    <button type="button" className="btn btn-dark"><Link to="/HotelList">Back</Link></button><br /><br />
                    <button type="button" className="btn btn-dark"><Link to="/BookingHistory">My Bookings</Link></button>&nbsp;
                    <button type="button" className="btn btn-dark"><Link to="/UcancelledBookings">Cancelled Bookings</Link></button>
                </div>
            </center>
        </div>
    )
}

export default BookTable