import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import { Breadcrumb } from "@/commons/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIMの教科書 | 爆速神経回路で反射しよう！",
  description:
    "視神経回路には2種類あり、反射的に目を動かすことができる回路と認識してから目を動かす回路があります。前者を優位にすることで反応速度を向上させることができます。",
};
export default function RuleEyePage() {
  return (
    <>
      <div className={style.container}>
        <h1>爆速神経回路で反射しよう！</h1>
        <p>
          まずは結論
          <ul>
            <li>画面に過集中せず全体を把握しよう！</li>
            <li>弾が飛んでいく場所に目を置こう！</li>
            <li>
              見えている＝弾が当たってる状態にして常にフィードバックしよう！
            </li>
          </ul>
        </p>
        <h2>認識しなくても敵の位置は把握している</h2>
        <p>
          例えば、道を歩いていて信号があったとします。この時、信号の位置を認識しなくても目が動いて赤か青を判断できると思います。
        </p>
        <p>
          信号でなくても特定の物を見ようとするときに物の位置を認識する前に目が動き、その後詳細を認識します。
        </p>
        <p>
          これは、脳の視覚処理における2つの経路、つまりVentral streamとDorsal
          streamの違いによるものです。
        </p>
        <h3>Ventral streamとDorsal stream</h3>
        <p>
          目には大きく分けてVentral streamとDorsal
          streamという2つの神経回路があります。
        </p>
        <p>
          ざっくりいうと、Ventral stream(以降VS)は詳細を見る神経、Dorsal
          stream(以降DS)は場所を把握する神経。
        </p>
        <p>
          下記論文によると、VSが活性化しているときの反応速度はDSが活性化しているときの反応速度よりも遅いことがわかっています。
          <br />
          また、年齢による差はVSが混ざることで遅くなることも書かれています。
          <br />
          <a href="https://www.researchgate.net/publication/331846958_The_effect_of_different_visual_stimuli_on_reaction_times_a_performance_comparison_of_young_and_middle-aged_people">
            The effect of different visual stimuli on reaction times: a
            performance comparison of young and middle-aged people
          </a>
        </p>
        <p>
          正確かどうか確証はありませんがここでは便宜的にDSは脳の処理前に目を動かすことができるとします。つまり反射的に目を動かすことができていると考えます。
        </p>
        <p>
          つまり敵が現れたとき、順番的には DS → 目が動く → VS
          で反応することになります。この中でDS →
          目が動く部分は反射になりますが、VS以降は脳で反応することになります。
        </p>
        <p>
          それぞれどれくらいの差があるかは人によりますが年齢によらずDSが100ms~200ms程度、VSは年齢により遅くなりが200ms~300ms程度ではないでしょうか。
        </p>
        <p>
          ここで大事なのはDS優位で常にトラッキングやフリックを行うことで反応速度を向上させることができるということです。
        </p>

        <h2>弾が飛んでいく場所に目を置こう！</h2>
        <p>次にどれだけ正確にフィードバックを行い修正・改善するかの話です</p>
        <p>
          コントロール力やDS・VSどちらが優位だったかは適当に練習しているだけでは身に付きません。当たり前の話ではありますが正しいフィードバックを行うことで正しい改善を行うことができます。
        </p>
        <p>
          フィードバックにはどうしてもVSのほうが優位になってしまいます。そうなるとフィードバックの回数が物理的に少なくなり成長速度が低下してしまします。
        </p>
        <p>
          この時敵位置と弾の着弾位置の2つを処理しようとするよりもどちらかのみでフィードバックすることができればリアルタイム性を持ちつつ修正する回数も増やすことができます
        </p>
        <p>
          そうなると敵位置か着弾位置どちらに絞るかという話になりますが私はDSで判断しずらい方を固定するのがいいと考えます。
        </p>
        <p>
          おそらく多くの人は敵位置をDSで判断し、着弾位置を認識しながら弾がどう当たっているかをフィードバックする方がいいでしょう。
        </p>
        <p>
          弾が当たっているかだけでなくどこに当たっているかも判断できると尚よいし、外したならどう外したかをフィードバックできるよさらに良いでしょう！
        </p>

        <h2>見えている＝弾が当たってる状態にして常にフィードバックしよう！</h2>
        <p>フィードバックをするときに何をもって判断するかは重要です。</p>
        <p>
          前節で述べたように、できるだけDSでフィードバックを行いたいですがそのためには見えている状態を正としてフィードバックを行うことでDS優位で進めることができると考えます。
        </p>
        <p>
          実際の目でも見て判断するよりもだた見るだけのほうが反応速度は速くその分フィードバックの回数も増やすことができます。
        </p>
      </div>
    </>
  );
}
