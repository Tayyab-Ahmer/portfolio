"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="page-shell">
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled ? "pt-3" : "pt-5"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="panel flex items-center justify-between px-4 py-3 sm:px-5">
              <a href="#top" className="flex items-center gap-3">
                <span className="brand-mark">TA</span>
                <div>
                  <p className="text-sm font-semibold tracking-[0.24em] text-[var(--muted)] uppercase">
                    Tayyab Ahmer
                  </p>
                  <p className="text-sm text-[var(--soft)]">
                    Full Stack Engineer
                  </p>
                </div>
              </a>

              <nav className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-[var(--soft)] transition hover:text-[var(--text)]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="hidden md:block">
                <a className="primary-link" href={`mailto:${portfolio.personal.email}`}>
                  Let&apos;s build
                </a>
              </div>

              <button
                type="button"
                aria-label="Toggle navigation"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[var(--text)] md:hidden"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {menuOpen ? (
              <div className="panel mt-3 flex flex-col gap-3 px-4 py-4 md:hidden">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-[var(--soft)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  className="primary-link mt-2 w-full justify-center"
                  href={`mailto:${portfolio.personal.email}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Let&apos;s build
                </a>
              </div>
            ) : null}
          </div>
        </header>

        <section id="top" className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10"
            >
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <p className="eyebrow">Full-stack engineer building product systems that ship</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                I design reliable platforms,
                <span className="block text-[var(--accent)]">
                  production APIs, and operator-grade admin flows.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--soft)] sm:text-lg">
                {portfolio.personal.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="primary-link" href="#projects">
                  See featured work
                </a>
                <a className="secondary-link" href={portfolio.personal.github} target="_blank" rel="noreferrer">
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {portfolio.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <p className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="panel px-6 py-6">
                <p className="eyebrow">Currently focused on</p>
                <div className="mt-5 space-y-4">
                  {portfolio.focusAreas.map((area) => (
                    <div key={area.title} className="rounded-[22px] border border-white/8 bg-white/4 p-4">
                      <p className="text-sm font-semibold text-[var(--text)]">
                        {area.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
                        {area.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel px-6 py-6">
                <p className="eyebrow">Contact</p>
                <div className="mt-5 space-y-3 text-sm text-[var(--soft)]">
                  <a className="contact-row" href={`mailto:${portfolio.personal.email}`}>
                    <Mail size={16} />
                    {portfolio.personal.email}
                  </a>
                  <a className="contact-row" href={`tel:${portfolio.personal.phone}`}>
                    <Phone size={16} />
                    {portfolio.personal.phone}
                  </a>
                  <p className="contact-row">
                    <MapPin size={16} />
                    {portfolio.personal.location}
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    className="icon-link"
                    href={portfolio.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    className="icon-link"
                    href={portfolio.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 className="section-title">Work that improved real products, not just prototypes.</h2>
            </div>
            <p className="section-copy">
              The recent focus has been full-stack product delivery: platform architecture,
              role-based workflows, third-party integrations, and interfaces that operators can trust.
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {portfolio.experience.map((role, index) => (
              <motion.article
                key={`${role.company}-${role.title}`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="panel px-6 py-6 sm:px-7"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="eyebrow">{role.company}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                      {role.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--soft)]">
                      {role.summary}
                    </p>
                  </div>
                  <div className="min-w-fit rounded-[20px] border border-white/10 bg-black/20 px-4 py-3 text-sm text-[var(--soft)]">
                    <p>{role.duration}</p>
                    <p className="mt-1">{role.location}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {role.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-[20px] border border-white/8 bg-white/4 p-4 text-sm leading-6 text-[var(--soft)]">
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Featured Projects</p>
              <h2 className="section-title">A portfolio built around shipped systems and product thinking.</h2>
            </div>
            <p className="section-copy">
              Live work gets priority, but the non-live builds still matter because they show system design,
              real-time features, and delivery breadth across fintech, automation, and logistics.
            </p>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-2">
            {portfolio.projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`project-card ${project.featured ? "project-card-featured" : ""}`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="status-pill">{project.status}</span>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[var(--accent)] transition hover:text-[var(--text)]"
                    >
                      Visit live
                      <ArrowUpRight size={15} />
                    </a>
                  ) : null}
                </div>

                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--soft)]">
                      {project.summary}
                    </p>
                  </div>
                  <div className="hidden rounded-full border border-white/10 bg-white/5 p-3 text-[var(--accent)] sm:block">
                    {project.icon}
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {project.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-[18px] border border-white/8 bg-black/18 px-4 py-3 text-sm leading-6 text-[var(--soft)]"
                    >
                      {outcome}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="panel px-6 py-6 sm:px-7">
              <p className="eyebrow">Stack</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Full-stack execution with a backend-first core.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--soft)]">
                The strongest lane is designing application logic, APIs, data models,
                queues, and integrations. The frontend work is there to make the system legible,
                fast, and conversion-ready.
              </p>

              <div className="mt-8 space-y-3">
                {portfolio.capabilities.map((capability) => (
                  <div key={capability.title} className="capability-row">
                    <div className="rounded-full border border-white/10 bg-white/6 p-2 text-[var(--accent)]">
                      {capability.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{capability.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--soft)]">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {portfolio.skillGroups.map((group) => (
                <div key={group.title} className="panel px-6 py-6">
                  <p className="eyebrow">{group.title}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tech-pill tech-pill-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="panel px-6 py-6 sm:px-7">
              <p className="eyebrow">About</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                I care about systems that feel clean for both users and operators.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[var(--soft)]">
                {portfolio.about}
              </p>
            </div>

            <div className="panel px-6 py-6 sm:px-7">
              <p className="eyebrow">Education</p>
              <div className="mt-5 rounded-[24px] border border-white/8 bg-white/4 p-5">
                <h3 className="text-xl font-semibold">{portfolio.education.degree}</h3>
                <p className="mt-2 text-sm text-[var(--accent)]">
                  {portfolio.education.institution}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--soft)]">
                  {portfolio.education.duration} · {portfolio.education.location}
                </p>
              </div>

              <p className="eyebrow mt-8">Signals</p>
              <div className="mt-4 grid gap-3">
                {portfolio.signals.map((signal) => (
                  <div key={signal} className="rounded-[20px] border border-white/8 bg-black/18 px-4 py-3 text-sm leading-6 text-[var(--soft)]">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6">
          <div className="panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
            <div className="orb orb-three" />
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
                  Need an engineer who can own product surfaces and the backend underneath them?
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--soft)] sm:text-base">
                  I&apos;m open to full-stack and backend roles where the work includes architecture,
                  integrations, internal tools, and user-facing product delivery.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a className="primary-link justify-center" href={`mailto:${portfolio.personal.email}`}>
                  <Mail size={16} />
                  {portfolio.personal.email}
                </a>
                <a className="secondary-link justify-center" href={portfolio.personal.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <footer className="flex flex-col gap-3 px-1 pb-4 pt-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
            <p>© 2026 Tayyab Ahmer</p>
          </footer>
        </section>
      </div>
    </main>
  );
}
