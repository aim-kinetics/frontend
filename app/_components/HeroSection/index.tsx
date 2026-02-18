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
          マウス操作
          <br />
          完全ガイド
        </h1>
        <p className={styles.description}>
          FPSゲームで勝つためのマウステクニックを
          <br />
          基礎から上級まで完全網羅
        </p>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll Down</span>
        <ArrowDownIcon width={24} height={24} className={styles.arrowIcon} />
      </div>
    </section>
  );
};
