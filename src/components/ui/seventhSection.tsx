

import Image from "next/image";
import Link from "next/link";

export default function SeventhSection(){
    return (
        <div className="flex flex-col lg:flex-row sm:flex-col p-20  text-center items-center self-center justify-center  sm:dvh  bg-black">
            <div className="flex flex-col">
                <h1 className="text-4xl lg:text-6xl font-extrabold sm:text-2xl">Be Your Own <span className="text-blue-400">Graphic Designer</span></h1>
                <h2 className="text-2xl">Create your Cover Art with Layouts, Images, Presets, Filters, Fonts, and Overlays</h2>
                <p className="text-xl text-gray-400">Customize your HoldOnPlay Cover Art during the upload process</p>
                <button className="p-2 m-2 bg-blue-400 font-bold border-blue-400 rounded-full border-2 hover:bg-blue-800 "><Link href="/sellMusic">SIGN UP NOW</Link></button>
                <button className="p-2 m-2 bg-black font-bold border-blue-400 rounded-full border-2 hover:bg-blue-800 "><Link href="/stores">WATCH VIDEO</Link></button>
            </div>
            <Image src="/forhome/tool.webp" alt="simple" width={500} height={500}/>
        </div>
    )
}