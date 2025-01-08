import LeadsTable from "@/components/Admin/Lead/LeadsTable";
import Search from "@/components/Admin/Search";
import { getLeads } from "@/data/lead";
import { ClientStatus } from "@prisma/client";

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

  const leads =
    status 
      ? await getLeads(status, createdAtDate)
      : await getLeads(undefined, createdAtDate);

  return (
    <div className="  flex flex-col bg-zinc-800 rounded-xl p-3 h-full">
      <div className=" flex justify-between h-48">
        <h3 className="text-white text-3xl">Leads </h3>
      </div>

        <Search />
      {leads && leads.length > 0 ? (
        <LeadsTable leads={leads} />
      ) : (
        <p>No leads available</p>
      )}
    </div>
  );
};

export default page;
