import { createPageMetadata } from "@/commons/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import styles from "./styles.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "神経から見るアウトプット | AIMの教科書",
  description:
    "橈骨神経・正中神経・尺骨神経を手がかりに、手を親指側と小指側の2パーツとして捉えるマウス操作の考え方を紹介します。",
  path: "/docs/output/neural-output",
  image: "/image/neural-output/cover.jpg",
});

const figures = {
  radial: {
    file: "radial-nerve",
    caption: "橈骨神経",
    width: 555,
    height: 1200,
  },
  median: {
    file: "median-nerve",
    caption: "正中神経",
    width: 1170,
    height: 2532,
  },
  ulnarBack: {
    file: "ulnar-nerve-back",
    caption: "尺骨神経：手の甲側",
    width: 1170,
    height: 2532,
  },
  ulnarPalm: {
    file: "ulnar-nerve-palm",
    caption: "尺骨神経：手のひら側",
    width: 1170,
    height: 2532,
  },
  groups: {
    file: "finger-groups",
    caption: "マウス操作を2つのグループで捉えるイメージ",
    width: 1122,
    height: 1402,
  },
};

function Figure({
  figure,
}: {
  figure: (typeof figures)[keyof typeof figures];
}) {
  return (
    <figure className={styles.figure}>
      <Image
        src={`/image/neural-output/${figure.file}.jpg`}
        alt={figure.caption}
        width={figure.width}
        height={figure.height}
        sizes="(max-width: 600px) 100vw, 420px"
      />
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}

export default function NeuralOutputPage() {
  return (
    <article className={style.container}>
      <h1>神経から見るアウトプット</h1>
      <p className={styles.originalTitle}>腕を2パーツに分けて動かす</p>
      <Image
        src="/image/neural-output/cover.jpg"
        alt="腕を2パーツに分けて動かす"
        width={420}
        height={168}
      />
      <p>
        筋肉による動きに続いて、今回は神経を手がかりにマウス操作を考えます。橈骨神経・正中神経・尺骨神経に注目し、操作の意識を親指側と小指側の2パーツに分けてみましょう。
      </p>
      <h2>神経ごとに手を捉える</h2>
      <h3>橈骨神経</h3>
      <Figure figure={figures.radial} />
      <p>
        橈骨神経については、図の手の甲の親指側へ向かう部分に注目してください。親指側を橈側と呼び、手首を親指側へ曲げる動きが橈屈です。
      </p>
      <h3>正中神経</h3>
      <Figure figure={figures.median} />
      <p>
        正中神経は、手のひら側の親指から薬指の一部に関わる神経です。ここではマウス操作のイメージをつかむために、正中神経を橈骨神経と同じ親指側のグループにまとめて考えます。
      </p>
      <h3>尺骨神経</h3>
      <Figure figure={figures.ulnarBack} />
      <Figure figure={figures.ulnarPalm} />
      <p>
        尺骨神経については、小指側へ向かう部分に注目してください。小指側を尺側と呼び、操作を考えるときは手のひらと手の甲の両面を一緒に捉えます。
      </p>
      <h2>操作の意識を2パーツに分ける</h2>
      <Figure figure={figures.groups} />
      <p>
        マウスを持ったら、親指側と、薬指・小指を含む小指側の2グループを意識してみましょう。これはマウスを持つときの操作イメージとしての分類です。
      </p>
      <p>
        右手で操作する場合、右へ動かすときは小指側へ、左へ動かすときは親指側へ動かすことを意識して練習してみてください。
      </p>
      <h2>研究から分かる感覚と操作の関係</h2>
      <p>
        Westling・Johansson（1987）は、物体を指でつまんで持ち上げる間の感覚神経の活動を、正中神経から記録しました。接触開始や保持、物体の動きに伴って、受容器の種類により異なる活動が観察されています。手のひら側の感覚が操作の情報源になることを支える研究です。
        <a href="https://pubmed.ncbi.nlm.nih.gov/3582527/">［1］</a>
      </p>
      <p>
        手の甲についても、Edin・Abbs（1991）は橈骨神経の浅枝から107の皮膚感覚神経ユニットを記録し、92％が手や指の自発的な運動に反応したと報告しています。手の甲の皮膚の変形も、動きに関する情報を伝える可能性があります。
        <a href="https://pubmed.ncbi.nlm.nih.gov/2051199/">［2］</a>
      </p>
      <p>
        ここで測ったのは皮膚から入る感覚信号です。皮膚の感覚領域と、筋肉を動かす神経支配は同じ区分として扱えません。また、これらの研究は左右のマウス操作を2つの神経群に分ける方法を検証していません。「2パーツ」は操作時に注意を向けるためのイメージとして使います。
      </p>
      <h2>参考研究</h2>
      <ul>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/3582527/">
            ［1］Westling・Johansson（1987）：Responses in glabrous skin
            mechanoreceptors during precision grip in humans
          </a>
        </li>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/2051199/">
            ［2］Edin・Abbs（1991）：Finger movement responses of cutaneous
            mechanoreceptors in the dorsal skin of the human hand
          </a>
        </li>
      </ul>
    </article>
  );
}
