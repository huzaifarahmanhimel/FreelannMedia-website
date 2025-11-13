import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    side: "left",
    question: "Tell me about your agency?",
    answer:
      "At MZ Media, we help coaches and trainers build their personal brand through high quality video editing and social media marketing.",
  },
  {
    id: 2,
    side: "left",
    question: "Tell me about your content plan?",
    answer:
      "We create a 90-day content roadmap with hooks, topics, and formats that align with your goals, so you never have to guess what to post.",
  },
  {
    id: 3,
    side: "left",
    question: "What services will you provide?",
    answer:
      "Strategy, scripting, editing, posting, and performance tracking. You focus on serving clients, we handle the content engine.",
  },
  {
    id: 4,
    side: "right",
    question: "What if I don’t get the results?",
    answer:
      "We set clear KPIs upfront and review performance monthly so you always know what’s working and what we’re improving.",
  },
  {
    id: 5,
    side: "right",
    question: "Why wouldn’t I hire a freelancer?",
    answer:
      "With us, you get a plugged-in content team, not a single overloaded freelancer. Strategy, consistency, and quality all under one roof.",
  },
  {
    id: 6,
    side: "right",
    question: "Tell me about your workflow?",
    answer:
      "We batch-record once, then turn your footage into weekly content with a simple feedback loop inside Notion and Drive.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.35, ease: "easeOut" },
  }),
};

const FAQCard = ({ item, index, isOpen, onToggle }) => {
  return (
    <motion.button
      type="button"
      className="group w-full rounded-3xl bg-[#10111a]/90 border border-white/5 text-left px-5 sm:px-6 py-4 sm:py-5 flex flex-col gap-3 shadow-[0_18px_45px_rgba(0,0,0,0.6)] hover:bg-[#151722] transition-colors"
      initial="hidden"
      animate="visible"
      custom={index}
      variants={cardVariants}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-base sm:text-lg font-medium text-white">
          {item.question}
        </p>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10">
          <motion.span
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-block text-white text-lg leading-none"
          >
            
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>
          </motion.span>
        </span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const leftFaqs = faqs.filter((f) => f.side === "left");
  const rightFaqs = faqs.filter((f) => f.side === "right");

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="w-full bg-[#000000] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-zinc-400 uppercase">
            Any queries you have
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="text-white">Questions You May </span>
            <span className="text-zinc-300">Ask</span>
          </h2>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-5">
            {leftFaqs.map((item, index) => (
              <FAQCard
                key={item.id}
                item={item}
                index={index}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:gap-5">
            {rightFaqs.map((item, index) => (
              <FAQCard
                key={item.id}
                item={item}
                index={index + leftFaqs.length}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
