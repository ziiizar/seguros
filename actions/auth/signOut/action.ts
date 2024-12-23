"use server";

import { signOut } from "@/auth";
import { routes } from "@/constants/routes";

export const signOutAction = async () => {
  await signOut({ redirectTo: routes.home });
};
