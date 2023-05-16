import Image from "next/image";
import me from "../../styles/images/me.png";
import bannerSm from "../../styles/images/banner-sm.png";
import dribbble from "../../styles/images/dribbble-color-svgrepo-com 1.svg";
import telegram from "../../styles/images/telegram-communication-chat-interaction-network-connection-svgrepo-com 1.svg";
import whatsapp from "../../styles/images/whatsapp-color-svgrepo-com 1.svg";
import styles from "../../styles/Banner.module.css";
function Banner() {
  return (
    <>
      <div className="row  d-lg-flex flex-column flex-lg-row p-1 p-lg-5 justify-content-between m-1 m-lg-5 w-100 w-lg-75 mx-auto">
        <div className="col-lg-6 text-left order-2 order-lg-0">
          <h1 className={`${styles.bannerTitle} mt-5 text-center text-lg-left`}>
            I’m Hossein
          </h1>
          <p className={`${styles.bannerText} text-center text-lg-left`}>
            UX/UI Design, Web Design, Drawing Artist
          </p>
          <p
            className={`${styles.bannerText} mt-5 w-75 mx-auto mx-lg-1 text-center text-lg-left`}
          >
            I’m a digital designer with a background in consumer psychology and
            business. I love listening to people’s stories, solving problems,
            facing new challenges and creating beautiful things that matter.
          </p>
          <button
            className={`${styles.bannerButtonSize} buttonStyle d-block mt-4 mx-auto mx-lg-1`}
          >
            Download My Resume
          </button>
        </div>
        <div className="col-lg-6 text-center mx-auto order-1 order-lg-1">
          <Image
            className="d-none d-lg-block"
            src={me}
            alt="hossein hekmati"
            width={500}
          />
          <div className="text-center mt-4 d-block d-lg-none">
            <Image
              src={bannerSm}
              alt="hossein hekmati banner small"
              className={styles.bannerSm}
            />
          </div>
          <div
            className={`d-flex justify-content-between mx-4 d-block d-lg-none ${styles.contactBannerStyleContainer}`}
          >
            <div className={styles.contactBannerStyle}>
              <p className={styles.contactBannertitle1}>
                <Image src={dribbble} alt="dribbble icon" /> Dribbble
              </p>
              <p className={styles.contactBannertitle2}>Follow me</p>
            </div>
            <div className={styles.contactBannerStyle}>
              <p className={styles.contactBannertitle1}>
                <Image src={telegram} alt="dribbble icon" /> Linkedin
              </p>
              <p className={styles.contactBannertitle2}>See my work</p>
            </div>
            <div className={styles.contactBannerStyle}>
              <p className={styles.contactBannertitle1}>
                <Image src={whatsapp} alt="dribbble icon" /> Whatsapp
              </p>
              <p className={styles.contactBannertitle2}>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
