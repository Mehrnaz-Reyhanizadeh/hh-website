// import styles from "../../styles/mySkills.module.css";

import InterestsDetails from "./InterestsDetails";
function InterestsCol({ data }) {
  const { mainTitle, text, imgInfoOne, imgInfoTwo, imgInfoThree } = data;
  const {
    srcImage: src1,
    fTitle: fTitle1,
    sTitle: sTitle1,
    alt: alt1,
  } = imgInfoOne;
  const {
    srcImage: src2,
    fTitle: fTitle2,
    sTitle: sTitle2,
    alt: alt2,
  } = imgInfoTwo;
  const {
    srcImage: src3,
    fTitle: fTitle3,
    sTitle: sTitle3,
    alt: alt3,
  } = imgInfoThree;
  return (
    <>
      <h4 className="text-center mb-2">{mainTitle}</h4>
      <p className="text-center textGray mt-4 mb-5 px-4 h-25">{text}</p>
      <div className="d-flex justify-content-around">
        <InterestsDetails
          data={{
            imageSrc: src1,
            firstTitle: fTitle1,
            secendTitle: sTitle1,
            imageAlt: alt1,
            width: 110,
          }}
        />
        <InterestsDetails
          data={{
            imageSrc: src2,
            firstTitle: fTitle2,
            secendTitle: sTitle2,
            imageAlt: alt2,
            width: 110,
          }}
        />
        <InterestsDetails
          data={{
            imageSrc: src3,
            firstTitle: fTitle3,
            secendTitle: sTitle3,
            imageAlt: alt3,
            width: 110,
          }}
        />
      </div>
    </>
  );
}

export default InterestsCol;
