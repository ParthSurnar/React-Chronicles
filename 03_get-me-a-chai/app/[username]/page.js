"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, use } from "react";

const Username = ({ params: paramsPromise }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    // ✅ Unwrap params properly
    const params = use(paramsPromise);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div className="text-center mt-10 text-white">Loading...</div>;
    }

    if (!session) {
        return null; // Don't render anything if the user isn't logged in

    }
    

    return (
        <>
            {/* Banner Section */}
            <div className="cover w-full relative">
                <img className="object-cover w-full h-[330px]" src="banner.gif" alt="" />
                <div className="absolute -bottom-14 right-[46.7%] border border-[#FF44CC] rounded-full">
                    <img
                        className="rounded-full"
                        width={105}
                        height={105}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KKwXKTCPdbTKm9IuHGdhd9ybc7cdSclZCQ&s"
                        alt=""
                    />
                </div>
            </div>

            {/* Info Section */}
            <div className="info gap-2 flex flex-col justify-center items-center text-center mt-[90px] text-soft-neon font-nosifer text-[20px]">
                <div className="font-bold">@{params.username}</div> {/* ✅ Now works properly */}
                <div className="font-bold text-3xl">JB2A - Jules&Ben's Animated Assets</div>
                <div className="font-light text-[20px]">Creating Animated art for VTT's</div>

                <div className="text-[15px] text-slate-400 flex gap-6">
                    <span>16,136 members</span>
                    <span>94 posts</span>
                    <span>$16,540/release</span>
                </div>

                {/* Payment & Supporters Section */}
                <div className="payment flex mt-5 w-[80%] min-h-[auto] gap-2">

                    {/* Supporters List */}
                    <div className="supporters w-1/2 bg-gray-900 rounded-lg mb-8 flex flex-col text-left p-4 ">
                        <h2 className="text-lg font-bold text-white ">Supporters</h2>
                        <ul className="my-3 ">
                            <li className="my-2 hover:bg-gray-800 transition-all duration-300 p-1 gap-2 rounded-lg flex">
                                <img src="avatar.gif" width={45} height={45} alt="" />
                                Rohan donated $30 with a message "Keep up the great work! 🚀"</li>
                            <li className="my-2 hover:bg-gray-800 transition-all duration-300 p-1 gap-2 flex rounded-lg">
                                <img src="avatar.gif" width={45} height={45} alt="" />
                                Ayesha donated $50 with a message "Proud to support this! 💜"</li>
                            <li className="my-2 hover:bg-gray-800 transition-all duration-300 p-1 gap-2 flex rounded-lg">
                                <img src="avatar.gif" width={45} height={45} alt="" />
                                Jake donated $25 with a message "Love what you're doing! 🔥"</li>
                            <li className="my-2 hover:bg-gray-800 transition-all duration-300 p-1 gap-2 flex rounded-lg">
                                <img src="avatar.gif" width={45} height={45} alt="" />
                                Neha Donated $100 with a message "Here’s a little something for your efforts! ✨"</li>
                            <li className="my-2 hover:bg-gray-800 transition-all duration-300 p-1 gap-2 flex rounded-lg">
                                <img src="avatar.gif" width={45} height={45} alt="" />
                                Zayn donated $15 with a message "You got this! 💪"</li>
                            <li className="my-2 hover:bg-gray-800 transition-all duration-300 p-1 gap-2 flex rounded-lg">
                                <img src="avatar.gif" width={45} height={45} alt="" />
                                Emily donated $75 with a message "Keep shining! 🌟"</li>
                            <li className="my-2 hover:bg-gray-800 transition-all duration-300 p-1 gap-2 flex rounded-lg">
                                <img src="avatar.gif" width={45} height={45} alt="" />
                                Raj donated $40 with a message "Supporting this all the way! 🙌"</li>
                            <li className="my-2 hover:bg-gray-800 transition-all duration-300 p-1 gap-2 flex rounded-lg">
                                <img src="avatar.gif" width={45} height={45} alt="" />
                                Sophia donated $60 with a message "Much love for this initiative! ❤️"</li>
                            <li className="my-2 hover:bg-gray-800 transition-all duration-300 p-1 gap-2 flex rounded-lg">
                                <img src="avatar.gif" width={45} height={45} alt="" />
                                Leo donated $90 with a message "Great cause, happy to help! 🙏"</li>
                        </ul>
                    </div>



                    {/* Payment Section */}
                    <div className="makepayment w-1/2 bg-gray-900 rounded-lg mb-8 p-8 text-white">
                        <h2 className="text-lg font-bold mb-4">Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            {/* input for name and message */}

                            <input
                                type="text"
                                className="w-full p-3 rounded-lg bg-soft-neon text-gray-900 placeholder-gray-500 shadow-md focus:outline-none focus:ring-4 focus:ring-purple-600"
                                placeholder="Your Name"
                            />

                            <input
                                type="text"
                                className="w-full p-3 rounded-lg bg-soft-neon text-gray-900 placeholder-gray-500 shadow-md focus:outline-none focus:ring-4 focus:ring-purple-600"
                                placeholder="Enter Message"
                            />

                            <input
                                type="text"
                                className="w-full p-3 rounded-lg bg-soft-neon text-gray-900 placeholder-gray-500 shadow-md focus:outline-none focus:ring-4 focus:ring-purple-600"
                                placeholder="Enter Amount"
                            />


                            <button
                                className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 cursor-pointer z-10"
                            >
                                <span className="font-nosifer relative px-5 py-2.5 transition-all ease-in duration-75   rounded-md group-hover:bg-opacity-0 group-hover:text-white text-2xl ">Pay</span>
                            </button>
                        </div>
                        {/* or choose from these amounts */}
                       < div className='flex flex-col md:flex-row gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Username;
