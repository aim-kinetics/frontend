import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import style from "@/commons/styles/global.module.css";
import { Breadcrumb } from "@/commons/components/Breadcrumb";

export default function RuleAbdominalBreathingPage() {
  return (
    <>
      <div className={style.container}>
        <h1>ゆっくり呼吸をしよう</h1>
        <p>
          呼吸は様々なスポーツで重要な役割を果たすことが知られていますが、FPSゲームにおいても例外ではありません。
        </p>
        <h2>なぜゆっくり呼吸をするべきか</h2>
        <p>
          呼吸において吸うよりも吐くほうが反応速度は速いとされています。
          <br />
          すなわち、短く息を吸って長く息を吐くことが反応速度を速くすることにつながります。
        </p>
        <h2>腹式呼吸をしよう</h2>
        <p>
          腹式呼吸は、息を吸うときに腹部を膨らませ、吐くときに腹部をへこませる呼吸法です。
          <br />
          この呼吸法は、息を吸う時間を短く、吐く時間を長く保ちやすい呼吸法になります。別に短く吸って長く吐くことができるなら呼吸法はなんでもいいと思いますが腹式呼吸が一番やりやすいと思います。
        </p>
        <p>実践においては、意識して息を吸うことが大事です。</p>
        <p>
          たまに集中しすぎて息を吸うことを忘れてしまう人が多いですが常に反応速度を高めようとして吸うタイミングを失っているため起こる現象です。
          <br />
          息を吸うタイミングを意識してみましょう。
        </p>
      </div>
    </>
  );
}
