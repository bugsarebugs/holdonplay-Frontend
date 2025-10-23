
import Image from "next/image";
import Link from "next/link";

export default function EightSection(){
    return (
        <div className="flex flex-col p-20 md:flex-col lg:flex-row sm:flex-col justify-center items-center  bg-black text-center">
            <Image src="/forhome/kingofstatenisland.webp" width={500} height={500} alt="Earnings with Music Publishing" className="mr-4"/>
            <div className=" flex flex-col align-middle self-center sm:max-w-100 lg:max-w-200">
                <h1 className="text-3xl font-bold sm:text-2xl">Maximize Your Earnings with <span className="text-blue-400">Music Publishing</span></h1>
                <p className="text-justify text-xl">Distribution isn&apos;t only way to make money as an independent musician. When you write a song, you are owed royalities.
                    Your original songs generate publishing revenue with every stream on Spotify, video creation on TikTok, view on Youtube, radio spin, or 
                    live perfomance worldwide. 
                </p>
                <p className="text-2xl p-5">Let us help you get the royalties yo are owed by:</p>
                <ul className="list-disc text-left pl-10 p-2 text-xl">
                    <li>Collecting your royalties globally/worldwide </li>
                    <li>Tracking your publishing royalties from Spotify, Youtube, TikTok, Radio and thousands of other pay sources</li>
                    <li>Offering advanced analytics on where your perfomance and mechanical royalties come from</li>
                    <li>All while you keep 100% of your copyrights</li>
                </ul>
                <div>
                <button className="p-2 m-2 w-fit self-center border-blue-400 bg-blue-400 rounded-full border-2 hover:bg-blue-800">
                    <Link href="/stores">LEARN MORE</Link>
                </button>
                <button className="p-2 m-2 border-blue-400 w-fit self-center bg-gray-800 hover:bg-blue-800  rounded-full border-2">
                    <Link href="/book">BOOK YOUR PERSONNEL</Link>
                </button>
                </div>
            </div>
        </div>
    )
}