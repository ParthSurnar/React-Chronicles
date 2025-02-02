"use client"
import React ,{useState} from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState(false)

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
                    className="w-full max-w-lg px-5 py-3 text-lg text-gray-900 bg-white/40 border border-transparent rounded-xl outline-none backdrop-blur-lg transition-all duration-300 placeholder-gray-700 shadow-md shadow-purple-300
  focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/50 hover:scale-105 hover:border-purple-400"
                />

                <input
                    type="text"
                    placeholder="Enter Your Preferred Short URL Text"
                    onChange={handleShortChange}
                    className="w-full max-w-lg px-5 py-3 text-lg text-gray-900 bg-white/40 border border-transparent rounded-xl outline-none backdrop-blur-lg transition-all duration-300 placeholder-gray-700 shadow-md shadow-purple-300 mt-4
  focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:shadow-lg focus:shadow-yellow-500/50 hover:scale-105 hover:border-yellow-400"
                />


                <button className='rounded-lg px-3  gap-2 bg-slate-800 p-2 text-white '>Generate</button>
            </div>
        </div>
    )
}

export default Shorten
