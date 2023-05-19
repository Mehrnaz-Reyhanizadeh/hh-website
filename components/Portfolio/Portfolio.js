import Image from "next/image";
import React from "react";
import styles from "../../styles/Portfolio.module.css";
import portfolio1 from "../../styles/images/portfolio1.png";
import portfolioIcon1 from "../../styles/images/portfolio icon 1.svg";
import portfolioIcon2 from "../../styles/images/portfolio icon 2.svg";
import MyVerticallyCenteredModal from "../Modal/MyVerticallyCenteredModal";
function Portfolio() {
  const [modalShow, setModalShow] = React.useState(false);
  const [src, setSrc] = React.useState("");
  const [alt, setAlt] = React.useState("");
  const imageOnclick = (e) => {
    setModalShow(true);
    setSrc(e.target.src);
    setAlt(e.target.alt);
  };

  return (
    <>
      <h5 className={` title1 text-lg-center ml-3 mt-5 pt-1 mt-space`}>
        Portfolio
      </h5>
      <h1 className={` title2 text-lg-center ml-3 mt-3`}>My Portfolio</h1>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        src={src}
        alt={alt}
      />
      <div className="d-flex flex-column">
        <button
          className={`d-block buttonStyle mt-3 mt-lg-5 mx-auto ${styles.portfolioButtonSize} order-2 order-lg-0 `}
        >
          Preview
        </button>
        <div className="container px-lg-0 mt-3">
          <div className="d-flex justify-content-between flex-wrap">
            <div className={`${styles.portfolioStyleContainer}`}>
              <Image
                src={portfolio1}
                alt="portfolio1"
                className={`${styles.portfolioStyle}`}
                variant="primary"
                onClick={imageOnclick}
              />
              <div className={`${styles.portfolioIcon}`}>
                <Image src={portfolioIcon2} alt="icon" />
              </div>
            </div>
            <div className={`${styles.portfolioStyleContainer}`}>
              <div className={`${styles.portfolioIcon}`}>
                <Image src={portfolioIcon1} alt="icon" />
              </div>
            </div>
            <div className={`${styles.portfolioStyleContainer}`}>
              <div className={`${styles.portfolioIcon}`}>
                <Image src={portfolioIcon2} alt="icon" />
              </div>
            </div>
            <div className={`${styles.portfolioStyleContainer}`}>
              <div className={`${styles.portfolioIcon}`}>
                <Image src={portfolioIcon2} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
