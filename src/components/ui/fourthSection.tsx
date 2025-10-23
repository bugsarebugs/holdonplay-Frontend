
import Image from "next/image";
import Link from "next/link";

export default function FourthSection(){
    return (
        <div className=" text-white flex flex-col lg:flex-row sm:flex-col md:flex-col justify-center items-center bg-black lg:px-100  p-10 ">
            <Image src="/forhome/adela.webp" width={300} height={300} alt="decoration image"/>
            <div className=" ml-10 flex flex-col ">
                <h1 className="text-5xl font-bold"><span className="text-blue-400">Why Choose</span> HoldOnPlay</h1>
                <h2 className="font-bold text-2xl"><span className="text-blue-400">Best Choice</span> of Music Distribution Companies</h2>
                <ul className="list-disc text-2xl">
                    <li>Unlimited Music Distribution Worldwide</li>
                    <li>Direct access to 150+ digital stores and streaming services </li>
                    <li>Access to Exclusive Audience Development Program - HoldOnPlay Accelerator</li>
                    <li>Detailed sales data to guide your music strategy</li>
                    <li>Discover why we are better than <Link href="/whynotetunecore">TuneCore</Link> and <Link href="/whynotdistrokid">DistroKid</Link></li>
                </ul>
                <Link href="/stores" className="p-2 border-2 flex text-center self-center  hover:bg-blue-800  bg-blue-400 font-bold rounded-full border-blue-400">ALL OUR SERVICES</Link>
            </div>
        </div>
    )
}