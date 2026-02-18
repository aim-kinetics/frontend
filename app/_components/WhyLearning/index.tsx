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
      <h2 className={style.title}>なぜAIMを学ぶのか？</h2>
      <p className={style.description}>
        正しいマウス操作を学ぶことで精度・反応速度・疲労軽減など様々なメリットがあります。
      </p>

      <div className={style.cardWrapper}>
        <div className={`${style.card} ${style.card1}`}>
          <div className={style.cardIcon}>
            <CursorArrowRaysIcon width={40} height={40} />
          </div>

          <h3 className={style.cardTitle}>精度の向上</h3>
          <p className={style.cardDescription}>
            正しいマウス操作を学ぶことで、エイムの精度が向上。これにより、敵にレティクルを正確に合わせられるようになります。
          </p>
        </div>
        <div className={`${style.card} ${style.card2}`}>
          <div className={style.cardIcon}>
            <BoltIcon width={40} height={40} />
          </div>
          <h3 className={style.cardTitle}>反応速度の向上</h3>
          <p className={style.cardDescription}>
            正しい目の使い方とマウス操作を学ぶことで、反応速度が向上。これにより、敵の動きに最速で反応できるようになります。
          </p>
        </div>
        <div className={`${style.card} ${style.card3}`}>
          <div className={style.cardIcon}>
            <HandRaisedIcon width={40} height={40} />
          </div>
          <h3 className={style.cardTitle}>疲労の軽減</h3>
          <p className={style.cardDescription}>
            正しいマウス操作を学ぶことで、手首や腕の負担が減り、長時間プレイしても疲れにくくなります。
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
            <p className={style.imageCardTitle}>常に変わらないAIM</p>
            <p className={style.imageCardDescription}>
              理論を学ぶことで、日によらない安定したAIMを手に入れることができます。
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
            <p className={style.imageCardTitle}>誰でもトップ層になれる</p>
            <p className={style.imageCardDescription}>
              才能は関係ありません。正しい方法を学び、継続することで誰でもトップ層のAIMを手に入れることができます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
