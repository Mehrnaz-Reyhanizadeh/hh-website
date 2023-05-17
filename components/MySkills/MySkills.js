import styles from "../../styles/mySkills.module.css";
import ProgressBar from "./ProgressBar";
function MySkills() {
  return (
    <>
      <h5 className={`title1 text-lg-center ml-3 mt-5 pt-1`}>My Skills</h5>
      <h1 className={`title2 text-lg-center ml-3 mt-3`}>Skills and Language</h1>
      <div className="container w-lg-75">
        <div className="row d-flex p-lg-5 justify-content-around m-lg-5 px-2  mx-auto">
          <div
            className={`${styles.cardSkills} col-lg-4 p-3 pl-3 text-left  mt-3`}
          >
            <h5 className={`${styles.skillTitle1} d-none d-lg-block mb-4`}>
              Tools
            </h5>
            <ProgressBar data={{ title: "Photoshop", percent: 80 }} />
            <ProgressBar data={{ title: "Illustrator", percent: 90 }} />
            <ProgressBar data={{ title: "XD", percent: 60 }} />
            <ProgressBar data={{ title: "Figma", percent: 70 }} />
            <ProgressBar data={{ title: "Blender", percent: 40 }} />
          </div>
          <div
            className={`${styles.cardSkills} col-lg-4 p-3 pl-3 text-left mt-3`}
          >
            <h5 className={`${styles.skillTitle1}d-none d-lg-block mb-4`}>
              Language
            </h5>
            <ProgressBar data={{ title: "Persian", percent: 80 }} />
            <ProgressBar data={{ title: "English", percent: 90 }} />
            <ProgressBar data={{ title: "French", percent: 60 }} />
            <ProgressBar data={{ title: "German", percent: 70 }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkills;
