import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [FirstName, setFName] = useState('')
    const [LastName, setLName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();
    const changeFirstName = (e) => {
        setFName(e.target.value)
    }
    const changeLastName = (e) => {
        setLName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    function handleClick() {
        if (Password === confirmPassword) {
            axios
                .post("http://localhost:3000/user/signup", {
                    FirstName: FirstName,
                    LastName: LastName,
                    Email: Email,
                    Password: Password,
                })
                .then((response) => {
                    const data = response.data;
                    console.log(data);
                    window.alert("Registration Successful...!!!");
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                    window.alert("server error...!!!");
                });
        } else {
            window.alert("Enter the same Password...!!!");
        }
    }
    return (
        <div>
            <form className="formSignup">
                <div className="mb-6">
                    <label for="examplInputFirstName" className="form-label">FirstName</label>
                    <input value={FirstName} onChange={changeFirstName} type="text" className="form-control" id="examplInputFirstName" />
                </div>
                <div className="mb-6">
                    <label for="examplInputLastName" className="form-label">LastName</label>
                    <input value={LastName} onChange={changeLastName} type="text" className="form-control" id="examplInputLastName" />
                </div>
                <div className="mb-6">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input value={Email} onChange={changeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-6">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input value={Password} onChange={changePassword} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-6">
                    <label for="exampleInputPassword2" className="form-label"> Confirm Password</label>
                    <input value={confirmPassword} onChange={changeConfirmPassword} type="password" className="form-control" id="exampleInputPassword2" />
                </div>
                <div className="mb-6">
                    <Link to="/">Already have Account? Signin here</Link>
                </div><br />
                <button type="button" className="btn btn-primary" onClick={handleClick} >SignUp</button>
            </form>
        </div>
    )
}
export default Signup