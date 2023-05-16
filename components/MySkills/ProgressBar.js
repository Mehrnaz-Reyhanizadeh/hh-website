import styles from "../../styles/mySkills.module.css";
function ProgressBar({ data }) {
  return (
    <>
      <div className="d-flex progressInside justify-content-between">
        <p className="w-50">{data.title}</p>
        <div className={`${styles.progressB} progress w-50 mr-3  mt-1`}>
          <div
            className={`${styles.progressInside} progress-bar`}
            role="progressbar"
            style={{ width: data.percent + "%" }}
            aria-valuenow={`${data.percent}`}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
