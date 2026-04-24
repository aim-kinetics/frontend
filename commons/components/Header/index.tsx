"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { Bars3Icon } from "@heroicons/react/24/solid";
import mediaStyle from "@/commons/styles/media.module.css";
import { useState } from "react";
export const Header: React.FC = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  return (
    <header className={styles.header}>
      <h1>
        <a href="/" className={styles.title}>
          <Image
            src="/logo-white.svg"
            alt="AIMの教科書ロゴ"
            width={40}
            height={40}
          ></Image>
          AIMの教科書
        </a>
      </h1>
      <nav className={`${styles.menu} ${mediaStyle.pcOnly}`}>
        <a href="/">はじめに</a>
        <a href="docs">ドキュメント</a>
        <a href="/eye-training">コーチング依頼</a>
      </nav>
      <button
        onClick={() => setIsShowNav((prev) => !prev)}
        className={styles.navButton}
      >
        <Bars3Icon width={24} height={24} className={`${mediaStyle.spOnly}`} />
      </button>
      {isShowNav && (
        <nav className={`${styles.spMenu} ${mediaStyle.spOnly}`}>
          <a href="/">はじめに</a>
          <a href="docs">ドキュメント</a>
          <a href="/eye-training">コーチング依頼</a>
        </nav>
      )}
    </header>
  );
};
