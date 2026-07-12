import { z } from "zod";

export const memberSchema = z.object({
  fullname: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(150, "Full name cannot exceed 150 characters"),
  email: z.string().email("Please enter a valid email address"),
  whatsapp_no: z
    .string()
    .min(8, "WhatsApp number must be at least 8 digits")
    .max(20, "WhatsApp number cannot exceed 20 characters"),
  nic_no: z
    .string()
    .min(5, "NIC/ID number must be at least 5 characters")
    .max(20, "NIC/ID number cannot exceed 20 characters"),
  is_leader: z.boolean(),
});

export const registrationSchema = z.object({
  teamName: z
    .string()
    .min(3, "Team name must be at least 3 characters")
    .max(100, "Team name cannot exceed 100 characters"),
  track: z.enum(["school", "university"], {
    message: "Please select a competition track",
  }),
  members: z
    .array(memberSchema)
    .min(3, "A team must have at least 3 members")
    .max(5, "A team cannot have more than 5 members")
    .refine(
      (members) => members.filter((m) => m.is_leader).length === 1,
      { message: "Exactly one team member must be designated as the leader" }
    ),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
export type MemberFormData = z.infer<typeof memberSchema>;
