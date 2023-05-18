import Image from "next/image";
import styles from "../../styles/PortfolioPageItem.module.css";

function PortfolioItem({ src, alt, icon, flag, onClick, variant }) {
  return (
    <>
      <div className={`${styles.portfolioStyleContainer}`}>
        {flag === true && (
          <Image
            src={src}
            alt={alt}
            className={`${styles.portfolioStyle}`}
            variant={variant}
            onClick={onClick}
          />
        )}
        <div className={`${styles.portfolioIcon}`}>
          <Image src={icon} alt="icon" />
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
