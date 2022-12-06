import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleClick = () => {
        axios.post("http://localhost:3000/user/signin", {
            Email: email,
            Password: password,
        })
            .then((response) => {
                const data = response.data;
                console.log(data);
                window.alert("Login Successful ...!!!");
                navigate(`/Home/${data.id}`);
            })
            .catch((error) => {
                console.log(error);
                window.alert("Login Failed...!!!");
            });
    }
    return (
        <div >
            <form className="formLogin">
                <div className="mb-6">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input onChange={changeEmail} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-6">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={changePassword} value={password} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-6">
                    <Link to="/Signup">No Account? Register here</Link>
                </div><br />
                <button type="button" className="btn btn-primary" onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}

export default Login