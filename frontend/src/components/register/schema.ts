import { z } from "zod";

export const registerFormSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email(),
  phone: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  profilePic: z.string().url("Must be a valid URL"),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
  experience: z.string().min(1, "Required"),
  bio: z.string().min(100).max(500),
  resumeUrl: z.string().url("Must be a valid URL"),
  linkedin: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
  portfolio: z.string().url().optional().or(z.literal("")),
  twitter: z.string().url().optional().or(z.literal("")),
});

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
