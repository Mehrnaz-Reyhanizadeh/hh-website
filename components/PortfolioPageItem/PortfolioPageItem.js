import Image from "next/image";
import styles from "../../styles/PortfolioPageItem.module.css";
import portfolio1 from "../../styles/images/portfolio1.png";
import portfolioIcon1 from "../../styles/images/portfolio icon 1.svg";
import portfolioIcon2 from "../../styles/images/portfolio icon 2.svg";
import PortfolioItem from "./PortfolioItem";
function PortfolioPageItem() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="container">
          <button
            className={`buttonStyle mt-3 mt-lg-5 mx-1 mx-lg-3 ${styles.portfolioButtonSize} `}
          >
            Preview
          </button>
          <button
            className={` ${styles.buttonDactive} mt-3 mt-lg-5 mx-1 mx-lg-3 ${styles.portfolioButtonSize} `}
          >
            Case Study
          </button>
          <button
            className={` ${styles.buttonDactive} mt-3 mt-lg-5 mx-1 mx-lg-3 ${styles.portfolioButtonSize} `}
          >
            Wireframe
          </button>
        </div>
        <div className="container mt-3">
          <div className="d-flex justify-content-between flex-wrap">
            <PortfolioItem
              src={portfolio1}
              alt="portfolio1"
              icon={portfolioIcon2}
              flag={true}
            />
            <PortfolioItem
              src={portfolio1}
              alt="portfolio1"
              icon={portfolioIcon2}
              flag={true}
            />
            <PortfolioItem icon={portfolioIcon1} />
            <PortfolioItem icon={portfolioIcon2} />
            <PortfolioItem icon={portfolioIcon2} />
            <PortfolioItem icon={portfolioIcon2} />
            <PortfolioItem icon={portfolioIcon1} />
            <PortfolioItem icon={portfolioIcon1} />
            <PortfolioItem icon={portfolioIcon2} />
            <PortfolioItem icon={portfolioIcon2} />
            <PortfolioItem icon={portfolioIcon2} />
            <PortfolioItem icon={portfolioIcon1} />
            <PortfolioItem icon={portfolioIcon2} />
            <PortfolioItem icon={portfolioIcon1} />
            <PortfolioItem icon={portfolioIcon1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioPageItem;
