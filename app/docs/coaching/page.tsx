import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import { Breadcrumb } from "@/commons/components/Breadcrumb";

export default function CoachingPage() {
  return (
    <>
      <div className={style.container}>
        <h1>コーチング受け付けてます</h1>
        <p>X（旧twitter）にてコーチング受け付けてます！</p>
        <a href="https://x.com/kurabuwa25877" target="_blank">
          xアカウントはこちら
        </a>
      </div>
    </>
  );
}
