import Image from "next/image";
import { createPageMetadata } from "@/commons/metadata";
import style from "@/commons/styles/global.module.css";
import styles from "./styles.module.css";

const palmImage = "/image/tactile-feedback-training/palm-awareness-v2.png";

export const metadata = createPageMetadata({
  title: "触覚フィードバックのトレーニング | AIMの運動学",
  description:
    "普段のAIM練習の中で、手のひらと指の触覚に意識を向けるトレーニングを紹介します。",
  path: "/docs/training/tactile-feedback-training",
  image: palmImage,
});

const exercises = [
  {
    title: "人差し指と親指",
    image: "index-thumb.png",
    alt: "人差し指と親指の接触に意識を向ける手の図",
  },
  {
    title: "人差し指と中指",
    image: "middle-thumb.png",
    alt: "人差し指と中指の接触に意識を向ける手の図",
  },
  {
    title: "中指と薬指",
    image: "middle-ring.png",
    alt: "中指と薬指の接触に意識を向ける手の図",
  },
  {
    title: "薬指と親指",
    image: "ring-thumb.png",
    alt: "薬指と親指の接触に意識を向ける手の図",
  },
];

export default function TactileFeedbackTrainingPage() {
  return (
    <article className={style.container}>
      <h1>触覚フィードバックのトレーニング</h1>
      <h2>練習中に意識すること</h2>
      <p>
        普段のマウスの持ち方を変えず、いつものAIM練習を続けながら、マウスに触れている手のひらや指の腹の感覚に意識を向けます。指や手のひらの皮膚が押しつぶされたり、ずれたりしていないかを確かめてください。皮膚を変形させないように力を入れるのではなく、普段の操作の中で触覚の変化に気づくことが目的です。
      </p>
      <p>
        指だけに注意を絞らず、マウスに触れている手のひらも一緒に意識してかまいません。まず手のひら全体の接触感覚を確かめ、その後に指同士の組み合わせへ注意を移していきます。
      </p>
      <h2>フェーズ1：手のひらの触覚を意識する</h2>
      <p>
        普段の持ち方のまま、マウスに触れている手のひらの感覚に意識を向けます。接触している範囲や圧の変化を感じながら、普段のAIM練習を続けてください。
      </p>
      <figure className={styles.exercise}>
        <Image
          src={palmImage}
          alt="マウスを持つ手のひらの触覚を意識する範囲"
          width={1254}
          height={1254}
          sizes="(max-width: 767px) 100vw, 640px"
        />
        <figcaption>
          持ち方はそのままに、手のひらがマウスに触れている感覚を確かめます。
        </figcaption>
      </figure>
      <h2>フェーズ2：指の組み合わせごとの触覚を意識する</h2>
      <p>
        フェーズ1の手のひらへの意識を保ちながら、次の4つの組み合わせを順番に確かめます。持ち方や操作は変えず、普段のAIM練習中にそれぞれの接触感覚へ注意を向けてください。
      </p>
      {exercises.map((exercise) => (
        <section className={styles.exercise} key={exercise.title}>
          <h3>{exercise.title}</h3>
          <Image
            src={`/image/tactile-feedback-training/${exercise.image}`}
            alt={exercise.alt}
            width={1254}
            height={1254}
            sizes="(max-width: 767px) 100vw, 640px"
          />
        </section>
      ))}
      <p>
        これらの感覚を、普段の練習の中で少しずつ確認します。手や指に力みや違和感が出た場合は無理に続けず、楽な操作に戻してください。
      </p>
    </article>
  );
}