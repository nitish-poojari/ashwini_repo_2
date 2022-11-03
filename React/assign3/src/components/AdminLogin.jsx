import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [key, setKey] = useState('')
    const validateUser = () => {
        console.log(`Email=${email}`)
        console.log(`Password=${password}`)
        console.log(`Key=${key}`)
    }
    const readEmail = (e) => {
        setEmail(e.target.value)
    }
    const readPassword = (e) => {
        setPassword(e.target.value)
    }
    const readKey = (e) => {
        setKey(e.target.value)
    }
    return (
        <div className="back" style={{
            background: `url(${"./images/background.webp"})`
        }}>
            <center>
                <p className='tcolor'><b>ONLY FOR ADMIN</b></p>
                <div className='alogin'>
                    <label className='tcolor'>Email</label>
                    <input className='textbox' onChange={readEmail} type='email' placeholder='abc@xxx.com' />
                </div>
                <div className='alogin'>
                    <label className='tcolor'>Password</label>
                    <input className='textbox' onChange={readPassword} type='password' />
                </div>
                <div className='alogin'>
                    <label className='tcolor'>Admin Key</label>
                    <input className='textbox' onChange={readKey} type='password' />
                </div>
                <button className="btn btn-dark" onClick={validateUser}><Link to="/AdminDashboard">Login</Link></button><br />
            </center>
        </div>
    )
}

export default AdminLogin