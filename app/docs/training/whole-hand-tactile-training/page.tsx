import { createPageMetadata } from "@/commons/metadata";
import style from "@/commons/styles/global.module.css";

export const metadata = createPageMetadata({
  title: "手全体の触覚を整える練習 | AIMの運動学",
  description:
    "手のひらサイズの紙を使い、手全体で感じる皮膚の変形や表面の質感、圧の違いに気づく練習を紹介します。",
  path: "/docs/training/whole-hand-tactile-training",
});

export default function WholeHandTactileTrainingPage() {
  return (
    <article className={style.container}>
      <h1>手全体の触覚を整える練習</h1>
      <p>
        手のひらサイズの紙を用意し、その上に手を置いて、手を滑らせるように動かします。手全体から得られる触覚の情報に注意を向けるための練習です。
      </p>
      <figure>
        <video
          controls
          playsInline
          preload="metadata"
          poster="/video/whole-hand-tactile-training.jpg"
          width={1280}
          height={720}
          style={{ display: "block", width: "100%", height: "auto" }}
        >
          <source
            src="/video/whole-hand-tactile-training.mp4"
            type="video/mp4"
          />
          お使いのブラウザーは動画の再生に対応していません。
        </video>
        <figcaption>紙の上で手を動かし、手全体の触覚に意識を向けます。</figcaption>
      </figure>

      <h2>紙の上で手を動かす</h2>
      <ol>
        <li>手のひらほどの大きさの紙を、机など平らな場所に置きます。</li>
        <li>紙の上に手を置き、指や手のひらが触れている状態を確かめます。</li>
        <li>手を紙の上でゆっくり動かし、接触している部分の感覚を観察します。</li>
      </ol>
      <p>
        指の皮膚が動きに合わせてどう変形するか、紙のざらざら・つるつるした感触がどこで感じられるかなど、手のひらや指から得られる情報をできるだけ拾います。指先だけでなく、手のひらを含む接触面全体に意識を広げてみてください。
      </p>

      <h2>圧と動く速さを変えて比べる</h2>
      <p>
        紙に軽く触れる程度、少し圧をかけた状態など、手を置く圧を変えて感覚を比べます。動かす速さも、ゆっくりと素早くの両方を試します。それぞれの条件で、皮膚の変形や表面の感触がどのように変わって伝わるかを確かめます。
      </p>
      <p>
        強く押しつけることが目的ではありません。力みが出ない範囲で圧を調整し、違和感があればすぐに楽な状態へ戻してください。感覚の違いに気づくことを中心に行います。
      </p>

      <h2>マウス練習につなげる</h2>
      <p>
        紙の上で触覚の違いを確かめたあと、普段の持ち方のままマウスを操作します。指や手のひらの皮膚の変形、接触の圧、マウス表面の感触に意識を向けながら、いつもの練習を続けます。触覚を丁寧に拾うことで、操作中に入りやすい余分な力みに気づく手がかりになります。
      </p>
      <p>この動きを普段の練習にも取り入れ、手全体から得られる感覚を確かめます。</p>
    </article>
  );
}
