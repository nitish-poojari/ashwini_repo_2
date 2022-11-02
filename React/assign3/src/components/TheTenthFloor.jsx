import React from 'react'
import { Link } from 'react-router-dom'

function TheTenthFloor() {
    return (
        <div>
            <b className='hotel'>The Tenth Floor</b>
            <div className="row row-cols-1 row-cols-md-3 g-4" >
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/ttf1.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/ttf2.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/ttf3.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div className='dec'>
                <p>Type: Veg & Non-veg</p>
                <p>Contact Us : 5454545454</p>
                <p>Email : TheTenthFloor@gmail.com</p>
                <button type="button" className="btn btn-dark"><Link to="/BookTable">Book Table</Link></button>
            </div>
        </div>
    )
}

export default TheTenthFloor