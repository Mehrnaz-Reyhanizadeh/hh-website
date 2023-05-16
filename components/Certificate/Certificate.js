import Image from "next/image";
import iconCertificate from "../../styles/images/icon certificate.svg";
import styles from "../../styles/Certificate.module.css";

function Certificate({ src, alt, subject, name }) {
  return (
    <div className={styles.CertificateContainer}>
      <Image
        src={src}
        width={600}
        alt={alt}
        className={`${styles.imageCertificateStyle}`}
      />
      <p className={styles.subject}>
        <Image src={iconCertificate} alt="icon" width={35} />
        <span className="ml-3">{subject}</span>
      </p>
      <p className={styles.nameAcademi}>{name}</p>
    </div>
  );
}

export default Certificate;
