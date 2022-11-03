import React from 'react'
import { Link } from 'react-router-dom'

const Urbo = () => {
    return (
        <div>
            <b className='hotel'>URBO</b>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/u1.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/u2.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/u3.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div className='dec'>
                <p>Type: Veg & Non-veg</p>
                <p>Contact Us : 1010101010</p>
                <p>Email : Urbo@gmail.com</p>
                <button type="button" className="btn btn-dark"><Link to="/BookTable">Book Table</Link></button>
            </div>
        </div>
    )
}

export default Urbo