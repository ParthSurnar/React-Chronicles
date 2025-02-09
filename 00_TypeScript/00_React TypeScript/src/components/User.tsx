// import React from 'react'

const User = ({
    name,
    age,
    isStudent

}: {
    name: string,
    age: number,
    isStudent: boolean
}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{isStudent}</h1>
        </div>
    )
}

export default User
