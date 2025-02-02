"use client"
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [Generated, setGenerated] = useState(false)

    const handleChange = (e) => { seturl(e.target.value) }
    const handleShortChange = (e) => { setshorturl(e.target.value) }

    return (
        <div >
            <h1 className=' flex  text-6xl font-semi pt-4 bold text-center justify-center items-center'>
                Generate Your Shorten URL's
            </h1>
            <div className='flex flex-col gap-4 text-center pt-3 justify-center items-center pl-3'>
                <input
                    type="text"
                    placeholder="Enter Your URL"
                    onChange={handleChange}
                    value={url}
                    className="w-full max-w-lg px-5 py-3 text-lg text-gray-900 bg-white/40 border border-transparent rounded-xl outline-none backdrop-blur-lg transition-all duration-300 placeholder-gray-600 shadow-md shadow-purple-300
  focus:ring-4 focus:ring-purple-500/70 focus:border-purple-500 focus:shadow-xl focus:shadow-purple-500/50 hover:scale-105 hover:shadow-purple-400/40
  placeholder-shown:opacity-50 focus:placeholder-opacity-100 focus:translate-y-[-3px]"
                />

                <input
                    type="text"
                    placeholder="Enter Your Preferred Short URL Text"
                    onChange={handleShortChange}
                    value={shorturl}
                    className="w-full max-w-lg px-5 py-3 text-lg text-gray-900 bg-white/40 border border-transparent rounded-xl outline-none backdrop-blur-lg transition-all duration-300 placeholder-gray-600 shadow-md shadow-yellow-300 mt-4
  focus:ring-4 focus:ring-yellow-500/70 focus:border-yellow-500 focus:shadow-xl focus:shadow-yellow-500/50 hover:scale-105 hover:shadow-yellow-400/40
  placeholder-shown:opacity-50 focus:placeholder-opacity-100 focus:translate-y-[-3px]"
                />



                <button className="relative rounded-xl px-6 py-3 mt-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-500 shadow-md shadow-purple-400 transition-all duration-300
  hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 
  focus:ring-4 focus:ring-purple-500/70 focus:shadow-purple-600/50 
  active:scale-95 active:shadow-md">
                    Generate
                </button>

            </div>
        </div>
    )
}

export default Shorten
