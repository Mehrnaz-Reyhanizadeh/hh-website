// import styles from "../../styles/mySkills.module.css";
import styles from "../../styles/Interests.module.css";
import blenderOne from "../../styles/images/blender_one.png";
import blenderTwo from "../../styles/images/blender_two.png";
import blenderThree from "../../styles/images/blender_three.png";
import bookOne from "../../styles/images/bookOne.png";
import bookTwo from "../../styles/images/bookTwo.png";
import bookThree from "../../styles/images/bookThree.png";
import epicstore from "../../styles/images/epicstore.svg";
import minecraft from "../../styles/images/minecraft.svg";
import hobbies1 from "../../styles/images/hobbies1.png";
import steam from "../../styles/images/steam.svg";
import imgProcessing from "../../styles/images/Screenshot img processing.svg";
import InterestsCol from "./InterestsCol";
import InterestsDetails from "./InterestsDetails";
import Image from "next/image";
function Interests() {
  return (
    <>
      <h5 className={` title1 text-lg-center ml-3 mt-5 pt-1`}>Interests</h5>
      <h1 className={` title2 text-lg-center ml-3 mt-3`}>Hobbies</h1>
      <div
        className={`d-none d-lg-block container-fluid px-5 ${styles.heightContainerInterests} mt-5 `}
      >
        <div className="row  justify-content-between ">
          <div className="col-lg-5">
            <InterestsCol
              data={{
                mainTitle: "3D Design",
                text: `In the first place, I started to learn Blender to present my works
              better (like a 3D phone in which every party is popping out of its
              screen) but after a while, I enjoyed creating some cool
              inspirational models.`,
                imgInfoOne: {
                  srcImage: blenderOne,
                  fTitle: "",
                  sTitle: "",
                  alt: "blender example",
                },
                imgInfoTwo: {
                  srcImage: blenderTwo,
                  fTitle: "",
                  sTitle: "",
                  alt: "blender example",
                },
                imgInfoThree: {
                  srcImage: blenderThree,
                  fTitle: "",
                  sTitle: "",
                  alt: "blender example",
                },
              }}
            />
          </div>
          <div className="col-lg-5">
            <InterestsCol
              data={{
                mainTitle: "Reading Books",
                text: `rarely read anything except about business, psychology, or UX.
              some of my favorite books are:`,
                imgInfoOne: {
                  srcImage: bookOne,
                  fTitle: "LEAN UX",
                  sTitle: "eff gothelf",
                  alt: "book cover LEAN UX",
                },
                imgInfoTwo: {
                  srcImage: bookTwo,
                  fTitle: "UX Research",
                  sTitle: "Brad Nunnally",
                  alt: "book cover UX Research",
                },
                imgInfoThree: {
                  srcImage: bookThree,
                  fTitle: "DIE EMPTY",
                  sTitle: "Brad Nunnally",
                  alt: "book cover DIE EMPTY",
                },
              }}
            />
          </div>
        </div>
        <div className="row  justify-content-between mt-5 pt-5">
          <div className="col-lg-5">
            <h4 className="text-center mb-2">Programming</h4>
            <p className="text-center textGray mt-4 mb-5 px-1 h-25">
              I’m a computer nerd so it’s normal for someone like me to at least
              try coding once. I learned Python when I was at university and
              enjoyed every second of it! most scripts I’ve written were in
              fields of Data Mining, Natural language Processing
            </p>
            <div className="d-flex justify-content-between">
              <InterestsDetails
                data={{
                  imageSrc: imgProcessing,
                  width: 500,
                  imageAlt: "image processing",
                }}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <InterestsCol
              data={{
                mainTitle: "Playing Video Games",
                text: `rarely read anything except about business, psychology, or UX. some of my favorite books are:`,
                imgInfoOne: {
                  srcImage: epicstore,
                  fTitle: "Epic Store",
                  sTitle: "",
                  alt: "Epic Store logo",
                },
                imgInfoTwo: {
                  srcImage: steam,
                  fTitle: "Steam",
                  sTitle: "",
                  alt: "steam logo",
                },
                imgInfoThree: {
                  srcImage: minecraft,
                  fTitle: "Minecraft",
                  sTitle: "",
                  alt: "minecraft logo",
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column d-lg-none mx-3">
        <div
          className={`${styles.interestCardResponsive} d-flex justify-content-between mx-1`}
        >
          <div>
            <h4 className=" mb-1">3D Design</h4>
            <p className=" textGray mt-4 mb-2 mr-2 px-1 h-25">
              In the first place, I started to learn Blender to present my works
              better (like a 3D phone in which every party is popping out of its
              screen) but after a while, I enjoyed creating some cool
              inspirational models.
            </p>
          </div>
          <div>
            <Image src={hobbies1} alt="3d design icon" width={130} />
          </div>
        </div>
        <div
          className={`${styles.interestCardResponsive} d-flex justify-content-between mx-1`}
        >
          <div>
            <h4 className=" mb-1">Reading Books</h4>
            <p className=" textGray mt-4 mb-2 mr-2 px-1 h-25">
              I rarely read anything except about business, psychology, or UX.
            </p>
          </div>
          <div>
            <Image src={hobbies1} alt="3d design icon" width={130} />
          </div>
        </div>
        <div
          className={`${styles.interestCardResponsive} d-flex justify-content-between mx-1`}
        >
          <div>
            <h4 className=" mb-1">Programming</h4>
            <p className=" textGray mt-4 mb-2 mr-2 px-1 h-25">
              I’m a computer nerd so it’s normal for someone like me to at least
              try coding once. I learned Python when I was at university and
              enjoyed every second of it! most scripts I’ve written were in
              fields of Data Mining, Natural language Processing
            </p>
          </div>
          <div>
            <Image src={hobbies1} alt="3d design icon" width={130} />
          </div>
        </div>
        <div
          className={`${styles.interestCardResponsive} d-flex justify-content-between mx-1`}
        >
          <div>
            <h4 className=" mb-1">Playing Video Games</h4>
            <p className=" textGray mt-4 mb-2 mr-2 px-1 h-25">
              Playing video games I love playing video games, mostly RPG and
              story-based adventures.
            </p>
          </div>
          <div>
            <Image src={hobbies1} alt="3d design icon" width={130} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Interests;
