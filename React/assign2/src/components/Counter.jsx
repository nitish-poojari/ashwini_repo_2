import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        console.log('incrementing....')
        setCount(count + 1)
        console.log(`Counter=${count}`)
    }
    const decrement = () => {
        console.log('decrementing....')
        setCount(count - 1)
        console.log(`Counter=${count}`)
    }
    return (
        <div>
            <center style={{
                marginTop: '12%'
            }}>
                <p><b>Counter</b></p>
                <button className="btn btn-primary" onClick={increment}> + </button>
                <span>{count}</span>
                <button className="btn btn-primary" onClick={decrement}> - </button>
            </center>
        </div>
    )
}

export default Counter