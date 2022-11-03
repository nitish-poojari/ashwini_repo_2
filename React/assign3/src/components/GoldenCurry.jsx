import React from 'react'
import { Link } from 'react-router-dom'

const GoldenCurry = () => {
    return (
        <div><b className='hotel'>Golden Curry</b>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/gc3.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/gc1.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/gc2.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div className='dec'>
                <p>Type: Veg & Non-veg</p>
                <p>Contact Us : 9898989898</p>
                <p>Email : GoldenCurry@gmail.com</p>
                <button type="button" className="btn btn-dark"><Link to="/BookTable">Book Table</Link></button>
            </div>
        </div>
    )
}

export default GoldenCurry