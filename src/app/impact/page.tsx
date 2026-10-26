"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

/* ── Animated Counter Hook ── */
function useCountUp(target: number, suffix = "", startOnView = true) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(!startOnView);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    const el = ref.current;
    if (!el) return;
    const duration = 2200;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * target);
      if (!el) return;
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [started, target, suffix]);

  return ref;
}

/* ── Progress Bar ── */
function ProgressBar({ percentage, color, delay = 0 }: { percentage: number; color: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-100">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-[1.5s] ease-out`}
        style={{ width: visible ? `${percentage}%` : "0%", transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

/* ── Floating Particle ── */
function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Data ── */
const heroBigNumbers = [
  { value: 180, suffix: "", label: "Schools Reached", sub: "across Balochistan", gradient: "from-emerald-400 to-teal-500", ringColor: "border-emerald-400/30" },
  { value: 1800, suffix: "+", label: "Girls Trained on STEM", sub: "through Science Clubs", gradient: "from-amber-400 to-orange-500", ringColor: "border-amber-400/30" },
  { value: 1300, suffix: "+", label: "Girls Returned to School", sub: "through advocacy", gradient: "from-blue-400 to-indigo-500", ringColor: "border-blue-400/30" },
  { value: 700, suffix: "", label: "Teachers Trained", sub: "in participatory methods", gradient: "from-violet-400 to-purple-500", ringColor: "border-violet-400/30" },
  { value: 150, suffix: "", label: "Education Champions", sub: "local advocates", gradient: "from-pink-400 to-rose-500", ringColor: "border-pink-400/30" },
  { value: 73, suffix: "", label: "Women Enterprises", sub: "income for 225 families", gradient: "from-cyan-400 to-blue-500", ringColor: "border-cyan-400/30" },
  { value: 225, suffix: "", label: "Families Benefited", sub: "from women-led businesses", gradient: "from-lime-400 to-green-500", ringColor: "border-lime-400/30" },
  { value: 8000, suffix: "", label: "School Girls Engaged", sub: "by MRC fellows", gradient: "from-fuchsia-400 to-pink-500", ringColor: "border-fuchsia-400/30" },
];

const journeySteps = [
  { step: "01", title: "Pilot", desc: "Test ideas in real community settings — School of Scholars is our living laboratory.", color: "from-emerald-500 to-teal-600", icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" },
  { step: "02", title: "Learn", desc: "Gather evidence, track outcomes, and adapt based on what works.", color: "from-blue-500 to-indigo-600", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" },
  { step: "03", title: "Mobilize", desc: "Build local champions, youth teams, and community ownership.", color: "from-violet-500 to-purple-600", icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" },
  { step: "04", title: "Advocate", desc: "Connect community evidence with institutions and decision-makers.", color: "from-amber-500 to-orange-600", icon: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" },
  { step: "05", title: "Scale", desc: "Expand through schools, networks, public institutions and policy.", color: "from-rose-500 to-pink-600", icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" },
];

const impactAreas = [
  {
    category: "Girls' Education & Literacy",
    tagline: "Building futures through learning",
    gradient: "from-emerald-500 to-teal-600",
    stats: [
      { value: "180", label: "Schools Reached", bar: 90, desc: "Schools focused on through education programs" },
      { value: "1,800+", label: "Girls Trained on STEM", bar: 85, desc: "Through Science Clubs and innovation challenges" },
      { value: "1,300+", label: "Girls Returned to School", bar: 75, desc: "Through retention-focused advocacy campaigns" },
      { value: "700", label: "Teachers Trained", bar: 70, desc: "In participatory and STEM approaches" },
      { value: "150", label: "Education Champions", bar: 60, desc: "Local advocates in rights and leadership" },
    ],
  },
  {
    category: "Leadership & Civic Agency",
    tagline: "Empowering the next generation",
    gradient: "from-violet-500 to-purple-600",
    stats: [
      { value: "150", label: "Girls Completed Leadership", bar: 80, desc: "Comprehensive leadership and advocacy training" },
      { value: "90", label: "Girls on Exposure Visits", bar: 55, desc: "Building networks with Karachi institutions" },
      { value: "8,000", label: "School Girls Engaged", bar: 95, desc: "Through advocacy campaigns and initiatives" },
      { value: "30", label: "Education Champions (Malala)", bar: 40, desc: "Trained in rights, leadership and advocacy" },
    ],
  },
  {
    category: "Entrepreneurship & Skills",
    tagline: "Creating economic independence",
    gradient: "from-amber-500 to-orange-600",
    stats: [
      { value: "73", label: "Women Enterprises", bar: 70, desc: "Income source for 225 families in Khuzdar" },
      { value: "225", label: "Families Benefited", bar: 85, desc: "Livelihoods improved through enterprises" },
      { value: "20", label: "Kids Trained as CEOs", bar: 45, desc: "Through Future CEOs program" },
      { value: "20", label: "Kids Enterprises", bar: 45, desc: "Established through Kidvation Global" },
    ],
  },
  {
    category: "Climate Action & Resilience",
    tagline: "Building resilient communities",
    gradient: "from-cyan-500 to-blue-600",
    stats: [
      { value: "35", label: "Climate Change Advocates", bar: 50, desc: "Engaging schools and communities" },
      { value: "500", label: "Trees Planted", bar: 65, desc: "Community-led reforestation" },
      { value: "3", label: "Emergencies Responded", bar: 30, desc: "With community support and relief" },
      { value: "300", label: "Families (COVID-19)", bar: 60, desc: "Emergency relief distributions" },
    ],
  },
];

const programs = [
  { name: "Action for Education", partner: "Malala Fund", status: "Active", highlight: "30 Champions, 5 campaigns, 73 girls returned" },
  { name: "School of Scholars", partner: "MRC", status: "Active", highlight: "Model girls' school, STEM + leadership" },
  { name: "STEM Pioneers", partner: "U.S. Consulate & PUAN", status: "Completed", highlight: "5 schools, 80 students, 20 teachers" },
  { name: "Her Power", partner: "Women Fund Asia", status: "Active", highlight: "20 women, ventures in food, fashion, tech" },
  { name: "Future CEOs", partner: "Kidvation Global", status: "Active", highlight: "20 students, 37 sessions, public festival" },
  { name: "Climate Action", partner: "Science Fuse", status: "Active", highlight: "35 advocates, 500 trees, zero polythene" },
  { name: "Girls Leadership", partner: "MRC", status: "Completed", highlight: "150 girls, advocacy, research, peer networks" },
  { name: "Girls Health Rights", partner: "Awaz Foundation", status: "Active", highlight: "Health awareness, mental health, community dialogue" },
];

/* ── Big Number Card ── */
function BigNumberCard({ stat, index }: { stat: typeof heroBigNumbers[0]; index: number }) {
  const countRef = useCountUp(stat.value, stat.suffix);
  return (
    <div
      className="animate-fade-in-up group relative"
      style={{ animationDelay: `${300 + index * 100}ms` }}
    >
      <div className="relative mx-auto flex h-40 w-40 flex-col items-center justify-center sm:h-48 sm:w-48">
        {/* Outer rotating ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-dashed ${stat.ringColor} animate-[spin_25s_linear_infinite]`} />
        {/* Inner ring */}
        <div className="absolute inset-3 rounded-full border border-white/10" />
        {/* Glow on hover */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.gradient} opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-15`} />
        {/* Content */}
        <div className="relative z-10 text-center">
          <p className={`text-4xl font-black tracking-tight text-white sm:text-5xl bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
            <span ref={countRef}>0</span>
          </p>
          <p className="mt-1 text-xs font-semibold text-white/70 sm:text-sm">{stat.label}</p>
          <p className="mt-0.5 text-[10px] text-white/40 sm:text-xs">{stat.sub}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Scroll Ticker ── */
function ScrollTicker() {
  const items = [
    "180 Schools", "1,800+ Girls STEM", "1,300+ Returned to School", "700 Teachers", "150 Champions",
    "73 Enterprises", "225 Families", "8,000 Girls Engaged", "35 Climate Advocates", "500 Trees Planted",
  ];
  return (
    <div className="relative overflow-hidden bg-primary-700 py-3">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-primary-700 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-primary-700 to-transparent z-10" />
      <div className="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-semibold text-white/60">
            {item}
            <span className="ml-6 text-white/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const changemakerStories = [
  {
    id: "aleena",
    tabLabel: "Aleena Baloch (Author & STEM)",
    name: "Aleena Baloch",
    authorLabel: "Aleena Baloch • Author & MRC Changemaker",
    tagline: "Lived Impact • Real Voice",
    location: "Khuzdar, Balochistan",
    title: {
      before: "From Asking ",
      highlight1: "“Why Not Me?”",
      middle: " to Asking ",
      highlight2: "“Why Not Us?”",
    },
    quote:
      "“When I was ten, I looked at the sky and thought, ‘Why not me?’ Today, I look at the girls around me and ask, ‘Why not us?’ I want to dream big, but make sure there is more space for other girls to dream big with me.”",
    paragraphs: [
      "Growing up in Khuzdar, Aleena turned a childhood fascination with space into grassroots youth action. Supported by Science Fuse and MRC Balochistan, she found her voice in STEM, led climate resilience activities after the 2022 floods, and learned that creating change is about creating space for others to speak for themselves.",
      "At fifteen, she authored her first book, She Built Her Own Legacy (March 2026). Now sixteen, she is exploring computer science and cybersecurity while opening doors for girls across rural Balochistan.",
    ],
    chips: [
      { icon: "🚀", text: "Space & Science Curiosity" },
      { icon: "🔬", text: "Hundreds Reached in STEM" },
      { icon: "📖", text: "Published Author at 15" },
      { icon: "🌿", text: "Climate & Flood Resilience" },
    ],
    ctaText: "Support Girls in STEM",
    ctaLink: "/donate",
    fullEssay: {
      badge: "Full Impact Essay • Khuzdar, Balochistan",
      title: "From Asking “Why Not Me?” to Asking “Why Not Us?”",
      subtitle: "By Aleena Baloch • Published alongside “She Built Her Own Legacy”",
      footerRole: "16-Year-Old Author & STEM Advocate",
      paragraphs: [
        "At ten years old, I had a big dream: I wanted to go to space. Growing up in Khuzdar, Balochistan, I knew it was a huge dream—but I never believed I should think small.",
        "My curiosity about science started early. I wanted to experiment, understand how things worked, and discover more than what was written in my schoolbooks. When I became part of Science Fuse, science came alive for me. I could experiment, ask questions, and share what I learned with others.",
        "But as I learned, I also started noticing the girls around me. So many had ideas and dreams but not always the opportunities to explore them. I began asking myself, “What if I could do something about that?”",
        "That question led me toward STEM education, girls’ education, climate action, and youth leadership. Through different initiatives, I have reached hundreds of girls through STEM and education activities. For me, the real impact isn't the number—it is seeing a girl discover her love for science, find her confidence, or believe in her future.",
        "Then came MRC Balochistan. MRC gave me a space to grow my voice and understand what leadership and advocacy really mean. I learned about education, gender, research, technology, communication, and critical thinking. I learned that creating change isn't always about speaking for others—it can be about creating space for others to speak for themselves.",
        "My journey also took me into writing. At fifteen, I wrote my first book, She Built Her Own Legacy, encouraging young people to believe that leadership isn't something they have to wait to become “old enough” for. Publishing it in March 2026 was a proud moment, but it felt more like a new beginning.",
        "Climate action became another important part of my journey. Growing up in Khuzdar, I have seen how heat, water shortages, and the 2022 floods affected communities, schools, and families. It made me understand that climate, education, and girls’ rights are deeply connected.",
        "Looking back, the biggest change MRC brought into my life isn't just what I have achieved—it is how I think. I learned that change can begin with something as simple as a question, a conversation, a workshop, or one girl deciding not to give up on her dream.",
        "Today, I am still sixteen, still learning, and still figuring out where my journey will take me. I want to explore computer science and cybersecurity while continuing to grow as a leader.",
        "When I was ten, I looked at the sky and thought, “Why not me?” Today, I look at the girls around me and ask, “Why not us?” I want to dream big, but I want to make sure there is more space for other girls to dream big with me.",
      ],
    },
  },
  {
    id: "awisha",
    tabLabel: "Awesha Ali (Founder of YEAC)",
    name: "Awesha Ali",
    authorLabel: "Awesha Ali • Founder of YEAC & Youth Advocate",
    tagline: "Youth Empowerment • Action For Change",
    location: "Balochistan",
    title: {
      before: "From ",
      highlight1: "“What Can I Do?”",
      middle: " to ",
      highlight2: "“Let’s Do This”",
    },
    quote:
      "“I once dreamed about my own future. Today, I dream about what becomes possible when every girl has the opportunity to choose hers.”",
    paragraphs: [
      "My time with MRC Balochistan transformed how I see myself, my leadership, and my responsibility toward society. MRC gave me a safe and supportive space where my ideas were respected, my potential was recognized, and my confidence was strengthened.",
      "Through MRC, I developed leadership, advocacy, communication, teamwork, and community-engagement skills. Most importantly, I learned to trust my voice and use it for girls whose dreams and concerns often remain unheard.",
      "Today, through Youth Empowerment and Action for Change (YEAC), my team creates opportunities for young people across Balochistan to act on girls’ education, STEM, climate action, mental health, peacebuilding, and child rights.",
    ],
    chips: [
      { icon: "🌟", text: "Founder of YEAC" },
      { icon: "🏫", text: "10 Schools Committed to STEM" },
      { icon: "🗣️", text: "District & Tribal Advocacy" },
      { icon: "🛡️", text: "Child Rights & Mental Health" },
    ],
    ctaText: "Support Youth Advocacy",
    ctaLink: "/donate",
    fullEssay: {
      badge: "Advocacy Journey • Balochistan",
      title: "From “What Can I Do?” to “Let’s Do This”",
      subtitle: "By Awesha Ali • Founder of YEAC and Youth Advocate",
      footerRole: "Founder of YEAC & Youth Advocate",
      paragraphs: [
        "I once dreamed about my own future. Today, I dream about what becomes possible when every girl has the opportunity to choose hers.",
        "My time with MRC Balochistan transformed how I see myself, my leadership, and my responsibility toward society. MRC gave me a safe and supportive space where my ideas were respected, my potential was recognized, and my confidence was strengthened.",
        "Through MRC, I developed leadership, advocacy, communication, teamwork, and community-engagement skills. Most importantly, I learned to trust my voice and use it for girls whose dreams and concerns often remain unheard.",
        "Today, I use this strength through Youth Empowerment and Action for Change (YEAC). With my team, I create opportunities for young people to learn, speak, and act on girls’ education, STEM, climate action, mental health, peacebuilding, child rights, and protection.",
        "The confidence MRC gave me helped me represent girls before district authorities and community leaders. Our advocacy enabled YEAC to receive permission to work in schools, secured commitments from ten schools to support girls’ education and STEM, and inspired a tribal elder to publicly support girls’ education.",
        "MRC taught me that when young people are trusted and supported, their ideas can transform communities.",
        "I no longer ask, “What can I do?” Now I say, “Let’s do this—”",
        "Awesha Ali — Founder of YEAC and Youth Advocate",
      ],
    },
  },
  {
    id: "misbah",
    tabLabel: "Misbah (Education Advocate)",
    name: "Misbah",
    authorLabel: "Misbah • Action for Education Fellow & Youth Advocate",
    tagline: "Action For Education • Young Advocate",
    location: "Balochistan",
    title: {
      before: "The Space That ",
      highlight1: "Allowed Me",
      middle: " to ",
      highlight2: "Become More",
    },
    quote:
      "“MRC did not tell me who to become. It gave me the space, trust, and opportunities to discover it for myself.”",
    paragraphs: [
      "I carried a deep desire to create, question, and contribute, but did not always have a space where my ideas were encouraged. At MRC, my voice mattered, and for the first time, I felt free to express myself without fear of judgment.",
      "Through the Action for Education Fellowship, I engaged with students, teachers, and communities to champion girls’ right to education. From standing onstage at the Youth Summit to connecting with global champions, I learned that a young person’s voice can travel much further than they imagine.",
    ],
    chips: [
      { icon: "🎓", text: "Action for Education Fellow" },
      { icon: "🎤", text: "Youth Summit Speaker" },
      { icon: "🤝", text: "Community & Parent Outreach" },
      { icon: "✨", text: "Speaking for the Unheard" },
    ],
    ctaText: "Support Education Champions",
    ctaLink: "/donate",
    fullEssay: {
      badge: "Fellowship Journey • Balochistan",
      title: "The Space That Allowed Me to Become More",
      subtitle: "By Misbah • Action for Education Fellow & Young Education Advocate",
      footerRole: "Action for Education Fellow & Youth Advocate",
      paragraphs: [
        "I had always been curious about the world—the people I might meet, the lessons I could learn, and the person I could become. I carried a deep desire to create, question, and contribute, but I did not always have a space where my ideas were understood or encouraged.",
        "Then I found the Mechanism for Rational Change (MRC).",
        "At MRC, my questions were welcomed, my ideas were taken seriously, and my voice mattered. For the first time, I felt free to express myself without fear of judgment. MRC saw potential in me before I had fully learned to see it in myself.",
        "Through the Action for Education Fellowship, MRC gave me practical opportunities to learn beyond classrooms and books. I engaged with students, teachers, parents, and communities while advocating for girls’ right to education. These experiences helped me understand how social attitudes and local environments influence a girl’s future—and how young people can help transform both.",
        "MRC did more than build my advocacy skills. It provided mentorship, encouragement, practical exposure, and a supportive community in which I could learn through action. I developed communication, leadership, critical-thinking, teamwork, and community-engagement skills. Most importantly, I learned how to speak not only for myself but also alongside girls whose voices are often overlooked.",
        "Some of my most meaningful lessons were quiet ones. MRC taught me kindness, patience, forgiveness, and the importance of listening. I stopped comparing my progress with others and began focusing on becoming a better version of myself.",
        "At MRC, the competition was never with one another—it was with the person we were yesterday.",
        "One of the most powerful moments in my journey came when I stood onstage at the Youth Summit to present our work. As I looked at the audience, I remembered the girl who once struggled to express her ideas. I felt nervous, but I also felt prepared, capable, and proud.",
        "That moment showed me how far I had come.",
        "Soon, I began witnessing change beyond myself. Teachers, students, and community members started responding differently to our advocacy. People who were once uncertain began listening. Communities became more open to supporting girls, and people began asking how girls in their own areas could participate and lead.",
        "Meeting education champions from other provinces who were inspired by our work made me realize that a young person’s voice can travel much further than they imagine.",
        "The greatest gift MRC gave me was not a title or an achievement. It was a new way of seeing myself. I now believe that my ideas have value, my voice can contribute, and I do not have to wait for someone else to begin creating change.",
        "My fellowship left me with one powerful question: What could happen if we all did our part?",
        "Your age does not determine your potential. You can question. You can learn. You can lead. You can begin. Sometimes, change begins when one young person discovers that her voice is worth hearing—and finds the courage and opportunity to use it.",
      ],
    },
  },
  {
    id: "faiza",
    tabLabel: "Faiza Meer (Roshan Kal)",
    name: "Faiza Meer",
    authorLabel: "Faiza Meer • Founder of Roshan Kal & HER POWER Fellow",
    tagline: "HER POWER • Founder of Roshan Kal",
    location: "Khuzdar, Balochistan",
    title: {
      before: "The Questions That ",
      highlight1: "Changed the Way",
      middle: " I ",
      highlight2: "Lead",
    },
    quote:
      "“I used to see a problem and think, ‘Someone should do something.’ Now I ask, ‘What can I do, and who can I bring with me?’”",
    paragraphs: [
      "Growing up in Khuzdar, Faiza was deeply committed to community volunteering, but was still discovering what meaningful transformation really meant. Through MRC’s HER POWER project and the Explorer experience, visiting women-led businesses opened her eyes to what was possible showing her that young women from Balochistan can build initiatives of their own and create spaces for others.",
      "That vision led her to found Roshan Kal, establishing safe and supportive spaces where children and young people can speak, participate, learn, and believe in their own potential. Today, she leads with listening, collaboration, and grassroots action.",
    ],
    chips: [
      { icon: "☀️", text: "Founder of Roshan Kal" },
      { icon: "⚡", text: "HER POWER Fellow" },
      { icon: "🏘️", text: "Youth Spaces in Khuzdar" },
      { icon: "👂", text: "Listening & Active Leadership" },
    ],
    ctaText: "Support Youth Leadership",
    ctaLink: "/donate",
    fullEssay: {
      badge: "HER POWER Journey • Khuzdar, Balochistan",
      title: "The Questions That Changed the Way I Lead",
      subtitle: "By Faiza Meer • Founder of Roshan Kal & HER POWER Fellow",
      footerRole: "Founder of Roshan Kal & HER POWER Fellow",
      paragraphs: [
        "I used to see a problem and think, ‘Someone should do something.’ Now I ask, ‘What can I do, and who can I bring with me?’",
        "Growing up in Khuzdar, I was surrounded by young people with ideas, dreams, and so much potential. But I also saw how limited opportunities, lack of exposure, and social challenges could make those dreams feel far away.",
        "I cared about my community and wanted to be part of the solution. Before MRC, I was already involved in volunteering, youth engagement, and community activities. But I was still learning what meaningful change really looked like.",
        "At that time, I thought helping meant doing something for people. I had not yet learned the importance of listening first.",
        "Those questions eventually led me to MRC.",
        "Through the HER POWER project, I started looking at my community differently. Instead of only seeing problems, I began asking: Why does this problem exist? Whose voice is missing? What can I do about it? And how can young people become part of the solution?",
        "I began to understand that a challenge does not have to be too big simply because I am young.",
        "During the HER POWER Explorer experience, I visited women-led businesses and learned from women who had built something of their own. That experience changed the way I saw possibility. I realized women from communities like mine could create opportunities not only for themselves, but for others too. I started thinking differently about what I could build.",
        "MRC helped me develop the confidence to express my ideas, communicate, think through solutions, and take initiative. But the biggest thing I gained was confidence in my own voice. I began to believe that being young did not make my ideas less valuable. I just needed to start where I was, with what I had.",
        "And that is what I carried with me after MRC. I wanted to create a space where young people could feel supported, participate, express themselves, and discover what they were capable of. That idea became Roshan Kal.",
        "Through Roshan Kal, I began creating safe and supportive spaces for children and young people—spaces where they can speak, participate, learn, and believe in their own potential. For me, this was more than starting something new. It was taking what I had learned and turning it into something I could give back.",
        "My understanding of leadership changed too. I used to think leadership was connected to positions or titles. Now, I see it as listening, responsibility, collaboration, and taking initiative.",
        "My journey has also changed the way I look at problems. Before, I would see a problem and think, ‘Someone should do something.’ Now, I ask, ‘Why is this happening? Whose voice is missing? What can realistically be done? And how can young people be part of the answer?’",
        "I am still a student, still learning and discovering the kind of change I want to create. I want to continue working around education, youth empowerment, and community development, especially creating opportunities for young people who may not always have access to them. MRC gave me that space. Now, I want to help create that space for someone else.",
        "I started with questions. MRC gave me the space to explore them. Those questions became ideas. Those ideas became action. And now, I want that action to create space for others.",
        "I can start where I am. I can start with what I have. And I can bring others with me.",
        "Faiza Meer — Founder of Roshan Kal & HER POWER Fellow",
      ],
    },
  },
];

/* ── Main Component ── */
export default function ImpactPage() {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);
  const [readingStory, setReadingStory] = useState<(typeof changemakerStories)[0] | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setLightbox(null);
        setReadingStory(null);
      } else if (e.key === "ArrowLeft") {
        setActiveStoryIndex((prev) => (prev - 1 + changemakerStories.length) % changemakerStories.length);
      } else if (e.key === "ArrowRight") {
        setActiveStoryIndex((prev) => (prev + 1) % changemakerStories.length);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) {
      setActiveStoryIndex((prev) => (prev + 1) % changemakerStories.length);
    } else if (isRightSwipe) {
      setActiveStoryIndex((prev) => (prev - 1 + changemakerStories.length) % changemakerStories.length);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };
  return (
    <>
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 0; } 100% { transform: scale(0.9); opacity: 0.5; } }
      `}</style>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-teal-800 pt-32 pb-12 sm:pt-40">
        <Particles />
        <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent-400/10 blur-3xl animate-float-reverse" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="inline-flex items-center gap-2 animate-fade-in-up rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Verified Data • As of August 2026</span>
          </div>
          <h1 className="mt-6 animate-fade-in-up text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl" style={{ animationDelay: "150ms" }}>
            Our Impact,{" "}
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-emerald-300 bg-clip-text text-transparent">
              By the Numbers
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl animate-fade-in-up text-base leading-relaxed text-emerald-100/70 sm:text-lg" style={{ animationDelay: "300ms" }}>
            From a grassroots literacy pilot to province-wide influence, here&apos;s what community-led change looks like.
          </p>
        </div>
      </section>

      {/* ═══════════════ TICKER ═══════════════ */}
      <ScrollTicker />

      {/* ═══════════════ BIG NUMBERS Mosaic ═══════════════ */}
      <section className="relative bg-gradient-to-b from-primary-800 to-primary-900 px-6 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="relative mx-auto max-w-6xl">
          <p className="animate-fade-in-up text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Cumulative Results Across All Programs</p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {heroBigNumbers.slice(0, 4).map((stat, i) => (
              <BigNumberCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {heroBigNumbers.slice(4).map((stat, i) => (
              <BigNumberCard key={stat.label} stat={stat} index={i + 4} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ JOURNEY ═══════════════ */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/20 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
              How We Work
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
              Our Impact{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="mt-3 text-base text-zinc-500">From community pilot to systemic change our five-stage delivery model.</p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary-300 via-accent-200 to-primary-300 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-10">
              {journeySteps.map((step, i) => (
                <div
                  key={step.step}
                  className="animate-fade-in-up relative flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* Step badge */}
                  <div className={`relative z-10 flex items-center gap-4 ${i % 2 === 0 ? "md:w-1/2 md:justify-end md:pr-12" : "md:w-1/2 md:justify-start md:pl-12 md:order-2"}`}>
                    <div className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-br shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl" style={{ borderColor: "white" }}>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:w-1/2 md:pl-12" : "md:w-1/2 md:pr-12 md:order-1 md:text-right"}`}>
                    <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-200/60">
                      <span className="text-xs font-bold text-primary-500">STEP {step.step}</span>
                      <h3 className="mt-1 text-xl font-bold text-zinc-800">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ IMPACT AREAS ═══════════════ */}
      {impactAreas.map((area, idx) => (
        <section
          key={area.category}
          className={`relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8 ${idx % 2 === 0 ? "bg-gradient-to-br from-zinc-50 to-white" : "bg-white"}`}
        >
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/10 blur-3xl animate-float" />

          <div className="relative mx-auto max-w-5xl">
            <div className="animate-fade-in-up flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${area.gradient} text-white shadow-lg`}>
                <span className="text-lg font-black">{idx + 1}</span>
              </div>
              <div>
                <span className={`inline-block rounded-full bg-gradient-to-r ${area.gradient} px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white`}>
                  {area.category}
                </span>
                <h2 className="mt-1 text-2xl font-bold text-zinc-800 sm:text-3xl">{area.tagline}</h2>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {area.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="animate-fade-in-up group rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary-200/40"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className={`text-3xl font-black bg-gradient-to-br ${area.gradient} bg-clip-text text-transparent`}>{stat.value}</span>
                      <div>
                        <p className="text-sm font-semibold text-zinc-700">{stat.label}</p>
                        <p className="text-xs text-zinc-400">{stat.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-zinc-300">{stat.bar}%</span>
                  </div>
                  <div className="mt-3">
                    <ProgressBar percentage={stat.bar} color={area.gradient} delay={i * 100} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════ FEATURED IMPACT STORIES (SLIDER) ═══════════════ */}
      <section id="featured-story" className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-teal-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-white">
        <Particles />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-accent-400/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-primary-400/15 blur-3xl animate-float-reverse" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* ── Slider Top Bar / Controls ── */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-300 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
                Featured Changemakers
              </span>
              <span className="text-xs font-medium text-white/50">
                Story <span className="font-bold text-white">{activeStoryIndex + 1}</span> of {changemakerStories.length}
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 flex-wrap">
              {/* Story Selector Pills */}
              <div className="flex items-center gap-1.5 rounded-full bg-white/5 p-1 border border-white/10 backdrop-blur-md">
                {changemakerStories.map((story, idx) => (
                  <button
                    key={story.id}
                    type="button"
                    onClick={() => setActiveStoryIndex(idx)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 ${activeStoryIndex === idx
                        ? "bg-gradient-to-r from-accent-400 to-amber-500 text-zinc-950 shadow-md shadow-accent-400/20 scale-[1.02]"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {story.tabLabel}
                  </button>
                ))}
              </div>

              {/* Prev / Next Arrow Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveStoryIndex((prev) => (prev - 1 + changemakerStories.length) % changemakerStories.length)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                  aria-label="Previous Story"
                  title="Previous Story"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStoryIndex((prev) => (prev + 1) % changemakerStories.length)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                  aria-label="Next Story"
                  title="Next Story"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* ── Sliding Track Container ── */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeStoryIndex * 100}%)` }}
            >
              {/* ════════ SLIDE 1: ALEENA BALOCH ════════ */}
              <div className="w-full shrink-0 min-w-full px-1">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                  {/* Left: Duo Image Showcase */}
                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
                      {/* Image 1: Book Launch */}
                      <div
                        onClick={() =>
                          setLightbox({
                            src: "/story/NQKJ2295.JPG",
                            caption: "Aleena Baloch with her book She Built Her Own Legacy (Published March 2026)",
                          })
                        }
                        className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-accent-400/60"
                        title="Click to view full size"
                      >
                        <Image
                          src="/story/NQKJ2295.JPG"
                          alt="Aleena Baloch with her book She Built Her Own Legacy"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 260px"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                        <span className="absolute top-2.5 right-2.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-accent-300 backdrop-blur-md">
                          Book Launch
                        </span>
                        <div className="absolute bottom-3 inset-x-3">
                          <p className="text-xs sm:text-sm font-bold text-white leading-tight">She Built Her Own Legacy</p>
                          <p className="mt-0.5 text-[10px] text-accent-200">Published March 2026</p>
                        </div>
                      </div>

                      {/* Image 2: Portrait */}
                      <div
                        onClick={() =>
                          setLightbox({
                            src: "/story/IMG_1091.JPG",
                            caption: "Aleena Baloch • 16-Year-Old Author & STEM Advocate, Khuzdar",
                          })
                        }
                        className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-emerald-400/60 sm:translate-y-4"
                        title="Click to view full size"
                      >
                        <Image
                          src="/story/IMG_1091.JPG"
                          alt="Portrait of Aleena Baloch"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 260px"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                        <span className="absolute top-2.5 right-2.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 backdrop-blur-md">
                          Age 16
                        </span>
                        <div className="absolute bottom-3 inset-x-3">
                          <p className="text-xs sm:text-sm font-bold text-white leading-tight">Aleena Baloch</p>
                          <p className="mt-0.5 text-[10px] text-emerald-200">Khuzdar, Balochistan</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-center text-[11px] text-white/50 sm:text-left sm:pl-2">
                      Click any photo to view full size
                    </p>
                  </div>

                  {/* Right: Narrative */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                        {changemakerStories[0].tagline}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                      {changemakerStories[0].title.before}
                      <span className="text-accent-300">{changemakerStories[0].title.highlight1}</span>
                      {changemakerStories[0].title.middle}
                      <span className="text-emerald-300">{changemakerStories[0].title.highlight2}</span>
                    </h2>

                    <blockquote className="border-l-2 border-accent-400/80 bg-white/[0.03] rounded-r-2xl py-2.5 px-4 text-sm sm:text-base italic text-emerald-100/90 leading-relaxed backdrop-blur-sm">
                      {changemakerStories[0].quote}
                    </blockquote>

                    <div className="space-y-2 text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                      {changemakerStories[0].paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {/* Chips */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {changemakerStories[0].chips.map((chip) => (
                        <div
                          key={chip.text}
                          className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-[11px] font-medium text-white/90"
                        >
                          <span>{chip.icon}</span> <span>{chip.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setReadingStory(changemakerStories[0])}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                      >
                        <span>📖 Read Full Essay</span>
                      </button>
                      <a
                        href={changemakerStories[0].ctaLink}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-400 to-amber-500 px-5 py-2.5 text-xs font-bold text-zinc-950 shadow-md shadow-accent-400/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <span>{changemakerStories[0].ctaText}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ════════ SLIDE 2: AWESHA ALI (YEAC) ════════ */}
              <div className="w-full shrink-0 min-w-full px-1">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                  {/* Left: Speaker Showcase Image & Cards */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="w-full max-w-md mx-auto lg:max-w-none space-y-3 sm:space-y-4">
                      {/* Main Portrait / Podium Image */}
                      <div
                        onClick={() =>
                          setLightbox({
                            src: "/story/awisha.jpeg",
                            caption: "Awesha Ali • Founder of YEAC and Youth Advocate representing youth in Balochistan",
                          })
                        }
                        className="group relative aspect-[4/3] sm:aspect-[16/11] cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-accent-400/60"
                        title="Click to view full size"
                      >
                        <Image
                          src="/story/awisha.jpeg"
                          alt="Awesha Ali speaking at a podium as Founder of YEAC"
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 500px"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />
                        <span className="absolute top-2.5 right-2.5 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-accent-300 backdrop-blur-md border border-accent-400/30">
                          Youth Leader & Speaker
                        </span>
                        <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4">
                          <p className="text-sm sm:text-base font-bold text-white leading-tight">Awesha Ali</p>
                          <p className="mt-0.5 text-xs text-accent-200 font-medium">Founder of YEAC & Youth Advocate • Balochistan</p>
                        </div>
                      </div>

                      {/* Supplementary feature card */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
                          <p className="text-base font-black text-accent-300">10 Schools</p>
                          <p className="mt-0.5 text-[10px] text-white/70">Committed to Girls&apos; STEM & Education</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
                          <p className="text-base font-black text-emerald-300">Grassroots</p>
                          <p className="mt-0.5 text-[10px] text-white/70">Tribal Elder & District Support</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-[11px] text-white/50 sm:text-left sm:w-full sm:pl-2">
                      Click photo to view full size
                    </p>
                  </div>

                  {/* Right: Narrative */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                        {changemakerStories[1].tagline}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                      {changemakerStories[1].title.before}
                      <span className="text-accent-300">{changemakerStories[1].title.highlight1}</span>
                      {changemakerStories[1].title.middle}
                      <span className="text-emerald-300">{changemakerStories[1].title.highlight2}</span>
                    </h2>

                    <blockquote className="border-l-2 border-accent-400/80 bg-white/[0.03] rounded-r-2xl py-2.5 px-4 text-sm sm:text-base italic text-emerald-100/90 leading-relaxed backdrop-blur-sm">
                      {changemakerStories[1].quote}
                    </blockquote>

                    <div className="space-y-2 text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                      {changemakerStories[1].paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {/* Chips */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {changemakerStories[1].chips.map((chip) => (
                        <div
                          key={chip.text}
                          className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-[11px] font-medium text-white/90"
                        >
                          <span>{chip.icon}</span> <span>{chip.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setReadingStory(changemakerStories[1])}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                      >
                        <span>📖 Read Full Story</span>
                      </button>
                      <a
                        href={changemakerStories[1].ctaLink}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-400 to-amber-500 px-5 py-2.5 text-xs font-bold text-zinc-950 shadow-md shadow-accent-400/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <span>{changemakerStories[1].ctaText}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ════════ SLIDE 3: MISBAH (EDUCATION ADVOCATE) ════════ */}
              <div className="w-full shrink-0 min-w-full px-1">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                  {/* Left: Duo Image Showcase */}
                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
                      {/* Image 1: Meetup with Malala */}
                      <div
                        onClick={() =>
                          setLightbox({
                            src: "/story/misbah meetup.jpeg",
                            caption: "Action for Education Fellowship • Misbah and Youth Champions in dialogue with Malala Yousafzai",
                          })
                        }
                        className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-accent-400/60"
                        title="Click to view full size"
                      >
                        <Image
                          src="/story/misbah meetup.jpeg"
                          alt="Misbah and Youth Champions in dialogue with Malala"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 260px"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                        <span className="absolute top-2.5 right-2.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-accent-300 backdrop-blur-md">
                          Fellowship
                        </span>
                        <div className="absolute bottom-3 inset-x-3">
                          <p className="text-xs sm:text-sm font-bold text-white leading-tight">Action for Education</p>
                          <p className="mt-0.5 text-[10px] text-accent-200">With Malala Yousafzai</p>
                        </div>
                      </div>

                      {/* Image 2: Misbah Portrait / Celebration */}
                      <div
                        onClick={() =>
                          setLightbox({
                            src: "/story/misbah.jpeg",
                            caption: "Misbah • Action for Education Fellow & Youth Education Advocate, Balochistan",
                          })
                        }
                        className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-emerald-400/60 sm:translate-y-4"
                        title="Click to view full size"
                      >
                        <Image
                          src="/story/misbah.jpeg"
                          alt="Misbah, Action for Education Fellow"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 260px"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                        <span className="absolute top-2.5 right-2.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 backdrop-blur-md">
                          Youth Fellow
                        </span>
                        <div className="absolute bottom-3 inset-x-3">
                          <p className="text-xs sm:text-sm font-bold text-white leading-tight">Misbah</p>
                          <p className="mt-0.5 text-[10px] text-emerald-200">Education Advocate</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-center text-[11px] text-white/50 sm:text-left sm:pl-2">
                      Click any photo to view full size
                    </p>
                  </div>

                  {/* Right: Narrative */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                        {changemakerStories[2].tagline}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                      {changemakerStories[2].title.before}
                      <span className="text-accent-300">{changemakerStories[2].title.highlight1}</span>
                      {changemakerStories[2].title.middle}
                      <span className="text-emerald-300">{changemakerStories[2].title.highlight2}</span>
                    </h2>

                    <blockquote className="border-l-2 border-accent-400/80 bg-white/[0.03] rounded-r-2xl py-2.5 px-4 text-sm sm:text-base italic text-emerald-100/90 leading-relaxed backdrop-blur-sm">
                      {changemakerStories[2].quote}
                    </blockquote>

                    <div className="space-y-2 text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                      {changemakerStories[2].paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {/* Chips */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {changemakerStories[2].chips.map((chip) => (
                        <div
                          key={chip.text}
                          className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-[11px] font-medium text-white/90"
                        >
                          <span>{chip.icon}</span> <span>{chip.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setReadingStory(changemakerStories[2])}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                      >
                        <span>📖 Read Full Story</span>
                      </button>
                      <a
                        href={changemakerStories[2].ctaLink}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-400 to-amber-500 px-5 py-2.5 text-xs font-bold text-zinc-950 shadow-md shadow-accent-400/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <span>{changemakerStories[2].ctaText}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ════════ SLIDE 4: FAIZA MEER (ROSHAN KAL) ════════ */}
              <div className="w-full shrink-0 min-w-full px-1">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                  {/* Left: Duo Image Showcase */}
                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
                      {/* Image 1: Speaking Outdoors */}
                      <div
                        onClick={() =>
                          setLightbox({
                            src: "/story/faiza-meer.jpeg",
                            caption: "Faiza Meer • Founder of Roshan Kal & HER POWER Fellow speaking at a youth engagement session in Balochistan",
                          })
                        }
                        className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-accent-400/60"
                        title="Click to view full size"
                      >
                        <Image
                          src="/story/faiza-meer.jpeg"
                          alt="Faiza Meer speaking at youth engagement session"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 260px"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                        <span className="absolute top-2.5 right-2.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-accent-300 backdrop-blur-md">
                          Youth Voice
                        </span>
                        <div className="absolute bottom-3 inset-x-3">
                          <p className="text-xs sm:text-sm font-bold text-white leading-tight">Faiza Meer</p>
                          <p className="mt-0.5 text-[10px] text-accent-200">Founder, Roshan Kal</p>
                        </div>
                      </div>

                      {/* Image 2: Portrait with Lanyard */}
                      <div
                        onClick={() =>
                          setLightbox({
                            src: "/story/faiza-meer-2.jpeg",
                            caption: "Faiza Meer • HER POWER Fellow & Community Leader, Khuzdar, Balochistan",
                          })
                        }
                        className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-emerald-400/60 sm:translate-y-4"
                        title="Click to view full size"
                      >
                        <Image
                          src="/story/faiza-meer-2.jpeg"
                          alt="Faiza Meer portrait, HER POWER Fellow"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 260px"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                        <span className="absolute top-2.5 right-2.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 backdrop-blur-md">
                          HER POWER
                        </span>
                        <div className="absolute bottom-3 inset-x-3">
                          <p className="text-xs sm:text-sm font-bold text-white leading-tight">HER POWER</p>
                          <p className="mt-0.5 text-[10px] text-emerald-200">Khuzdar Changemaker</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-center text-[11px] text-white/50 sm:text-left sm:pl-2">
                      Click any photo to view full size
                    </p>
                  </div>

                  {/* Right: Narrative */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                        {changemakerStories[3].tagline}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                      {changemakerStories[3].title.before}
                      <span className="text-accent-300">{changemakerStories[3].title.highlight1}</span>
                      {changemakerStories[3].title.middle}
                      <span className="text-emerald-300">{changemakerStories[3].title.highlight2}</span>
                    </h2>

                    <blockquote className="border-l-2 border-accent-400/80 bg-white/[0.03] rounded-r-2xl py-2.5 px-4 text-sm sm:text-base italic text-emerald-100/90 leading-relaxed backdrop-blur-sm">
                      {changemakerStories[3].quote}
                    </blockquote>

                    <div className="space-y-2 text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                      {changemakerStories[3].paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {/* Chips */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {changemakerStories[3].chips.map((chip) => (
                        <div
                          key={chip.text}
                          className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-[11px] font-medium text-white/90"
                        >
                          <span>{chip.icon}</span> <span>{chip.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setReadingStory(changemakerStories[3])}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                      >
                        <span>📖 Read Full Story</span>
                      </button>
                      <a
                        href={changemakerStories[3].ctaLink}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-400 to-amber-500 px-5 py-2.5 text-xs font-bold text-zinc-950 shadow-md shadow-accent-400/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <span>{changemakerStories[3].ctaText}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Indicator Dots ── */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {changemakerStories.map((story, idx) => (
              <button
                key={story.id}
                type="button"
                onClick={() => setActiveStoryIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${activeStoryIndex === idx
                    ? "w-8 bg-gradient-to-r from-accent-400 to-amber-500 shadow-sm shadow-accent-400/50"
                    : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                aria-label={`Go to slide ${idx + 1}: ${story.name}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-2xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/40 hover:scale-110"
              title="Close (Esc)"
            >
              ✕
            </button>
            <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full max-h-[78vh] overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20">
              <Image
                src={lightbox.src}
                alt={lightbox.caption}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="mt-3 text-center text-xs text-white/70">
              {lightbox.caption} (Press ESC or click outside to close)
            </p>
          </div>
        </div>
      )}

      {/* ── Read Full Essay / Story Modal ── */}
      {readingStory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setReadingStory(null)}
        >
          <div
            className="relative max-h-[88vh] max-w-3xl w-full flex flex-col rounded-3xl border border-white/20 bg-zinc-900 p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent-300">
                  {readingStory.fullEssay.badge}
                </span>
                <h3 className="mt-1 text-lg sm:text-xl font-bold text-white">
                  {readingStory.fullEssay.title}
                </h3>
                <p className="text-xs text-white/60">
                  {readingStory.fullEssay.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setReadingStory(null)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-105"
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 overflow-y-auto pr-2 space-y-3.5 text-sm sm:text-base leading-relaxed text-zinc-200 max-h-[60vh]">
              {readingStory.fullEssay.paragraphs.map((para, i) => (
                <p key={i} className="text-justify text-zinc-200">
                  {i === 0 ? (
                    <span className="float-left mr-2.5 text-3xl font-serif font-black text-accent-400 leading-none">
                      {para.charAt(0)}
                    </span>
                  ) : null}
                  {i === 0 ? para.slice(1) : para}
                </p>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50">{readingStory.fullEssay.footerRole}</span>
              <button
                type="button"
                onClick={() => setReadingStory(null)}
                className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white/20"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ PROGRAMS ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50/30 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/20 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
              Our Programmes
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
              Driving Change{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Through Programs</span>
            </h2>
            <p className="mt-3 text-sm text-zinc-400">Pilot → Learn → Mobilize → Advocate → Scale</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, idx) => (
              <div
                key={program.name}
                className="animate-fade-in-up group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white/80 p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary-200/60"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary-100/50 blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${program.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
                      }`}>
                      {program.status}
                    </span>
                    <span className="text-[10px] text-zinc-400">{program.partner}</span>
                  </div>
                  <h3 className="mt-2.5 text-sm font-bold text-zinc-800 group-hover:text-primary-700 transition-colors">{program.name}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">{program.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CROSS-CUTTING (Dark) ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-teal-800 px-6 py-24 sm:py-32 lg:px-8">
        <Particles />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
              Our Approach
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Three Cross-Cutting{" "}
              <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">Commitments</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { title: "Gender Equality & Social Inclusion", desc: "Prioritising women, girls and groups facing structural exclusion in all programs.", icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" },
              { title: "Climate Resilience", desc: "Connecting education and livelihoods with locally relevant climate adaptation.", icon: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" },
              { title: "Mental Health & Safeguarding", desc: "Building safe participation and responsible delivery into every programme.", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="animate-fade-in-up group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:shadow-xl"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent-300 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 transition-colors group-hover:text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/15 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Scale</span> This Impact?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-500">
            Every contribution helps us reach more schools, train more girls, and build stronger communities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              Support Our Work
            </a>
            <a
              href="/volunteer"
              className="w-full sm:w-auto rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
