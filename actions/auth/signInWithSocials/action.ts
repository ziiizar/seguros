"use server";

import { signIn } from "@/auth";
import { routes } from "@/constants/routes";
import { AuthProvider } from "@/types/auth";

export const signInWithSocials = async ({
  provider,
}: {
  provider: AuthProvider;
}) => {
  await signIn(provider, { redirectTo: routes.home });
};
