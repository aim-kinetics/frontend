import { createPageMetadata } from "@/commons/metadata";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import styles from "./styles.module.css";

export const metadata = createPageMetadata({
  title: "筋肉から見るアウトプット | AIMの教科書",
  description:
    "指の独立性と筋活動の研究をもとに、マウスを保持する指と手首の動きを連動させる練習方法を考えます。",
  path: "/docs/output/muscle-output",
  image: "/mouse.jpg",
});

export default function MuscleOutputPage() {
  return (
    <article className={style.container}>
      <h1>筋肉から見るアウトプット</h1>
      <p className={styles.originalTitle}>指と手首を連動させてマウスを動かす</p>
      <h2>「指から動く」をどう捉えるか</h2>
      <p>
        マウス操作を「指先から動かす」と説明する人もいます。この言葉を聞いて指だけで強く握ってしまうなら、指で保持することと、手首や腕で移動させることを一度分けて考えてみましょう。
      </p>
      <p>
        指の動きでマウスを調整できる範囲は、持ち方や接触の仕方によって変わります。「指は握ることしかできない」と一律に決めるのではなく、自分の操作でどこが動き、どこが保持を担っているかを確認します。
      </p>
      <h2>指の動きには独立性と連動の両方がある</h2>
      <figure className={styles.figure}>
        <Image
          src="/image/muscle-output/finger-muscles.jpg"
          alt="指を動かす筋肉と腱の図"
          width={420}
          height={540}
        />
        <figcaption>指を動かす筋肉と腱</figcaption>
      </figure>
      <p>
        van
        Duinenら（2009）が総指伸筋の283の運動単位を調べた実験では、別の指を最大筋力の50％まで伸ばす課題で、対象の指に関わる運動単位の半数以上も動員されました。特に隣接する指で連動が強く、指を完全に独立させる制御には限界があることを示しています。
        <a href="https://doi.org/10.1113/jphysiol.2009.177964">［2］</a>
      </p>
      <p>
        283は参加者数ではなく、記録した運動単位の数です。また、これらは筋活動や力の実験で、マウスの持ち方を比較した研究ではありません。指だけを意識した方法と手首中心の方法のどちらがAIMに優れるかまでは結論づけられません。
      </p>
      <p>
        こうした指同士の連動を踏まえ、私はマウス操作では指を一本ずつ独立して動かそうとするよりも、指と手のひら、手首をできるだけ一体化して使うことがよいと考えています。強く握って固めるのではなく、マウスとの接触を保ちながら、手全体がまとまって動くイメージです。これは研究結果を手がかりにした私の操作方針です。
      </p>
      <h2>手首の動きを接点で受け止める</h2>
      <figure className={styles.figure}>
        <Image
          src="/image/muscle-output/radial-muscles.png"
          alt="手首の橈側に関わる筋肉の図"
          width={447}
          height={540}
        />
        <figcaption>橈側の筋肉</figcaption>
      </figure>
      <figure className={styles.figure}>
        <Image
          src="/image/muscle-output/ulnar-muscles.png"
          alt="手首の尺側に関わる筋肉の図"
          width={378}
          height={540}
        />
        <figcaption>尺側の筋肉</figcaption>
      </figure>
      <p>
        手首を親指側へ曲げる動きを橈屈、小指側へ曲げる動きを尺屈と呼びます。マウス操作では、その動きと指や手のひらの接触を組み合わせます。実際の移動方向は、手の向きや前腕の姿勢によっても変わります。
      </p>
      <p>
        私が提案するのは、まず指でマウスを安定して保持し、手首を動かしたときにマウスも無理なくついてくる感覚を探す練習です。動きの伝達効率を数値で保証するものではなく、接点がずれたり、握り直したりする頻度を確かめるためのイメージとして考えてください。
      </p>
      <h3>保持する力は強ければよいわけではない</h3>
      <p>
        Westling・Johansson（1984）の精密把持実験では、握る力は物体の重さや指との摩擦に応じて調整され、滑りを防ぐ余裕を持っていました。マウス操作への応用としても、保持できる力を確保しつつ、必要以上に握り込んでいないかを確かめる方針が考えられます。
        <a href="https://pubmed.ncbi.nlm.nih.gov/6705863/">［3］</a>
      </p>
      <h2>指と手首の連動を確かめる練習</h2>
      <ul>
        <li>普段の持ち方で、マウスがずれない程度に保持する</li>
        <li>
          小さく左右へ動かし、指の接点と手首の動きがどうつながるかを感じる
        </li>
        <li>
          切り返しのたびに握り直したり、クリックする指で押しつけたりしていないか確認する
        </li>
        <li>
          同じ課題で握る力を少し変え、保持の安定性と操作のしやすさを比べる
        </li>
      </ul>
      <p>
        指を軽く引っかけるような保持のイメージを試しても構いませんが、親指を使わない持ち方を一律に勧めるものではありません。前腕に触れて活動を感じることも練習の補助にはなりますが、それだけで個々の筋肉の働きを特定することはできません。
      </p>
      <p>
        指と手首を連動させることを目標にしつつ、常に同時に動かす必要があるとは決めつけず、細かな指の調整も含めて自分の持ち方に合う操作を探してみてください。この練習方法そのもののAIM改善効果は、引用した研究では検証されていません。
      </p>
      <h2>参考研究</h2>
      <ul>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/15946972/">
            ［1］Butlerら（2005）：Selective recruitment of single motor units
            in human flexor digitorum superficialis muscle during flexion of
            individual fingers
          </a>
        </li>
        <li>
          <a href="https://doi.org/10.1113/jphysiol.2009.177964">
            ［2］van Duinenら（2009）：Limited ability to extend the digits of
            the human hand independently with extensor digitorum
          </a>
        </li>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/6705863/">
            ［3］Westling・Johansson（1984）：Factors influencing the force
            control during precision grip
          </a>
        </li>
      </ul>
    </article>
  );
}
