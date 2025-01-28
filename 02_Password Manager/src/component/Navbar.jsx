import React from 'react'

const Navbar = () => {
  return (
  /* The code you provided is a React functional component called `Navbar`. It represents a navigation
  bar with a logo and a GitHub button. Here's a breakdown of what the code is doing: */
    <nav className="bg-purple-400 flex flex-wrap items-center  md:justify-between justify-center px-8 md:px-[350px] py-4 text-white font-Montserrat">
      {/* Logo */}
      <div className="logo font-extrabold text-2xl flex items-center">
        <span className="text-[#1E1E2C]">&lt;</span>
        Pass
        <span className="text-[#1E1E2C]">/&gt;</span>
      </div>

      {/* GitHub Button */}
      <div className="flex items-center gap-4 md:justify-end w-full md:w-auto mt-4 md:mt-0 justify-center">
        <button className="cursor-pointer">
          <a
            href="https://github.com/ParthSurnar/React-Chronicles/tree/1faa7c1b6855dcd3b94324532c4aba70b759d2d5/02_Password%20Manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width={30} height={30} src="github.svg" alt="GitHub" />
          </a>
        </button>
      </div>
    </nav>


  )
}

export default Navbar
