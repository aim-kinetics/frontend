import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import style from "@/commons/styles/global.module.css";

const title = "数多あるマウス操作論は触覚に通ずる | AIMの教科書";
const description =
  "指先、親指、手のひらなど、様々なマウス操作の意識に共通する接触点と触覚に注目し、力加減や滑走感を確かめる練習方法を説明します。";
const url = "https://aim-kinetics.com/docs/input/mouse-operation";
const image = {
  url: "https://aim-kinetics.com/image/mouse-operation/cover.jpg",
  width: 960,
  height: 384,
  alt: "手の感覚と脳の関係を考えるための図",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    title,
    description,
    url,
    siteName: "AIMの教科書",
    locale: "ja_JP",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function MouseOperationPage() {
  return (
    <article className={style.container}>
      <h1>数多あるマウス操作論は触覚に通ずる</h1>
      <Image
        src="/image/mouse-operation/cover.jpg"
        alt="手の感覚と脳の関係を考えるための図"
        width={960}
        height={384}
        sizes="(max-width: 767px) 100vw, 960px"
      />
      <p>マウス操作を説明する言葉は、人によって様々です。</p>
      <ul>
        <li>指先でなぞるように動かす</li>
        <li>親指と薬指で挟むように操作する</li>
        <li>手のひらのこぶを意識する</li>
        <li>親指を意識する</li>
      </ul>
      <p>
        持ち方も意識する場所も違いますが、これらにはマウスと手の接触点に注意を向けるという共通点があります。私は、この接点から得られる触覚が、様々な操作イメージをつなぐ手がかりになると考えています。
      </p>
      <h2>インプットとアウトプットを分けて考える</h2>
      <p>
        「指先を意識する」という言葉を、指の筋肉を動かす指示としてだけ受け取ると、握る力を増やしてしまうかもしれません。ここでは、筋肉を動かすアウトプットと、接点から感覚を受け取るインプットを分けて考えてみましょう。
      </p>
      <p>
        画面から得られる視覚情報に加えて、手にはマウスとの接触や圧力、滑りの感覚が伝わります。指先や手のひらへの意識を、こうした情報を受け取るために使うという考え方です。
      </p>
      <h2>皮膚の変化を操作の手がかりにする</h2>
      <p>
        マウスを動かすと、接している皮膚には押される、引かれる、ずれるといった変化が生じます。どこに、どの方向から力がかかっているかを感じ、画面上の動きと照らし合わせてみてください。
      </p>
      <Image
        src="/image/mouse-operation/homunculus.jpg"
        alt="ペンフィールドのホムンクルス：身体各部と脳の対応を表した模式図"
        width={960}
        height={508}
        sizes="(max-width: 767px) 100vw, 960px"
      />
      <p>
        この図はペンフィールドのホムンクルスと呼ばれる模式図です。ここでは手の感覚に目を向けるきっかけとして、実際にマウスを動かしたときの接触の変化を確かめてみましょう。
      </p>
      <h3>皮膚の変形と動きの感覚を調べた研究</h3>
      <p>
        Edin・Johansson（1995）は5人の参加者で、人差し指の一部を局所麻酔し、感覚が残る皮膚の変形を操作しました。関節を実際に動かさなくても、曲げ伸ばしに似た変形を与えると、参加者は指が動いたと感じました。
        <a href="https://pubmed.ncbi.nlm.nih.gov/7473253/">［1］</a>
      </p>
      <p>
        皮膚からの情報が動きの知覚に関わることを示す結果です。ただし、通常のマウス操作で握り込むと同じ錯覚が生じることや、それがAIMの誤差になることまでは確かめられていません。
      </p>
      <h2>強く握る前に、小さな変化を感じる</h2>
      <p>
        すでに大きな圧力がかかっている状態より、余分な力を抜いた状態の方が、動きに伴う小さな変化へ注意を向けやすいのではないかと考えています。「100に1を加えるより、0に1を加える」というイメージです。
      </p>
      <p>
        この数字は測定値ではなく、力加減を考えるためのたとえです。
        <Link href="/docs/input/tactile-input">触覚によるインプット</Link>
        で扱った接触の違いへの意識も手がかりに、マウスを安定して保持できる範囲で握る力を減らしてみてください。
      </p>
      <p>
        指の感覚を局所麻酔で減らした2人の実験では、物体を上下させる際の握力が増えました。一方、荷重の変化を先回りする力のタイミングは残っていました。触覚は力の大きさの調整に重要でも、予測を含む操作全体を触覚だけで説明できるわけではありません。
        <a href="https://pubmed.ncbi.nlm.nih.gov/11556900/">［2］</a>
      </p>
      <p>
        「圧力を0に近づけるほどよい」という関係を示すデータではないため、力を抜く練習でも保持の安定性を確かめます。軽いマウスの苦手さや最適な接触圧については、ここで挙げた研究から結論を出すことはできません。
      </p>
      <h2>握り込む動きと、マウスを動かす動きを区別する</h2>
      <p>
        マウスを動かそうとして指で強く挟むと、皮膚の感触は変わっても、レティクルは動いていないことがあります。接触の変化だけを動きの目安にしていると、さらに力を足してしまう可能性があると考えています。
      </p>
      <p>
        クリックでも同様に、下へ押す力とマウスを移動させる力を区別してみましょう。ボタンを押したあとも押しつけ続けていないか、移動や切り返しで握り直していないかを確認します。
      </p>
      <h2>練習で確かめること</h2>
      <ul>
        <li>安定して保持できる範囲で、手とマウスの接触圧を抑える</li>
        <li>移動や切り返しのたびに、余分な握る力を足していないか確認する</li>
        <li>接触している皮膚が、どちらへ引かれたり押されたりするか感じる</li>
        <li>クリックに必要な力を超えて、ボタンを押しつけ続けない</li>
        <li>マウスソールとマウスパッドの摩擦による滑走感を確かめる</li>
      </ul>
      <h2>意識する場所は、自分の接点から選ぶ</h2>
      <p>
        マウスの重さやパッドとの摩擦が変わると、手に伝わる感触も変わります。軽いマウスに違和感がある場合も、慣れていた感触との差が一因かもしれません。重さだけで良し悪しを決めず、実際の動きと手に返ってくる感覚を比べてみましょう。
      </p>
      <p>
        意識する場所は、マウスに接している皮膚の中から、自分が変化を感じ取りやすい場所を選んで構いません。「指先でなぞる」がつかみにくければ、まず指先で滑走時の抵抗を感じてみてください。接点から情報を受け取り、動きに合った力加減を探すことを大切にしています。
      </p>
      <h2>参考研究</h2>
      <ul>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/7473253/">
            ［1］Edin・Johansson（1995）：Skin strain patterns provide
            kinaesthetic information to the human central nervous system
          </a>
        </li>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/11556900/">
            ［2］The effects of digital anaesthesia on predictive grip force
            adjustments during vertical movements of a grasped object（2001）
          </a>
        </li>
      </ul>
    </article>
  );
}
