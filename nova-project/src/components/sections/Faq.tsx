"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Globe, href: "https://codesplash.lk", label: "Website" },
];

const faqItems = [
  {
    question: "What is Project Nova?",
    answer: "Project Nova is a dynamic, tech-based ecosystem curated for school and university students, building an active bridge where future innovation meets direct corporate opportunities. Managed alongside a global student-driven non-profit network, it connects young thinkers directly with progressive enterprises.",
  },
  {
    question: "Who can participate?",
    answer: "The challenge is tailored broadly for school and university students across Sri Lanka who show a distinct curiosity for technical problem-solving, innovative ideation, and leadership development.",
  },
  {
    question: "How can participate in Project Nova?",
    answer: "Teams can register formally on our page during the initial launch, granting immediate access to the early workshop modules and proposal submission portals.",
  },
  {
    question: "What is the competition format?",
    answer: "The event runs over two major phases. First Phase handles conceptual proposal collection and essential skill-building workshops. Second Phase requires qualified teams to submit concrete project completions, leading to live panel presentations.",
  },
  {
    question: "When do registrations open?",
    answer: "Registrations will open soon! Keep an eye on our social media channels and the registration section of this website for the official announcement.",
  },
  {
    question: "Is participation free?",
    answer: "Yes! Participation in Project Nova is completely free, providing every eligible student with an equal opportunity to compete and innovate.",
  },
  {
    question: "What rewards can winners expect?",
    answer: "Teams compete for a comprehensive cash prize layout consisting of LKR 75,000 for 1st place, LKR 50,000 for 2nd place, LKR 30,000 for 3rd place, and LKR 10,000 each for the next 10 places, accompanied by extensive corporate visibility and performance validation reports.",
  },
];

interface FaqItemProps {
  item: typeof faqItems[number];
  index: number;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
  scrollYProgress: MotionValue<number>;
}

