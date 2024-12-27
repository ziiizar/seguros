import { db } from "@/lib/db";

export const getLeads = async () => {
    try {
      const lead = await db.lead.findMany();
      return lead;
    } catch (error) {
      return null;
    }
  };
  
  export const getLeadById = async (id: string) => {
    try {
      return await db.lead.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      return null;
    }
  };