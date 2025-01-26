import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])




    const showPassword = () => {
        // alert("show the password")
        if (ref.current.src.includes("eyecross.png")) {
            ref.current.src = "eye.png"
        } else {
            ref.current.src = "eyecross.png"
        }
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

            <div className="  mx-auto max-w-4xl ">
                <h1 className="logo font-bold text-4xl font-Montserrat text-center pt-10 text-[#4B0082]">
                    <span className='text-[#1E1E2C]'>&lt;</span>
                    Pass
                    <span className='text-[#1E1E2C]'>/&gt;</span>
                </h1>

                <p className='font-Montserrat text-center text-lg pt-2'>Your own Password Manager</p>
                <div className="text-white p-4 flex flex-col gap-5 items-center">

                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-[#B39DDB] text-black focus:outline-[#9932CC] p-4 py-1 w-full' type="text" name="site" id="" />

                    <div className="flex w-full gap-3 justify-between ">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-[#B39DDB] text-black focus:outline-[#9932CC] flex-1 p-4 py-1' type="text" name="username" id="" />

                        <div className="relative items-center text-center flex">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-[#B39DDB] text-black focus:outline-[#9932CC] flex-1 p-4 py-1' type="text" name="password" id="" />
                            <span className='absolute right-2 text-black items-center text-center cursor-pointer' onClick={showPassword}>
                                <img ref={ref} width={20} src="eye.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='text-black cursor-pointer font-Montserrat justify-center items-center flex w-fit bg-purple-400 rounded-full px-3 py-2 hover:bg-purple-300 transition-all duration-200 ease-in-out font-medium gap-1 border border-purple-600 '>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>
            </div>

        </>
    )
}

export default Manager
