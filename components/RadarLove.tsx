"use client";

import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const updateViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  const data = [
    { dimension: "Communication", value: Math.min(score + 5, 100) },
    { dimension: "Attachement", value: Math.max(score - 5, 0) },
    { dimension: "Stabilité", value: score },
    { dimension: "Vision", value: Math.min(score + 2, 100) }
  ];

  return (
    <div className="mx-auto w-full max-w-[300px] sm:max-w-[220px]">
      <div className="h-[220px] sm:h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={data}
            outerRadius={isMobile ? 78 : 65}
            margin={
              isMobile
                ? { top: 10, right: 34, bottom: 10, left: 34 }
                : { top: 0, right: 0, bottom: 0, left: 0 }
            }
          >
            <PolarGrid stroke="#ffffff20" />

            <PolarAngleAxis
              dataKey="dimension"
              tick={({ payload, x, y }) => {
                const label = String(payload.value);

                if (!isMobile) {
                  return (
                    <text x={x} y={y} textAnchor="middle" fill="#ddd" fontSize={10}>
                      {label === "Communication" ? (
                        <>
                          <tspan x={x} dy="0">Communi-</tspan>
                          <tspan x={x} dy="11">cation</tspan>
                        </>
                      ) : label === "Attachement" ? (
                        <>
                          <tspan x={x} dy="0">Attache-</tspan>
                          <tspan x={x} dy="11">ment</tspan>
                        </>
                      ) : (
                        label
                      )}
                    </text>
                  );
                }

                if (label === "Communication") {
                  return (
                    <text x={x} y={y - 4} textAnchor="middle" fill="#ddd" fontSize={10}>
                      <tspan x={x} dy="0">Communi-</tspan>
                      <tspan x={x} dy="11">cation</tspan>
                    </text>
                  );
                }

                if (label === "Attachement") {
                  const tx = x - 20;
                  return (
                    <text x={tx} y={y} textAnchor="start" fill="#ddd" fontSize={10}>
                      <tspan x={tx} dy="0">Attache-</tspan>
                      <tspan x={tx} dy="11">ment</tspan>
                    </text>
                  );
                }

                if (label === "Vision") {
                  return (
                    <text x={x + 20} y={y} textAnchor="end" fill="#ddd" fontSize={10}>
                      {label}
                    </text>
                  );
                }

                if (label === "Stabilité") {
                  return (
                    <text x={x} y={y + 4} textAnchor="middle" fill="#ddd" fontSize={10}>
                      {label}
                    </text>
                  );
                }

                return (
                  <text x={x} y={y} textAnchor="middle" fill="#ddd" fontSize={10}>
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
    </div>
  );
}
