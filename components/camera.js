import styles from "../styles/home_picture.module.css";

export default function HomePicture() {
  return (
    <div className={styles.container}>
      <div className={styles.cameraBox}>
        <h3>📷 Cam 1</h3>
        <img src="/images/cam1.jpg" alt="Camera 1" className={styles.cameraFeed} />
      </div>
      <div className={styles.cameraBox}>
        <h3>📷 Cam 2</h3>
        <img src="/images/cam2.jpg" alt="Camera 2" className={styles.cameraFeed} />
      </div>
    </div>
  );
}
