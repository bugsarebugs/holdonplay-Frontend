"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const logoz = ["/spotify.webp", "/tidal.svg", "/youtube.svg", "/beatport.svg", "/amazon.svg", "/apple.svg"]
export default function SecondSection(){
    const boxRef = useRef(null);
    useGSAP(() => {
        
        gsap.fromTo(
        boxRef.current,
        { opacity: 0.5, x: 300 , duration: 20}, 
        
        {
            opacity: 1, 
            x: 0,
            duration: 10,
            ease: "power2.out", 
            ScrollTrigger: {
                trigger: boxRef.current, 
                start: "top 80%", 
                end: "top 50%",
                scrub: true
            }
        }
    );
    return () => ScrollTrigger.killAll();
    }, [])
;    return (
        <div ref={boxRef} className="bg-black flex relative flex-col justify-center items-center  p-4 text-center text-2xl ">
            <div className="flex flex-col lg:px-100">
            <h1 className="lg:text-6xl font-bold text-4xl"><span className="text-blue-400">Unlimited Distribution</span> Starting at Tsh: 77,000/=</h1>
            <p className="text-justify">Increase the reach of your music across the most popular stores & platforms like Spotify, Apple Music, TikTok, Youtube and many more. Empower yourself with unlimited distribution opportunities, and get your music heard by a global audience</p>
            <p className="text-justify">Keep 100% ownership of your music, maintaining creative control and authority in your music career</p>
            <div className="flex self-center flex-wrap items-center justify-center p-4">{logoz.map((src) => (
                <Image src={src} key={src} width={200} height={300} alt="logos" className="size-20 lg:size-20 p-1 "/>
            ))}
            </div>
            <button className="border-2 rounded-full p-2 border-blue-400 bg-blue-400 hover:bg-blue-800 w-fit self-center">
                <Link href="/stores">
                    VIEW ALL 150+ StORES
                </Link>
            </button>
            </div>
          
        </div>
    )
}