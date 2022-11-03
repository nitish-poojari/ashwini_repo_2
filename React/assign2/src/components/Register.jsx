import React, { useState } from 'react'

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
        <div>
            <center style={{
                marginTop: '8%'
            }}>
                <p><b>Register</b></p>
                <div style={{
                    padding: '10px'
                }}>
                    <label>Name</label>
                    <input onChange={readName} type='text' />
                </div>
                <div style={{
                    padding: '10px'
                }}>
                    <label>DOB</label>
                    <input onChange={readDOB} type='date' />
                </div>

                <div style={{
                    padding: '10px'
                }}>
                    <label>Address</label>
                    <input onChange={readAddress} type='text' />
                </div>
                <div style={{
                    padding: '10px'
                }}>
                    <label>Email</label>
                    <input onChange={readEmail} type='email' placeholder='abc@xxx.com' />
                </div>
                <div style={{
                    padding: '10px'
                }}>
                    <label>Password</label>
                    <input onChange={readPassword} type='password' />
                </div>
                <div style={{
                    padding: '10px'
                }}>
                    <label> Confirm Password</label>
                    <input onChange={readConfirmPassword} type='password' />
                </div>
                <div style={{
                    padding: '10px'
                }}>
                    <button className="btn btn-success" onClick={validateUser}>Register</button>
                </div>
            </center>

        </div>
    )
}

export default Register