import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-400 flex font-Montserrat justify-between items-center mx-auto px-[350px] py-4 text-white" >
      <div className="logo  font-extrabold text-2xl ">
        <span className='text-[#1E1E2C]'> &lt; </span>
        Pass
        <span className='text-[#1E1E2C]'> /&gt; </span>
      </div>
      <ul className="flex gap-4">
        {/* <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li> */}
        <button className='cursor-pointer '>
          <a href="https://github.com/ParthSurnar/React-Chronicles/tree/1faa7c1b6855dcd3b94324532c4aba70b759d2d5/02_Password%20Manager" target="_blank" >  <img width={25} height={25} src="github.svg" alt="" /></a>
        </button >
      </ul>
    </nav>
  )
}

export default Navbar
