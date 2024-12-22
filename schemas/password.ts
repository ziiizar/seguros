import { passwordRequirements } from "../constants/registerRequirements";
import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(10, passwordRequirements[0].message) // At least 10 Characters
  .refine((value) => /[A-Z]/.test(value), passwordRequirements[1].message) // At least 1 Uppercase letter
  .refine((value) => /[a-z]/.test(value), passwordRequirements[2].message) // At least 1 Lowercase letter
  .refine(
    (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
    passwordRequirements[3].message
  ) // At least 1 Special character
  .refine((value) => /[0-9]/.test(value), passwordRequirements[4].message); // At least 1 Number
