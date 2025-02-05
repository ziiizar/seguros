import LeadsAnalytics from "@/components/Admin/Dashboard/LeadsAnalytics";
import { PointerRevealCard } from "@/components/ui/PointerRevealCard";
import { routes } from "@/constants/routes";
import { getLeads } from "@/data/lead";
import Link from "next/link";

const Page = async () => {
  const newLeads = await getLeads("NEW");
  const leads = await getLeads();
  const rejecteds = await getLeads("REJECTED");
  const contacted = await getLeads("CONTACTED");
  // const enrolled = await getLeads("ENROLLED");

  return (
    <main className="[grid-area:main]">
      <div className="grid grid-cols-3 gap-2 grid-rows-12 w-full h-full">
        {/* Main Feature Card */}
        {/* <Link className="row-span-8 col-span-2" href={`${routes.adminLeads}`}> */}
        <div className="row-span-8 col-span-2 size-full col-start-1 row-start-1 bg-zinc-800 rounded-xl px-4 py-5">
          {" "}
          {leads ? (
            <LeadsAnalytics leads={leads}></LeadsAnalytics>
          ) : (
            <h3>No leads</h3>
          )}
        </div>
        {/* </Link> */}

        {/* Stats Card - Contacted */}

        
        <Link className="row-span-5 col-span-1" href={`${routes.adminLeads}?status=CONTACTED`}>
        <PointerRevealCard
          title="Contacted Leads"
          description="Track the leads that have been successfully contacted. Use this data to monitor follow-up progress and conversions."
          data={contacted ? contacted?.length : 0}
          className=" size-full"
        ></PointerRevealCard>
        </Link>
        <Link className="row-span-7 col-span-1 col-start-3 row-start-6" href={`${routes.adminLeads}?status=NEW`}>
        <PointerRevealCard
          title="New Leads"
          description="Explore recently added leads. Focus your efforts on these fresh opportunities to maximize potential conversions."
          data={newLeads ? newLeads.length : 0}
          className=" size-full"
        ></PointerRevealCard>
 </Link>
      

        <Link className="row-span-4 col-span-1 col-start-1 row-start-9" href={`${routes.adminLeads}?status=ENROLLED`}>
        <PointerRevealCard
          title="Enrolled Clients"
          description="Use this to measure overall success rates."
          data={contacted ? contacted?.length : 0}
          className="size-full"
        ></PointerRevealCard>
        </Link>


        <Link className="row-span-4 col-span-1 col-start-2 row-start-9" href={`${routes.adminLeads}?status=REJECTED`}>
        <PointerRevealCard
          title="Rejected Leads"
          description="Analyze reasons to refine your processes."
          data={rejecteds ? rejecteds.length : 0}
          className=" size-full"
        ></PointerRevealCard>
         </Link>
      </div>
    </main>
  );
};

export default Page;
