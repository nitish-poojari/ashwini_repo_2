import React from 'react'
import { Link } from 'react-router-dom'

function HotelList() {
    return (
        <div><b className='hotellist'>Checkout Your Eating Destination !!</b>
            <div className="container" style={{
                marginTop: '20px'
            }}>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="./images/goldencurry.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Golden Curry</h5>
                                        <p className="card-text">North Indian, Chinese & Continental fare served in a casual space with cabanas & outdoor seating.</p>
                                        <p><i>Address: Chikali Rd, Shahunagar, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019</i></p>
                                        <button type="button" className="btn btn-dark"><Link to="/GoldenCurry">View</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="./images/Teeraa.webp" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Teera</h5>
                                        <p className="card-text">Lively open-air destination with DJs & creative lighting offering classNameic meals, plus a pool.</p>
                                        <p><i>Address: Kaspate Corner, Hinjawadi Rd, Wakad, Pune, Maharashtra 411057</i></p>
                                        <button type="button" className="btn btn-dark"><Link to="/Teera">View</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="./images/twelve21.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Twelve 21</h5>
                                        <p className="card-text">Sprawling, upscale establishment with a terrace offering international cuisine & cocktails.</p>
                                        <p><i>Address:Survey No-87, BRT Link Rd, opp. Ravet, Kiwale, Ravet, pune, Maharashtra 412101</i></p>
                                        <button type="button" className="btn btn-dark"><Link to="/Twelve21">View</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="./images/azzuro.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Azzuro</h5>
                                        <p className="card-text">Expansive, blue-and-white location focused on casual, Greek-inspired plates & cocktails.</p>
                                        <p><i>Address: Main DP Chowk, Aundh-Wakad Rd, Jagtap Dairy, Vishal Nagar, Pune, Maharashtra 411027</i></p>
                                        <button type="button" className="btn btn-dark"><Link to="/Azzuro">View</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="./images/ttf.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">The Tenth Floor</h5>
                                        <p className="card-text">Upscale rooftop bar & restaurant with a vibrant ambiance serving cocktails & international cuisine.</p>
                                        <p><i>Address: A unit of Atithya Dining LLP, 901, 902 Deron Height, Baner Rd, above Ranka Jewelers, Pune, Maharashtra 411045</i></p>
                                        <button type="button" className="btn btn-dark"><Link to="/TheTenthFloor">View</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="./images/urbo.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">URBO</h5>
                                        <p className="card-text">Lively, multi-level bar & lounge with global eats, live music, sports screenings & outdoor seating.</p>
                                        <p><i>Address: Beverly Hills Road 1A, Ganaraj Mangal Karyalay, Near Baner-Balewadi Road Baner, Pune, Maharashtra 411045</i></p>
                                        <button type="button" className="btn btn-dark"><Link to="/URBO">View</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HotelList