import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled,MdReadMore } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>
            How to use the new version of admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4mins to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ab
            dolore quasi alias eos?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>
            How to use the new version of admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4mins to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ab
            dolore quasi alias eos?
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
