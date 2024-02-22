import styles from "./Landing.module.css";
import constelation from "../../assets/constellation.svg";
import meditating from "../../assets/meditando-mobile.webp";
import asterisk from "../../assets/red-asterisk.svg";
const Landing = () => {
  return (
    <div className={styles.ContainerLanding}>
      <div className={styles.ContainerTextLanding}>
        <h1>Technical Challenge</h1>
        <p>Developer Full Stack Jr.</p>
      </div>

      <div className={styles.ContainerImgLanding}>
        <img className={styles.ImgAsterisk} src={asterisk} alt="asterisk" />
        <img
          className={styles.ImgConstelation}
          src={constelation}
          alt="constelation"
        />
        <img
          className={styles.ImgMeditating}
          src={meditating}
          alt="meditating"
        />
      </div>
    </div>
  );
};

export default Landing;
