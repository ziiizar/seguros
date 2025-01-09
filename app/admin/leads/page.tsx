import LeadsTable from "@/components/Admin/Lead/LeadsTable";
import Search from "@/components/Admin/Search";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllLeads, getLeads } from "@/data/lead";
import { ClientStatus } from "@prisma/client";
import { Trophy, Users, TrendingUp } from 'lucide-react';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    status?: ClientStatus | null;
    createdAt?: Date | string | null;
  }>;
}) => {
  const { status, createdAt } = await searchParams;
  const createdAtDate =
    createdAt && createdAt !== "All" ? new Date(createdAt) : undefined;

  // Get filtered leads based on search params
  const leads = status
    ? await getLeads(status, createdAtDate)
    : await getLeads(undefined, createdAtDate);

  // Get all leads for total count and calculations
  const allLeads = await getAllLeads();
  
  // Get enrolled leads for conversion rate and active clients
  const enrolledLeads = allLeads?.filter(lead => lead.status === "ENROLLED") || [];
  
  // Calculate conversion rate (enrolled vs total)
  const conversionRate = allLeads?.length 
    ? Math.round((enrolledLeads.length / allLeads.length) * 100) 
    : 0;

  // Active clients are enrolled leads
  const activeClients = enrolledLeads.length;
  const activeClientsTarget = 30; // Target number of active clients
  const activeClientsProgress = Math.min((activeClients / activeClientsTarget) * 100, 100);

  return (
    <div className="flex flex-col bg-zinc-800 rounded-xl p-3 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Total Leads Card */}
        <Card className="bg-zinc-900 border-zinc-800 transition-all hover:border-zinc-700">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-zinc-100 text-lg font-medium">Milestone</CardTitle>
            <Trophy className="h-5 w-5 text-salmon-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <CardDescription className="text-zinc-400">Up to 100 Leads</CardDescription>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-salmon-600 to-salmon-500 rounded-full transition-all duration-1000 ease-in-out"
                  style={{
                    width: `${Math.min((allLeads?.length || 0) / 100 * 100, 100)}%`,
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-400">Progress</p>
                <p className="text-sm font-medium text-salmon-500">
                  {allLeads ? allLeads.length : 0} / 100
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conversion Rate Card */}
        <Card className="bg-zinc-900 border-zinc-800 transition-all hover:border-zinc-700">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-zinc-100 text-lg font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-5 w-5 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <CardDescription className="text-zinc-400">Goal: 30%</CardDescription>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full transition-all duration-1000 ease-in-out"
                  style={{
                    width: `${Math.min(conversionRate, 30)}%`,
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-400">Current</p>
                <p className="text-sm font-medium text-emerald-500">{conversionRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Clients Card */}
        <Card className="bg-zinc-900 border-zinc-800 transition-all hover:border-zinc-700">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-zinc-100 text-lg font-medium">Active Clients</CardTitle>
            <Users className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <CardDescription className="text-zinc-400">Target: {activeClientsTarget} clients</CardDescription>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all duration-1000 ease-in-out"
                  style={{
                    width: `${activeClientsProgress}%`,
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-400">Current</p>
                <p className="text-sm font-medium text-blue-500">{activeClients} / {activeClientsTarget}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full h-3/4">
        <Search />
        {leads && leads.length > 0 ? (
          <LeadsTable leads={leads} />
        ) : (
          <p>No leads available</p>
        )}
      </div>
    </div>
  );
};

export default page;

