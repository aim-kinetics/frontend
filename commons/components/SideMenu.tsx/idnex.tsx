import style from "./styles.module.css";
export const SideMenu: React.FC = () => {
  return (
    <div className={style.container}>
      <p className={style.title}>ドキュメント</p>
      <ul className={style.list}>
        <li className={style.item}>
          <a href="/docs/kinetics">マウスは手首、腕、肩の順に動かす</a>
        </li>
        <li className={style.item}>
          <a href="/docs/finger">指の意識について</a>
        </li>
        <li className={style.item}>
          <a href="/docs/eye">
            目は動かさない<br></br>集中しない
          </a>
        </li>
        <li className={style.item}>
          <a href="/docs/abdominal-breathing">ゆっくり呼吸をしよう</a>
        </li>
      </ul>
      <p className={style.title}>
        <a href="/docs/coaching">コーチングについて</a>
      </p>
    </div>
  );
};
