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
    repoLink: ''
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
    id: 'healthinsights',
    name: 'Leo Lawrence',
    email: 'leozlaw@seas.upenn.edu',
    title: 'HealthInsights (name TBD)',
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
    teamMembers: [],
    stage: 'Ideation',
    repoLink: 'https://drive.google.com/drive/folders/12Tu63ynNjqdMTa7DBZkkN0EsTErzPKDq?usp=drive_link'
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
    teamMembers: [{ name: 'Marco Oppertti', email: '' }],
    stage: 'Ideation',
    repoLink: ''
  },
  {
    id: 'bound',
    name: 'Andrea Gualandris',
    email: 'guala@seas.upenn.edu',
    title: 'Bound',
    shortDescription: 'Anonymous social connections through shared moments',
    description: 'Founded and developed a social media iOS application enabling anonymous connections through shared life moments. Backend & Database: Built a serverless architecture with Firebase, utilizing Firestore NoSQL for real-time data sync and Cloud Functions for server-side logic and push notifications. Implemented Firebase Authentication for secure anonymous onboarding and Cloud Storage for efficient media handling. iOS Development: Developed a native Swift application following MVVM architecture. Integrated analytics and crash reporting SDKs to support App Store optimization and user behavior insights. Results & Scale: 1,000+ downloads in launch week; 20,000+ App Store impressions in Milan; Data model optimized for high-frequency social media read/write operations',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://stackoverflow.com/users/14220454/stackgu'
  },
  {
    id: 'flashreps',
    name: 'Amogh Channashetti',
    email: 'amoghc@seas.upenn.edu',
    title: 'FlashReps',
    shortDescription: 'Specialized exam prep platform',
    description: 'FlashReps is a spaced-repetition learning platform built for high-stakes exams where mainstream study tools lack tailored content. It uses adaptive review algorithms and structured study workflows to help students retain complex material efficiently and perform better on specialized tests.',
    teamMembers: [],
    stage: 'Live',
    repoLink: 'https://flashdec.org/'
  },
  {
    id: 'clarity',
    name: 'Jen Shi',
    email: 'jenzshi@seas.upenn.edu',
    title: 'Clarity',
    shortDescription: 'AI native investment research platform',
    description: 'An investment research platform that mines and monitors signals for your thesis and never sleeps. Explore, research and monitor all of your ideas in one place. A force multiplier for all of your ideas, starting with equity investments. Seamless workflow designed for humans and agents alike.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://fredexplorer.streamlit.app'
  },
  {
    id: 'thesio',
    name: 'Derek Ike',
    email: 'derekike@seas.upenn.edu',
    title: 'Thesio',
    shortDescription: 'AI-Powered Professional Networking Platform',
    description: 'Thesio is an AI-powered platform designed to help students and career professionals form meaningful, goal-aligned connections through the intuitive UI.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: ''
  },
  {
    id: 'krepo',
    name: 'Mayank Roy',
    email: 'roy1@seas.upenn.edu',
    title: 'KRepo',
    shortDescription: 'Cross-referential corporate knowledge repository to improve propagation & onboarding',
    description: 'Address the knowledge propagation and decay problems associated with rapid growth in employee numbers (typically between series A and beyond) in highly technical industries. Ideally also improve onboarding mechanisms using the knowledge repository.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://github.com/roy-mayank/KRepo'
  },
  {
    id: 'kora',
    name: 'Gayatri Sriram',
    email: 'gayatri1@wharton.upenn.edu',
    title: 'Kora',
    shortDescription: 'Personal AI wellness coaching team',
    description: 'The best athletes in the world don\'t figure out their health alone. They have a coach, nutritionist, and recovery specialist all working together to keep them on track. Kora brings that same coordinated wellness guidance to busy, ambitious people who don\'t have time for friction, starting with fitness.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://github.com/gayatrisriram1-maker/fitness-app/invitations'
  },
  {
    id: 'lecture-to-anki',
    name: 'Eric Deng',
    email: 'ericdeng@seas.upenn.edu',
    title: 'Lecture to Anki',
    shortDescription: 'AI flashcard generator from lecture notes',
    description: 'AI flashcard generator from lecture notes',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: 'https://github.com/EricJDeng/lecture-to-anki'
  },
  {
    id: 'innoflow',
    name: 'Jiawen Lu',
    email: 'jiawlu@upenn.edu',
    title: 'InnoFlow',
    shortDescription: 'Daily AI briefings & Mkt Platform for Early Startups',
    description: 'Innoflow',
    teamMembers: [
      { name: 'Aaron Guo', email: 'aarongzy@seas.UPenn.edu' },
      { name: 'Will Chen', email: 'hongyuc5@illinois.edu' }
    ],
    stage: 'Beta',
    repoLink: 'https://github.com/InnoFlows'
  },
  {
    id: 'cortex',
    name: 'Casey Talbot',
    email: 'ctalbot1@wharton.upenn.edu',
    title: 'Cortex',
    shortDescription: 'Agent Based Ecosystem to Enhance Thought',
    description: 'Cortex is a local-first knowledge environment where every idea you capture becomes a typed, connected node in a living graph you can see, navigate, and reshape. Its job isn\'t storing notes; it\'s surfacing the relationships between them, treating connections, clusters, and tensions as first-class objects you think with, not metadata you ignore. With an AI agent and terminal built into the workspace, it closes the loop between having an idea and acting on it, all without your thinking ever leaving your machine.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://github.com/caseyrtalbot/thought-engine'
  },
  {
    id: 'signals-ai',
    name: 'Prem Rajesh',
    email: 'Prem.Durai.Rajesh.wg25@wharton.upenn.edu',
    title: 'Signals AI',
    shortDescription: 'An Agentic Intelligence System for Modern Software Engineering',
    description: 'An AI Teammate for the Software Engineering Ecosystem. Signals AI act as a digital teammate - an AI executive assistant supporting software engineers, managers, and senior leaders such as VPs of Engineering, CTOs, and CIOs - automating hidden work, improving delivery health, and giving leadership clear visibility into efficiency, risks, and optimization opportunities. Teams using Signals AI are seeing approximately 8 hours saved per engineer per week, a 10%+ reduction in engineering spend, and more predictable delivery with faster execution.',
    teamMembers: [
      { name: 'Premsun Durai Rajesh', email: 'Prem@orgsignals.com' },
      { name: 'Gokul Palanisamy', email: 'gokul@orgsignals.com' },
      { name: 'Ashok Saravanan', email: 'ashok@orgsignals.com' }
    ],
    stage: 'Live',
    repoLink: 'https://orgsignals.com'
  },
  {
    id: 'echo-care-connect',
    name: 'Dren',
    email: 'dzabeli@sas.upenn.edu',
    title: 'Echo care connect',
    shortDescription: 'Care and connection made easy',
    description: 'An AI companion easing loneliness for Elderly individuals living with diabetes encouraging Familal interaction',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: 'https://github.com/ZaDrMeister/Echod1'
  },
  {
    id: 'mirrorknow',
    name: 'Beiqianyi Li',
    email: 'li50@upenn.edu',
    title: 'MirrorKnow',
    shortDescription: 'Digital Soul; Magic Fitting; Closet Muse',
    description: 'Struggling with what to wear? Feel like fashion bloggers don\'t really match your vibes? Or maybe you buy clothes but don\'t know how to style them? Finding your style shouldn\'t be this hard. MirrorKnow is here for you. It doesn\'t just know fashion; it knows \'you\'. Create your digital self: Build a virtual version of you that looks just like you. Smart Picks: It recommends the perfect outfit based on the weather and your plans for the day. Virtual Try-on: Every recommendation is shown directly on your avatar, so you can see exactly how it looks before you try it on. Join me! I\'m looking for people to help me build this—no matter your role. If you\'re interested, let\'s collaborate! Or, if you just want to chat and share your thoughts, I\'m always happy to talk.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: ''
  },
  {
    id: 'restoc',
    name: 'Temitayo Andrew',
    email: 'andrewte@upenn.edu',
    title: 'Restoc',
    shortDescription: 'Dental/Healthcare decision intelligence infrastructure',
    description: 'Restoc is an AI-powered decision intelligence platform designed to transform how dental practices allocate capital and make operational decisions. It captures previously unstructured data across procurement, laboratory usage, and clinical workflows, and converts it into measurable signals for benchmarking, forecasting, and optimization. By combining structured data systems with LLM-driven analysis, Restoc moves practices beyond cost-based decision-making toward return-driven, evidence-based capital allocation. The platform introduces proprietary frameworks (OVI, DSMS) to quantify decision quality and operational maturity, positioning AI not as an assistant, but as core infrastructure for clinical and business decision systems.',
    teamMembers: [],
    stage: 'MVP',
    repoLink: 'https://restoc.com'
  },
  {
    id: 'dental-avoidance-intelligence',
    name: 'Karam Alfaisal',
    email: 'Kalfai@upenn.edu',
    title: 'Dental avoidance intelligence',
    shortDescription: 'AI-powered behavioral system for dental practices',
    description: 'Dental Avoidance Intelligence is a proposed AI-powered behavioral system for dental practices designed to identify patients who are delaying or avoiding care, understand the likely reason behind that delay, and guide the practice on the best next step to bring the patient back into treatment. The core idea is that many patients do not fail to return because they simply "forgot." They often delay for hidden reasons such as fear, shame, overwhelm, distrust, financial stress, trauma, or executive dysfunction. Most dental offices treat all overdue patients the same way, with generic reminders or follow-up calls. Dental Avoidance Intelligence would try to solve that by adding a behavioral layer on top of the practice\'s normal workflow.',
    teamMembers: [],
    stage: 'Ideation',
    repoLink: 'https://github.com/karam200014/dental-avoidance-intelligence'
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
    repoLink: 'https://attendance-location-for-groups.vercel.app/',
    isBoardProject: true
  }
];
