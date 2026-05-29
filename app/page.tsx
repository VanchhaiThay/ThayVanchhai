"use client";
import React from 'react';
import {
  Github, Mail, Code2, Smartphone, Globe, Zap, Database, Layout,
  ChevronRight, Briefcase, GraduationCap, Languages, MessageSquare,
  SearchCode, Send, Sparkles, CheckCircle2, Award, FolderGit2,
  Bot, Wrench, Brain
} from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

export default function Portfolio() {
  const socials = {
    github: "https://github.com/VanchhaiThay",
    telegram: "https://t.me/+85587631748",
    email: "mailto:thayvanchhai1@gmail.com",
    website: "https://thay-vanchhai-zeta.vercel.app",
  };

  const skillGroups = [
    {
      label: "Programming",
      accent: "text-yellow-400",
      border: "border-yellow-500/20",
      bg: "bg-yellow-500/5",
      items: [
        { name: "Dart", icon: <Code2 className="w-4 h-4" />, color: "text-sky-300" },
        { name: "JavaScript", icon: <Code2 className="w-4 h-4" />, color: "text-yellow-400" },
        { name: "HTML5 / CSS3", icon: <Globe className="w-4 h-4" />, color: "text-orange-400" },
        { name: "Python", icon: <Code2 className="w-4 h-4" />, color: "text-yellow-300" },
      ],
    },
    {
      label: "Frameworks",
      accent: "text-cyan-400",
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/5",
      items: [
        { name: "Flutter", icon: <Smartphone className="w-4 h-4" />, color: "text-blue-400" },
        { name: "React / Next.js", icon: <Zap className="w-4 h-4" />, color: "text-cyan-400" },
        { name: "Node.js", icon: <Zap className="w-4 h-4" />, color: "text-green-400" },
        { name: "FastAPI", icon: <Zap className="w-4 h-4" />, color: "text-teal-400" },
      ],
    },
    {
      label: "Database",
      accent: "text-emerald-400",
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/5",
      items: [
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" />, color: "text-indigo-400" },
        { name: "MySQL", icon: <Database className="w-4 h-4" />, color: "text-blue-300" },
        { name: "MongoDB", icon: <Database className="w-4 h-4" />, color: "text-emerald-400" },
        { name: "Firebase", icon: <Database className="w-4 h-4" />, color: "text-amber-500" },
        { name: "Supabase", icon: <Database className="w-4 h-4" />, color: "text-green-400" },
      ],
    },
  ];

  const workExperience = [
    {
      title: "Mobile Application Developer",
      company: "Top Auto",
      period: "March 2026 – June 2026",
      tags: ["Flutter", "Node.js", "MongoDB", "Provider"],
      description: "Developed a full-stack e-commerce solution featuring robust state management and a responsive architecture for mobile, tablet, and desktop. Architected the entire application structure to ensure scalability and maintainability.",
      accent: "emerald",
      active: true,
    },
    {
      title: "Mobile Application Developer",
      company: "JDM MERCHANT",
      period: "March 2026 – June 2026",
      tags: ["Flutter", "Firebase", "Hive", "Provider"],
      description: "Built a comprehensive merchant POS application for auto parts sales featuring authentication, inventory management, order processing, and reporting. Implemented feature-first architecture with modular components.",
      accent: "indigo",
      active: false,
    },
  ];

  const projects = [
    {
      name: "RUPP | EduHub",
      period: "Feb 2026 – Jun 2026",
      tags: ["Flutter", "Firebase", "Supabase", "Figma"],
      desc: "Khmer Education platform with 4-language detection, dual student/teacher portals, real-time messaging, and assignment dashboard.",
      color: "from-indigo-500/10 to-transparent",
      border: "border-indigo-500/20",
      dot: "bg-indigo-500",
    },
    {
      name: "Plant Disease Detection",
      period: "Sep 2025 – Dec 2025",
      tags: ["Python", "FastAPI", "Streamlit", "Groq API", "Meta Llama"],
      desc: "AI system identifying 500+ plant diseases. FastAPI backend with sub-5-second inference, Streamlit frontend with drag-and-drop uploads.",
      color: "from-emerald-500/10 to-transparent",
      border: "border-emerald-500/20",
      dot: "bg-emerald-500",
    },
    {
      name: "RUPP | Khmer Learning App",
      period: "Oct 2025 – Jan 2026",
      tags: ["Flutter", "Firebase", "Figma", "Dicebear"],
      desc: "Full-stack Khmer language learning app focused on interactive UI/UX and seamless data synchronization.",
      color: "from-rose-500/10 to-transparent",
      border: "border-rose-500/20",
      dot: "bg-rose-500",
    },
    {
      name: "The Wild Oasis",
      period: "Nov 2024 – Jan 2025",
      tags: ["Next.js", "Node.js", "Vercel"],
      desc: "High-performance hotel booking web app with dynamic routing, real-time API handling, and a secure multi-level authorization system.",
      color: "from-amber-500/10 to-transparent",
      border: "border-amber-500/20",
      dot: "bg-amber-500",
    },
  ];

  const certifications = [
    { name: "Game Application Development", org: "RUPP", period: "Jan 2026 – Jun 2026" },
    { name: "AWS Training – Machine Learning", org: "RUPP", period: "Oct 2025 – Dec 2025" },
    { name: "Analyze Mobile Application", org: "RUPP", period: "Jan 2024 – Jun 2024" },
    { name: "Chinese Language", org: "SE Asia Language School", period: "May 2024 – Aug 2024" },
  ];

  const aiTools = ["Antigravity Agent", "Codex", "Copilot", "Blackbox", "Gemini", "ChatGPT"];
  const devTools = ["Antigravity", "GitHub", "VSCode", "Android Studio", "Laragon", "Figma", "Postman"];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: easeOut }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[20%] w-[20%] h-[20%] bg-rose-900/5 blur-[80px] rounded-full" />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold tracking-tighter text-xl italic bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Thay Vanchhai.
          </motion.span>
          <div className="flex items-center gap-6">
            <motion.a whileHover={{ y: -2 }} href={socials.telegram} target="_blank" className="text-zinc-400 hover:text-sky-400 transition-colors"><Send className="w-5 h-5" /></motion.a>
            <motion.a whileHover={{ y: -2 }} href={socials.github} target="_blank" className="text-zinc-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></motion.a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-40 pb-20 space-y-40">

        {/* HERO */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6 backdrop-blur-sm">
              <Sparkles size={12} className="animate-pulse" /> Available for new opportunities
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              Software <br />
              <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent italic">Developer.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed font-light">
              Designing digital experiences that bridge the gap between <span className="text-zinc-100">Clean Code</span> and <span className="text-zinc-100">User-Centric Design</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full">📍 Sen Sok, Phnom Penh</span>
              <a href={socials.website} target="_blank" className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full hover:text-indigo-400 transition-colors">🌐 thay-vanchhai-zeta.vercel.app</a>
              <a href={`tel:+85587631748`} className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full hover:text-emerald-400 transition-colors">📞 +855 87 631 748</a>
            </div>
          </motion.div>
        </section>

        {/* WORK EXPERIENCE */}
        <motion.section {...fadeInUp} id="experience">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500 shadow-inner"><Briefcase size={24} /></div>
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
          </div>
          <div className="space-y-12 border-l-2 border-zinc-800/50 ml-6 pl-10 relative">
            {workExperience.map((job, i) => (
              <motion.div key={i} whileHover={{ x: 10 }} className="relative group transition-all">
                <div className={`absolute -left-[51px] top-1 w-6 h-6 ${job.active ? `bg-${job.accent}-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]` : 'bg-zinc-700 group-hover:bg-indigo-500'} rounded-full border-4 border-[#050505] z-10 group-hover:scale-125 transition-all`} />
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                  <h3 className={`text-2xl font-bold text-white group-hover:text-${job.accent}-400 transition-colors`}>{job.title}</h3>
                  <p className={`text-${job.accent}-500/80 font-semibold mt-1`}>{job.company} · {job.period}</p>
                  <div className="flex flex-wrap gap-2 my-4">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-400 uppercase tracking-tighter">{tag}</span>
                    ))}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{job.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section {...fadeInUp} id="projects">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-400"><FolderGit2 size={24} /></div>
            <h2 className="text-3xl font-bold tracking-tight">Project Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`bg-gradient-to-br ${p.color} border ${p.border} p-6 rounded-3xl backdrop-blur-md transition-shadow hover:shadow-xl`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full ${p.dot}`} />
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{p.period}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded text-zinc-500 uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section {...fadeInUp} id="education">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500"><GraduationCap size={24} /></div>
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-zinc-900/50 to-transparent border border-white/5 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">Bachelor of IT Engineering</h3>
              <p className="text-indigo-400 text-sm mb-4 font-medium uppercase tracking-widest">RUPP · 2022 — Present</p>
              <div className="h-1 w-12 bg-indigo-500 rounded-full" />
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-zinc-900/20 border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white">Sreng Kim High School</h3>
              <p className="text-zinc-500 text-sm mt-1">Bac II Certificate · 2019 — 2022</p>
            </motion.div>
          </div>
        </motion.section>

        {/* SKILLS + LANGUAGES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Stack */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-500"><SearchCode size={24} /></div>
              <h2 className="text-2xl font-black uppercase tracking-tighter italic">The Stack</h2>
            </div>
            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${group.border} ${group.bg} mb-3`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${group.accent}`}>{group.label}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {group.items.map((s) => (
                      <motion.div
                        key={s.name}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                        className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-2xl hover:shadow-lg transition-all cursor-default"
                      >
                        <span className={`${s.color} p-1.5 bg-white/5 rounded-lg`}>{s.icon}</span>
                        <span className="text-sm font-semibold text-zinc-200">{s.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-500"><Languages size={24} /></div>
              <h2 className="text-2xl font-black uppercase tracking-tighter italic">Linguistics</h2>
            </div>
            <div className="space-y-4 mb-12">
              {[
                { l: "Khmer", v: "Native", p: "100%" },
                { l: "English", v: "Intermediate", p: "65%" },
                { l: "Chinese", v: "Beginner", p: "20%" }
              ].map(lang => (
                <div key={lang.l} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-zinc-100 font-bold">{lang.l}</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">{lang.v}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.p }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-rose-500 to-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
            <motion.div
              whileHover={{ rotate: -1 }}
              className="p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-indigo-500 rotate-12"><MessageSquare size={80} /></div>
              <h4 className="text-indigo-400 font-bold uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                <CheckCircle2 size={14} /> Communication
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed relative z-10">
                "I focus on <span className="text-white font-medium">precision and adaptability</span>, tailoring my communication case-by-case to bridge technical and non-technical stakeholders."
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* TOOLS + AI */}
        <motion.section {...fadeInUp}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Dev Tools */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400"><Wrench size={22} /></div>
                <h2 className="text-2xl font-black uppercase tracking-tighter italic">Dev Tools</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {devTools.map(t => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 text-xs bg-white/[0.03] border border-white/10 rounded-full text-zinc-300 font-medium hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
                  >{t}</motion.span>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-violet-500/10 rounded-2xl text-violet-400"><Bot size={22} /></div>
                <h2 className="text-2xl font-black uppercase tracking-tighter italic">AI & Agents</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {aiTools.map(t => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 text-xs bg-white/[0.03] border border-white/10 rounded-full text-zinc-300 font-medium hover:border-violet-500/30 hover:text-violet-300 transition-colors cursor-default"
                  >{t}</motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CERTIFICATIONS */}
        <motion.section {...fadeInUp} id="certs">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400"><Award size={24} /></div>
            <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-amber-500/20 transition-colors group"
              >
                <p className="text-xs text-amber-500/70 font-semibold uppercase tracking-widest mb-1 group-hover:text-amber-400 transition-colors">{cert.org}</p>
                <h3 className="text-base font-bold text-zinc-100">{cert.name}</h3>
                <p className="text-xs text-zinc-600 mt-1">{cert.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <a href={socials.email} className="block w-full group relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-indigo-600 p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between overflow-hidden">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
              />
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 text-center md:text-left">
                <div className="p-6 bg-white shadow-2xl rounded-[2rem] text-indigo-600 group-hover:rotate-12 transition-transform duration-500">
                  <Mail size={40} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-white font-black text-4xl md:text-5xl tracking-tighter">Ready to <br className="hidden md:block" /> Collaborate?</h3>
                  <p className="text-indigo-100 text-lg mt-2 font-medium">thayvanchhai1@gmail.com</p>
                </div>
              </div>
              <div className="mt-12 md:mt-0 px-10 py-5 bg-black text-white rounded-full font-black text-lg tracking-tight flex items-center gap-3 group-hover:gap-6 transition-all shadow-2xl relative z-10">
                Let's Talk <ChevronRight size={24} />
              </div>
            </div>
          </a>
        </motion.section>

        {/* FOOTER */}
        <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between gap-10 text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-black pb-10">
          <div className="space-y-2">
            <p>© 2026 Vanchhai Thay</p>
            <p className="text-zinc-700">Phnom Penh, Cambodia</p>
          </div>
          <div className="flex gap-12">
            <a href={socials.github} className="hover:text-white transition-colors underline decoration-zinc-800 underline-offset-8">Github</a>
            <a href={socials.telegram} className="hover:text-sky-400 transition-colors underline decoration-zinc-800 underline-offset-8">Telegram</a>
          </div>
        </footer>
      </main>
    </div>
  );
}