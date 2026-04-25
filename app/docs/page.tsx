import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import { Breadcrumb } from "@/commons/components/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIMの教科書 | ドキュメント",
  description:
    "マウスの動かし方や目の使い方など、AIMを学ぶためのドキュメントをまとめています。",
};
export default function RuleKineticsPage() {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.header}>体の使い方</h1>
        <ul>
          <li>
            <Link href="/docs/kinetics/relationship-between-muscles-and-joints">
              筋肉と関節の関係
            </Link>
          </li>
          <li>
            <Link href="/docs/kinetics/control-from-mouse">
              コントロールはマウスから！
            </Link>
          </li>
          <li>
            <Link href="/docs/kinetics/dont-move-finger">
              指先を動かさないで！
            </Link>
          </li>
          <li>
            <Link href="/docs/kinetics/center-of-gravity-down">
              重心が低いと安定する
            </Link>
          </li>
        </ul>
        <h1 className={style.header}>目の使い方</h1>
        <ul>
          <li>
            <Link href="/docs/kinetics/react-with-lightning-fast">
              爆速神経回路で反射しよう！
            </Link>
          </li>
          <li>
            <Link href="/docs/kinetics/recreate-eye-movement">
              目の動きを手で再現する
            </Link>
          </li>
          <li>
            <Link href="/docs/kinetics/move-your-eyes-or-not">
              目を動かす動かさない論争
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
