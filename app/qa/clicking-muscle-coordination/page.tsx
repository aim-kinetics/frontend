import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import { Breadcrumb } from "@/commons/components/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIMの教科書 | クリックによる力みを解消する",
  description: "",
};
export default function RuleEyePage() {
  return (
    <>
      <div className={style.container}>
        <h1>Q: クリックによる力みを解消する方法はありますか？</h1>
        <h2>A: 前腕からクリックすることを意識しましょう</h2>
        <p>
          こちらの動画の肘の前の筋肉に注目してみてくださいクリックと連動してぴくぴく動いてることがわかると思います。
        </p>
        <iframe
          style={{ width: "560", height: "315", aspectRatio: "16/9" }}
          src="https://www.youtube.com/embed/BqKhLmMm4i0?si=--TLVV0bGmPNDdQo&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <br></br>
        <p>
          これは
          <Link href="/docs/kinetics/dont-move-finger">指を動かさない</Link>
          で説明したように前腕の筋肉が指の腱を動かしていることを示しています。指単体でクリックするのではなく、前腕からクリックする意識を持つことで、力みを減らすことができます。
        </p>
        <Image
          src="/image/指屈筋群浅層.jpeg"
          alt="親指の動き"
          width={600}
          height={400}
        />
      </div>
    </>
  );
}
