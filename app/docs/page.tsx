import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import { Breadcrumb } from "@/commons/components/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import { docsData } from "@/commons/data/docs";

export const metadata: Metadata = {
  title: "AIMの教科書 | ドキュメント",
  description:
    "マウスの動かし方や目の使い方など、AIMを学ぶためのドキュメントをまとめています。",
};
export default function RuleKineticsPage() {
  return (
    <>
      <div className={style.container}>
        {docsData.map((data) => (
          <>
            <h1 className={style.header}>{data.title}</h1>
            <ul>
              {data.data?.map((data) => (
                <li>
                  {data.dataType === "link" ? (
                    <Link href={data.url}>{data.title}</Link>
                  ) : (
                    <p>{data.title}</p>
                  )}
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </>
  );
}
