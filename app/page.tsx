import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "../commons/components/Header";
import { HeroSection } from "./_components/HeroSection";
import { WhyLearning } from "./_components/WhyLearning";
import { MenuSection } from "./_components/MenuSection";
import { Menu } from "radix-ui/internal";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <WhyLearning />
      <MenuSection />
    </div>
  );
}
