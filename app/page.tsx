"use client";
import React from 'react';
import { 
  Github, Mail, Code2, Smartphone, Globe, Zap, Database, Layout, 
  ChevronRight, Briefcase, GraduationCap, Languages, MessageSquare, 
  SearchCode, Send, Sparkles,
  CheckCircle2
} from 'lucide-react';
import { motion, easeOut } from 'framer-motion';
import { p } from 'framer-motion/client';

export default function Portfolio() {
  const socials = {
    github: "https://github.com/VanchhaiThay",
    telegram: "https://t.me/Vanchhai2004",
    email: "mailto:vanchhai.thay@example.com",
  };

  const skills = [
    { name: "Flutter", icon: <Smartphone className="w-4 h-4" />, color: "text-blue-400", bg: "hover:shadow-blue-500/20" },
    { name: "JavaScript", icon: <Code2 className="w-4 h-4" />, color: "text-yellow-400", bg: "hover:shadow-yellow-500/20" },
    { name: "HTML5", icon: <Globe className="w-4 h-4" />, color: "text-orange-400", bg: "hover:shadow-orange-500/20" },
    { name: "CSS3", icon: <Layout className="w-4 h-4" />, color: "text-blue-500", bg: "hover:shadow-blue-600/20" },
    { name: "React", icon: <Zap className="w-4 h-4" />, color: "text-cyan-400", bg: "hover:shadow-cyan-500/20" },
    { name: "Next.js", icon: <Zap className="w-4 h-4" />, color: "text-white", bg: "hover:shadow-white/20" },
    { name: "MySQL", icon: <Database className="w-4 h-4" />, color: "text-amber-400", bg: "hover:shadow-amber-500/20" },
    { name: "Firebase", icon: <Database className="w-4 h-4" />, color: "text-amber-500", bg: "hover:shadow-orange-400/20" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: easeOut }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* Background Decorative Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
      </div>

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
        
        {/* HERO SECTION */}
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
          </motion.div>
        </section>

        {/* 1. EXPERIENCE SECTION */}
        <motion.section {...fadeInUp} id="experience">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500 shadow-inner"><Briefcase size={24}/></div>
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
          </div>
          
          <div className="space-y-12 border-l-2 border-zinc-800/50 ml-6 pl-10 relative">
            {/* Entry 1 */}
            <motion.div whileHover={{ x: 10 }} className="relative group transition-all">
              <div className="absolute -left-[51px] top-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-[#050505] z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform" />
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Junior Software Developer</h3>
                <p className="text-emerald-500/80 font-semibold mt-1">OTB-2025 – JAN-2026: Khmer Learning App</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {["Flutter", "Firebase", "Python"].map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-400 uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">Integrated real-time messaging, authentication, and a specialized ChatBot assistant for RUPP project.</p>
              </div>
            </motion.div>

            {/* Entry 2 */}
            <motion.div whileHover={{ x: 10 }} className="relative group transition-all">
              <div className="absolute -left-[51px] top-1 w-6 h-6 bg-zinc-700 rounded-full border-4 border-[#050505] z-10 group-hover:bg-indigo-500 transition-colors" />
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">Web Development Intern</h3>
                <p className="text-zinc-500 font-semibold mt-1">Nov 2024 – Jan 2025: Luxury Cabin Hotel</p>
                <p className="text-zinc-400 text-sm leading-relaxed mt-4 italic">Focused on Online Booking workflows and Supabase database optimization.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 2. EDUCATION SECTION */}
        <motion.section {...fadeInUp} id="education">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500"><GraduationCap size={24}/></div>
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-zinc-900/50 to-transparent border border-white/5 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">Bachelor of IT Engineering</h3>
              <p className="text-indigo-400 text-sm mb-4 font-medium uppercase tracking-widest">RUPP • 2022 — 2026</p>
              <div className="h-1 w-12 bg-indigo-500 rounded-full" />
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-zinc-900/20 border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white">Sreng Kim High School</h3>
              <p className="text-zinc-500 text-sm mt-1">Bac ll Certificate • 2019 — 2022</p>
            </motion.div>
          </div>
        </motion.section>

        {/* 3. SKILLS & LANGUAGES SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Tech Skills */}
          <motion.div {...fadeInUp} variants={staggerContainer} initial="initial" whileInView="whileInView">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-500"><SearchCode size={24}/></div>
              <h2 className="text-2xl font-black uppercase tracking-tighter italic">The Stack</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((s) => (
                <motion.div 
                  key={s.name} 
                  variants={{ initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 } }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className={`flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl transition-shadow ${s.bg} hover:shadow-lg cursor-default`}
                >
                  <span className={`${s.color} p-2 bg-white/5 rounded-lg`}>{s.icon}</span>
                  <span className="text-sm font-semibold text-zinc-200">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-500"><Languages size={24}/></div>
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
              <div className="absolute top-0 right-0 p-4 opacity-10 text-indigo-500 rotate-12"><MessageSquare size={80}/></div>
              <h4 className="text-indigo-400 font-bold uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                <CheckCircle2 size={14}/> Communication
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed relative z-10">
                "I focus on <span className="text-white font-medium">precision and adaptability</span>, tailoring my communication case-by-case to bridge technical and non-technical stakeholders."
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* 4. CONTACT CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <a 
            href={socials.email}
            className="block w-full group relative"
          >
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
                  <h3 className="text-white font-black text-4xl md:text-5xl tracking-tighter">Ready to <br className="hidden md:block"/> Collaborate?</h3>
                  <p className="text-indigo-100 text-lg mt-2 font-medium">vanchhai.thay@example.com</p>
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