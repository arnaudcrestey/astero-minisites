"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";

type Props = {
  score: number;
};

export default function RadarLove({ score }: Props) {

  const data = [
    { dimension: "Communication", value: score + 5 },
    { dimension: "Attachement", value: score - 5 },
    { dimension: "Stabilité", value: score },
    { dimension: "Projection", value: score + 2 }
  ];

  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadarChart data={data}>
        <PolarGrid stroke="#ffffff20" />
        <PolarAngleAxis dataKey="dimension" tick={{ fill: "#ddd", fontSize: 12 }} />
        <Radar
          dataKey="value"
          stroke="#c084fc"
          fill="#c084fc"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
