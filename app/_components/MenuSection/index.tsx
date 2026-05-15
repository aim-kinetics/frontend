import {
  BoltIcon,
  CursorArrowRaysIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import style from "./styles.module.css";
import Image from "next/image";
import { docsData } from "@/commons/data/docs";
export const MenuSection: React.FC = () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>AIM理論基礎</h2>
      <ul className={style.list}>
        {docsData.map((data, index) => (
          <li className={style.listItem}>
            <div className={style.listItemHeader}>
              <p className={style.number}>{index + 1}</p>
              <p className={style.listItemLink}>{data.title}</p>
            </div>
            <ul className={style.subList}>
              {data.data?.map((data, index) => (
                <li className={style.subListItem}>
                  <p className={style.subNumber}>{index + 1}.</p>
                  {data.dataType === "link" ? (
                    <Link href={data.url} className={style.subListItemLink}>
                      {data.title}
                    </Link>
                  ) : (
                    <p className={style.subListItemLink}>{data.title}</p>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
