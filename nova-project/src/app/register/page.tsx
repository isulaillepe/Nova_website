import { RegistrationForm } from "@/components/sections/RegistrationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register for Nova Hackathon",
  description: "Register your team for the upcoming Nova Hackathon. Join 500,000+ developers building the future.",
};

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 pt-24 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-violet-600/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-600/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RegistrationForm />
      </div>
    </div>
  );
}
