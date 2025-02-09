// import React from 'react'

type color = 'red ' | 'blue' | 'green'

type CustomerProps = {
    color : color,
    name: string,
    age: number
}

const Customer = ({ name, age }: CustomerProps) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>

        </div>
    )
}

export default Customer
