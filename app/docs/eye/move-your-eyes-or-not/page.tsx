import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import styles from "./styles.module.css";
import { Breadcrumb } from "@/commons/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIMの教科書 | 目を動かす動かさない論争",
  description:
    "目は動かすべきか動かさないべきかについて解説しています。反応速度の面では動かさないほうがいいという研究結果もあります。",
};
export default function RuleEyePage() {
  return (
    <>
      <div className={style.container}>
        <h1>目を動かす動かさない論争</h1>
        <p>まずはまとめ</p>
        <ul>
          <li>目を動かすと情報を落として脳の負荷を下げようとする</li>
          <li>反応速度の面でいうと目を動かさないほうがいい</li>
        </ul>

        <h2>目を動かすと情報を落として脳の負荷を下げようとする</h2>
        <p>
          日常生活で目を動かしたことによる視界のブレを感じたことはありますか？ほとんどないと思います。
        </p>
        <p>
          もしブレを感じたなら目ではなく対象が高速で動いてるのではないでしょうか？
        </p>
        <p>
          これは目を高速で動かしたとき、脳が情報を落として視界のブレを抑える仕組みがあるからです。これをサッカード効果やサッカード抑制などと言ったりします。
        </p>
        <p>
          サッカード効果がどの程度影響があるかわかりませんが一応こういうこともある程度で認識しておくといいかもしれませんね
        </p>
        <h2>反応速度の面でいうと目を動かさないほうがいい</h2>
        <p>
          目を動かさないと反応速度が速くなるという研究結果が示されています。
          <br />
          <a href="https://www.sciencedirect.com/science/article/pii/S0747563225002833?via%3Dihub#bib23">
            Biofeedback training can enhance esports players’ shooting
            performance in an aiming task: focusing on cortical activity and
            gaze movement
          </a>
        </p>
        <p>
          おそらくこの結果を見るに目は動かさないほうが場所を把握する神経回路で認識することができるのではないかと思います。
        </p>
        <p>
          本人もこのトレーニングアプリを使ったところ体感してトラッキング時の切り返しの速度が向上したと感じました。ソフトは著者の方が説明しているのでご覧ください。少し起動が難しいですがぜひやってみて下さい。
          <br />
          <a href="https://x.com/jeong_research/status/1996595001233457365">
            Azusa Detector (ᓀ‸ᓂ)
          </a>
        </p>
        <p>
          また、日々トレーニングしていく中で感じたものとしては画面の何かに集中するのではなく画面全体を見る意識が大事だと感じました。
        </p>
        <p>ゲームの視認性による反応速度の違いもあると感じました。</p>
        <p>
          AIM練習ソフトではうまくできるのに実戦で反応速度が遅れると感じる場合、画面が複雑で見る神経が優位になっている可能性があります。
        </p>
        <p>
          この場合、より一層ただ画面を見るだけという意識をもって敵の位置は最低限のみ把握することを意識しましょう。
        </p>
        <p>
          極端な話、キャラクターが何だとかどこを向いているだとか詳細情報を追うと反応速度が遅くなります。
        </p>
        <p>
          これのトレーニングとして、画面内に固定されているHUDをなんとなく見た状態で視点を振りまわして敵にレティクルを合わせると良いでしょう。
        </p>

        <h3>目の動きの有無による反応速度の差を測定しよう！</h3>
        <p>
          これは雑に作ったなんとなくそうかもなと思えるくらいのツールです。入力遅延などもあるので実際の数値というより差だけを見てみるといいでしょう。
          <br />
          <a href="/tools/eye-movement-test/index.html">反応速度テスト</a>
        </p>
        <p>
          やってみると固定視野のほうが反応速度がなんとなく早いなと感じましたが正確なものではないので参考程度にとどめておくといいでしょう。
        </p>
      </div>
    </>
  );
}
