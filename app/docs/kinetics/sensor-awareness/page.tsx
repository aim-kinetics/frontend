import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import { Breadcrumb } from "@/commons/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIMの教科書 | センサーの意識って結局なに？",
  description:
    "マウスの動かし方について、手・腕・肩の順に動かす方がよいと考えられる。また、手首は前腕から、腕は肩甲骨から動かすことが重要であることを解説しています。",
};
export default function RuleAbdominalBreathingPage() {
  return (
    <>
      <div className={style.container}>
        <h1>センサーの意識って結局なに？</h1>
        <p>
          筆者本人はマウス上に支点を作るための動作を誰にでもわかりやい単語で説明した際に「センサーを意識して動かす」という表現になったのではないかと思っています。
        </p>
        <p>
          実際、マウスのセンサーはざっくりいうと正円の中心を軸に円周に沿って動かすと真横に動きます
        </p>
        <p>
          左右にマウスを振ったりした際にだんだんマウスが下がってきたり逆に上がっていくのは動かす方向によって軸や円の半径が異なるからです。
        </p>
        <p>
          この時、大事なのはマウスの左右に対して真ん中の位置を把握することです。
        </p>
        <p>
          上下のセンサー位置は感度の差のみなので固定されていればどこあっても問題ありません。
        </p>
        <p>
          ただし、センサーより上に支点を置くことは左右の動きが一時的に反転してしまうためおすすめしません。
        </p>
        <p>
          センサーの位置を意識するというより手とマウスの位置を常に固定することを意識して操作するとより直感的なAIMができるようになるでしょう。
        </p>
      </div>
    </>
  );
}
