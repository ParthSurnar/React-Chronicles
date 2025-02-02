import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero grid grid-cols-2 text-[#2F2F2F] h-[50vh] font-poppins">
        <div className=" flex flex-col gap-4 text-center pt-3 justify-center items-center pl-3">
          <p className="text-4xl font-bold ">
            The best URL shortener for your business.
          </p>
          <p className="text-2xl font-semibold ">
            Most of the shortners will ask you for details but we don't. <br /> We are the most trusted URL shortener in the world.
          </p>
          <div className="flex justify-start items-center gap-2">
            <Link href="/shorten"> <button className='rounded-lg px-3  gap-2 bg-slate-800 p-2 text-white '>Try now </button></Link>
            <a href="https://github.com/ParthSurnar/React-Chronicles/tree/a8f9539cbe36934b1e281ae1f2181bde170656c3/04_url-shortner"
              target="_blank"
              rel="noopener noreferrer">
              <button className="rounded-lg px-3 gap-2 bg-slate-800 p-2 text-white">GitHub</button>
            </a>
          </div>
        </div>
        <div className="relative">
          <Image className="mix-blend-darken" src={"/vector.jpg"} alt="vector" fill={true} />
        </div>



      </section>
    </main>
  );
}
