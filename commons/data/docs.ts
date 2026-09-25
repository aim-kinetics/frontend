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
    title: "情報のインプット",
    dataType: "header",
    data: [
      {
        title: "視覚によるインプット",
        url: "/docs/input/visual-input",
        dataType: "link",
      },
      {
        title: "触覚によるインプット",
        url: "/docs/input/tactile-input",
        dataType: "link",
      },
      {
        title: "数多あるマウス操作論は触覚に通ずる",
        url: "/docs/input/mouse-operation",
        dataType: "link",
      },
    ],
  },

  {
    title: "マウスへのアウトプット",
    dataType: "header",
    data: [
      {
        title: "筋肉から見るアウトプット",
        url: "/docs/output/muscle-output",
        dataType: "link",
      },
      {
        title: "神経から見るアウトプット",
        url: "/docs/output/neural-output",
        dataType: "link",
      },
      {
        title: "内臓を下げてマウスを操作する",
        url: "/docs/output/elbow-output",
        dataType: "link",
      },
    ],
  },
  {
    title: "トレーニング方法",
    dataType: "header",
    data: [
      {
        title: "3層のレイヤーで画面をとらえる",
        url: "/docs/training/three-screen-layers",
        dataType: "link",
      },
      {
        title: "触覚フィードバックのトレーニング",
        url: "/docs/training/tactile-feedback-training",
        dataType: "link",
      },
      {
        title: "手全体の触覚を整える練習",
        url: "/docs/training/whole-hand-tactile-training",
        dataType: "link",
      },
      {
        title: "正中神経ストレッチ",
        url: "/docs/training/median-nerve-stretch",
        dataType: "link",
      },
    ],
  },
];
