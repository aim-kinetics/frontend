import { createPageMetadata } from "@/commons/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import style from "@/commons/styles/global.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "触覚によるインプット | AIMの教科書",
  description:
    "手のひらや指先の接触、滑り、圧力を手がかりに、マウス操作とクリックの力加減を調整する練習方法を説明します。",
  path: "/docs/input/tactile-input",
  image: "/image/tactile-input/cover.jpg",
});

export default function TactileInputPage() {
  return (
    <article className={style.container}>
      <h1>触覚によるインプット</h1>
      <h2>触覚を使ってマウスと掌をリンクする</h2>
      <Image
        src="/image/tactile-input/cover.jpg"
        alt="手のひらと指につながる神経のイメージ"
        width={887}
        height={355}
        sizes="(max-width: 767px) 100vw, 887px"
      />
      <p>
        マウスの動きをレティクルへ伝えるとき、手とマウスの接点になるのが皮膚です。手のひらや指先に伝わる接触、滑り、圧力に意識を向け、力加減を調整する手がかりとして使ってみましょう。
      </p>
      <h2>予測と触覚のフィードバック</h2>
      <p>
        操作は「このくらい動かそう」という予測と、「実際にどう動いたか」という感覚のやり取りとして考えられます。動かす前の見込みがフィードフォワード、接触や滑り、圧力から得られる情報がフィードバックです。
      </p>
      <p>
        強く握ることだけに意識を向けず、マウスを安定して保持できる力で触れてみてください。動き始めや切り返しで、皮膚にかかる圧力がどう変化するかを確かめます。
      </p>
      <h3>触覚と力加減を調べた研究</h3>
      <p>
        Westling・Johansson（1984）は、親指と人差し指で物体を持ち上げる実験で、重さや表面の摩擦に応じて握る力が調整されることを示しました。指を局所麻酔した条件との比較も、指からの感覚情報が摩擦に合わせた調整に関わることを支持しています。
        <a href="https://pubmed.ncbi.nlm.nih.gov/6705863/">［1］</a>
      </p>
      <p>
        別の精密把持の実験では、小さな滑りの発生から約60〜80ms後に力の調整が現れました。これは実験中の自動的な調整の時間であり、意識的に触覚へ集中したときの反応速度や、マウスの入力遅延を示す数値ではありません。
        <a href="https://pubmed.ncbi.nlm.nih.gov/6499981/">［2］</a>
      </p>
      <p>
        これらは「触覚が力加減に関わる」という説明の根拠です。小指の接触を減らす方法や、グリップテープによる側抑制、AIMの向上までを検証したものではありません。
      </p>
      <h2>手のひら側の接触に注目する</h2>
      <p>
        <Link href="/docs/output/neural-output">神経から見るアウトプット</Link>
        では、手を親指側と小指側に分けて捉えました。ここでは、正中神経に関わる親指から薬指の一部の感覚を、操作に意識を向ける手がかりにします。実際に触れる場所は持ち方によって変わるので、自分の接点を確認しましょう。
      </p>
      <h2>触れている場所の違いを感じる</h2>
      <p>
        接触の輪郭や違いに着目する発想として、側抑制を手がかりに考えています。マウス操作では、次のような感触の違いに注目してみてください。
      </p>
      <ul>
        <li>マウスに触れている場所と、触れていない場所</li>
        <li>グリップテープのある場所と、ない場所</li>
        <li>マウスの形によって生まれる指ごとの圧力の違い</li>
        <li>アームカバーで覆われた場所と、直接触れている場所</li>
      </ul>
      <p>
        こうした違いを手がかりにすると、マウスとの接点へ意識を向けやすくなるのではないかと考えています。接触の違いがそのまま側抑制やAIMの向上につながると断定するものではなく、感覚を確かめるための練習上の仮説です。
      </p>
      <h2>クリックも接触圧を感じながら行う</h2>
      <p>
        <Link href="/docs/output/muscle-output">筋肉から見るアウトプット</Link>
        で考えた指の使い方に、触覚への意識を加えます。クリックするときも、ボタンを押す指の皮膚にどのくらい圧力がかかるかを感じ、押したあとに余分な力が残っていないか確認してみましょう。
      </p>
      <h2>意識を向ける接点を絞る</h2>
      <p>
        私は、手のひら側の接点に意識を集めることが、マウスを扱う感覚をつかむ助けになると考えています。小指側の接触を減らす方法も試せますが、保持が不安定になるほど離す必要はありません。神経一本だけで操作するという意味ではなく、注意を向ける場所を絞るイメージです。
      </p>
      <h2>練習で意識すること</h2>
      <ul>
        <li>親指から薬指の手のひら側で、マウスとの接触を繊細に感じる</li>
        <li>移動やクリックの際に、皮膚へかかる圧力の変化を確かめる</li>
        <li>小指側の接触を変え、感触と保持の安定性を比べる</li>
      </ul>
      <p>
        持ち方を一律に決めるのではなく、自分が接触を感じ取りやすく、余分な力を使わずに操作できる状態を探してみてください。
      </p>
      <h2>参考研究</h2>
      <ul>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/6705863/">
            ［1］Westling・Johansson（1984）：Factors influencing the force
            control during precision grip
          </a>
        </li>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/6499981/">
            ［2］Johansson・Westling（1984）：Roles of glabrous skin receptors
            and sensorimotor memory in automatic control of precision grip when
            lifting rougher or more slippery objects
          </a>
        </li>
      </ul>
    </article>
  );
}
