import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const footerLinks = {
  projectNova: [
    { label: "About Nova", href: "/#about" },
    { label: "Timeline", href: "/#timeline" },
    { label: "Prize Pool", href: "/#prizes" },
    { label: "Organizing Committee", href: "/#committee" },
    { label: "Corporate Partners", href: "/#partners" },
  ],
  competition: [
    { label: "School Track", href: "/register?track=school" },
    { label: "University Track", href: "/register?track=university" },
    { label: "Registration", href: "/register" },
    { label: "FAQ", href: "/#committee" },
    { label: "Rules & Guidelines", href: "/#rules" },
  ],
  partners: [
    { label: "Become a Partner", href: "/#partners" },
    { label: "Long Term Partners", href: "/#partners" },
    { label: "Partner Benefits", href: "/#partners" },
    { label: "Contact Us", href: "/#contact" },
  ],
  aiesec: [
    { label: "AIESEC in USJ", href: "https://aiesec.org" },
    { label: "Global Volunteer", href: "https://aiesec.org/global-volunteer" },
    { label: "Global Talent", href: "https://aiesec.org/global-talent" },
    { label: "Global Teacher", href: "https://aiesec.org/global-teacher" },
  ],
};

const socialLinks = [
  { icon: FaTwitter, href: "https://twitter.com/aiesecusj", label: "Twitter" },
  { icon: FaGithub, href: "https://github.com/aiesecusj", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/company/aiesecusj", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/aiesecusj", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtube.com/@aiesecusj", label: "YouTube" },
];

const contactInfo = [
  { icon: Mail, label: "projectnova@aiesec.net", href: "mailto:projectnova@aiesec.net" },
  { icon: MapPin, label: "University of Sri Jayewardenepura, Sri Lanka", href: "#" },
  { icon: Phone, label: "+94 77 081 2900", href: "tel:+94770812900" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600">
                <span className="text-white font-black text-lg">N</span>
                <span className="absolute inset-0 -translate-y-0.5 bg-gradient-to-br from-violet-400 to-indigo-400 opacity-50 rounded-xl" />
              </span>
              Project Nova
            </Link>
            <p className="mt-4 max-w-xs text-slate-400 text-sm leading-relaxed">
              A dynamic tech-based event designed for school and university students, creating a platform
              where innovation meets opportunity. Organized by AIESEC in University of Sri Jayewardenepura.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-all hover:bg-violet-600/20 hover:text-violet-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Project Nova</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.projectNova.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-violet-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Competition</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.competition.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-violet-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Partners</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.partners.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-violet-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">AIESEC</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.aiesec.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 transition-colors hover:text-violet-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Project Nova - AIESEC in University of Sri Jayewardenepura. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="flex items-center gap-1.5 transition-colors hover:text-violet-300"
              >
                <contact.icon className="h-4 w-4" aria-hidden="true" />
                <span>{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-t from-violet-600/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-t from-indigo-600/10 to-transparent blur-3xl" />
      </div>
    </footer>
  );
}