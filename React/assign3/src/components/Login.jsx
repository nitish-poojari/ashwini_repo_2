import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const validateUser = () => {
        console.log(`Email=${email}`)
        console.log(`Password=${password}`)
    }
    const readEmail = (e) => {
        setEmail(e.target.value)
    }
    const readPassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className="back" style={{
            background: `url(${"./images/background.webp"})`
        }}>
            <center>
                <p className='tcolor'><b>Login</b></p>
                <div className='alogin'>
                    <label className='tcolor'>Email</label>
                    <input className='textbox' onChange={readEmail} type='email' placeholder='abc@xxx.com' />
                </div>
                <div className='alogin'>
                    <label className='tcolor'>Password</label>
                    <input className='textbox' onChange={readPassword} type='password' />
                </div>
                <div className='alogin'>
                    <button className="btn btn-dark" onClick={validateUser}><Link to="/HotelList">Login</Link></button><br />
                    <button type="button" class="btn btn-dark" style={{
                        margin: '10px'
                    }}>
                        <Link to="/AdminLogin">Login As Administrator</Link></button>
                </div>
            </center>
        </div>
    )
}

export default Login