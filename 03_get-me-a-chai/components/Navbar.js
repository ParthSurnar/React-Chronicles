import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#120C1F] text-[#E2E8F0] shadow-[0_0_15px_#FF00B6] flex p-3 justify-between items-center '> 
        <div className="logo font-bold ml-[80px] text-lg">GetMeaChai</div>
        <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar
