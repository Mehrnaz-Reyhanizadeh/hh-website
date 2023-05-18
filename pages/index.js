// import from components
import Footer from "@/components/Footer/Footer";
import Meta from "@/components/Meta";
import Banner from "@/components/Banner/Banner";
import Tools from "@/components/Tools/Tools";
import MySkills from "@/components/MySkills/MySkills";
import Interests from "@/components/Interests/Interests";
import Portfolio from "@/components/Portfolio/Portfolio";
import Social from "@/components/Social/Social";

export default function Home() {
  return (
    <>
      <Meta />
      <Banner />
      <Tools />
      <MySkills />
      <Interests />
      <Portfolio />
      <Social />
      <Footer />
    </>
  );
}
