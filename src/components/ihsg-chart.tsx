/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
"use client";

import { Area, AreaChart } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

export const description = "A simple area chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function IHSGChart() {
  return (
    <ChartContainer className="w-full h-14" config={chartConfig}>
      <AreaChart accessibilityLayer data={chartData}>
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
          </linearGradient>
        </defs>
        <Area
          dataKey="desktop"
          type="natural"
          fill="url(#chartGradient)"
          strokeWidth={1.5}
          fillOpacity={0.4}
          stroke="#4ade80"
        />
      </AreaChart>
    </ChartContainer>
  );
}
