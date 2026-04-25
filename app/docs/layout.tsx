"use client";
import { SideMenu } from "@/commons/components/SideMenu.tsx/idnex";
import style from "./styles.module.css";
import { Breadcrumb, Data } from "@/commons/components/Breadcrumb";
import { breadcrumbData } from "./breadcrumData";
import mediaStyle from "@/commons/styles/media.module.css";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [data, setData] = useState<Data[]>([]);
  const router = usePathname();
  const currentPath = router;

  useEffect(() => {
    console.log("currentPath", currentPath);
    const tempData = breadcrumbData[currentPath] ?? [];
    setData(tempData);
    setIsShowMenu(false);
  }, [currentPath]);

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
        <div className={` ${style.sideMenu} ${isShowMenu ? style.show : ""}`}>
          <SideMenu />
        </div>
        <div className={style.content}>{children}</div>
      </div>
    </section>
  );
}
