import GeneralChart from "@/components/Admin/Dashboard/GeneralChart";
import { CardAnimated } from "@/components/ui/AnimatedCard";
import { getLeads } from "@/data/lead";
import { processLeadsData } from "@/lib/processLeadsData";
import { BarChart3, Users2, Settings } from "lucide-react";

const Page = async () => {
  const newLeads = await getLeads("NEW");
  const leads = await getLeads();
  const rejecteds = await getLeads("REJECTED");
  // const contacted = await getLeads("CONTACTED")

  const monthlyLeadsData = processLeadsData(leads);
  return (
    <div>
      <div className="h-full flex flex-col [grid-area:main]">
        <div className="grid grid-cols-3 gap-2 flex-grow">
          {/* Main Feature Card */}
          <CardAnimated className="row-span-2 col-span-2">
            <div className="px-8  h-full relative">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">
                  Gráfico de pastel General
                </h2>
                <p className="text-zinc-400 text-sm">
                  Effortlessly list or browse residential and commercial
                  properties with detailed profiles, images, and virtual tours.
                </p>
              </div>

              <div className="flex-grow h-[150px] flex items-center justify-center mt-4 mb-6">
                <GeneralChart data={monthlyLeadsData}></GeneralChart>
              </div>

              {/* <div className="absolute top-10 right-10 w-32 h-32 bg-salmon-600/20 rounded-full blur-3xl"></div> */}
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-salmon-600/10 rounded-full blur-2xl"></div>
            </div>
          </CardAnimated>

          {/* Stats Card */}
          <CardAnimated>
            <div className="p-6 h-full flex flex-col justify-between">
              <h3 className="text-white">Contacted</h3>
              <div className="w-12 h-12 rounded-full bg-salmon-500/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-salmon-500" />
              </div>
              <div className="mt-4">
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-salmon-600 to-salmon-500 rounded-full" />
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  2.4k Active Listings
                </p>
              </div>
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-salmon-600 rounded-full blur-3xl"></div>
            </div>
          </CardAnimated>

          {/* Marketplace Card */}
          <CardAnimated className="row-span-2">
            <div className="p-6 h-full">
              <div className="bg-salmon-500/10 text-salmon-500 px-3 py-1 rounded-full text-sm font-medium inline-block">
                New Leads
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-medium text-white">
                  {newLeads ? newLeads.length + 1 : 0}
                </h3>
                <p className="text-sm text-zinc-400">
                  Seamlessly transition from managing to listing or selling
                  properties within the same platform.
                </p>
              </div>
              <div className="absolute -bottom-8 left-20 w-20 h-20 bg-salmon-600 rounded-full blur-3xl"></div>
            </div>
          </CardAnimated>

          {/* Management Card */}
          <CardAnimated>
            <div className="p-6 h-full flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <Users2 className="w-5 h-5 text-salmon-500" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">Enrolled</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Manage all aspects efficiently
                </p>
              </div>
            </div>
          </CardAnimated>

          {/* Settings Card */}
          <CardAnimated>
            <div className="p-6 h-full flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <Settings className="w-5 h-5 text-salmon-500" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">Rejected</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  <span>{rejecteds ? rejecteds.length + 1 : 0}</span> leads
                  rejected
                </p>
              </div>
            </div>
          </CardAnimated>
        </div>
      </div>
    </div>
  );
};

export default Page;
