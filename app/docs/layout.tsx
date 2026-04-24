"use client";
import { SideMenu } from "@/commons/components/SideMenu.tsx/idnex";
import style from "./styles.module.css";
import { Breadcrumb, Data } from "@/commons/components/Breadcrumb";
import { breadcrumbData } from "./breadcrumData";
import mediaStyle from "@/commons/styles/media.module.css";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const currentPath = new URL(window.location.href).pathname;
    const tempData = breadcrumbData[currentPath] ?? [];
    setData(tempData);
  }, []);

  return (
    <section className={style.container}>
      <div className={style.breadcrumb}>
        <button
          onClick={() => setIsShowMenu((prev) => !prev)}
          className={` ${mediaStyle.spOnly} ${style.icon}`}
        >
          <BookOpenIcon width="20" height="20" />
        </button>
        <Breadcrumb data={data} />
      </div>
      <div className={style.wrapper}>
        {isShowMenu && (
          <div className={style.sideMenu}>
            <SideMenu />
          </div>
        )}
        <div className={style.content}>{children}</div>
      </div>
    </section>
  );
}
