import Link from "next/link";
import style from "./styles.module.css";
import { docsData } from "@/commons/data/docs";
export const SideMenu: React.FC = () => {
  return (
    <div className={style.container}>
      {docsData.map((data) => (
        <div key={data.title}>
          <p className={style.title}>{data.title}</p>
          <ul className={style.list}>
            {data.data?.map((data) => (
              <li className={style.item} key={data.title}>
                {data.dataType === "link" ? (
                  <Link href={data.url}>{data.title}</Link>
                ) : (
                  <p>{data.title}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
