import LeadsAnalytics from "@/components/Admin/Dashboard/LeadsAnalytics";
import { CardAnimated } from "@/components/ui/AnimatedCard";
import { routes } from "@/constants/routes";
import { getLeads } from "@/data/lead";
// import { processLeadsData } from "@/lib/processLeadsData";
import {  Users2, Settings } from "lucide-react";
import Link from "next/link";

const Page = async () => {
  const newLeads = await getLeads("NEW");
  const leads = await getLeads();
  const rejecteds = await getLeads("REJECTED");
  const contacted = await getLeads("CONTACTED");
  // const enrolled = await getLeads("ENROLLED");


  return (
    <div className="h-full">
      <div className="h-full flex flex-col [grid-area:main]">
        <div className="grid grid-cols-3 gap-2 flex-grow">
          {/* Main Feature Card */}
          {/* <Link className="row-span-2 col-span-2" href={`${routes.adminLeads}`}> */}
            <CardAnimated className="h-full w-full row-span-2 col-span-2 text-white">
          
              {leads && <LeadsAnalytics leads={leads}></LeadsAnalytics>}
            </CardAnimated>
          {/* </Link> */}

          {/* Stats Card - Contacted */}
          <Link className="" href={`${routes.adminLeads}?status=CONTACTED`}>
            <CardAnimated className="h-full">
              <div className="p-6 h-full flex flex-col justify-between">
                <h3 className="text-white">Contacted Leads</h3>
                <p className="text-zinc-400 text-sm">
                  Track the leads that have been successfully contacted. Use this data to monitor follow-up progress and conversions.
                </p>
                {/* <div className="w-12 h-12 rounded-full bg-salmon-500/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-salmon-500" />
                </div> */}
                <h3 className="text-white font-semibold ">{contacted ? contacted.length +1 : 0} leads</h3>
                <div className="mt-4">
                  {/* <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-salmon-600 to-salmon-500 rounded-full" />
                  </div>
                  <p className="text-xs text-zinc-500 mt-2">2.4k Active Listings</p> */}
                </div>
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-salmon-600 rounded-full blur-3xl"></div>
              </div>
            </CardAnimated>
          </Link>

          {/* Stats Card - New Leads */}
          <Link className="row-span-2" href={`${routes.adminLeads}?status=NEW`}>
            <CardAnimated className="h-full">
              <div className="p-6 h-full">
                <div className="bg-salmon-500/10 text-salmon-500 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  New Leads
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold text-white">
                    {newLeads ? newLeads.length  : 0}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Explore recently added leads. Focus your efforts on these fresh opportunities to maximize potential conversions.
                  </p>
                </div>
                <div className="absolute -bottom-8 left-20 w-20 h-20 bg-salmon-600 rounded-full blur-3xl"></div>
              </div>
            </CardAnimated>
          </Link>

          {/* Stats Card - Enrolled */}
          <Link className="" href={`${routes.adminLeads}?status=ENROLLED`}><CardAnimated className="h-full">
            <div className="p-6 h-full flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <Users2 className="w-5 h-5 text-salmon-500" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">Enrolled Clients</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Keep track of clients who have successfully completed enrollment. Use this to measure overall success rates.
                </p>
              </div>
            </div>
          </CardAnimated></Link>
          

          {/* Stats Card - Rejected */}
          <Link className="" href={`${routes.adminLeads}?status=REJECTED`}>
            <CardAnimated className="h-full">
              <div className="p-6 h-full flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-salmon-500" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Rejected Leads</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    <span className="font-semibold">{rejecteds ? rejecteds.length : 0}</span> leads have been marked as rejected. Analyze reasons to refine your processes.
                  </p>
                </div>
              </div>
            </CardAnimated>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
