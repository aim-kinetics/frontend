import { createPageMetadata } from "@/commons/metadata";
import style from "@/commons/styles/global.module.css";

const videoPath = "/video/median-nerve-stretch.mp4";

export const metadata = createPageMetadata({
  title: "正中神経ストレッチ | AIMの運動学",
  description:
    "手のひらを上に向け、手首と肘を伸ばし、肩甲骨を前に出す正中神経ストレッチを動画とともに紹介します。",
  path: "/docs/training/median-nerve-stretch",
  image: "/video/median-nerve-stretch.jpg",
});

export default function MedianNerveStretchPage() {
  return (
    <article className={style.container}>
      <h1>正中神経ストレッチ</h1>
      <p>
        手のひらから腕にかけてやさしく伸ばすストレッチです。動きを急がず、痛みのない範囲で行います。
      </p>

      <figure>
        <video
          controls
          playsInline
          preload="metadata"
          poster="/video/median-nerve-stretch.jpg"
          width={1280}
          height={720}
          style={{ display: "block", width: "100%", height: "auto" }}
        >
          <source src={videoPath} type="video/mp4" />
          お使いのブラウザーは動画の再生に対応していません。
        </video>
        <figcaption>正中神経ストレッチの動きを確認できます。</figcaption>
      </figure>

      <h2>行い方</h2>
      <ol>
        <li>手のひらを上に向け、指を伸ばします。</li>
        <li>手首をゆっくり反らし、手のひらから前腕にかけて伸びを感じます。</li>
        <li>その状態を保ちながら、肘を無理のない範囲で伸ばします。</li>
        <li>余裕があれば、肩をすくめずに肩甲骨を前へ出すようにします。</li>
      </ol>
      <p>
        腕や手のひらに軽い伸びを感じるところで止め、反動をつけずにゆっくり戻します。肩甲骨の動きは無理に加えず、心地よく動かせる範囲に留めてください。
      </p>

      <h2>注意点</h2>
      <p>
        ピリピリ感を出すことを目標にせず、強いしびれや痛みが出たらすぐに緩めてください。違和感が運動後も続く、または症状が悪化する場合は中止し、医療専門職に相談してください。神経の運動は症状を悪化させる場合もあるため、手や腕に症状がある方は専門家の指示に従ってください。
      </p>
    </article>
  );
}
