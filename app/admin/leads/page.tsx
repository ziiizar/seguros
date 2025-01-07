import LeadsTable from "@/components/Admin/Lead/LeadsTable";
import { getLeads } from "@/data/lead";

const page = async () => {
  const leads = await getLeads();
  console.log(leads);
  return (
    <div>
      {leads && leads.length > 0 && <LeadsTable leads={leads}></LeadsTable>}
    </div>
  );
};

export default page;
