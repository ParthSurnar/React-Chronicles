import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

/* The above code snippet is a React functional component named `Manager`. Inside the component, it is
using React hooks `useRef` and `useState` to manage state and references. */
const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    const getPasswords = async () => {
        let req =await fetch("http://localhost:3000/")  // Fetch the passwords from the server & use browser local host
        let passwords = await req.json()
        console.log(passwords)
        setPasswordArray(passwords)
        // let passwords = localStorage.getItem("passwords")
        // if (passwords) {
        //     setPasswordArray(JSON.parse(passwords))
        // }
    }


    useEffect(() => {

        getPasswords()

    }, [])




    const showPassword = () => {
        // Check if the eye icon is clicked to show the password
        if (ref.current.src.includes("eye.png")) {
            passwordRef.current.type = "text";  // Show the password
            ref.current.src = "eyecross.png";  // Switch the icon to 'crossed-eye'
        } else {
            passwordRef.current.type = "password";  // Hide the password
            ref.current.src = "eye.png";  // Switch the icon to 'eye'
        }
    }


 /* The above code is a JavaScript React function named `savePassword` that is responsible for saving a
 new password entry. Here is a breakdown of what the code does: */
    const savePassword =async () => {

        if (form.site && form.username && form.password) {
            const newPassword = { ...form, id: uuidv4() };
            const updatedPasswordArray = [...passwordArray, newPassword];

            setPasswordArray(updatedPasswordArray); // Update the state
            let res = await fetch("http://localhost:3000/", {method: "POST", body: JSON.stringify(newPassword), headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...form, id: uuidv4()})})  
            console.log(res)
            // localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray)); // Save to localStorage
            // console.log(updatedPasswordArray);
            toast('Password Saved!')
            setform({ site: "", username: "", password: "" });
        } else {
            toast.error('Please fill all the fields!')
        }

    };


    /**
     * The function `deletePassword` deletes a password from an array based on its ID and sends a
     * DELETE request to a server.
     */
    const deletePassword =async (id) => {
        console.log("Deleting password with ID", id)
        let newPasswords = passwordArray.filter((password) => password.id !== id)
        // localStorage.setItem("passwords", JSON.stringify(newPasswords))
        let res = await fetch("http://localhost:3000/", {method: "DELETE", body: JSON.stringify(newPasswords), headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...form, id })})  
        console.log(res)
        setPasswordArray(newPasswords)
        toast('Password Deleted!')
        // console.log([...passwordArray, form])
    }

    /**
     * The `editPassword` function edits a password in an array based on the provided ID and updates
     * the form state with the password details.
     */
    const editPassword = (id) => {
        console.log("Editing password with ID", id)
        let newPasswords = passwordArray.filter((password) => password.id !== id)
        let passwordToEdit = passwordArray.find((password) => password.id === id)
        setform({ site: passwordToEdit.site, username: passwordToEdit.username, password: passwordToEdit.password })
        setPasswordArray(newPasswords)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    return (
        /* The above code is using the `ToastContainer` component from a library in a React application.
         It is configuring the toast notifications to appear
        at the top-right corner, automatically close after 5 seconds, show a progress bar, not stack
        the newest on top, close on click, not support right-to-left text direction, pause on focus
        loss, be draggable, pause on hover, and use a dark theme. */
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
            /* The above code is a snippet of JSX code written in JavaScript React. It appears to be a
            form for a password manager application. */
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

            <div className="md:container px-4">
                <div className="mx-auto max-w-4xl">
                    <h1 className="font-bold text-4xl font-Montserrat text-center pt-10 text-[#4B0082]">
                        <span className="text-[#1E1E2C]">&lt;</span>Pass
                        <span className="text-[#1E1E2C]">/&gt;</span>
                    </h1>

                    <p className="font-Montserrat text-center text-lg pt-2">Your own Password Manager</p>
                    <div className="text-white p-4 flex flex-col gap-5 items-center">
                        <input
                            value={form.site}
                            onChange={handleChange}
                            placeholder="Enter Website URL"
                            className="rounded-full border border-[#B39DDB] text-black focus:outline-[#9932CC] p-4 py-2 w-full md:w-4/5"
                            type="text"
                            name="site"
                            id="site"
                        />

                        <div className="flex flex-col md:flex-row w-full gap-3 md:gap-5 justify-between">
                            <input
                                value={form.username}
                                onChange={handleChange}
                                placeholder="Enter Username"
                                className="rounded-full border border-[#B39DDB] text-black focus:outline-[#9932CC] flex-1 p-4 py-2"
                                type="text"
                                name="username"
                                id="username"
                            />

                            <div className="relative flex flex-1">
                                <input
                                    ref={passwordRef}
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Enter Password"
                                    className="rounded-full border border-[#B39DDB] text-black focus:outline-[#9932CC] flex-1 p-4 py-2"
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                                <span
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                                    onClick={showPassword}
                                >
                                    <img ref={ref} width={20} src="eye.png" alt="" />
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={savePassword}
                            className="text-black font-Montserrat justify-center items-center flex w-fit bg-purple-400 rounded-full px-6 py-2 hover:bg-purple-300 transition-all duration-200 ease-in-out font-medium gap-1 border border-purple-600"
                        >
                            <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
                            Save
                        </button>
                    </div>

                    /* The above code is a snippet of JSX code written in JavaScript React. It is a
                    component that displays a list of passwords. Here is a breakdown of what the
                    code is doing: */
                    <div className="passwords font-Montserrat mt-8">
                        <h2 className="bg-purple-400 text-black flex justify-center p-3 rounded-full border border-purple-600 font-bold text-lg shadow-md">
                            Your Passwords
                        </h2>
                        <div className="bg-purple-400 text-black flex justify-center p-2 rounded-full border border-purple-600 font-bold mt-4 shadow-md">
                            Total Passwords: {passwordArray.length}
                        </div>

                        <div className="overflow-x-auto mt-4">
                            {passwordArray.length === 0 ? (
                                <div className="text-center text-black bg-purple-200 p-4 rounded-lg shadow-md border border-purple-500 font-medium">
                                    No Passwords to display
                                </div>
                            ) : (
                                <table className="table-auto w-full bg-purple-300 rounded-xl shadow-lg border-separate border-spacing-2 border border-purple-500">
                                    <thead className="bg-purple-400 text-black">
                                        <tr>
                                            <th className="p-3 text-left text-sm font-bold uppercase">Website</th>
                                            <th className="p-3 text-left text-sm font-bold uppercase">Username</th>
                                            <th className="p-3 text-left text-sm font-bold uppercase">Password</th>
                                            <th className="p-3 text-left text-sm font-bold uppercase">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {passwordArray.map((password, index) => (
                                          /* The above code is a snippet of JavaScript React code that
                                          is rendering a table row (`<tr>`) for each item in a list
                                          of passwords. Each row displays the site, username, and
                                          password information of a password object. */
                                            <tr
                                                key={index}
                                                className="bg-purple-200 hover:bg-purple-100 transition duration-200 text-black"
                                            >
                                                <td className="p-4 text-sm border-b border-purple-500 relative">
                                                    <a
                                                        href={password.site}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-500 hover:underline"
                                                    >
                                                        {password.site}
                                                    </a>
                                                    <img
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(password.site);
                                                            toast("Website URL copied!");
                                                        }}
                                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
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
                                                            navigator.clipboard.writeText(password.username);
                                                            toast("Username copied!");
                                                        }}
                                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                                                        width={15}
                                                        height={15}
                                                        src="copy-regular.svg"
                                                        alt="Copy"
                                                    />
                                                </td>
                                                <td className="p-4 text-sm border-b border-purple-500 relative">

                                                    {"*".repeat(password.password.length)}

                                                    <img
                                                        onClick={() => {

                                                            navigator.clipboard.writeText(password.password);
                                                            toast("Password copied!");

                                                        }}
                                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                                                        width={15}
                                                        height={15}
                                                        src="copy-regular.svg"
                                                        alt="Copy"
                                                    />
                                                </td>
                                                <td className="justify-center flex gap-2 pt-2">
                                                    <span onClick={() => editPassword(password.id)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/wkvacbiw.json"
                                                            trigger="hover"
                                                            style={{ width: "25px", height: "25px" }}
                                                        ></lord-icon>
                                                    </span>
                                                    <span onClick={() => deletePassword(password.id)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover"
                                                            style={{ width: "25px", height: "25px" }}
                                                        ></lord-icon>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Manager
