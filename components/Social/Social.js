import Image from "next/image";
import socialMedia from "../../styles/images/social_media.svg";
import whatsup from "../../styles/images/whatsup.png";
import telegram from "../../styles/images/telegram.png";
import linkdin from "../../styles/images/linkdin.png";
import ball from "../../styles/images/ball.png";
import styles from "../../styles/Social.module.css";

function Social() {
  return (
    <>
      <h5 className={` title1 text-center mt-5 pt-5 d-none d-lg-block`}>
        My Social Media
      </h5>
      <h1 className={` title2 text-center mt-3 d-none d-lg-block`}>
        Be in touch
      </h1>
      <div className="mt-5 text-center d-none d-lg-block">
        <Image src={socialMedia} alt="socialMedia banner" />
        <div className={`text-center ${styles.infoBox} mx-auto`}>
          <div className="mt-3 d-flex ">
            <div className={`${styles.w20} mr-4`}>
              <Image src={whatsup} alt="icon" />
            </div>
            <p className={`w-75 ${styles.fontP} text-left`}>
              +98 917 40 40 50 7
            </p>
          </div>
          <div className="mt-3 d-flex">
            <div className={`${styles.w20} mr-4`}>
              <Image src={telegram} alt="icon" />
            </div>
            <p className={`w-75 ${styles.fontP} text-left`}>@Minson</p>
          </div>
          <div className="mt-3 d-flex">
            <div className={`${styles.w20} mr-4`}>
              <Image src={linkdin} alt="icon" />
            </div>
            <p className={`w-75 ${styles.fontP} text-left`}>Hossein_Hekmati</p>
          </div>
          <div className="mt-3 d-flex">
            <div className={`${styles.w20} mr-4`}>
              <Image src={ball} alt="icon" />
            </div>
            <p className={`w-75 ${styles.fontP} text-left`}>HosseinHK</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Social;

// Special thanks to Mehrnaz Reyhanizadeh for creating my Website
