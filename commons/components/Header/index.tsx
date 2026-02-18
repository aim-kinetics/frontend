import Image from "next/image";
import styles from "./styles.module.css";
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Image
          src="/logo-white.svg"
          alt="AIMの教科書ロゴ"
          width={40}
          height={40}
        ></Image>
        AIMの教科書
      </h1>
      <nav className={styles.menu}>
        <a href="/">はじめに</a>
        <a href="/eye-training">目の使い方</a>
        <a href="/body-training">体の使い方</a>
        <a href="/mouse-control">マウスコントロール</a>
      </nav>
    </header>
  );
};
