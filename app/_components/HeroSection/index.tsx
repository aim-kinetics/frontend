import Image from "next/image";
import styles from "./styles.module.css";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.heroImage}
        src="/fps-monitor.jpg"
        alt="Hero Image"
        width={1527}
        height={1211}
      />
      <div className={styles.overlay}>
        <p className={styles.subTitle}>AIM Technical Guide</p>
        <h1 className={styles.title}>
          知ることで強くなる
          <br />
        </h1>
        <p className={styles.description}>
          知ることは誰でもできる
          <br />
          知ることで強くなれる
        </p>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll Down</span>
        <ArrowDownIcon width={24} height={24} className={styles.arrowIcon} />
      </div>
    </section>
  );
};
