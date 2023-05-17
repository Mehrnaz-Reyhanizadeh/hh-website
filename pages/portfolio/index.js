import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Meta from "@/components/Meta";
import backGround from "../../styles/images/background.svg";
import avatar from "../../styles/images/avatar.png";
import PortfolioPageItem from "@/components/PortfolioPageItem/PortfolioPageItem";
export default function Portfilio() {
  return (
    <>
      <Meta />

      <main className="">
        <div className="text-center overflow-hidden">
          <Image src={backGround} alt="background portfolio page" />
        </div>
        <div className="d-flex">
          <div className="user-style">
            <Image src={avatar} alt="hossein hekmati" width={150} />
          </div>
          <div className="mt-3 ml-3">
            <p className="fontHeadPages pb-0 mb-0">
              Visual Design, UI Design, Web Design, Drawing Artist
            </p>
            <p className="textGray pt-0 mt-1">since 2016</p>
          </div>
        </div>
        <PortfolioPageItem />
      </main>
      <Footer />
    </>
  );
}
