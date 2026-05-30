'use client'
import { useState } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'
import Card from '@/components/Card'
import {
  profile,
  heroStats,
  impactCards,
  experience,
  education,
  skills,
  skillIcons,
  additionalSkills,
  projects,
} from '@/lib/data'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineCastForEducation, MdWork } from 'react-icons/md'
import { FiDownload, FiCode, FiExternalLink, FiArrowRight } from 'react-icons/fi'

function Badge({ children }) {
  return (
    <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded mr-2 mb-2 font-medium">
      {children}
    </span>
  )
}

function ImpactBadge({ children }) {
  return (
    <span className="inline-block bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs px-2 py-1 rounded-full mr-2 mb-2 font-semibold border border-pink-200 dark:border-pink-800">
      {children}
    </span>
  )
}

const colorMap = {
  pink: {
    border: 'border-l-pink-500',
    metric: 'text-pink-600 dark:text-pink-400',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
  },
  blue: {
    border: 'border-l-blue-500',
    metric: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  green: {
    border: 'border-l-green-500',
    metric: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-900/20',
  },
}

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const filters = ['All', 'AI/ML', 'Automation', 'Full Stack', 'Mobile']

  const filteredProjects = projects.filter((p) => {
    const matchesFilter =
      filter === 'All' ||
      p.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase())) ||
      (p.badge && p.badge.toLowerCase().includes(filter.toLowerCase()))
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <>
      {/* ─── HERO ─── */}
      <Section id="home">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            {/* Available badge */}
            <span className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-3 py-1.5 rounded-full border border-green-200 dark:border-green-800 mb-5 font-medium">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </span>

            <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2 text-gray-900 dark:text-white">
              {profile.name}
            </h1>
            <p className="text-xl text-pink-600 dark:text-pink-400 mt-2 font-medium">{profile.title}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-prose leading-relaxed">{profile.summary}</p>

            {/* Hero stats */}
            <div className="mt-6 flex gap-6">
              {heroStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition shadow-md"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-800 hover:bg-gray-900 text-white transition shadow-md"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="/CV.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-pink-500 hover:bg-pink-600 text-white transition font-medium shadow-md"
              >
                <FiDownload size={15} /> Download CV
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-pink-400 hover:text-pink-500 transition font-medium"
              >
                View Projects <FiArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="md:justify-self-end flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-pink-200 dark:border-pink-900 overflow-hidden shadow-xl">
                <Image
                  src="/avatar.jpg"
                  width={400}
                  height={400}
                  alt="Shevoni Rogers"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 shadow-lg text-xs font-semibold text-gray-700 dark:text-gray-200">
                🤖 YOLOv11 · 🌐 MERN · 📱 Android
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── ABOUT ─── */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio */}
          <Card className="p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <span className="font-bold text-gray-900 dark:text-white">Software Engineering undergraduate</span>{' '}
              at SLIIT with real-world impact across healthcare RCM systems and AI-powered data pipelines. I don't just
              build software — I build systems that measurably change how teams work.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              At <span className="font-bold text-gray-900 dark:text-white">Legacy Health LLC</span>, I automated medical
              document preparation with a Python backend — turning a{' '}
              <span className="font-semibold text-pink-600">30-minute process into 2 minutes</span>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              At <span className="font-bold text-gray-900 dark:text-white">Insighture</span>, I trained and deployed a{' '}
              <span className="font-bold text-gray-900 dark:text-white">YOLOv11 computer vision model</span> integrated
              with the RMS Interactive Map Builder — automatically detecting caravan park components and converting
              pixel coordinates to geographic coordinates via bilinear interpolation. Reduced a{' '}
              <span className="font-semibold text-blue-600">5-hour manual mapping process to under 1 hour</span>.
            </p>
            <p className="text-pink-500 dark:text-pink-400 font-medium italic mt-5 text-sm border-l-2 border-pink-400 pl-3">
              "If it's done manually more than twice, I automate it."
            </p>
          </Card>

          {/* Impact cards */}
          <div className="flex flex-col gap-4">
            {impactCards.map((card) => {
              const c = colorMap[card.color]
              return (
                <div key={card.title} className={`card border-l-4 ${c.border} ${c.bg} p-5 rounded-xl`}>
                  <div className={`text-2xl font-bold ${c.metric} leading-tight`}>{card.metric}</div>
                  <div className="font-semibold text-gray-900 dark:text-white mt-1 text-sm">{card.title}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 leading-relaxed">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Education */}
        <div className="mt-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <MdOutlineCastForEducation className="text-pink-500 text-2xl" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Education</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {education.map((e) => (
                <div
                  key={e.school + e.degree}
                  className="p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-900/10 transition"
                >
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">{e.school}</div>
                  <div className="italic text-xs text-gray-600 dark:text-gray-400 mt-1">{e.degree}</div>
                  <div className="text-pink-500 text-xs mt-1 font-medium">{e.grad}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* ─── EXPERIENCE ─── */}
      <Section id="experience" title="Experience">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-pink-400 to-transparent hidden md:block" />

          <div className="flex flex-col gap-0">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-14 pb-10"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-1.5 top-1 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center ${
                    exp.current
                      ? 'bg-pink-500 border-pink-500 shadow-lg shadow-pink-200 dark:shadow-pink-900'
                      : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {exp.current && <span className="w-2 h-2 bg-white rounded-full" />}
                </div>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-pink-500 font-semibold uppercase tracking-wide">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full font-medium border border-green-200 dark:border-green-800">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">{exp.role}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.company} · <span className="italic">{exp.type}</span>
                      </p>
                    </div>
                    <MdWork className="text-pink-400 text-xl flex-shrink-0" />
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="text-pink-500 mt-1 flex-shrink-0">→</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: point
                              .replace(/YOLOv11/g, '<strong class="text-gray-900 dark:text-white">YOLOv11</strong>')
                              .replace(
                                /5 hours to under 1 hour/g,
                                '<strong class="text-blue-600 dark:text-blue-400">5 hours to under 1 hour</strong>'
                              )
                              .replace(
                                /30 minutes to 2 minutes/g,
                                '<strong class="text-pink-600 dark:text-pink-400">30 minutes to 2 minutes</strong>'
                              )
                              .replace(
                                /15\+ staff/g,
                                '<strong class="text-gray-900 dark:text-white">15+ staff</strong>'
                              ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── SKILLS ─── */}
      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-pink-600 text-2xl">🎨</span> Frontend Development
            </h4>
            <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full mb-4">
              <div className="h-2 bg-pink-500 rounded-full w-[85%]" />
              <span className="absolute right-0 -top-6 text-sm font-medium text-pink-600">85%</span>
            </div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              {skills.frontend.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition"
                >
                  <span className="text-pink-500">✔</span> {s}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-blue-600 text-2xl">⚙️</span> Backend Development
            </h4>
            <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full mb-4">
              <div className="h-2 bg-blue-500 rounded-full w-[80%]" />
              <span className="absolute right-0 -top-6 text-sm font-medium text-blue-600">80%</span>
            </div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              {skills.backend.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                >
                  <span className="text-blue-500">✔</span> {s}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-green-600 text-2xl">🤖</span> AI / Mobile / DevOps
            </h4>
            <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full mb-4">
              <div className="h-2 bg-green-500 rounded-full w-[70%]" />
              <span className="absolute right-0 -top-6 text-sm font-medium text-green-600">70%</span>
            </div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              {skills.tools.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition"
                >
                  <span className="text-green-500">✔</span> {s}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Additional Skills */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {additionalSkills.map((a) => (
            <motion.div key={a.title} whileHover={{ scale: 1.05 }} className="relative group">
              <Card className="h-56 w-full flex flex-col items-center text-center transition-all duration-300 overflow-hidden relative bg-white dark:bg-gray-900 shadow-md hover:shadow-lg rounded-2xl">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-r from-pink-400 via-white to-pink-400 animate-pulse rounded-2xl" />
                <div className="mb-4 mt-6">{skillIcons[a.title]}</div>
                <h4 className="font-semibold text-lg z-10">{a.title}</h4>
                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gray-600 dark:text-gray-300 text-sm px-4">
                  {a.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── PROJECTS ─── */}
      <Section id="projects" title="Featured Projects">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
                  filter === f
                    ? 'bg-pink-500 text-white border-pink-500'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-pink-400 hover:text-pink-500'
                }`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-xl duration-300 bg-white dark:bg-gray-800 rounded-2xl h-full flex flex-col group">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={p.image}
                    width={1200}
                    height={630}
                    alt={p.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge overlay */}
                  {p.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="text-xs bg-black/70 text-white px-2 py-1 rounded-full backdrop-blur-sm font-medium">
                        {p.badge}
                      </span>
                    </div>
                  )}
                  {/* Impact overlay */}
                  {p.impact && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full font-bold shadow">
                        {p.impact}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug">{p.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4 text-sm items-center border-t border-gray-100 dark:border-gray-700 pt-4">
                    <FiCode className="text-gray-400" />
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-200 hover:text-pink-500 transition font-medium flex items-center gap-1"
                    >
                      View Code <FiExternalLink size={11} />
                    </a>
                    {p.demo && p.demo !== '#' && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-gray-700 dark:text-gray-200 hover:text-pink-500 transition font-medium flex items-center gap-1"
                      >
                        Live Demo <FiExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── CONTACT ─── */}
      <Section id="contact" title="Get in Touch">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              Let's build something worth shipping.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              I'm actively seeking software engineering roles — full-stack, backend, or anything that lets me solve real
              problems with code. Open to full-time, contract, and remote opportunities.
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { label: 'LinkedIn', value: 'linkedin.com/in/shevoni-rogers-51b811338', href: profile.linkedin },
                { label: 'GitHub', value: 'github.com/ShevoniR', href: profile.github },
                { label: 'Portfolio', value: 'shevoni-portfolio.vercel.app', href: profile.portfolio },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 w-16">{item.label}</span>
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition flex items-center gap-1 group"
                  >
                    {item.value}
                    <FiExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Card className="p-6">
            <ContactForm />
          </Card>
        </div>
      </Section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <span>
            © {new Date().getFullYear()} {profile.name}. Designed & built with intention.
          </span>
          <div className="flex items-center gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-white transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

function ContactForm() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const submitForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.target)
    const data = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      setMessage(
        res.ok ? "Message sent successfully! I'll get back to you soon." : result.error || 'Something went wrong.'
      )
      if (res.ok) e.target.reset()
    } catch (err) {
      console.error(err)
      setMessage('Server error. Please try emailing directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition'

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Send a Message</h2>
      <form onSubmit={submitForm} className="flex flex-col gap-4">
        <input name="name" type="text" placeholder="Your name" className={inputClass} required />
        <input name="email" type="email" placeholder="Your email" className={inputClass} required />
        <textarea name="message" placeholder="Your message" rows={4} className={inputClass} required />
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-500 hover:bg-pink-600 disabled:opacity-50 text-white px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {message && (
          <p
            className={`text-sm ${message.includes('success') ? 'text-green-600 dark:text-green-400' : 'text-red-500'}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  )
}
