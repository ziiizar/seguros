import { Lead } from "@prisma/client";

export function processLeadsData(leads: Lead[] | null) {
  if (!leads) return [];

  const leadsPerMonth: { [key: string]: { total: number; rejected: number } } = {};

  leads.forEach((lead) => {
    const month = lead.createdAt.toLocaleString("default", { month: "short" });
    if (!leadsPerMonth[month]) {
      leadsPerMonth[month] = { total: 0, rejected: 0 };
    }

    leadsPerMonth[month].total += 1;
    if (lead.status === "REJECTED") {
      leadsPerMonth[month].rejected += 1;
    }
  });

  return Object.entries(leadsPerMonth).map(([month, { total, rejected }]) => ({
    month,
    total,
    rejected,
  }));
}

export type ProcessedLeadData = {
    month: string;
    total: number;
    rejected: number;
  }[];
  