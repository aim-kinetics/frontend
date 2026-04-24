import {
  BoltIcon,
  CursorArrowRaysIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";
import style from "./styles.module.css";
import Image from "next/image";
export const WhyLearning: React.FC = () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>徹底的に基礎を</h2>
      <p className={style.description}>
        トッププレイヤーのAIM理論は間違ってないが、土台となる基礎ができてる前提
      </p>

      <div className={style.cardWrapper}>
        <div className={`${style.card} ${style.card1}`}>
          <div className={style.cardIcon}>
            <CursorArrowRaysIcon
              width={40}
              height={40}
              className={style.cardIconImage}
            />
          </div>

          <h3 className={style.cardTitle}>指先で動かす</h3>
          <p className={style.cardDescription}>
            指先の意識は最後、もっと意識するべきことがあります。
          </p>
        </div>
        <div className={`${style.card} ${style.card2}`}>
          <div className={style.cardIcon}>
            <BoltIcon width={40} height={40} className={style.cardIconImage} />
          </div>
          <h3 className={style.cardTitle}>敵を見ている</h3>
          <p className={style.cardDescription}>
            敵を見ているのではなく見えているだけ。 意識の違いで変わります
          </p>
        </div>
        <div className={`${style.card} ${style.card3}`}>
          <div className={style.cardIcon}>
            <HandRaisedIcon
              width={40}
              height={40}
              className={style.cardIconImage}
            />
          </div>
          <h3 className={style.cardTitle}>動作の流れを知らない</h3>
          <p className={style.cardDescription}>
            プロのAIMが蛇のように見えるのは動作の流れを知っているからです。
          </p>
        </div>
      </div>

      <div className={style.imageCardWrapper}>
        <div className={style.imageCard}>
          <Image
            src="/mouse.jpg"
            alt="Mouse Image"
            width={800}
            height={600}
            className={style.image}
          />
          <div className={style.imageCardContent}>
            <p className={style.imageCardTitle}>基礎の上に応用</p>
            <p className={style.imageCardDescription}>
              プロのマウス操作のベースは同じ、応用が違うだけです。
              <br />
              たいていの理論はその応用の部分だけを見ているので、基礎を知らないと理解できません。
            </p>
          </div>
        </div>
        <div className={style.imageCard}>
          <Image
            src="/gamer.jpg"
            alt="Gamer Image"
            width={800}
            height={600}
            className={style.image}
          />
          <div className={style.imageCardContent}>
            <p className={style.imageCardTitle}>下手なのは知らないだけ</p>
            <p className={style.imageCardDescription}>
              才能の差はあります。ただ、上限は思ってるより高い。
              <br />
              そして、上限を知るには知識が必要です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
