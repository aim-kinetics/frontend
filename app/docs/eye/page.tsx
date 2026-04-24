import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import { Breadcrumb } from "@/commons/components/Breadcrumb";

export default function RuleEyePage() {
  return (
    <>
      <div className={style.container}>
        <h1>目は動かさない</h1>
        <p>
          目には大きく分けて2つの神経回路があります(Ventral streamとDorsal
          stream)。興味がある人は調べてみてください
        </p>
        <p>
          ざっくりいうと、Ventral streamは詳細を見る神経、Dorsal
          streamは場所を把握する神経。
          <br />
          もっと簡単にいうと空間の認識と物体の詳細の認識を制御しています。
        </p>
        <p>
          ここで大事なのは物体が何なのかを認識すると反応速度が遅くなるということです。
        </p>
        <p>
          下記論文によると、詳細を見る神経が活性化しているときの反応速度は場所を把握する神経が活性化しているときの反応速度よりも遅いことがわかっています。
          <br />
          また、年齢による差は詳細に見る神経が混ざることで遅くなることも書かれています。
          <br />
          <a href="https://www.researchgate.net/publication/331846958_The_effect_of_different_visual_stimuli_on_reaction_times_a_performance_comparison_of_young_and_middle-aged_people">
            The effect of different visual stimuli on reaction times: a
            performance comparison of young and middle-aged people
          </a>
        </p>

        <h2>画面に集中するな見ようとするな</h2>
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
          おそらくこの結果を見るに目は動かさないほうが場所を把握する視野優位で認識することができるのではないかと思います。
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
      </div>
    </>
  );
}
