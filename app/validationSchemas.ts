import { z } from "zod";

export const createMessageSchema = z.object({
  first_name: z.string().min(1, "First name is required.").max(50),
  last_name: z.string().min(1, "Last name is required.").max(50),
  email: z.string().min(1, "Email is required.").max(50),
  message: z.string().min(1, "Your message is empty."),
});