function FaqItem({ item, index, openIndex, setOpenIndex, scrollYProgress }: FaqItemProps) {
  const isLeft = index % 2 === 0;

  const x = useTransform(
    scrollYProgress,
    [0.30, 0.50],
    ["0vw", isLeft ? "-120vw" : "120vw"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.30, 0.50],
    [1, 0]
  );

  const isOpen = openIndex === index;

  return (
    <motion.div
      style={{ x, opacity }}
      className={`group rounded-2xl bg-slate-950/75 backdrop-blur-md border transition-all duration-300 ${
        isOpen
          ? "border-[#FF5533] shadow-[0_0_20px_rgba(255,85,51,0.25)]"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="p-5 sm:p-6">
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
        >
          <span
            className={`font-space font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 ${
              isOpen ? "text-[#FF5533]" : "text-white group-hover:text-slate-200"
            }`}
          >
            {item.question}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className={`text-xl font-bold flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-all group-hover:bg-white/10 ${
              isOpen ? "text-[#FF5533]" : "text-slate-400"
            }`}
          >
            +
          </motion.span>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-4 mt-4 border-t border-white/5 text-slate-300 font-sans text-xs sm:text-sm md:text-base leading-relaxed">
            {item.answer}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Faq() {
  // containerRef scopes useScroll ONLY to the sticky scroll-jacked part.
  // The footer lives outside this ref in normal document flow.
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background cross-fade: cosmic → egyptian
  const cosmicBgScale = useTransform(scrollYProgress, [0, 0.35], [1.0, 1.08]);
  const egyptBgScale = useTransform(scrollYProgress, [0.35, 0.70], [1.08, 1.0]);
  const cosmicBgOpacity = useTransform(scrollYProgress, [0.25, 0.45], [1, 0]);
  const egyptBgOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);

  // FAQ content fades out first
  const faqContentOpacity = useTransform(scrollYProgress, [0.20, 0.40], [1, 0]);
  const faqHeaderY = useTransform(scrollYProgress, [0.20, 0.40], ["0px", "-60px"]);
  const faqPointerEvents = useTransform(scrollYProgress, (v) => v > 0.40 ? "none" : "auto");
  const faqVisibility = useTransform(scrollYProgress, (v) => v > 0.42 ? "hidden" : "visible");

  // Register section fades in and stays at 1.0 for the rest of the section
  const registerOpacity = useTransform(scrollYProgress, [0.50, 0.70], [0, 1]);
  const registerY = useTransform(scrollYProgress, [0.50, 0.70], ["30px", "0px"]);
  const registerPointerEvents = useTransform(scrollYProgress, (v) => v >= 0.70 ? "auto" : "none");

  return (
    <section id="faq">

      {/* ── Sticky scroll-jacked zone: FAQ items + Register CTA ── */}
      {/* containerRef is scoped only here so scroll progress [0→1] maps
          exactly to this div's scroll range. Nothing below is affected. */}
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden select-none">

          {/* Backgrounds */}
          <div className="absolute inset-0 z-0">
            <motion.div
              style={{
                backgroundImage: "url('/images/cosmic_faq_bg.png')",
                scale: cosmicBgScale,
                opacity: cosmicBgOpacity,
              }}
              className="absolute inset-0 bg-cover bg-center origin-center"
            />
            <motion.div
              style={{
                backgroundImage: "url('/images/egyptian_register_bg.png')",
                scale: egyptBgScale,
                opacity: egyptBgOpacity,
              }}
              className="absolute inset-0 bg-cover bg-center origin-center"
            />
            <div className="absolute inset-0 bg-slate-950/60 pointer-events-none" />
          </div>

          {/* FAQ content */}
          <motion.div
            style={{ opacity: faqContentOpacity, pointerEvents: faqPointerEvents, visibility: faqVisibility }}
            className="relative z-10 w-full h-full flex flex-col justify-center py-20"
          >
            <motion.div
              style={{ y: faqHeaderY }}
              className="w-full text-center px-4 mb-8"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-orbitron font-bold tracking-wider text-white">
                FREQUENTLY ASKED <span className="text-[#FF5533]">QUESTIONS</span>
              </h2>
            </motion.div>

            <div className="w-full max-w-4xl mx-auto px-4">
              <div className="space-y-3 sm:space-y-4">
                {faqItems.map((item, index) => (
                  <FaqItem
                    key={index}
                    item={item}
                    index={index}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Register CTA — fades in over the Egyptian bg, stays until section ends */}
          <motion.div
            style={{ opacity: registerOpacity, y: registerY, pointerEvents: registerPointerEvents }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4"
          >
            <div className="text-center max-w-3xl flex flex-col items-center justify-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-black tracking-widest text-white mb-8 [text-shadow:0_0_30px_rgba(255,255,255,0.18)] select-none">
                READY TO DIVE IN?
              </h2>
              <div className="flex justify-center">
                <Link href="/register" className="relative group cursor-pointer inline-block">
                  <div className="absolute inset-0 rounded-full bg-[#FF5533] opacity-35 blur-xl group-hover:opacity-60 transition-opacity duration-300" />
                  <button className="relative px-12 py-5 rounded-full bg-[#FF5533] hover:bg-[#e04422] text-white font-space font-bold text-base tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,85,51,0.45)] hover:shadow-[0_0_35px_rgba(255,85,51,0.7)] hover:scale-105 active:scale-95 cursor-pointer">
                    REGISTER NOW
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Permanent static footer ─────────────────────────────────────
           This lives OUTSIDE the sticky scroll container in normal document
           flow. It is NEVER animated by scroll progress — it simply appears
           when the user scrolls past the sticky section, and stays there
           permanently. No fade-out, no cosmic-bg overlap possible.       ── */}
      <footer className="relative flex flex-col items-center justify-center gap-5 py-14 px-4 text-center overflow-hidden">

        {/* Egyptian background — matches the register section above */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/egyptian_register_bg.png')" }}
        />
        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 max-w-4xl w-full">

          {/* Quote */}
          <p className="text-slate-300 font-cormorant italic text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide max-w-xl">
            &ldquo;Every great journey begins with a conversation&rdquo;
          </p>

          {/* Email pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:uok.cssa@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-slate-950/40 backdrop-blur-sm text-slate-300 hover:text-white hover:border-[#FF5533]/50 hover:shadow-[0_0_15px_rgba(255,85,51,0.2)] transition-all duration-300 font-space text-[10px] sm:text-xs font-bold tracking-widest uppercase"
            >
              <Mail className="h-3.5 w-3.5 text-[#FF5533]" />
              <span>uok.cssa@gmail.com</span>
            </a>
            <a
              href="mailto:codesplash.cssa@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-slate-950/40 backdrop-blur-sm text-slate-300 hover:text-white hover:border-[#FF5533]/50 hover:shadow-[0_0_15px_rgba(255,85,51,0.2)] transition-all duration-300 font-space text-[10px] sm:text-xs font-bold tracking-widest uppercase"
            >
              <Mail className="h-3.5 w-3.5 text-[#FF5533]" />
              <span>codesplash.cssa@gmail.com</span>
            </a>
          </div>

          {/* Social media icons */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/40 border border-white/10 text-slate-300 hover:text-[#FF5533] hover:border-[#FF5533]/40 hover:bg-[#FF5533]/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center gap-3 text-white mt-1">
            <div className="flex items-center gap-2 select-none">
              <svg className="h-7 w-auto text-white" viewBox="0 0 24 36" fill="currentColor">
                <path d="M12 0C7.58 0 4 3.58 4 8c0 3.31 2.03 6.14 4.9 7.37L8 16.5c0 .28.22.5.5.5h2v6H6.5c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5H10.5v10c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V26h4c.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5H13.5v-6h2c.28 0 .5-.22.5-.5l-.9-1.13C17.97 14.14 20 11.31 20 8c0-4.42-3.58-8-8-8zm0 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              </svg>
              <span className="font-space font-black text-xl sm:text-2xl tracking-wider">CSSA</span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex flex-col text-left font-space leading-tight select-none">
              <span className="text-[8px] sm:text-[9px] font-black text-white tracking-widest uppercase">COMPUTER SCIENCE STUDENTS&apos; ASSOCIATION</span>
              <span className="text-[6.5px] sm:text-[7px] font-bold text-slate-400 tracking-wider uppercase">UNIVERSITY OF KELANIYA</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-white/10" />

          {/* Copyright */}
          <p className="text-[7.5px] sm:text-[8px] font-space font-bold tracking-widest text-slate-500 uppercase select-none">
            © CodeSplash 2026. | All Rights Reserved. | Organized by Faculty of Computing and Technology, University of Kelaniya.
          </p>
        </div>
      </footer>

    </section>
  );
}
