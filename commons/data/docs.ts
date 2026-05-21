type DocLinkData = {
  dataType: "link";
  title: string;
  url: string;
};
type DocHeaderData = {
  dataType: "header";
  title: string;
};

type DocData = ((DocHeaderData | DocLinkData) & { data?: DocData })[];
export const docsData: DocData = [
  {
    title: "体の使い方",
    dataType: "header",
    data: [
      {
        dataType: "link",
        title: "コントロールはマウスから！",
        url: "/docs/kinetics/control-from-mouse",
      },
      {
        dataType: "link",
        title: "指先を動かさないで！",
        url: "/docs/kinetics/dont-move-finger",
      },
      {
        dataType: "link",
        title: "腕を持ち上げない！",
        url: "/docs/kinetics/dont-lift-arm",
      },
      {
        dataType: "link",
        title: "センサーの意識って結局なに？",
        url: "/docs/kinetics/sensor-awareness",
      },
      {
        dataType: "link",
        title: "骨盤周りに上半身の体重を任せる",
        url: "/docs/kinetics/pelvis-support-upper-body-weight",
      },
    ],
  },
  {
    title: "目の使い方",
    dataType: "header",
    data: [
      {
        dataType: "link",
        title: "爆速神経回路で反射しよう！",
        url: "/docs/eye/react-with-lightning-fast",
      },
      {
        dataType: "link",
        title: "目の動きを手で再現する",
        url: "/docs/eye/recreate-eye-movements",
      },
      {
        dataType: "link",
        title: "目を動かす動かさない論争",
        url: "/docs/eye/move-your-eyes-or-not",
      },
    ],
  },
];
