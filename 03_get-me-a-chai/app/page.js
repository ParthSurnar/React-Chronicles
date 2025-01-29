import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-4 flex-col text-soft-neon h-[44vh]  font-nosifer">
        <div className="font-bold flex items-center text-5xl font-nosifer">
          Buy Me a Chai
          <span>   <img src="tea.gif" width={80} alt="" />
          </span>
        </div>


        <p>
          Crowd funding project for chai lovers.
        </p>
        <div >
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 group-hover:text-white">
              Start Now
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 group-hover:text-white">
              Read More
            </span>
          </button>

        </div>
      </div>
      <div className="relative mb-4">
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 h-0.5 opacity-35"></div>
      </div>



      <div className="text-soft-neon font-nosifer container mx-auto ">
        <h1 className="text-3xl font-nosifer text-center my-14">Your Fans can buy you a Chai</h1>
        <div className="flex gap-56 justify-around py-16">
          <div className="items-center flex flex-col ">
            <img className="item mb-2 bg-slate-800 rounded-full p-2  " src="/man.gif" width={96} alt="" />
            <p className="text-center font-extrabold text-xl">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
          <div className="items-center flex flex-col">
            <img className="item mb-2 bg-slate-800 rounded-full p-2  " src="/coin.gif" width={96} alt="" />
            <p className="text-center font-extrabold text-xl">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
          <div className="items-center flex flex-col justify-center">
            <img className="item mb-2 bg-slate-800 rounded-full p-2  " src="/group.gif" width={96} alt="" />
            <p className="text-center font-extrabold text-xl">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>


      <div className="relative mb-4">
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 h-0.5 opacity-35"></div>
      </div>

      <h2 className="text-3xl font-nosifer text-center my-9 text-soft-neon">More about us</h2>
      <div className="relative w-full h-[400px]">  {/* Set a height for the container */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="bgvideo.mp4"
          muted
          autoPlay
          loop
          playsInline
        />
      </div>

    </>
  );
}
