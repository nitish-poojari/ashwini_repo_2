import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate,useParams } from 'react-router-dom'

const Profile = () => {
    const [FirstName,setFName] = useState('')
    const [LastName,setLName] = useState('')
    const [Email,setEmail] = useState('')
    const [City,setCity] = useState('')
    const [State,setState] = useState('')
    const [Country,setCountry] = useState('')
   const [PostalCode,setPostalCode] = useState('')
   const [Gender,setGender] = useState('')
   const [user, setUser] = useState([])
    const navigate=useNavigate();
    const changeFirstName = (e)=>{
        setFName(e.target.value)
    }
    const changeLastName = (e)=>{
        setLName(e.target.value)
    }
    const changeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const changeCity=(e)=>{
        setCity(e.target.value)
    }
    const changeState=(e)=>{
        setState(e.target.value)
    }
    const changeCountry=(e)=>{
        setCountry(e.target.value)
    }
    const changePostalCode=(e)=>{
        setPostalCode(e.target.value)
    }
    const changeGender=(e)=>{
        setGender(e.target.value)
    }
    useEffect(() => {
        handleClick();
        getUsers();
      }, []);
    const {id}=useParams()
  console.log(id)
  const getUsers = async () => {
    await axios.get(`http://localhost:3000/user/${id}`)
        .then(response => {
            console.log(response.data.FirstName)
            const user = response.data
            console.log(user)
            setUser(user)

        }).catch(function (error) {
            console.log(error)
        })
}
    function handleClick() {
    
        axios
          .put(`http://localhost:3000/user/update/${id}`, {
             
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            City:City,
            State:State,
            Country:Country,
            PostalCode:PostalCode,
            Gender:Gender
          })
          .then((response) => {
            const data = response.data;
            console.log(data);
            window.alert("Profile Updated Successfully...!!!");
          })
          .catch((error) => {
            console.log(error);
            window.alert("server error...!!!");
          });
      
    }
    return (
        <div className='Profile'>
            <center><h5 className="heading1"><b>MyBlogs</b></h5>
                <p className="heading2">This is a demo application</p></center>
            <br />
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">First Name</label>
                    <input value={user.FirstName} onChange={changeFirstName} type="text" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Last Name</label>
                    <input value={user.LastName} onChange={changeLastName} type="text" className="form-control" id="inputEmail4" />
                </div>
                 <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input value={user.Email} onChange={changeEmail} type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity4" className="form-label">City</label>
                    <input value={City} onChange={changeCity} type="text" className="form-control" id="inputCity4" />
                </div>
                <div className="col-md-6">
                    <label for="inputState4" className="form-label">State</label>
                    <input value={State} onChange={changeState} type="text" className="form-control" id="inputState4" />
                </div>
                <div className="col-md-6">
                    <label for="inputCountry" className="form-label">Country</label>
                    <select id="inputCountry" className="form-select" value={Country} onChange={changeCountry}>
                        <option selected> </option>
                        <option value="1">India</option>
                        <option value="2">USA</option>
                        <option value="3">UK</option>
                        <option value="4">China</option>
                        <option value="5">Germany</option>
                        <option value="6">Nepal</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label for="inputPostalCode4" className="form-label">Postal Code</label>
                    <input value={PostalCode} onChange={changePostalCode} type="text" className="form-control" id="inputPostalCode4" />
                </div>
                <div className="col-md-6">
                    <label for="inputGender4" className="form-label">Gender</label>
                    <input value={Gender} onChange={changeGender} type="text" className="form-control" id="inputgender4" />
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Save</button><br />
                </div>
            </form>
        </div>
    )
}

export default Profile