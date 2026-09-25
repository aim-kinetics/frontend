import Link from "next/link";
import { createPageMetadata } from "@/commons/metadata";
import style from "@/commons/styles/global.module.css";

export const metadata = createPageMetadata({
  title: "内臓を下げてマウスを操作する | AIMの教科書",
  description:
    "重心と支持、腹式呼吸、座面と足裏への荷重から、腕をマウス操作に使いやすい姿勢を考えます。研究結果と練習への応用を分けて解説します。",
  path: "/docs/output/elbow-output",
});

export default function BodySupportPage() {
  return (
    <article className={style.container}>
      <h1>内臓を下げてマウスを操作する</h1>
      <p>
        マウスを動かすとき、肩や腕を緩めようとしてもうまくいかないことがあります。そんなときは、体の重さをどこで受け止めているかに目を向けてみましょう。座面と足裏に体重を預け、呼吸を続けながら腕を動かせる状態を探します。
      </p>
      <p>
        ここでいう「内臓を下げる」は、お腹を無理に押し下げる動作ではなく、上半身の重さを下へ預けるためのイメージです。内臓を下げて全身の重心を低くすればAIMが向上する、という効果が実証されているわけではありません。姿勢と呼吸の研究を手がかりに、操作しやすい状態を考えていきます。
      </p>
      <nav aria-label="この記事の目次">
        <ul>
          <li>
            <a href="#support">重心の高さだけでなく、体を支える位置を整える</a>
          </li>
          <li>
            <a href="#breathing">腹式呼吸で胸や肩の動きを抑える</a>
          </li>
          <li>
            <a href="#seat-and-feet">座面と足裏に体重を預け、腕を操作に使う</a>
          </li>
        </ul>
      </nav>

      <h2 id="support">重心の高さだけでなく、体を支える位置を整える</h2>
      <p>
        体の安定を考えるときは、重心の高さとともに、その重さをどこで支えているかが大切です。座った状態では、お尻や太ももが触れる座面、床についた足、使用している場合は背もたれなどが支えになります。
      </p>
      <p>
        「重心を下げれば下げるほど安定する」とは言い切れません。Phanらの研究では、健康な成人20人に、重心より10cm低い位置で体重の0〜8％の重りを装着して立位の安定性を調べました。反応時間や移動速度、重心を移動できる範囲などの指標に、重りによる有意な差は認められませんでした。
        <a href="https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART002587420">
          ［1］
        </a>
      </p>
      <p>
        この結果は座位のマウス操作を直接否定するものではありませんが、重心を低くすることだけを目標にする根拠にもなりません。私は、背中を丸めて高さを下げるよりも、体重を受け止める接点を整える方が、練習の指針として分かりやすいと考えています。
      </p>
      <p>
        まずは普段の姿勢で、マウスを持つ手を少し離してみてください。そのときに体が前へ倒れそうになったり、肩へ急に力が入ったりするなら、手を体の支えとして使っている可能性があります。座面や足の位置を調整し、手を離しても無理なく座っていられる状態を探す、という確認方法を提案します。
      </p>

      <h2 id="breathing">腹式呼吸で胸や肩の動きを抑える</h2>
      <p>
        呼吸に伴って横隔膜や腹部の臓器は動きます。超音波で調べた研究では、安静呼吸時の横隔膜と肝臓の動きは主に上下方向で、平均の移動量はそれぞれ約12mm、約10mmでした。ただし、これは呼吸に伴う動きの測定であり、臓器を低い位置へ固定したり、AIMに有利なほど全身の重心を下げたりできることを示すものではありません。
        <a href="https://pubmed.ncbi.nlm.nih.gov/7820402/">［2］</a>
      </p>
      <p>
        腹式呼吸に注目する理由は、呼吸の際の胸まわりの動きを抑える手がかりになるからです。Hamaouiらは健康な男性10人を対象に、座位・立位、安静呼吸・深呼吸、胸式・腹式という条件を組み合わせて調べました。前後方向の足圧中心などの揺れの指標は、腹式より胸式の呼吸で大きいという結果でした。
        <a href="https://pubmed.ncbi.nlm.nih.gov/20350584/">［3］</a>
      </p>
      <p>
        また、腕を繰り返し動かす実験では、横隔膜と腹横筋の活動、腹腔内圧の上昇が観察されています。横隔膜は呼吸と体幹の姿勢調整の両方に関わる、という説明を支える結果です。これは、意識的に腹圧を強めれば操作が上達するという意味ではありません。
        <a href="https://pubmed.ncbi.nlm.nih.gov/10956340/">［4］</a>
      </p>
      <h3>操作へ取り入れるときのイメージ</h3>
      <p>
        肩を持ち上げて大きく吸おうとせず、お腹まわりが自然に動く程度の楽な呼吸を続けます。息を吐くときも体を潰さず、座面に重さを預けたままにしてみてください。「内臓を下げる」という言葉は、この重さを預ける感覚のために使います。息を止めたり、下へ強くいきんだりする必要はありません。
      </p>
      <p>
        呼吸は深ければよいわけでもありません。高齢者20人の閉眼立位の実験では、深呼吸時に自然な呼吸より足圧中心の揺れの面積が大きくなりました。対象や姿勢はマウス操作と異なりますが、呼吸を大きくすれば必ず安定するという説明への反例になります。
        <a href="https://pubmed.ncbi.nlm.nih.gov/29356276/">［5］</a>
      </p>

      <h2 id="seat-and-feet">座面と足裏に体重を預け、腕を操作に使う</h2>
      <p>
        座面への接触を感じつつ、足裏も床や足台で支えます。「座面に体重をかける」は、下へ強く押しつけるというより、椅子に重さを受け止めてもらう意識です。座面だけへ荷重を集めようとして、足を浮かせる必要はありません。
      </p>
      <p>
        健康な成人20人が座ったまま前方へ手を伸ばす研究では、太ももを座面で支えた条件で、両足を床につけたときに到達距離が最も大きくなりました。片足や両足を床から離すと、方向や条件に応じて到達距離が小さくなっています。座位で腕を使う際に、足の支持も役割を持つことが分かります。
        <a href="https://www.sciencedirect.com/science/article/pii/0003999386900055">
          ［6］
        </a>
      </p>
      <p>
        この研究はマウスの精度を測ったものではありません。そこからの応用として、体を支える役割を座面と足裏で受け持ち、手や腕を操作に使いやすくする、という練習を提案します。前腕を机や肘掛けに置く場合も、肩をすくめずに済む高さと位置を探してください。
      </p>
      <h3>練習中に確かめること</h3>
      <ul>
        <li>
          お尻や太ももが座面に支えられ、両足が床や足台に無理なく触れているか
        </li>
        <li>マウスから手を離しても、体を無理なく支えられるか</li>
        <li>腕を動かすときに、肩をすくめたり息を止めたりしていないか</li>
        <li>クリックや切り返しで、体重をマウスへ押しつけていないか</li>
      </ul>
      <p>
        同じマウス課題で、姿勢を整える前後の操作感や力みを比べてみましょう。目指すのは、お腹を下へ押し続ける姿勢ではなく、呼吸しながら体を支え、腕を動かせる状態です。手にかかる圧力の確認には、
        <Link href="/docs/input/tactile-input">触覚によるインプット</Link>
        の考え方も使えます。
      </p>

      <h2>参考研究</h2>
      <p>
        以下は重心、呼吸、姿勢の支持に関する研究です。ここで提案した方法によるマウス操作やAIMの改善を、直接検証した研究ではありません。
      </p>
      <ul>
        <li>
          <a href="https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART002587420">
            ［1］Phanら（2020）：Effect on the Limit of Stability of the Lowered
            Center of Mass With a Weight Belt
          </a>
        </li>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/7820402/">
            ［2］Ultrasound quantitation of respiratory organ motion in the
            upper abdomen
          </a>
        </li>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/20350584/">
            ［3］Hamaouiら（2010）：Respiratory disturbance to posture varies
            according to the respiratory mode
          </a>
        </li>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/10956340/">
            ［4］Hodges・Gandevia（2000）：Changes in intra-abdominal pressure
            during postural and respiratory activation of the human diaphragm
          </a>
        </li>
        <li>
          <a href="https://pubmed.ncbi.nlm.nih.gov/29356276/">
            ［5］Influence of breathing patterns and orthostatic stress on
            postural control in older adults
          </a>
        </li>
        <li>
          <a href="https://www.sciencedirect.com/science/article/pii/0003999386900055">
            ［6］Lower-limb influence on sitting balance while reaching
            forward（1986）
          </a>
        </li>
      </ul>
    </article>
  );
}
