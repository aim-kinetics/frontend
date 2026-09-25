import { createPageMetadata } from "@/commons/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { docsData } from "@/commons/data/sitemap";
import styles from "./styles.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "サイトマップ | AIMの教科書",
  description: "AIMの教科書のドキュメントとQ&Aをカテゴリ別に一覧できます。",
  path: "/sitemap",
  type: "website",
});

function DocLinks({ items }: { items: typeof docsData }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.dataType === "link" ? item.url : item.title}>
          {item.dataType === "link" ? (
            <Link href={item.url}>{item.title}</Link>
          ) : (
            <p className={styles.groupTitle}>{item.title}</p>
          )}
          {item.data && item.data.length > 0 && <DocLinks items={item.data} />}
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPage() {
  return (
    <div className={styles.container}>
      <h1>サイトマップ</h1>
      <p className={styles.description}>
        学びたいテーマから、ドキュメントやQ&Aを探せます。
      </p>
      <nav aria-label="サイトマップ">
        <section className={styles.overview}>
          <h2>サイト案内</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/">はじめに</Link>
            </li>
            <li>
              <Link href="/docs">ドキュメント</Link>
            </li>
            <li>
              <Link href="/docs/coaching">コーチング依頼</Link>
            </li>
          </ul>
        </section>
        <div className={styles.grid}>
          {docsData.map((item) => (
            <section
              className={styles.category}
              key={item.dataType === "link" ? item.url : item.title}
            >
              <h2>
                {item.dataType === "link" ? (
                  <Link href={item.url}>{item.title}</Link>
                ) : (
                  item.title
                )}
              </h2>
              {item.data && item.data.length > 0 && (
                <DocLinks items={item.data} />
              )}
            </section>
          ))}
        </div>
      </nav>
    </div>
  );
}
