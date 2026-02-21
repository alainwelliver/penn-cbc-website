export interface Product {
  id: string;
  name: string;
  email: string;
  title: string;
  shortDescription: string;
  description: string;
  teamMembers: { name: string; email: string }[];
  stage: 'Live' | 'MVP' | 'Beta' | 'Ideation';
  repoLink: string;
  isBoardProject?: boolean;
}

export const products: Product[] = [
  {
    id: 'delia',
    name: 'Ashen Parikh',
    email: 'ashenp@wharton.upenn.edu',
    title: 'Delia',
    shortDescription: 'HR AI simulation platform for Hiring',
    description: "Non-technical hiring is non-standardized and biased: Wharton research shows traditional interviews poorly predict job performance. We're building a simulation platform where hiring teams define role-specific success metrics, and AI generates scenarios testing those exact skills: sales reps negotiate with AI stakeholders, account managers resolve client crises, recruiters evaluate candidate pools. Unlike generic tools like HireVue that measure presentation over work quality, we isolate performance from bias. Validated with Professor Matthew Bidwell. We've completed concept validation; the $2K builds three role-specific templates and pilots with companies in Philadelphia to measure predictive validity against traditional interviews",
    teamMembers: [],
    stage: 'Live',
    repoLink: 'https://delia-hr.vercel.app/'
  },
  {
    id: 'student-calendar',
    name: 'Kushal Garg',
    email: 'kushalx@seas.upenn.edu',
    title: 'Student Calendar',
    shortDescription: 'One stop shop for all deadlines',
    description: 'Student life consists of lots of aspects - assignments, exams, clubs, projects, events etc. It becomes very difficult to keep track of everything. The project would automatically read emails, pick up events and deadlines and put it on calendar + connect with canvas and ed to pull any deadlines and put on calendar so students are always upto date about what\'s happening and do not miss anything.',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: ''
  },
  {
    id: 'panopticon',
    name: 'Intel Chen',
    email: 'yihechen@seas.upenn.edu',
    title: 'Panopticon System',
    shortDescription: 'AI-powered personal mirror for productivity',
    description: 'Panopticon System is an AI-powered "quantified self" platform that passively collects data from your digital life and delivers brutally honest observations about how you actually spend your time. How it works: 1. Passive Data Collection – Mac app tracks app usage across 80+ categories; iOS captures additional context; integrations pull calendar, email, health data (Whoop/Oura) 2. Sensor Fusion – Backend aggregates data streams into unified personal timeline 3. Mirror Reflection – AI generates honest, sometimes uncomfortable observations about patterns, habits, and time allocation 4. Accountability – Voice AI coaching delivers insights as an authoritative voice that drives behavior change. Current Technical Assets: macOS App (75% ready): App tracking, productivity scoring, analytics; iOS App (functional): Voice AI, Screen Time blocking, calendar sync; Backend (production): 30+ modules, 10+ integrations, encryption; Web dashboard: Analytics, task management. Based on 20+ customer conversations, users don\'t want another productivity app – they want an honest mirror that forces them to confront how they actually spend time.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: ''
  },
  {
    id: 'clarify',
    name: 'Chuby Madu',
    email: 'chuby@wharton.upenn.edu',
    title: 'Clarify',
    shortDescription: 'Deepfake detection',
    description: 'Clarify is an AI-driven detection and authentication platform designed to restore trust in digital media. As synthetic images, videos, and voices become increasingly indistinguishable from reality, individuals and institutions lack reliable tools to verify what they see and hear online. Clarify addresses this by scanning content across social platforms and the web to detect visual and audio deepfakes in real time. In addition, Clarify provides an invisible authenticity stamp that creators, journalists, and organizations can embed in legitimate media, allowing downstream viewers to confirm its origin and integrity. The platform is designed for both consumers and enterprises, offering a mobile app, browser extension, and enterprise verification tools. By combining detection with cryptographic-style verification, Clarify creates a shared infrastructure for digital trust, helping users, media organizations, and brands navigate the AI era with confidence.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://www.clarifytechnologies.org/'
  },
  {
    id: 'avdah',
    name: 'Eyal Lubin',
    email: 'eyalylub@sas.upenn.edu',
    title: 'Avdah',
    shortDescription: 'AI-Hiring Platform Interview Service',
    description: 'We are an AI Interviewing Service for first-round applicant screening.',
    teamMembers: [{ name: 'Sam Koffler', email: 'skoffler@sas.upenn.edu' }],
    stage: 'Live',
    repoLink: 'https://avdah.com'
  },
  {
    id: 'writing-feedback',
    name: 'Mai Vuong',
    email: 'maivuong@upenn.edu',
    title: 'Personalized Writing Feedback System',
    shortDescription: 'Personalized Writing Feedback System',
    description: 'The project targets formative feedback for grammar and writing practice, where timing and clarity are most critical for learning. The goal is to support teachers in delivering actionable, task specific feedback at scale without increasing workload, while helping students develop stronger writing habits and confidence.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://github.com/quemaivuong/writing_feedback.git'
  },
  {
    id: 'social-connect',
    name: 'Bhavana Akula',
    email: 'Bakula@sas.upenn.edu',
    title: 'Social Connect @ Penn',
    shortDescription: 'Social connection made simpler',
    description: 'One stop shop & concierge for social connection at penn',
    teamMembers: [],
    stage: 'MVP',
    repoLink: ''
  },
  {
    id: 'perennial',
    name: 'Sabine Mejia',
    email: 'smejia@seas.upenn.edu',
    title: 'Perennial',
    shortDescription: 'An online marketplace for college students to buy and sell items they no longer need. The goal of this app is to reduce waste and facilitate a circular economy.',
    description: 'An online marketplace for college students to buy and sell.',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: 'https://www.figma.com/proto/MWqCpFVfyksvQ00N5diKA2/Perennial-UI--Copy-?node-id=82-251&starting-point-node-id=82%3A251&t=OwZFOCVMN0kWUnoN-1'
  },
  {
    id: 'aeo',
    name: 'Zachary',
    email: 'xxinzhao@upenn.edu',
    title: 'AEO',
    shortDescription: 'Agentic engine optimization',
    description: 'Agentic engine optimization',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://www.linkedin.com/company/aeofront'
  },
  {
    id: 'grouper',
    name: 'Shane Murphy',
    email: 'boom1263@seas.upenn.edu',
    title: 'Grouper',
    shortDescription: 'Group project breakdown app',
    description: 'Grouper is an app that uses AI to help users break up group projects into equal portions and makes it easy to check off tasks and track each others progress.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://github.com/shanemurphster/grouper.git'
  },
  {
    id: 'pigeon-ai',
    name: 'Toni Lobaccaro',
    email: 'toniloba@seas.upenn.edu',
    title: 'Pigeon AI',
    shortDescription: 'AI and Fintech for NGOs',
    description: 'Pigeon AI is an all-in-one financial companion designed to help nonprofits scale via grant funding. Its AI-native search matches organizations with government and private opportunities while predicting future leads. To increase win rates, a generative writing agent drafts tailored proposals based on specific rubrics and flags budget errors. Post-award, the automated compliance tool syncs with accounting software to verify expenses and streamline reporting. Additionally, Pigeon AI offers bridge loans to provide early capital for organizations facing government payment delays, streamlining discovery, writing, compliance, and cash flow management.',
    teamMembers: [{ name: 'Leo Lobaccaro', email: 'leoloba@wharton.upenn.edu' }],
    stage: 'MVP',
    repoLink: ''
  },
  {
    id: 'healthinsights',
    name: 'Leo Lawrence',
    email: 'leozlaw@seas.upenn.edu',
    title: 'HealthInsights',
    shortDescription: 'Wearable data transformed into actionable insights',
    description: 'HealthInsights takes wearable data (Apple Watch) combined with research papers on relevant metrics (HRV, Sleep Cycles) to provide the user with actionable insights.',
    teamMembers: [],
    stage: 'Beta',
    repoLink: 'https://github.com/leolawrence'
  },
  {
    id: 'irix',
    name: 'Sohan Lele',
    email: 'lele03@seas.upenn.edu',
    title: 'IRIX',
    shortDescription: 'Automating personal training in gyms',
    description: 'AI personal trainer on smart glasses. Gym members check out the glasses at the front desk, and IRIX guides them through personalized workouts while automatically logging reps, rest, and fatigue.',
    teamMembers: [{ name: 'Jeffrey Yang', email: 'jey013@ucsd.edu' }],
    stage: 'MVP',
    repoLink: 'https://tryirix.com'
  },
  {
    id: 'talking-with-friends',
    name: 'Ashley Zingillioglu',
    email: 'zingil10@upenn.edu',
    title: 'Talking with Friends',
    shortDescription: 'AI-Powered Interactive Social Story Learning Platform',
    description: 'Autistic middle schoolers need structured, repeatable ways to practice conversation skills, but current supports don\'t translate well outside therapy sessions. Talking with Friends combines ABA principles, digital storytelling, and adaptive AI prompts to create interactive social simulations students can practice anytime. As a Penn Learning Sciences student, I\'m grounding the product in research while actively building and testing with real educators and disability advocates. I\'m now focused on shipping a polished MVP, running pilots, and using feedback loops to scale toward a sustainable EdTech venture.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://www.canva.com/design/DAG64M6DOjI/zYdJAfyWW72s1D7vvhtwEg/edit'
  },
  {
    id: 'viaride',
    name: 'Suosi He',
    email: 'suosihe@seas.upenn.edu',
    title: 'ViaRide',
    shortDescription: 'Ridesharing app',
    description: 'Ridesharing App connecting drivers (car owners) and passengers',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: ''
  },
  {
    id: 'maii',
    name: 'Jimwell Huang',
    email: 'huang44@seas.upenn.edu',
    title: 'MAII',
    shortDescription: 'AI-native messaging app',
    description: 'MAII is a real-time, AI-powered investment mentoring and instant messaging platform. The project scope is to develop a universal native application (Web, Android, iOS) with three core features: Portfolio Management, AI-Powered Investment Mentoring, and AI-Embedded Chats',
    teamMembers: [{ name: 'Yuzhe Pan', email: 'pan5@seas.upenn.edu' }],
    stage: 'Ideation',
    repoLink: 'https://drive.google.com/drive/folders/1KFaJZA-8fjA0UEyKLfakRA4Q9ydGvsys?usp=drive_link'
  },
  {
    id: 'verityai',
    name: 'Tolu Alamu',
    email: 'toalamu@wharton.upenn.edu',
    title: 'VerityAI - AI Visibility Infrastructure Platform',
    shortDescription: 'AI Visibility for Ecommerce Brands',
    description: 'VerityAI is a platform-agnostic infrastructure layer that standardizes brand and product representation on AI platforms and provides necessary infrastructure to enable agentic commerce for ecommerce brands.',
    teamMembers: [{ name: 'Tolu Alamu', email: 'toalamu@wharton.upenn.edu' }],
    stage: 'Ideation',
    repoLink: 'https://drive.google.com/drive/folders/12Tu63ynNjqdMTa7DBZkkN0EsTErzPKDq?usp=drive_link'
  },
  {
    id: 'civitas-ai',
    name: 'Mohammed Alkindi',
    email: 'alkindi@sas.ueppn.edu',
    title: 'Civitas AI',
    shortDescription: 'Compliance intelligence for international students',
    description: 'Civitas AI is a structured compliance intelligence platform for international students in the United States. It converts fragmented visa, university, and sponsor policies into a deterministic decision engine with official and community modes. Users input their academic status and sponsor details. The system routes them through rule-based logic augmented by AI to generate compliant next steps for CPT, OPT, enrollment, and reporting requirements. Civitas AI reduces regulatory risk and replaces misinformation with accountable, structured guidance.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://github.com/Mohammed-coder-dev/OmanX'
  },
  {
    id: 'hali',
    name: 'Lamar',
    email: 'lamarj1@wharton.upenn.edu',
    title: 'hali',
    shortDescription: 'Reach your health goals',
    description: 'An AI powered app for the middle eastern region primarily geared towards helping people track their calories, workouts, keeping them on schedule to reach their health goals',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: ''
  },
  {
    id: 'recallos',
    name: 'Chris Bugliosi',
    email: 'bugliosi@wharton.upenn.edu',
    title: 'RecallOS',
    shortDescription: 'Recall engine for digital information',
    description: 'Pain point: people consume mass amounts of information over time, and fail to retain a lot of it longer term. Plenty of research has been done on this topic (information overload), and it is a problem that only gets worse as people turn to AI to get quick answers to questions they may have. Solution: build a recall engine that ingests information from various data types (i.e. pdf\'s, articles (raw html format perhaps), videos (as transcripts), AI conversations, etc.) and then outputs high quality questions designed to reinforce understanding of the topic covered using a spaced repetition algorithm. Why: Spaced repetition is an efficient way to move information from Short Term Memory (STM) to Long Term Memory (LTM), and the more automated the experience can be the better (more automation -> more seamless UX -> easier to get started). Pitch to users: AI can help you learn things, but not remember them. RecallOS tracks what you learn and ensures you gain knowledge over time. Pitch to investors: AI is replacing textbooks, but no one owns retention. RecallOS is building the memory layer for the future of learning.',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: ''
  },
  {
    id: 'expressionai',
    name: 'Sidhya Ganesh',
    email: 'sidhyag@wharton.upenn.edu',
    title: 'ExpressionAI',
    shortDescription: 'Dance Expression Feedback using AI',
    description: 'ExpressionAI is a web-based learning tool that helps Bharatanatyam (Indian Classical dance style) dance students improve their facial expressions (critical element in the dance form) by comparing their practice videos against instructor-uploaded reference performances. Using a hybrid of DeepFace and MediaPipe, it detects and classifies the 10 classical Navarasas - the emotional expressions central to Bharatanatyam storytelling - and gives students timestamped, story-aware feedback on where their expressions matched or diverged from the reference. Instructors can annotate reference videos with rasa (facial expression) labels and narrative context (Bharatanatyam dance performances tell complex stories with characters and emotions), push assignments to students, and monitor class-wide progress through a dedicated dashboard. ExpressionAI classifies facial expressions into the 10 classical Bharatanatyam Navarasas using a hybrid of DeepFace for emotion detection and MediaPipe for geometric intensity measurement, scoring student performances on an 80/20 weighted scale of rasa accuracy versus expression intensity. Instructors can upload reference videos, annotate rasa segments by dragging on an interactive timeline with story context, and push assignments to students who then receive timestamped, narrative-aware feedback that breaks their performance into thirds to identify fatigue or inconsistency. Students can track their progress over time through a dedicated accuracy dashboard showing overall trends, per-rasa breakdowns, and a usage streak, while instructors monitor class-wide engagement, submission rates, and average rasa accuracy through a separate class dashboard.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: ''
  },
  {
    id: 'articulaite',
    name: 'Tony Sui',
    email: 'tonysui@seas.upenn.edu',
    title: 'articulAIte',
    shortDescription: 'Real-time AI coaching for clear, confident speech.',
    description: 'articulAIte is an AI-powered communication coach designed to help users speak more articulately and confidently. Unlike existing tools that only provide post-meeting analytics, articulAIte aims to deliver real-time, unobtrusive feedback on pacing, filler words, and clarity during live conversations. By leveraging low-latency audio processing and lightweight LLMs, the application helps users, from professionals navigating high-stakes technical interviews to public speakers, translate complex thoughts into concise, impactful language.',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: 'https://github.com/tonysui88/articulAIte'
  },
  {
    id: 'ping',
    name: 'Suosi He',
    email: 'suosihe@gmail.com',
    title: 'Ping',
    shortDescription: 'A real-time location-based socializing app',
    description: 'Ping is a real-time, location-based platform that helps campus students and young professionals find people nearby to do things with.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://devpost.com/software/ping-odv52w'
  },
  {
    id: 'verirag',
    name: 'Juno Kim',
    email: 'junokim@seas.upenn.edu',
    title: 'VeriRAG',
    shortDescription: 'Enterprise-focused audit trails for RAG systems',
    description: 'This project is a verifiable audit layer for enterprise RAG systems. For every AI answer, it records which document chunks were retrieved, what the model actually saw as context, and the output it produced, then commits that evidence into a tamper-evident structure (hashes and Merkle trees, optionally anchored on-chain). Later, auditors can reconstruct and verify why a specific decision was made and confirm that no disallowed documents were used.',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: ''
  },
  {
    id: 'monolith',
    name: 'Andrea Causio',
    email: 'causius@seas.upenn.edu',
    title: 'Monolith: AI-powered Academic Publishing Platform',
    shortDescription: 'AI agents for medical research review and editorial backoffice',
    description: 'Monolith is a high-performance multi-agent ecosystem designed to revolutionize the medical editorial backoffice by replacing fragmented manual workflows with a unified, autonomous digital nervous system for research review. The Monolith framework orchestrates specialized agents to handle everything from rigorous technical screening and p-value verification to conflict-of-interest mapping and automated JATS XML production, ensuring that scientific integrity is maintained at a speed human-only teams cannot match.',
    teamMembers: [
      { name: 'Ruiqui Pan', email: 'ruiquipan@seas.upenn.edu' },
      { name: 'Melissa Sawaya', email: 'melissa.sawaya2@gmail.com' },
      { name: 'Nicola Chiandetti', email: 'chiande7@seas.upenn.edu' }
    ],
    stage: 'MVP',
    repoLink: 'https://www.monolith.pizza',
    isBoardProject: true
  },
  {
    id: 'monk',
    name: 'Olisa Nwogugu',
    email: 'olisanw@seas.upenn.edu',
    title: 'Monk',
    shortDescription: 'Tracks your progress on general well being',
    description: 'Monk is an app that tracks progress on mental and physical health along with other goals. The home page is a live progress report presented as a monk avatar whose stance changes as the user does better. It supports multiple channels of information collection for tracking.',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: ''
  },
  {
    id: 'attendance-location-for-groups',
    name: 'CBC Board',
    email: 'penncbc@gmail.com',
    title: 'Attendance Location for Groups',
    shortDescription: 'Internal attendance tracking + targeted email blasts for CBC.',
    description: 'CBC uses this internal tool to track attendance, segment attendee lists, and send targeted email blasts for benefits like Claude Pro and important announcements such as Foundry.',
    teamMembers: [],
    stage: 'Live',
    repoLink: 'https://attendance-location-for-groups.vercel.app/'
  },
  {
    id: 'anchor-dating-first',
    name: 'Kyle Zhang',
    email: 'kyle100@wharton.upenn.edu',
    title: 'Anchor - Dating First',
    shortDescription: 'Curate the perfect date first, then match with someone who wants the same experience.',
    description: 'In real life, you do not meet people by staring at their profile. The context creates the connection. Anchor flips the script by letting you curate the date first, then match with someone who wants the same experience. Anchor AI recommends venues and events it predicts you will enjoy and matches you with another attendee based on an AI-determined compatibility fit.',
    teamMembers: [{ name: 'Antony Tran', email: 'antonyltran@gmail.com' }],
    stage: 'Beta',
    repoLink: 'https://anchor.dating',
    isBoardProject: true
  }
];
