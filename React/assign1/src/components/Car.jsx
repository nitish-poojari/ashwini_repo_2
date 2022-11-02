import React from 'react'

const Car = () => {
    const cars = {
        model: 'i20',
        company: 'Hyundai',
        price: 20,
        configuration: {
            color: 'gray',
            fuel: 'petrol',
            cylinder: 4,
            fuelTankCapacity: 37,
            mileage: {
                city: 14,
                highway: 20,
            },
        },
        features: [' touch screen ,', ' bluetooth ,', ' alloy wheels ,', ' powersteering '],
    }

    return (
        <div>
            <div>Model:{cars.model}</div>
            <div>Company:{cars.company}</div>
            <div>Price:{cars.price}</div>
            <div>Configuration-</div>
            <div>Color:{cars.configuration.color}</div>
            <div>Fuel:{cars.configuration.fuel}</div>
            <div>Cylinder:{cars.configuration.cylinder}</div>
            <div>Fuel Tank capacity:{cars.configuration.fuelTankCapacity}</div>
            <div>Mileage-</div>
            <div>City:{cars.configuration.mileage.city}</div>
            <div>Highway:{cars.configuration.mileage.highway}</div>
            <div>Features:{cars.features}</div>
        </div>
    )
}

export default Car