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
    <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px]">
      <ResponsiveContainer width="100%" height={240}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="58%"
          data={data}
          margin={{ top: 10, right: 24, bottom: 10, left: 24 }}
        >
          <PolarGrid stroke="#ffffff20" />

          <PolarAngleAxis
            dataKey="dimension"
            tick={({ payload, x, y, textAnchor }) => {
              const label = String(payload.value);

              if (label === "Communication") {
                return (
                  <text
                    x={x}
                    y={y}
                    textAnchor={textAnchor}
                    fill="#ddd"
                    fontSize={10}
                  >
                    <tspan x={x} dy="0">Communi-</tspan>
                    <tspan x={x} dy="12">cation</tspan>
                  </text>
                );
              }

              if (label === "Attachement") {
                return (
                  <text
                    x={x}
                    y={y}
                    textAnchor={textAnchor}
                    fill="#ddd"
                    fontSize={10}
                  >
                    <tspan x={x} dy="0">Attache-</tspan>
                    <tspan x={x} dy="12">ment</tspan>
                  </text>
                );
              }

              return (
                <text
                  x={x}
                  y={y}
                  textAnchor={textAnchor}
                  fill="#ddd"
                  fontSize={10}
                >
                  {label}
                </text>
              );
            }}
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
