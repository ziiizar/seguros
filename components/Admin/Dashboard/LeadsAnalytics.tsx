"use client"

import * as React from "react"
import { Pie, PieChart, Label, Legend } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Lead } from "@prisma/client"

interface LeadsInsuranceDistributionProps {
  leads: Lead[]
}

const chartConfig = {
  HEALTH: {
    label: "Health",
    color: "#60a5fa",
  },
  LIFE: {
    label: "Life",
    color: "#10b981",
  },
  GENERAL: {
    label: "General",
    color: "#ed3e09",
  },
} satisfies ChartConfig

export default function LeadsInsuranceDistribution({ leads }: LeadsInsuranceDistributionProps) {
  const insuranceDistribution = leads.reduce((acc, lead) => {
    const insurance = lead.insuranceRequested
    if (insurance === "HEALTH" || insurance === "LIFE" || insurance === "GENERAL") {
      acc[insurance] = (acc[insurance] || 0) + 1
    }
    return acc
  }, {} as Record<keyof typeof chartConfig, number>)

  const chartData = Object.entries(insuranceDistribution).map(([name, value]) => ({
    name,
    value,
    fill: chartConfig[name as keyof typeof chartConfig].color,
  }))

  const totalLeads = chartData.reduce((sum, data) => sum + data.value, 0)

  return (
    <>
      <div className="text-center text-white mb-4">
        <h3 className="text-lg font-semibold">Requested Insurance Distribution</h3>
        <p className="text-sm text-gray-400">
          Breakdown of insurance types requested by leads
        </p>
      </div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[220px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={90}
            strokeWidth={2}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="text-3xl font-bold fill-white"
                      >
                        {totalLeads}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-gray-400 text-sm"
                      >
                        Leads
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
          <Legend className=""
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ marginTop: "28px", color: "#ffffff" }}
          />
        </PieChart>
      </ChartContainer>
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>
          Data is based on {totalLeads} leads and their requested insurance types.
        </p>
      </div>
    </>
  )
}
