"use client";

import { useState, useRef, useEffect } from "react";

interface QA {
  question: string;
  answer: string;
}

const qaPairs: QA[] = [
  {
    question: "What does MRC do?",
    answer:
      "Mechanism for Rational Change (MRC) is a women-led nonprofit founded in 2014, headquartered in Khuzdar, Balochistan. We empower girls, women, children and young people through education, leadership, advocacy, skills, technology and community-led development. Our model is to pilot ideas in real community settings, learn from implementation, and then scale through schools, networks and policy engagement.",
  },
  {
    question: "What is the School of Scholars?",
    answer:
      "Founded in 2015, the School of Scholars is MRC's model learning space for girls in Khuzdar. It integrates STEM, leadership, entrepreneurship, project-based learning, climate action, creative skills, heritage and sports. The school enables MRC to test approaches in a real education environment before adapting them for broader public-school and community use.",
  },
  {
    question: "What is the Her Power project?",
    answer:
      "Her Power, supported by Women Fund Asia, selected 20 young women from drought-affected communities out of 71 applicants. They received training in leadership, climate impacts, disaster risk reduction, confidence, communication, entrepreneurship and alternative livelihoods. Participants converted ideas into ventures including food, fashion, science learning, creative design, beauty services and youth platforms.",
  },
  {
    question: "What is the Action for Education program?",
    answer:
      "Supported by the Malala Fund, MRC selected 30 school-going girls from over 170 applicants and trained them as Education Champions in rights, leadership, research, digital skills and advocacy. Five youth-led teams implemented campaigns on rights, modern skills, digital inclusion, climate action and school retention. 73 girls reported returning to school through retention-focused action.",
  },
  {
    question: "What is the STEM Pioneers Project?",
    answer:
      "Supported by the U.S. Consulate Karachi and PUAN, STEM Pioneers was a six-month initiative in Kalat District engaging five girls' high schools, 80 students and 20 teachers through STEM awareness, practical training, digital skills, leadership and exposure. Student STEM Ambassadors supported peer activities while teachers adopted more participatory approaches.",
  },
  {
    question: "What is the Future CEOs program?",
    answer:
      "In partnership with Kidvation Global, 20 students in Grades 5–9 completed 37 sessions over four months on self-awareness, teamwork, leadership, innovation, business planning, communication, finance and markets. Participants developed products and showcased enterprises through a public festival.",
  },
  {
    question: "How does MRC help with climate resilience?",
    answer:
      "MRC has 35 Climate Change Advocates who engaged young people, schools, communities and markets. Their work contributed to 500 trees being planted, participating schools ending polythene-bag use, and shopkeepers encouraging customers to avoid single-use plastic bags. We also responded to 3 emergencies and facilitated 300 families during COVID-19.",
  },
  {
    question: "What impact has MRC made?",
    answer:
      "MRC's verified impact includes: 180 schools reached, 1,800+ girls trained on STEM, 1,300+ girls returned to school, 700 teachers trained, 150 Education Champions, 150 girls completed leadership programs, 90 girls on Karachi exposure visits, 8,000 school girls engaged by fellows, 73 women enterprises established benefiting 225 families, 35 Climate Advocates, and 500 trees planted.",
  },
  {
    question: "Where does MRC operate?",
    answer:
      "MRC operates primarily in 4 core districts: Khuzdar, Kalat, Lasbela/Hub, and Quetta, with experience in additional districts across Balochistan. We are headquartered in Khuzdar at Umer Farooq Chowk, Faizabad.",
  },
  {
    question: "How can I support MRC?",
    answer:
      "You can support MRC by donating to fund girls' education and community programs, volunteering your time and skills, partnering with us on initiatives, or contacting us to explore collaboration opportunities. We welcome multi-year programme funding, co-funded initiatives, technical assistance, research partnerships, and technology support.",
  },
  {
    question: "Who are MRC's partners?",
    answer:
      "MRC works with: Malala Fund, Women Fund Asia, U.S. Consulate Karachi, Pakistan-U.S. Alumni Network (PUAN), Kidvation Global, Science Fuse, Shaoor Foundation, and collaborates with Education Departments, district administrations, BUET Khuzdar, schools, parents, local leaders, youth groups, and civil society organizations.",
  },
  {
    question: "What is MRC's delivery model?",
    answer:
      "MRC follows a 'Pilot → Learn → Mobilize → Advocate → Scale' model. We test ideas in real community settings, particularly through the School of Scholars, learn from implementation, build local champions, and then expand through schools, public institutions, networks and policy engagement. This makes MRC both a delivery partner and a locally grounded platform for systems change.",
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
        cardRef.current && !cardRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSelectedQA(null);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Floating Icon Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <div className="absolute bottom-16 right-0 animate-fade-in-up">
            <div className="relative rounded-2xl rounded-br-sm bg-white border border-zinc-200 px-4 py-2.5 shadow-lg shadow-zinc-200/60">
              <p className="text-sm font-semibold text-zinc-700 whitespace-nowrap">👋 Have a question?</p>
              <p className="text-xs text-zinc-400 mt-0.5">Tap to ask me anything!</p>
            </div>
            <div className="absolute -bottom-1.5 right-4 h-3 w-3 rotate-45 bg-white border-b border-r border-zinc-200" />
          </div>
        )}
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
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary-500 px-4 py-3 text-sm text-white shadow-sm">
                    {selectedQA.question}
                  </div>
                </div>
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
