"use client";

import { useState, useRef, useEffect } from "react";
import { posts } from "@/data/posts";

interface QA {
  question: string;
  answer: string;
}

const qaPairs: QA[] = [
  {
    question: "What does MRC do?",
    answer:
      "MRC (Mechanism for Relational Change) empowers women and girls in rural Balochistan through education, leadership, advocacy, skills, technology and community-led development. We pilot programs at the community level first, practicing ideas before scaling them.",
  },
  {
    question: "How many girls are enrolled in school?",
    answer: `Currently, ${231}+ girls are enrolled at the School of Scholars, MRC's model girls' high school in Khuzdar. Founded in 2015, the school provides quality education with innovative initiatives including STEM learning through Science Clubs, leadership development, and entrepreneurship workshops.`,
  },
  {
    question: "What is the School of Scholars?",
    answer:
      "The School of Scholars is a girls' high school in Khuzdar, Balochistan, founded by MRC in 2015. Known as a 'Place of Daughters,' it provides a safe, inspiring environment with STEM learning through Science Clubs, entrepreneurship workshops, project-based learning, and student-led clubs. It received the Women Can Do Award from the U.S. Consulate Karachi for its outstanding contribution to girls' education.",
  },
  {
    question: "What is the Her Power project?",
    answer:
      "Her Power is one of MRC's flagship initiatives supported by Women Fund Asia. Out of 71 applicants, 20 young women were selected and trained in leadership, entrepreneurship, and business development. They launched 14+ start-ups including food brands, tech platforms, and local businesses — proving that girls in Balochistan can lead, innovate, and contribute to the economy.",
  },
  {
    question: "What is the Girls Leadership Program?",
    answer:
      "The Girls Leadership Program empowers young girls through intensive training in leadership, communication, self-awareness, gender and development, technology and digital safety, research, and advocacy. 20 fellows from Khuzdar designed and implemented community-based projects, led awareness sessions, and organized a district-level STEM Science Festival for girls.",
  },
  {
    question: "How does MRC help with climate resilience?",
    answer:
      "MRC works on climate and resilience through emergency response and food distributions during crises, repair and maintenance of water resources, winter item distributions through Apna Dastakhawn and Salani Welfare, Ramzan drives in dropout-affected communities, and DRR capacity building with the Start Network — combining immediate relief with long-term resilience.",
  },
  {
    question: "What does MRC do for health rights?",
    answer:
      "MRC advocates for girls' and women's health rights through the Women Health Rights project by Awaz Foundation, youth health rights sessions in government girls' schools, mental health awareness and support initiatives, and community dialogue on reproductive health and rights — empowering young women to make informed decisions about their well-being.",
  },
  {
    question: "How can I support MRC?",
    answer:
      "You can support MRC by donating to fund girls' education and community programs, volunteering your time and skills, partnering with us on initiatives, or contacting us to explore collaboration opportunities. Every action brings us closer to an empowered and inclusive Balochistan.",
  },
  {
    question: "Where does MRC operate?",
    answer:
      "MRC operates primarily in Balochistan, Pakistan, with its model girls' school in Khuzdar. Our programs have reached 5+ districts across the province, working directly with rural communities to create lasting change through education, empowerment, and community-led development.",
  },
  {
    question: "What is the STEM Pioneers Project?",
    answer:
      "The STEM Pioneers Project was a six-month initiative in Kalat District supported by the U.S. Consulate and the Pakistan-U.S. Alumni Network (PUAN). It engaged 5 girls' high schools, 80 students, and 20 teachers to promote practical STEM education. Key achievements include training STEM Ambassadors, establishing STEM and computer labs, and creating a sustainable STEM Education Network.",
  },
  {
    question: "What impact has MRC made so far?",
    answer:
      "MRC's impact includes: 231+ girls enrolled in school, 40+ fellows trained as leaders, 5+ districts reached (including Kalat through STEM Pioneers), and 14+ start-ups launched by young women. We've completed 12+ projects with 3 currently ongoing, building a network of confident young female leaders across Balochistan.",
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQA, setSelectedQA] = useState<QA | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        cardRef.current &&
        !cardRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSelectedQA(null);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Floating Icon Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Attract bubble */}
        {!isOpen && (
          <div className="absolute bottom-16 right-0 animate-fade-in-up">
            <div className="relative rounded-2xl rounded-br-sm bg-white border border-zinc-200 px-4 py-2.5 shadow-lg shadow-zinc-200/60">
              <p className="text-sm font-semibold text-zinc-700 whitespace-nowrap">👋 Have a question?</p>
              <p className="text-xs text-zinc-400 mt-0.5">Tap to ask me anything!</p>
            </div>
            <div className="absolute -bottom-1.5 right-4 h-3 w-3 rotate-45 bg-white border-b border-r border-zinc-200" />
          </div>
        )}
        {/* Pulse rings */}
        <span className="absolute inset-0 h-14 w-14 animate-ping rounded-full bg-primary-400/30" style={{ animationDuration: "2.5s" }} />
        <span className="absolute inset-0 h-14 w-14 animate-ping rounded-full bg-primary-400/20" style={{ animationDuration: "2.5s", animationDelay: "0.6s" }} />
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-xl shadow-primary-300/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-300/50 active:scale-95 animate-bounce"
          style={{ animationDuration: "2s" }}
          aria-label="Chat with us"
        >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
        )}
        </button>
      </div>

      {/* Chat Card */}
      {isOpen && (
        <div
          ref={cardRef}
          className="fixed bottom-24 right-6 z-40 flex max-h-[70vh] w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-300/30 animate-fade-in-up sm:w-[420px]"
        >
          {/* Header */}
          <div className="shrink-0 border-b border-zinc-100 bg-gradient-to-r from-primary-500 to-primary-700 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">MRC Assistant</p>
                <p className="text-xs text-white/70">Ask me anything about MRC</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4">
            {selectedQA ? (
              /* Answer View */
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedQA(null)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-500 transition-all hover:border-primary-200 hover:text-primary-600 hover:bg-primary-50"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  Back to questions
                </button>

                {/* User Question Bubble */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary-500 px-4 py-3 text-sm text-white shadow-sm">
                    {selectedQA.question}
                  </div>
                </div>

                {/* Answer Bubble */}
                <div className="flex gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-[10px] font-bold text-white">
                    MRC
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm leading-relaxed text-zinc-700 shadow-sm">
                    {selectedQA.answer}
                  </div>
                </div>
              </div>
            ) : (
              /* Questions List */
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Frequently Asked Questions
                </p>
                {qaPairs.map((qa, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedQA(qa)}
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-left text-sm text-zinc-700 shadow-sm transition-all duration-200 hover:border-primary-200 hover:bg-primary-50/50 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-[10px] font-bold text-primary-600">
                        {i + 1}
                      </span>
                      {qa.question}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="shrink-0 border-t border-zinc-100 bg-zinc-50 px-5 py-3">
            <p className="text-center text-[11px] text-zinc-400">
              Powered by MRC • Ask us anything about our work
            </p>
          </div>
        </div>
      )}
    </>
  );
}
