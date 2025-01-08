"use client";

import { Bar, BarChart, CartesianGrid } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {ProcessedLeadData} from "@/lib/processLeadsData";

const chartConfig = {
  total: {
    label: "Total Leads",
    color: "#ed3e09",
  },
  rejected: {
    label: "Rejected Leads",
    color: "#fabaa7",
  },
} satisfies ChartConfig;

export default function GeneralChart({ data }: { data: ProcessedLeadData }) {
  return (
    <ChartContainer config={chartConfig} className="h-auto w-full xl:pb-6">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        {/* <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        /> */}
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="total" fill="#ed3e09" radius={4} />
        <Bar dataKey="rejected" fill="#fabaa7" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
