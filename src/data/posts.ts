export interface Post {
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const posts: Post[] = [
  {
    title: "STEM Pioneers Project: Bringing Hands-On Science to Girls in Kalat",
    excerpt:
      "Supported by the U.S. Consulate and PUAN, MRC's STEM Pioneers Project engaged 5 girls' high schools, 80 students, and 20 teachers in Kalat District — establishing STEM labs and creating a sustainable education network.",
    content: [
      "Supported by the U.S. Consulate and the Pakistan-U.S. Alumni Network (PUAN), the STEM Pioneers Project was a six-month initiative implemented by Mechanism for Rational Change (MRC) in Kalat District. The project promoted practical, inclusive, and future-focused STEM education in five girls' high schools by strengthening teachers' skills, introducing digital learning opportunities, and creating STEM learning spaces for students.",
      "The project engaged 5 girls' high schools, 80 students, and 20 teachers. Trained STEM Ambassadors in STEM concepts, leadership, event planning, and IT skills. Conducted STEM awareness sessions, intensive trainings, IT courses, and an exposure visit to Magnifi Science Center.",
      "Established STEM and computer labs, giving many girls access to hands-on learning tools and computers for the first time. Improved teachers' use of interactive and inquiry-based teaching methods. Increased students' confidence, curiosity, peer learning, and interest in STEM-related careers.",
      "Created a STEM Education Network to continue collaboration and STEM activities beyond the project period. The project proved that rural girls have immense potential in science and technology when given the right opportunities and resources.",
    ],
    category: "Education",
    date: "2023",
    readTime: "4 min read",
    image: "/tenis.jpeg",
    slug: "stem-pioneers-kalat",
  },
  {
    title: "Her Power: Young Women of Balochistan Launch 14 Start-ups",
    excerpt:
      "With support from Women Fund Asia, MRC's Her Power project empowered 20 young women to turn their ideas into real businesses — from food brands to tech platforms.",
    content: [
      "Supported by Women Fund Asia, Her Power is one of MRC's flagship initiatives designed to identify, support, and nurture emerging young women leaders in Balochistan. The project focused on girls who have ideas, passion, and potential, but limited access to platforms, skills, and opportunities.",
      "Through this program, MRC provided young women with leadership training, confidence-building sessions, entrepreneurship skills, communication support, and practical business development guidance. The project encouraged girls to move beyond learning and start taking action by turning their ideas into real businesses, start-ups, and community initiatives.",
      "Out of 71 applicants, 20 young women were selected through interviews and assessment. By the end of the program, these participants became more confident, skilled, and ready to lead their own journey as founders, entrepreneurs, and community leaders.",
      "The Her Power leaders launched inspiring businesses and platforms including Yad-e by Sughra Baloch, Crazy for Momos by Kalsoom, Jhalawan Traditional Food by Romasa, Stickers Studio by Mahrosh, Skill & Tech Fashion by Samreen, and many more.",
      "As a result, 20 small businesses and start-ups were established, with participants now generating income through their own ideas, building local brands, leading peer groups, and proving that girls in Balochistan can lead, innovate, and contribute to the economy.",
    ],
    category: "Women Empowerment",
    date: "2025",
    readTime: "4 min read",
    image: "/womenempowerment.JPG",
    slug: "her-power-startups",
  },
  {
    title: "School of Scholars: A Model for Girls' Education in Rural Balochistan",
    excerpt:
      "Founded in 2015, the School of Scholars continues to transform lives — with 231 girls currently enrolled and hundreds of graduates leading change in their communities.",
    content: [
      "Founded by Mechanism for Rational Change (MRC) in 2015, the School of Scholars is a girls' high school in Khuzdar, Balochistan. It was created to demonstrate how education can go beyond textbooks and prepare girls to become confident leaders, innovators, entrepreneurs, and active citizens.",
      "Currently, 231 girls are enrolled in the school, while hundreds of girls have graduated and moved forward in their education, careers, leadership journeys, and community roles. Known as a \"Place of Daughters,\" the school provides a safe, inspiring, and inclusive environment where girls are trusted to dream big.",
      "The school has introduced innovative initiatives including STEM learning through Science Clubs and Tech Lovers, leadership and life skills development, entrepreneurship and enterprise workshops, project-based learning connected to real community issues, and student-led clubs covering climate, sports, heritage, and civic engagement.",
      "For its outstanding contribution to girls' education and empowerment, the School of Scholars received the Women Can Do Award from the U.S. Consulate Karachi, gaining recognition as a successful rural model for reimagining education.",
      "The school's goal is to build a model of quality, innovative, and girl-centred education that enables girls in Balochistan to access learning, develop life skills, pursue higher education, and become leaders in their communities.",
    ],
    category: "Education",
    date: "2025",
    readTime: "5 min read",
    image: "/girlsedu.jpg",
    slug: "school-of-scholars-model",
  },
  {
    title: "Girls Leadership Program: 20 Fellows, 20 Change-makers",
    excerpt:
      "Through intensive training in leadership, advocacy, and community engagement, 20 young girls from Khuzdar emerged as confident leaders ready to shape their futures.",
    content: [
      "The Girls Leadership Program by MRC was a comprehensive initiative designed to empower young girls with leadership skills, confidence, and practical knowledge to become active contributors to their communities. Guided by the vision of \"Learning and Leading at Each Level,\" the program focused on nurturing future female leaders in Balochistan.",
      "A transparent and merit-based selection process identified 20 motivated young girls with leadership potential. Participants received intensive training on key themes including leadership and communication skills, self-awareness and personal development, gender and development, education system analysis, technology and digital safety, research, advocacy, and idea development.",
      "The program moved beyond classroom learning and encouraged fellows to apply their skills in real life. Fellows designed and implemented community-based projects, led awareness sessions on education and girls' empowerment, and engaged with students, parents, teachers, and community members.",
      "Key activities included leadership workshops, community engagement sessions, a district-level STEM Science Festival for girls, trainings for school heads and education officers, quarterly stakeholder meetings, and youth-led community projects.",
      "The program created meaningful change — 20 young girls were transformed into confident leaders and change-makers, with improved leadership, communication, public speaking, teamwork, and critical thinking skills. A strong network of young female leaders was created in Khuzdar.",
    ],
    category: "Leadership",
    date: "2024",
    readTime: "3 min read",
    image: "/MRC%20Team.jpeg",
    slug: "girls-leadership-program",
  },
  {
    title: "Building Climate Resilience in Balochistan's Vulnerable Communities",
    excerpt:
      "From water resource management to emergency response, MRC's climate work strengthens communities against droughts, floods, and environmental challenges.",
    content: [
      "Balochistan faces severe climate challenges, from droughts to floods. MRC works with communities to build resilience through emergency response, sustainable resource management, and disaster risk reduction, combining immediate relief with long-term capacity building.",
      "Our climate and resilience programs include repair and maintenance of water resources, emergency response and food distributions during crises such as COVID-19, Ramzan drives in dropout-affected communities, winter item distributions through Apna Dastakhawn and Salani Welfare, and DRR capacity building with the Start Network.",
      "These initiatives ensure that vulnerable communities have access to essential resources during crises while building long-term resilience against the increasing impacts of climate change in the region.",
    ],
    category: "Climate",
    date: "2024",
    readTime: "4 min read",
    image: "/climate%20and%20resilence.JPG",
    slug: "climate-resilience-balochistan",
  },
  {
    title: "Advocating for Girls' Health Rights in Khuzdar",
    excerpt:
      "Through awareness sessions in government girls' schools, MRC is breaking the silence on reproductive health, mental well-being, and girls' right to information.",
    content: [
      "MRC advocates for the health rights of girls and women, ensuring they have access to information, services, and support. Through awareness sessions and partnerships, we address critical health issues and promote well-being among young women in schools and communities.",
      "Our health rights programs include the Women Health Rights project by Awaz Foundation, youth health rights sessions in government girls' schools, mental health awareness and support initiatives, and community dialogue on reproductive health and rights.",
      "These initiatives have led to increased awareness and access to health information for girls and women in Khuzdar, empowering them to make informed decisions about their bodies and well-being.",
    ],
    category: "Health Rights",
    date: "2024",
    readTime: "3 min read",
    image: "/tenis.jpeg",
    slug: "girls-health-rights",
  },
];
