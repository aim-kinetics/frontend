import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import { Breadcrumb } from "@/commons/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIMの教科書 | 骨盤周りに上半身の体重を任せる",
  description:
    "ただ脱力するだけではなく脱力した分の重さを支える箇所をマウスに乗せ、それを一定に保つことが安定したAIMの秘訣だと説明しています。",
};
export default function RuleKineticsPage() {
  return (
    <>
      <div className={style.container}>
        <h1>骨盤周りに上半身の体重を任せる</h1>
        <p>先に結論</p>
        <ul>
          <li>上半身の筋肉を緩めるために骨盤周りで支えるイメージでAIMする</li>
          <li>体重を支えるのはマウスと骨盤周り</li>
        </ul>
        <h2>上半身の筋肉を緩めるために骨盤周りで支えるイメージでAIMする</h2>
        <p>人間は意識的に筋肉を緩めるのは難しいです。</p>
        <p>
          もし緩めたいなら緩めることを意識するのではなく緩めた結果を意識するようにしましょう。
        </p>
        <p>
          これでも難しい人はいると思います。そういう人は前段階としてマウスが動く方向（腕が動く方向）と逆に背骨を曲げるイメージでAIMすると強制的に骨盤で上半身を支えることができるかと思います。
        </p>
        <h2>体重を支えるのはマウスと骨盤周り</h2>
        <p>ここで体重を支える箇所を洗い出すと</p>
        <ul>
          <li>マウス</li>
          <li>骨盤周り</li>
        </ul>
        <p>になると思います</p>
        <p>
          これがきちんとできると骨盤とマウスが一つにつながったイメージがつかめるようになると思います。
        </p>
        <p>そうなるとより安定したAIMができるようになるでしょう！！！！</p>
        <p>
          緊張や実戦でAIMが安定しないと悩んでいる人はこのイメージができてるかどうかを確認しながら練習してみてください。
        </p>
      </div>
    </>
  );
}
