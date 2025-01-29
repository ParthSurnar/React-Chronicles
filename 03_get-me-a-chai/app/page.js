import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col text-soft-neon h-[44vh]  font-nosifer">
      <div className="font-bold text-3xl font-nosifer"> Buy Me a Chai</div>
      <p>
        Crowd funding project for chai lovers.
      </p>
      <div>
        <button>
          Start now
        </button>
      </div>
    </div>
  );
}
