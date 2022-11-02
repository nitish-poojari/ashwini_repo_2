import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [DOB, setDOB] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const validateUser = () => {
        console.log(`Name=${name}`)
        console.log(`DOB=${DOB}`)
        console.log(`Address=${address}`)
        console.log(`Email=${email}`)
        console.log(`Password=${password}`)
        console.log(`Confirm Password=${confirmpassword}`)
    }
    const readName = (e) => {
        setName(e.target.value)
    }
    const readDOB = (e) => {
        setDOB(e.target.value)
    }
    const readAddress = (e) => {
        setAddress(e.target.value)
    }
    const readEmail = (e) => {
        setEmail(e.target.value)
    }
    const readPassword = (e) => {
        setPassword(e.target.value)
    }
    const readConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    return (
        <div className="back" style={{
            background: `url(${"./images/background.webp"})`
        }}>
            <center>
                <div>
                    <p className='tcolor'><b>Register</b></p>
                    <div className='alogin'>
                        <label className='tcolor'>Name</label>
                        <input className='textbox' onChange={readName} type='text' />
                    </div>
                    <div className='alogin'>
                        <label className='tcolor'>DOB</label>
                        <input className='textbox' onChange={readDOB} type='date' />
                    </div>
                    <div className='alogin'>
                        <label className='tcolor'>Address</label>
                        <input className='textbox' onChange={readAddress} type='text' />
                    </div>
                    <div className='alogin'>
                        <label className='tcolor'>Email</label>
                        <input className='textbox' onChange={readEmail} type='email' placeholder='abc@xxx.com' />
                    </div>
                    <div className='alogin'>
                        <label className='tcolor'>Password</label>
                        <input className='textbox' onChange={readPassword} type='password' />
                    </div>
                    <div className='alogin'>
                        <label className='tcolor'> Confirm Password</label>
                        <input className='textbox' onChange={readConfirmPassword} type='password' />
                    </div>
                    <div className='alogin'>
                        <button className="btn btn-dark" onClick={validateUser}><Link to="/Login">Register</Link></button><br />
                        <button type="button" className="btn btn-dark" style={{
                            margin: '10px'
                        }}>
                            <Link to="/AdminRegister">Register As Administrator</Link></button>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Register