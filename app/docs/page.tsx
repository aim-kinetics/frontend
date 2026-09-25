import { createPageMetadata } from "@/commons/metadata";
import style from "@/commons/styles/global.module.css";
import { Metadata } from "next";
import Link from "next/link";
import { docsData } from "@/commons/data/docs";

export const metadata: Metadata = createPageMetadata({
  title: "AIMの教科書 | ドキュメント",
  description:
    "マウスの動かし方や目の使い方など、AIMを学ぶためのドキュメントをまとめています。",
  path: "/docs",
  type: "website",
});
export default function RuleKineticsPage() {
  return (
    <>
      <div className={style.container}>
        {docsData.map((data) => (
          <div key={data.title}>
            <h1 className={style.header}>{data.title}</h1>
            <ul>
              {data.data?.map((data) => (
                <li key={data.title}>
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
    </>
  );
}
