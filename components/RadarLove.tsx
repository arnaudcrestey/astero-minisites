"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

type Props = {
  score: number;
};

export default function RadarLove({ score }: Props) {

  const data = [
    { dimension: "Communication", value: Math.min(score + 5, 100) },
    { dimension: "Attachement", value: Math.max(score - 5, 0) },
    { dimension: "Stabilité", value: score },
    { dimension: "Vision", value: Math.min(score + 2, 100) }
  ];

  return (
    <div className="w-full max-w-[220px] mx-auto">

      <ResponsiveContainer width="100%" height={180}>

        <RadarChart outerRadius={65} data={data}>

          <PolarGrid stroke="#ffffff20" />

          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fill: "#ddd", fontSize: 10 }}
          />

          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />

          <Radar
            dataKey="value"
            stroke="#c084fc"
            fill="#c084fc"
            fillOpacity={0.55}
          />

        </RadarChart>

      </ResponsiveContainer>

    </div>
  );
}
