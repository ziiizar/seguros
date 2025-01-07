'use server'

import { db } from "@/lib/db";
import { Lead } from "@prisma/client";

export const getLeads = async (): Promise<Lead[] | null> => {
    try {
      const leads = await db.lead.findMany();
      console.log("ssssssssssssssssss")
      console.log(leads)
      return leads;
    } catch (error) {
      console.log(error)
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