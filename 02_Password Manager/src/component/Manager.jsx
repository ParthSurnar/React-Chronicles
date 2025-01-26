import React from 'react'

const Manager = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className=" bg-slate-50 mx-auto max-w-4xl">
                <h1>
                    Pass
                </h1>
                <p>Your own Password Manager</p>
                <div className="text-white p-4 flex flex-col ">

                    <input className='rounded-full  ' type="text" name="" id="" />
                    <div className="flex ">
                        <input className='bg-' type="text " />
                        <input className='bg-' type="text " />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager
