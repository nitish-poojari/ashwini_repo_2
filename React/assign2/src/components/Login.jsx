import React, { useState } from 'react'

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
        <div>
            <center style={{
                marginTop: '10%'
            }}>
                <p><b>Login</b></p>
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
                    <button className="btn btn-success" onClick={validateUser}>Login</button>
                </div>
            </center>

        </div>
    )
}

export default Login