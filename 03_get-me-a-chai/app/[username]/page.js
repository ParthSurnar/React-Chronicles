import React from 'react'

const Username = ({ params }) => {
    return (
        <>
            <div className='cover w-full relative'>
                <img className='object-cover w-full h-[330px]' src="banner.gif" alt="" />
                <div className='absolute -bottom-14 right-[46.7%] border border-[#FF44CC] rounded-full'>
                    <img className='rounded-full ' width={105} height={105} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KKwXKTCPdbTKm9IuHGdhd9ybc7cdSclZCQ&s" alt="" />
                </div>
            </div>
            <div className="info gap-2 flex flex-col justify-center items-center text-center mt-[90px] text-soft-neon font-nosifer text-[20px] ">
                <div className='font-bold'>
                    @{params.username}
                </div>
                <div className='font-bold text-3xl'>JB2A - Jules&Ben's Animated Assets</div>
                <div className='font-light text-[20px] '>Creating Animated art for VTT's</div>

                <div className="text-[15px] text-slate-400 flex gap-6">
                    <span>16,136 members</span>
                    <span>94 posts</span>
                    <span>$16,540/release</span>
                </div>
                <div className="payment  flex mt-5  w-[80%] min-h-[90vh] gap-2">
                    <div className="supporters w-1/2 bg-gray-900 rounded-lg mb-8 flex flex-col text-left p-8">
                        {/* show list of all the supporters as a leaderboard  */}
                        <h2 className="text-lg font-bold">Supporters</h2>
                        <ul className="my-4">
                            <li className="my-3">Rohan donated $30 with a message ""</li>
                            <li className="my-3">Rohan donated $30 with a message ""</li>
                            <li className="my-3">Rohan donated $30 with a message ""</li>
                            <li className="my-3">Rohan donated $30 with a message ""</li>
                            <li className="my-3">Rohan donated $30 with a message ""</li>
                            <li className="my-3">Rohan donated $30 with a message ""</li>
                            <li className="my-3">Rohan donated $30 with a message ""</li>
                            <li className="my-3">Rohan donated $30 with a message ""</li>
                            <li className="my-3">Rohan donated $30 with a message ""</li>
                        </ul>
                    </div>

                    <div className="makepayment w-1/2 bg-gray-900 rounded-lg mb-8">
                        dd
                    </div>
                </div>
            </div>
        </>
    )
}

export default Username
