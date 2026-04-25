import Link from "next/link";
import style from "./styles.module.css";
export const SideMenu: React.FC = () => {
  return (
    <div className={style.container}>
      <p className={style.title}>体の使い方</p>
      <ul className={style.list}>
        <li className={style.item}>
          <Link href="/docs/kinetics/relationship-between-muscles-and-joints">
            筋肉と関節の関係
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/docs/kinetics/control-from-mouse">
            コントロールはマウスから
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/docs/kinetics/dont-move-finger">指を動かさない</Link>
        </li>
        <li className={style.item}>
          <Link href="/docs/kinetics/center-of-gravity-down">
            重心が低いと安定する
          </Link>
        </li>
      </ul>
      <p className={style.title}>目の使い方</p>
      <ul className={style.list}>
        <li className={style.item}>
          <Link href="/docs/eye/react-with-lightning-fast">
            爆速神経回路で反射しよう！
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/docs/eye/recreate-eye-movements">
            目の動きを手で再現する
          </Link>
        </li>
        <li className={style.item}>
          <Link href="/docs/eye/move-your-eyes-or-not">
            目を動かす動かさない論争
          </Link>
        </li>
      </ul>
      <p className={style.title}>
        <Link href="/docs/coaching">コーチングについて</Link>
      </p>
    </div>
  );
};
