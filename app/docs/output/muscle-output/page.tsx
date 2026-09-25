import { createPageMetadata } from "@/commons/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import styles from "./styles.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "筋肉から見るアウトプット | AIMの教科書",
  description:
    "指から動くってホント？\nみなさん、マウス操作の説明として指から動いて連動して体が動くと説明している人を見たことがありますか？",
  path: "/docs/output/muscle-output",
  image: "/image/muscle-output/cover.jpg",
});

// Source: https://x.com/kurabuwa25877/status/2090379520599879733
export default function MuscleOutputPage() {
  return (
    <article className={style.container}>
      <h1>筋肉から見るアウトプット</h1>
      <p className={styles.originalTitle}>{"マウスは指から動かない！！！"}</p>
      <p>
        <a
          href="https://x.com/kurabuwa25877/status/2090379520599879733"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xの元記事
        </a>
      </p>
      <Image
        src="/image/muscle-output/cover.jpg"
        alt={"マウスは指から動かない！！！"}
        width={420}
        height={168}
      />
      <h2>{"指から動くってホント？"}</h2>
      <p>
        {
          "みなさん、マウス操作の説明として指から動いて連動して体が動くと説明している人を見たことがありますか？"
        }
      </p>
      <p>
        {
          "私はその話を聞くたびに言語化がまだまだ甘いなと感じています。なぜなら人間の手の構造を見ればそうはならないと思うからです"
        }
      </p>
      <h2>{"結論：手首の動きを指先にダイレクトに伝える"}</h2>
      <p>
        {
          "結論から言います。手首の動きを100%マウスに伝えるために指を使いましょう！"
        }
      </p>
      <p>{"順を追って説明していきます。"}</p>
      <h3>{"指はマウスを握ることしかできない"}</h3>
      <p>
        {
          "まずはこちらの画像を見てください。これは指先に向かって筋肉がどう伸びているかを示した画像です。"
        }
      </p>
      <figure className={styles.figure}>
        <Image
          src="/image/muscle-output/finger-muscles.jpg"
          alt={"指伸筋・指屈筋"}
          width={420}
          height={540}
        />
        <figcaption>{"指伸筋・指屈筋"}</figcaption>
      </figure>
      <p>
        {
          "見てわかる通り腱は4本ですが筋肉は1本なため指1本ずつは動かすことが可能ですが手首の撓屈（マウスを左右に動かす動作）ができません"
        }
      </p>
      <p>
        {
          "また、多くの人は手のひらまで付くつかみ持ちかつ5本の指がついているというのにたかが指一本動かしたところでマウスは動きません。"
        }
      </p>
      <p>
        {
          "ただし例外としてマウスを握る動作で上下に動かすことは可能なのでつまみ持ちをしている方は多少マウスを動かす余地があります。"
        }
      </p>
      <p>{"ではこの筋肉はどう使うのがよいのでしょうか"}</p>
      <p>
        {
          "私の現段階の結論はマウスをホールドするためだけに使うのがいいのではと考えています。"
        }
      </p>
      <h3>{"手首を左右に動かすには"}</h3>
      <p>{"次に手首を動かすために必要な筋肉を示した画像になります。"}</p>
      <figure className={styles.figure}>
        <Image
          src="/image/muscle-output/radial-muscles.png"
          alt={"撓側系の筋肉"}
          width={447}
          height={540}
        />
        <figcaption>{"撓側系の筋肉"}</figcaption>
      </figure>
      <figure className={styles.figure}>
        <Image
          src="/image/muscle-output/ulnar-muscles.png"
          alt={"尺側系の筋肉"}
          width={378}
          height={540}
        />
        <figcaption>{"尺側系の筋肉"}</figcaption>
      </figure>
      <p>
        {
          "手首を曲げる筋肉は全体をとおして手のひらの根本についており指先まで到達していないことがわかると思います。"
        }
      </p>
      <p>
        {
          "しかし、そこから先にも関節や皮膚など動かしたエネルギーがロスしてしまう要素がいくつかあります"
        }
      </p>
      <p>
        {
          "この時、できるだけ手首の動きをマウスにダイレクトに伝えるために活用できるのが指先だと思っています。"
        }
      </p>
      <h3>{"練習方法"}</h3>
      <p>
        {
          "この感覚をつかむ練習方法として親指以外の指でマウスをひっかけるようにしてホールドすることをお勧めしています。"
        }
      </p>
      <p>
        {
          "この時、前腕の上の方にある指先まで伸びている筋肉で引っ張ることをイメージして持つことが大事です。結局そこが緩んでしまうとマウスにダイレクトに動きが伝わらなくなってしまうためです。"
        }
      </p>
      <p>{"また、ホールドするため以上の力を入れないようにしてください。"}</p>
      <p>
        {
          "これができたらあとは腱がつながっている手のひらの根本を前腕から引っ張り手首を曲げていることをイメージしながら操作してみてください"
        }
      </p>
      <p>
        {"この時、前腕を触りながらどの筋肉が動いているかを確かめても良いです"}
      </p>
      <p>
        {
          "また、切り返しなど手首の動きが瞬時に切り替わるときは前腕の筋肉が切り替わっていることを意識しながらやると力みにつながることが減ってよいかと思います。"
        }
      </p>
      <h2>{"まとめ"}</h2>
      <p>
        {
          "指先から動くという言語化は無意識で手首から先の指までリンクしている上級者が言語化したときにおこる現象だと思っています。"
        }
      </p>
      <p>
        {
          "もちろん間違いではないですが厳密に言語化するとしたら「指と手のひらをリンクさせて必ず同時に動くようにする」になるかと思います"
        }
      </p>
      <p>
        {
          "初心者がこれを鵜呑みにしてしまうとただ力むだけで正しいマウス操作につながらなくなってしまうことがあることを発信する人には気づいていただきたいと思っています。"
        }
      </p>
      <p>
        {
          "もちろんこれが100%正しいとも思っていないので間違ってるなと思った箇所があれば指摘していただければ助かります！"
        }
      </p>
    </article>
  );
}
