"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { Bars3Icon } from "@heroicons/react/24/solid";
import mediaStyle from "@/commons/styles/media.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header: React.FC = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setIsShowNav(false);
  }, [path]);
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/" className={styles.title}>
          <Image
            src="/logo-white.svg"
            alt="AIMの教科書ロゴ"
            width={40}
            height={40}
          ></Image>
          AIMの教科書
        </Link>
      </h1>
      <nav className={`${styles.menu} ${mediaStyle.pcOnly}`}>
        <Link href="/">はじめに</Link>
        <Link href="/docs">ドキュメント</Link>
        <Link href="/eye-training">コーチング依頼</Link>
      </nav>
      <button
        onClick={() => setIsShowNav((prev) => !prev)}
        className={`${mediaStyle.spOnly} ${styles.navButton}`}
      >
        <Bars3Icon width={24} height={24} className={`${mediaStyle.spOnly}`} />
      </button>
      {isShowNav && (
        <nav className={`${styles.spMenu} ${mediaStyle.spOnly}`}>
          <Link href="/">はじめに</Link>
          <Link href="/docs">ドキュメント</Link>
          <Link href="/docs/coaching">コーチング依頼</Link>
        </nav>
      )}
    </header>
  );
};
