import React from 'react'
import {Link } from 'react-router-dom'

const Twelve21 = () => {
    return (
        <div>
            <b className='hotel'>Twelve21</b>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/t211.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/t212.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/t213.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div className='dec'>
                <p>Type: Veg & Non-veg</p>
                <p>Contact Us : 3232323232</p>
                <p>Email : Twelve21@gmail.com</p>
                <button type="button" className="btn btn-dark"><Link to="/BookTable">Book Table</Link></button>
            </div>
        </div>
    )
}

export default Twelve21