'use server'

import { db } from "@/lib/db";
import { Lead } from "@prisma/client";


export const getAllLeads = async(): Promise<Lead[] | null> => {
  try {
    return await db.lead.findMany()
  } catch (error) {
    return null
  }
}

export const getLeads = async (
  status?: Lead["status"],
  createdAt?: Date
): Promise<Lead[] | null> => {
  try {
    const leads = await db.lead.findMany({
      where: { active: true,
        ...(status !== undefined && { status }),
        ...(createdAt !== undefined && {
          createdAt: {
            gte: createdAt, // Filtra desde `createdAt` hacia adelante
          },
        }),
      },
    });
    return leads;
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