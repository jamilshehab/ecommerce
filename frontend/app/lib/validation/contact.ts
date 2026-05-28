// lib/validations/contact.ts

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.email("Invalid email"),
  phone: z.string().min(8, "Phone number is too short"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
