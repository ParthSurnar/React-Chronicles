import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-gray-800 text-white p-4 ">
            <ul className="flex justify-end gap-7">
                <li >Home</li>
                <li className='armour '>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
