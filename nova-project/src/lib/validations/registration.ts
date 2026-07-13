import { z } from "zod";

const sanitizeHtml = (str: string) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

export const memberSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters")
    .max(150, "Full name cannot exceed 150 characters")
    .transform(sanitizeHtml),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .transform(sanitizeHtml),
  whatsapp_no: z
    .string()
    .trim()
    .min(8, "WhatsApp number must be at least 8 digits")
    .max(20, "WhatsApp number cannot exceed 20 characters")
    .transform(sanitizeHtml),
  nic_no: z
    .string()
    .trim()
    .min(5, "NIC/ID number must be at least 5 characters")
    .max(20, "NIC/ID number cannot exceed 20 characters")
    .transform(sanitizeHtml),
  is_leader: z.boolean(),
});

export const registrationSchema = z.object({
  teamName: z
    .string()
    .trim()
    .min(3, "Team name must be at least 3 characters")
    .max(100, "Team name cannot exceed 100 characters")
    .transform(sanitizeHtml),
  track: z.enum(["school", "university"], {
    message: "Please select a competition track",
  }),
  members: z
    .array(memberSchema)
    .min(1, "A team must have at least 1 member")
    .max(5, "A team cannot have more than 5 members")
    .refine(
      (members) => members.filter((m) => m.is_leader).length === 1,
      { message: "Exactly one team member must be designated as the leader" }
    ),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
export type MemberFormData = z.infer<typeof memberSchema>;
