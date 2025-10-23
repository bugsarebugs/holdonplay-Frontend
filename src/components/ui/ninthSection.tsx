

import Image from "next/image";
import Link from "next/link";

export default function NinthSection(){
    return (
        <div className="flex flex-col lg:flex-row sm:flex-col items-center self-center justify-center p-20  sm:h-dvh text-center  bg-black">
            <div className="flex flex-col max-w-200 p-5">
                <h1 className="text-4xl lg:text-6xl font-extrabold sm:text-2xl ">Reach More Fans.</h1>
                <h1 className="text-4xl lg:text-6xl font-extrabold sm:text-2xl">Increase Your Streams.</h1>
                <h1 className="lg:text-6xl font-extrabold text-blue-400 sm:text-2xl">Grow Your Music Career.</h1>
                <h2 className="text-justify text-xl text-gray-400">Join HoldOnPlay to access the Accelerator platform and speed up your success!</h2>
                <p className="text-justify text-xl text-gray-400">HoldOnPlay leverages innovative, developed in-house tools to elevate the ideal tracks for 
                    greater audience reach. In the first half of 2024 alone, Accelerator generated 10 billion
                    streams for opted-in artists.
                </p>
                <div className="flex">
                    <button className="p-2 w-fit self-center m-2 bg-blue-400 border-blue-400 hover:bg-blue-800  rounded-full border-2"><Link href="/sellMusic">SIGN UP </Link></button>
                    <button className="p-2 w-fit self-center m-2 bg-black border-blue-400 hover:bg-blue-800  rounded-full border-2"><Link href="/book">WATCH READ THE REPORT</Link></button>
                </div>
            </div>
            <video src="/hopplayer.mp4" controls playsInline loop autoPlay muted>Fuck its not playing</video>
        </div>
    )
}