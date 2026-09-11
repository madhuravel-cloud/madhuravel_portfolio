"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Swiggy Explore ML",
    description: "An ML-focused exploration project built around API-driven food data and practical analysis.",
    tags: ["Python", "ML", "APIs"],
    link: "https://github.com/madhuravel-cloud/swiggy_explore_ml",
  },
  {
    number: "02",
    title: "Acoustic Baby Cry Classifier",
    description: "Audio classification using OpenSMILE acoustic features with tree-based machine learning.",
    tags: ["Python", "OpenSMILE", "XGBoost", "RF"],
    link: "https://github.com/madhuravel-cloud",
  },
  {
    number: "03",
    title: "Criminal Network Analysis",
    description: "A graph-based SIH concept for connecting FIR entities, relationships, locations and cross-case clues.",
    tags: ["Python", "NetworkX", "NLP", "Graphs"],
    link: "https://github.com/madhuravel-cloud",
  },
  {
    number: "04",
    title: "CNN Image Classification",
    description: "A deep-learning image classifier built with TensorFlow and Keras using convolutional layers.",
    tags: ["TensorFlow", "Keras", "CNN"],
    link: "https://github.com/madhuravel-cloud",
  },
];

const skills = [
  ["Languages", "C++ · C · Python · Java · PHP"],
  ["DSA", "Arrays · Trees · Graphs · Hashing · DP · Greedy"],
  ["Algorithms", "Dijkstra · Prim · Kruskal · Binary Search · Kadane"],
  ["ML", "Scikit-learn · TensorFlow · Keras · XGBoost"],
  ["Web", "HTML · CSS · JavaScript · Flask · Jinja"],
  ["Tools", "Git · GitHub · Kaggle · CSES"],
];

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 grid-bg opacity-50" />
      <div className="fixed inset-0 -z-10 noise pointer-events-none" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="text-lg font-bold tracking-tight">MT<span className="text-lime-400">.</span></a>
          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a className="hover:text-white transition" href="#about">About</a>
            <a className="hover:text-white transition" href="#work">Work</a>
            <a className="hover:text-white transition" href="#skills">Skills</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </div>
          <a href="https://github.com/madhuravel-cloud" target="_blank" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm hover:border-lime-400/50 hover:text-lime-300 transition md:block">
            GitHub ↗
          </a>
          <button onClick={() => setMenu(!menu)} className="text-sm text-zinc-300 md:hidden">Menu</button>
        </div>
        {menu && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-zinc-300">
              <a href="#about" onClick={() => setMenu(false)}>About</a>
              <a href="#work" onClick={() => setMenu(false)}>Work</a>
              <a href="#skills" onClick={() => setMenu(false)}>Skills</a>
              <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section id="top" className="mx-auto grid min-h-screen max-w-6xl items-center px-5 pb-16 pt-32 lg:grid-cols-[1.3fr_.7fr] lg:px-8">
        <div className="reveal">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-1.5 text-xs font-medium text-lime-300">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime-400" />
            OPEN TO BUILD & LEARN
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[.3em] text-zinc-500">CSE @ IIIT Kottayam · 2029</p>

          <h1 className="max-w-4xl text-6xl font-black leading-[.9] tracking-[-.07em] sm:text-7xl lg:text-[7.5rem]">
            Madhuravel
            <span className="block text-zinc-600">T<span className="text-lime-400">.</span></span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            I build with <span className="text-white">C++</span>, think in <span className="text-white">DSA</span>,
            and experiment with <span className="text-white">machine learning</span>. Currently turning ideas into projects, solving problems and competing.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300">View my work ↓</a>
            <a href="https://linkedin.com/in/madhuravel-t-972887372/" target="_blank" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5">LinkedIn ↗</a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
            <div><div className="number text-2xl font-bold">300<span className="text-lime-400">+</span></div><div className="mt-1 text-xs uppercase tracking-widest text-zinc-600">LeetCode</div></div>
            <div><div className="number text-2xl font-bold">Kaggle</div><div className="mt-1 text-xs uppercase tracking-widest text-zinc-600">ML experiments</div></div>
            <div><div className="number text-2xl font-bold">2029</div><div className="mt-1 text-xs uppercase tracking-widest text-zinc-600">Graduation</div></div>
          </div>
        </div>

        <div className="float relative mx-auto mt-14 hidden w-full max-w-sm lg:block">
          <div className="absolute -inset-10 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="glass relative rounded-[2rem] p-5 shadow-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/70 p-6 font-mono text-sm">
              <div className="mb-7 flex items-center gap-2 text-xs text-zinc-600"><span>●</span><span>●</span><span>●</span><span className="ml-2">madhuravel.tsx</span></div>
              <div className="space-y-2 leading-7">
                <div><span className="text-zinc-600">01</span> <span className="text-purple-300">const</span> <span className="text-white">developer</span> = {"{"}</div>
                <div><span className="text-zinc-600">02</span> <span className="pl-4 text-zinc-400">focus:</span> <span className="text-lime-300">&quot;DSA + ML&quot;</span>,</div>
                <div><span className="text-zinc-600">03</span> <span className="pl-4 text-zinc-400">problems:</span> <span className="text-orange-300">300+</span>,</div>
                <div><span className="text-zinc-600">04</span> <span className="pl-4 text-zinc-400">coffee:</span> <span className="text-lime-300">true</span>,</div>
                <div><span className="text-zinc-600">05</span> <span className="pl-4 text-zinc-400">status:</span> <span className="text-lime-300">&quot;building&quot;</span></div>
                <div><span className="text-zinc-600">06</span> {"};"}</div>
                <div className="pt-3 text-zinc-600">{"//"} keep shipping.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[.015]">
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div><p className="text-xs uppercase tracking-[.3em] text-lime-400">01 / About</p><h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Curious by default.</h2></div>
            <span className="hidden text-xs text-zinc-600 sm:block">A little context</span>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              ["Problem Solving", "300+ LeetCode problems. Building stronger fundamentals through DSA, CSES and competitive programming."],
              ["Machine Learning", "From classical ML to neural networks and CNNs — learning by implementing and experimenting."],
              ["Building", "Turning ideas into practical projects across ML, APIs, audio, graphs and web development."]
            ].map(([title, text], i) => (
              <article key={title} className="bg-[#09090b] p-7 sm:p-9">
                <span className="text-xs text-zinc-600">0{i + 1}</span>
                <h3 className="mt-12 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[.3em] text-lime-400">02 / Selected work</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Things I&apos;ve built.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <a key={project.number} href={project.link} target="_blank" className="card-hover glass group rounded-3xl p-7 sm:p-9">
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-zinc-600">{project.number}</span>
                <span className="text-xl text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-400">↗</span>
              </div>
              <h3 className="mt-16 text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-500">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">{tag}</span>)}</div>
            </a>
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-white/[.015]">
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="mb-12"><p className="text-xs uppercase tracking-[.3em] text-lime-400">03 / Toolkit</p><h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Tools I use.</h2></div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            {skills.map(([name, value]) => (
              <div key={name} className="grid gap-3 border-b border-white/10 px-6 py-6 last:border-0 sm:grid-cols-[180px_1fr] sm:px-8">
                <span className="text-sm font-semibold text-white">{name}</span>
                <span className="text-sm text-zinc-500">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-28 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-lime-400 p-8 text-black sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[.3em]">04 / Contact</p>
            <h2 className="mt-5 max-w-3xl text-5xl font-black tracking-[-.05em] sm:text-7xl">Let&apos;s build something.</h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-black/65 sm:text-base">Open to projects, collaborations, hackathons and opportunities where I can learn and contribute.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://github.com/madhuravel-cloud" target="_blank" className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white hover:bg-zinc-800">GitHub ↗</a>
              <a href="https://linkedin.com/in/madhuravel-t-972887372/" target="_blank" className="rounded-full border border-black/20 px-6 py-3 text-sm font-bold hover:bg-black/5">LinkedIn ↗</a>
              <a href="https://leetcode.com/u/madhuravel/" target="_blank" className="rounded-full border border-black/20 px-6 py-3 text-sm font-bold hover:bg-black/5">LeetCode ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 Madhuravel T</span>
          <span>Designed & built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}
