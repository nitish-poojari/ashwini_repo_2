import React, { useState } from 'react'

const Ratings = () => {
    const [rating, setRating] = useState(0)
    const increment = () => {
        if (rating < 5) {
            setRating(rating + 1)
        }
    }
    const decrement = () => {
        if (rating > 0) {
            setRating(rating - 1)
        }
    }
    return (
        <div>
            <center style={{
                marginTop: '9%',
                marginBottom:'9%'
            }}>
                <p><b>Ratings</b></p>
                <button className="btn btn-primary" onClick={increment}>+</button>
                <span style={{ padding: 10, margin: 10, fontWeight: 'bold' }}>{Ratings}</span>
                <button className="btn btn-primary" onClick={decrement}>-</button>
                <div className="container">
                    {[...Array(rating)].map(() => {
                        return (
                            <img src=
                                'http://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2015-01-28/3dbd2b3688f9b13df6a6d3254c481832.ico'

                                alt=" " />
                        );
                    })}
                </div>

            </center>
        </div>
    )
}

export default Ratings