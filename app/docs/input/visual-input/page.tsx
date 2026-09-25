import { createPageMetadata } from "@/commons/metadata";
import style from "@/commons/styles/global.module.css";

export const metadata = createPageMetadata({
  title: "視覚によるインプット | AIMの教科書",
  description:
    "視覚課題の反応時間、視線制御、サッカード抑制の研究から、画面の捉え方と目と手の連動を考えます。",
  path: "/docs/input/visual-input",
});

export default function VisualInputPage() {
  return (
    <article className={style.container}>
      <h1>視覚によるインプット</h1>
      <p>
        画面から何を受け取り、それをどう手の動きにつなげるか。反応に必要な判断、目と手の連動、視線の動かし方の順に考えていきます。
      </p>
      <nav aria-label="この記事の目次">
        <ul>
          <li>
            <a href="#visual-processing">反応に必要な情報を捉える</a>
          </li>
          <li>
            <a href="#eye-hand-coordination">目の動きを手で再現する</a>
          </li>
          <li>
            <a href="#gaze-movement">目を動かす動かさない論争</a>
          </li>
        </ul>
      </nav>
      <h2 id="visual-processing">反応に必要な情報を捉える</h2>
      <p>
        敵が出たら撃つ課題と、敵味方を見分けて撃つ課題では、必要な判断が違います。反応の速さを考えるときは、何を判断してから操作する必要があるかを整理しましょう。
      </p>
      <h3>課題によって反応時間は変わる</h3>
      <p>
        Otaki・Shibata（2019）は若年者23人と中年者28人で、単純反応、選択反応、反応するかを選ぶgo/no-go課題を比較しました。単純反応では年齢群間の有意差がなく、選択反応とgo/no-go課題では中年群の反応が遅くなりました。
        <a href="https://pubmed.ncbi.nlm.nih.gov/30936640/">［1］</a>
      </p>
      <h3>弾がどこへ飛んだかを確かめる</h3>
      <p>
        練習では、目標の位置とレティクルや着弾位置のずれを確認します。私は、命中の有無に加えて「手前で止まった」「通り過ぎた」「切り返しに遅れた」といった違いを、手の動きへ結びつけることを大切にしています。
      </p>
      <p>
        画面全体を捉える意識も試せますが、敵味方の識別など、必要な情報まで捨てる必要はありません。これは上の研究が示した最適な見方ではなく、練習の確認項目としての提案です。
      </p>
      <h2 id="eye-hand-coordination">目の動きを手で再現する</h2>
      <p>
        「目の動きを手で再現する」は、目標を追う感覚とマウスによる追従を結びつけるためのイメージです。目の動きがすべて反射である、あるいは目の反射回路をそのまま手へ移せる、という意味ではありません。
      </p>
      <h3>追従と修正を練習する</h3>
      <ul>
        <li>動く目標にレティクルを合わせ、ずれた方向を確かめる</li>
        <li>
          切り返しでは、目標を見失ったのか、手の修正が遅れたのかを振り返る
        </li>
        <li>速度だけでなく、命中率や行き過ぎの回数も比べる</li>
      </ul>
      <p>
        繰り返す中で、操作を細かく言葉にしなくても動かせる状態を目指します。ただし、この練習イメージ自体の効果は、ここで紹介する研究では検証されていません。熟練者の「何も意識していない」という説明だけで、神経の仕組みや練習過程を推定することもできません。
      </p>
      <h2 id="gaze-movement">目を動かす動かさない論争</h2>
      <h3>視線を中央に保つトレーニングの研究</h3>
      <p>
        Jeongら（2026）の視線制御実験では、21人を訓練群11人と対照群10人に無作為に分けました。訓練群には、視線が中央から外れたときに音で知らせるフィードバックを与えています。訓練群では射撃までの時間が中央値で47.2ms短縮し、対照群では有意な変化が報告されませんでした。
        <a href="https://doi.org/10.1016/j.chb.2025.108836">［2］</a>
      </p>
      <p>
        特定のエイミング課題で視線制御の練習が役立つ可能性を示す結果です。射撃までの時間を視覚だけの反応時間とは扱えません。また、すべてのゲーム場面で目を動かさない方がよいことや、背側経路が優位になったことを示すものでもありません。
      </p>
      <h3>サッカード中の見え方は刺激によって異なる</h3>
      <p>
        Burrら（1994）は、素早い視線移動であるサッカード中の視覚感度を調べました。粗い明暗のパターンでは感度が抑えられましたが、細かいパターンや等輝度の色パターンでは同じ抑制は見られず、むしろ感度の増強が報告されています。
        <a href="https://pubmed.ncbi.nlm.nih.gov/7935763/">［3］</a>
      </p>
      <p>
        サッカード抑制は、目を動かすとすべての情報が一様に失われる現象ではありません。脳の負荷を下げるために情報を捨てていると決めつけず、刺激や視線の動きに応じて考えます。
      </p>
      <h3>自分の課題で視線の置き方を比べる</h3>
      <p>
        中央付近へ視線を保つ方法と、必要な対象へ視線を移す方法を、同じ課題で比べてみましょう。速さだけでなく、見落としや命中率も確認します。単純なAIM課題で扱いやすかった見方が、情報量の多い実戦でも最適とは限りません。
      </p>
      <p>
        <a href="/tools/eye-react-test/index.html">反応速度テスト</a>
        も感覚を比べるきっかけに使えます。端末の遅延、慣れ、試す順番の影響があるため、このツールだけで神経経路の速さや視線固定の効果を判定することはできません。
      </p>
      <h2>参考研究</h2>
      <ul>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/30936640/">
            ［1］Otaki・Shibata（2019）：The effect of different visual stimuli
            on reaction times: a performance comparison of young and middle-aged
            people
          </a>
        </li>
        <li>
          <a href="https://doi.org/10.1016/j.chb.2025.108836">
            ［2］Jeongら（2026）：Biofeedback training can enhance esports
            players’ shooting performance in an aiming task: focusing on
            cortical activity and gaze movement
          </a>
        </li>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/7935763/">
            ［3］Burrら（1994）：Selective suppression of the magnocellular
            visual pathway during saccadic eye movements
          </a>
        </li>
      </ul>
    </article>
  );
}
