import styles from "./styles.module.css";

export type Data = {
  title: string;
  url?: string;
};

export const Breadcrumb: React.FC<{ data: Data[] }> = ({ data }) => {
  return (
    <div className={styles.container}>
      <ol className={styles.list}>
        {data.map((value, index) => (
          <li className={styles.item} key={index}>
            {!value.url ? value.title : <a href={value.url}>{value.title}</a>}{" "}
            {index + 1 < data.length && ">"}
          </li>
        ))}
      </ol>
    </div>
  );
};
