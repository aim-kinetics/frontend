"use client";
import { SideMenu } from "@/commons/components/SideMenu.tsx";
import style from "./styles.module.css";
import { Breadcrumb, Data } from "@/commons/components/Breadcrumb";
import { breadcrumbData } from "./breadcrumData";
import mediaStyle from "@/commons/styles/media.module.css";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenuPath, setOpenMenuPath] = useState<string | null>(null);
  const currentPath = usePathname();
  const data: Data[] = breadcrumbData[currentPath] ?? [];
  const isShowMenu = openMenuPath === currentPath;

  return (
    <section className={style.container}>
      <div className={style.breadcrumb}>
        <button
          onClick={() => setOpenMenuPath(isShowMenu ? null : currentPath)}
          className={` ${mediaStyle.spOnly} ${style.icon}`}
        >
          <BookOpenIcon width="20" height="20" />
        </button>
        <Breadcrumb data={data} />
      </div>
      <div className={style.wrapper}>
        <div className={` ${style.sideMenu} ${isShowMenu ? style.show : ""}`}>
          <SideMenu />
        </div>
        <div className={style.content}>{children}</div>
      </div>
    </section>
  );
}
