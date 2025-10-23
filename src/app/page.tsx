'use client';
import EightSection from "@/components/ui/eithSection";
import FifthSection from "@/components/ui/fifthSection";
import FirstSection from "@/components/ui/firstSection";
import FourthSection from "@/components/ui/fourthSection";
import NinthSection from "@/components/ui/ninthSection";
import SecondSection from "@/components/ui/secondSection";
import SeventhSection from "@/components/ui/seventhSection";
import SixthSection from "@/components/ui/sixthSection";
import ThirdSection from "@/components/ui/thirdSection";
import { useTheme } from "@/components/ui/ThemeProvider";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Home() {
  const [theme] = useTheme();


  
  return (
    <div className={`shadow-2xl flex flex-col 5  shadow-blue-400 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <EightSection/>
      <NinthSection/>
    </div>
  );
}
