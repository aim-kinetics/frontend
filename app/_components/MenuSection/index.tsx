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
          <div className={style.listItemHeader}>
            <p className={style.number}>1</p>
            <Link href="/docs/kinetics" className={style.listItemLink}>
              体の使い方
            </Link>
          </div>
          <ul className={style.subList}>
            <li className={style.subListItem}>
              <p className={style.subNumber}>1.</p>
              <Link
                href="/docs/kinetics/control-from-mouse"
                className={style.subListItemLink}
              >
                コントロールはマウスから！
              </Link>
            </li>
            <li className={style.subListItem}>
              <p className={style.subNumber}>2.</p>
              <Link
                href="/docs/kinetics/dont-move-finger"
                className={style.subListItemLink}
              >
                指先を動かさないで！
              </Link>
            </li>
            <li className={style.subListItem}>
              <p className={style.subNumber}>3.</p>
              <Link
                href="/docs/kinetics/center-of-gravity-down"
                className={style.subListItemLink}
              >
                重心が低いと安定する
              </Link>
            </li>
            <li className={style.subListItem}>
              <p className={style.subNumber}>4.</p>
              <Link
                href="/docs/kinetics/sensor-awareness"
                className={style.subListItemLink}
              >
                センサーの意識って結局なに？
              </Link>
            </li>
          </ul>
        </li>
        <li className={style.listItem}>
          <div className={style.listItemHeader}>
            <p className={style.number}>2</p>
            <Link href="/docs/finger" className={style.listItemLink}>
              目の使い方
            </Link>
          </div>
          <ul className={style.subList}>
            <li className={style.subListItem}>
              <p className={style.subNumber}>1.</p>
              <Link
                href="/docs/eye/react-with-lightning-fast"
                className={style.subListItemLink}
              >
                爆速神経回路で反射しよう！
              </Link>
            </li>
            <li className={style.subListItem}>
              <p className={style.subNumber}>2.</p>
              <Link
                href="/docs/eye/recreate-eye-movements"
                className={style.subListItemLink}
              >
                目の動きを手で再現する
              </Link>
            </li>
            <li className={style.subListItem}>
              <p className={style.subNumber}>3.</p>
              <Link
                href="/docs/eye/move-your-eyes-or-not"
                className={style.subListItemLink}
              >
                目を動かす動かさない論争
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
