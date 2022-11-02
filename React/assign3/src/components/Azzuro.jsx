import React from 'react'
import { Link } from 'react-router-dom'

const Azzuro = () => {
    return (
        <div>
            <b className='hotel'>Azzuro</b>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/a1.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/a2.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./images/a3.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div className='dec'>
                <p>Type: Veg & Non-veg</p>
                <p>Contact Us : 4848484848</p>
                <p>Email : Azzuro@gmail.com</p>
                <button type="button" className="btn btn-dark"><Link to="/BookTable">Book Table</Link></button>
            </div>
        </div>
    )
}

export default Azzuro