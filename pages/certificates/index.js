import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Meta from "@/components/Meta";
import backGround from "../../styles/images/background.svg";
import avatar from "../../styles/images/avatar.png";
import iconCertificate from "../../styles/images/icon certificate.svg";
import certificate1 from "../../styles/images/certificate1.png";
import certificate2 from "../../styles/images/certificate2.png";
import certificate3 from "../../styles/images/certificate3.png";
import certificate4 from "../../styles/images/certificate4.png";
import Certificate from "@/components/Certificate/Certificate";

export default function Certificates() {
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
            <p className="font-weight-bold pb-0 mb-0">
              Visual Design, UI Design, Web Design, Drawing Artist
            </p>
            <p className="textGray pt-0 mt-1">since 2016</p>
          </div>
        </div>
        <h5 className={`title1 text-center mt-5 pt-5`}>Certificates</h5>
        <h1 className={`title2 text-center mt-3`}>My Certificates</h1>
        <div className="d-flex flex-lg-row flex-column flex-wrap mx-5 mt-3 justify-content-around">
          <Certificate
            src={certificate1}
            alt="certificate Blender"
            subject={"3D Design (Blender)"}
            name={"Amanj Academy"}
          />
          <Certificate
            src={certificate2}
            alt="certificate Foundation of UX Design"
            subject={"Foundation of UX Design"}
            name={"Google"}
          />
          <Certificate
            src={certificate3}
            alt="certificate Wordpress"
            subject={"Wordpress (Advanced)"}
            name={"Technical and Vocational University"}
          />
          <Certificate
            src={certificate4}
            alt="certificate Responsive Design with Grids"
            subject={"Responsive Design with Grids"}
            name={"Udemy"}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
