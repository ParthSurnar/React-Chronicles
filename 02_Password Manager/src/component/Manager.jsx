import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])




    const showPassword = () => {
        passwordRef.current.type = passwordRef.current.type === "password" ? "text" : "password"
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={true}
                pauseOnHover
                theme="dark"
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

            <div className="  mx-auto max-w-4xl ">
                <h1 className="logo font-bold text-4xl font-Montserrat text-center pt-10 text-[#4B0082]">
                    <span className='text-[#1E1E2C]'>&lt;</span>
                    Pass
                    <span className='text-[#1E1E2C]'>/&gt;</span>
                </h1>

                <p className='font-Montserrat text-center text-lg pt-2'>Your own Password Manager</p>
                <div className="text-white p-4 flex flex-col gap-5 items-center">

                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-[#B39DDB] text-black focus:outline-[#9932CC] p-4 py-1 w-full' type="text" name="site" id="1" />

                    <div className="flex w-full gap-3 justify-between ">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-[#B39DDB] text-black focus:outline-[#9932CC] flex-1 p-4 py-1' type="text" name="username" id="2" />

                        <div className="relative items-center text-center flex">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-[#B39DDB] text-black focus:outline-[#9932CC] flex-1 p-4 py-1' type="password" name="password" id="3" />
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
                        Add Password
                    </button>
                </div>
                <div className="passwords font-Montserrat">
                    <h2 className="bg-purple-400 text-black items-center flex justify-center p-3 rounded-full border border-purple-600 font-bold text-lg shadow-md">
                        Your Passwords
                    </h2>
                    <div className="bg-purple-400 text-black items-center flex justify-center p-2 rounded-full border border-purple-600 font-bold mt-4 shadow-md">
                        Total Passwords: {passwordArray.length}
                    </div>

                    <div className="overflow-x-auto mt-4">
                        {passwordArray.length === 0 ? (
                            // Display this if no passwords exist
                            <div className="text-center text-black bg-purple-200 p-4 rounded-lg shadow-md border border-purple-500 font-medium">
                                No Passwords to display
                            </div>
                        ) : (
                            // Display the table if passwords exist
                            <table className="table-auto w-full bg-purple-300 rounded-xl shadow-lg border-separate border-spacing-2 border border-purple-500">
                                <thead className="bg-purple-400 text-black rounded-md">
                                    <tr>
                                        <th className="p-3 text-left text-sm font-bold uppercase">Website</th>
                                        <th className="p-3 text-left text-sm font-bold uppercase">Username</th>
                                        <th className="p-3 text-left text-sm font-bold uppercase">Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {passwordArray.map((password, index) => (
                                        <tr key={index} className="bg-purple-200 hover:bg-purple-100 transition duration-200 text-black rounded-md">
                                            <td className="p-4 text-sm border-b border-purple-500 relative">
                                                <a href={password.site} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                    {password.site}
                                                </a>
                                                <img
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(password.site); // Copy the site URL to clipboard
                                                        toast('Website URL copied!', { // Show toast notification
                                                            position: "top-right",
                                                            autoClose: 5000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            draggable: true,
                                                            progress: undefined,
                                                            theme: "dark",
                                                            transition: "Bounce",
                                                        });
                                                    }}
                                                    className="absolute top-[17px] right-1 cursor-pointer"
                                                    width={15}
                                                    height={15}
                                                    src="copy-regular.svg"
                                                    alt="Copy"
                                                />

                                            </td>
                                            <td className="p-4 text-sm border-b border-purple-500 relative">
                                                {password.username}
                                                <img
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(password.username); // Copy the username to clipboard
                                                        toast('Username copied!', { // Show toast notification
                                                            position: "top-right",
                                                            autoClose: 4000,
                                                            hideProgressBar: false,
                                                            closeOnClick: false,
                                                            pauseOnHover: true,
                                                            draggable: true,
                                                            progress: undefined,
                                                            theme: "dark",
                                                            transition: "bounce"
                                                        });
                                                    }}
                                                    className="absolute top-[17px] right-1 cursor-pointer"
                                                    width={15}
                                                    height={15}
                                                    src="copy-regular.svg"
                                                    alt="Copy"
                                                />

                                            </td>
                                            <td className="p-4 text-sm border-b border-purple-500 relative">
                                                {password.password}
                                                <img onClick={() => {
                                                    navigator.clipboard.writeText(password.password)
                                                    toast('password copied!', { // Show toast notification
                                                        position: "top-right",
                                                        autoClose: 4000,
                                                        hideProgressBar: false,
                                                        closeOnClick: false,
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "dark",
                                                        transition: "bounce"
                                                    });
                                                }}
                                                    className="absolute top-[17px] right-1 cursor-pointer"
                                                    width={15}
                                                    height={15}
                                                    src="copy-regular.svg"
                                                    alt="Copy"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>

                        )}
                    </div>
                </div>


            </div>

        </>
    )
}

export default Manager
