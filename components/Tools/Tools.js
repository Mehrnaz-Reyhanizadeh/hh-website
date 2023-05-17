import Image from "next/image";
import myWork from "../../styles/images/My_work.png";
import illustrator from "../../styles/images/illustrator.svg";
import figma from "../../styles/images/figma.svg";
import photoshop from "../../styles/images/photoshop.svg";
import xd from "../../styles/images/xd.svg";
import styles from "../../styles/Tools.module.css";
function Tools() {
  return (
    <div className="container-fluid">
      <div className="row d-flex  justify-content-between m-lg-5">
        <div className="col-12 col-lg-6 text-left">
          <h5 className={` ml-1 title1 mt-5`}>Tools</h5>
          <h1 className={` ml-1 pb-3 title2 `}>My Expertise</h1>

          <div
            className={`${styles.mtToolsText} ${styles.cardResponsive} w-lg-75`}
          >
            <div>
              <Image src={illustrator} alt="illustrator logo" />
              <span className="font-weight-bold ml-3">Adobe Illustrator</span>
            </div>
            <p className={`${styles.toolsText} mt-2 ml-5`}>
              I have 5 years of experience working with Adobe Illustrator, I use
              this app in almost all of my projects, it’s really handy.
            </p>
          </div>
          <div
            className={`${styles.mtToolsText} ${styles.cardResponsive} w-lg-75`}
          >
            <div>
              <Image src={photoshop} alt="photoshop logo" />
              <span className="font-weight-bold ml-3">Adobe photoshop</span>
            </div>
            <p className={`${styles.toolsText} mt-2 ml-5`}>
              I have 7 years of experience working with Adobe Photoshop, It was
              my primary app when I was a graphic designer and now, it’s more
              like a tool for me to edit and polish textures and resources for
              my projects.
            </p>
          </div>
          <div
            className={`${styles.mtToolsText} ${styles.cardResponsive} w-lg-75`}
          >
            <div>
              <Image src={xd} alt="xd logo" />
              <span className="font-weight-bold ml-3">Adobe Xd</span>
            </div>
            <p className={`${styles.toolsText} mt-2 ml-5`}>
              have 3 years of experience working with Adobe XD, I was
              overwhelmed with joy when I figured out that there’s such an app
              like this, I’ve used this app for UI projects officially.
            </p>
          </div>
          <div
            className={`${styles.mtToolsText} ${styles.cardResponsive} w-lg-75`}
          >
            <div>
              <Image src={figma} alt="figma logo" />
              <span className="font-weight-bold ml-3">Figma</span>
            </div>
            <p className={`${styles.toolsText} mt-2 ml-5`}>
              I have 2 years of experience working with Figma I came to this app
              when I saw some flaws in Xd, it has a far better interface plus
              some cool features and more of that, The head of design or the
              employer can oversee the project so easily.
            </p>
          </div>
        </div>
        <div className="d-none d-lg-flex col-lg-6 text-center mt-5">
          <Image src={myWork} alt="work demo image" width={600} />
        </div>
      </div>
    </div>
  );
}

export default Tools;
