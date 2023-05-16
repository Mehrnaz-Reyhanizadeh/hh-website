import Image from "next/image";
import styles from "../../styles/PortfolioPageItem.module.css";
// import portfolio1 from "../../styles/images/portfolio1.png";
// import portfolioIcon1 from "../../styles/images/portfolio icon 1.svg";
// import portfolioIcon2 from "../../styles/images/portfolio icon 2.svg";
function PortfolioItem({ src, alt, icon, flag }) {
  return (
    <>
      <div className={`${styles.portfolioStyleContainer}`}>
        {flag === true && (
          <Image src={src} alt={alt} className={`${styles.portfolioStyle}`} />
        )}
        <div className={`${styles.portfolioIcon}`}>
          <Image src={icon} alt="icon" />
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
