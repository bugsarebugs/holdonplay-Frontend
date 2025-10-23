import EightSection from "@/components/ui/eithSection";
import FifthSection from "@/components/ui/fifthSection";
import FirstSection from "@/components/ui/firstSection";
import FourthSection from "@/components/ui/fourthSection";
import NinthSection from "@/components/ui/ninthSection";
import SecondSection from "@/components/ui/secondSection";
import SeventhSection from "@/components/ui/seventhSection";
import SixthSection from "@/components/ui/sixthSection";
import ThirdSection from "@/components/ui/thirdSection";


export default function Home() {
  return (
    <div className="shadow-2xl shadow-blue-400">
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
