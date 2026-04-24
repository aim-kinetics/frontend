import {
  BoltIcon,
  CursorArrowRaysIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import style from "./styles.module.css";
import Image from "next/image";
export const MenuSection: React.FC = () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>AIM理論基礎</h2>
      <ul className={style.list}>
        <li className={style.listItem}>
          <p className={style.number}>1</p>
          <Link href="/docs/kinetics" className={style.listItemLink}>
            マウスは手首、腕、肩の順に動かす
          </Link>
        </li>
        <li className={style.listItem}>
          <p className={style.number}>2</p>
          <Link href="/docs/finger" className={style.listItemLink}>
            指の意識について
          </Link>
        </li>
        <li className={style.listItem}>
          <p className={style.number}>3</p>
          <Link href="/docs/eye" className={style.listItemLink}>
            目は動かさない・集中しない
          </Link>
        </li>
        <li className={style.listItem}>
          <p className={style.number}>4</p>
          <Link href="/docs/abdominal-breathing" className={style.listItemLink}>
            ゆっくり呼吸をしよう
          </Link>
        </li>
      </ul>
    </section>
  );
};
