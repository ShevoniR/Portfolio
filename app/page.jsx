"use client";
import { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import Card from "@/components/Card";
import {
  profile,
  education,
  skills,
  skillIcons,
  additionalSkills,
  projects,
} from "@/lib/data";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FiDownload, FiCode } from "react-icons/fi";

function Badge({ children }) {
  return (
    <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded mr-2 mb-2">
      {children}
    </span>
  );
}

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Frontend", "Backend", "Mobile"];

  const filteredProjects = projects.filter((p) => {
    const matchesFilter =
      filter === "All" ||
      p.tags.some((tag) => tag.toLowerCase() === filter.toLowerCase());
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Section id="home">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              {profile.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">
              {profile.title}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-prose">
              {profile.summary}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 hover:bg-black text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 hover:bg-black text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="CV.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-300 hover:bg-pink-500 text-white transition"
              >
                <FiDownload /> Download CV
              </a>
            </div>
          </div>
          <div className="md:justify-self-end flex justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <Image
                src="/avatar.jpg"
                width={400}
                height={400}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-4 gap-10">
          <Card className="md:col-span-2 p-6">
            <p className="text-gray-700 dark:text-gray-300 justfy-center">
              I'm a{" "}
              <span className="font-bold">
                Software Engineering undergraduate
              </span>{" "}
              at SLIIT, passionate about
              <span className="font-bold">
                {" "}
                Full-Stack Web Development
              </span> and{" "}
              <span className="font-bold">Mobile Application Development</span>.
              I have a strong foundation in
              <span className="font-bold">
                {" "}
                Java, Python, C++, HTML, CSS, and JavaScript
              </span>
              . I also enjoy exploring{" "}
              <span className="font-bold">UI/UX design</span> using{" "}
              <span className="font-semibold">Figma</span>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              My goal is to develop{" "}
              <span className="font-bold">impactful solutions</span> by
              combining expertise in{" "}
              <span className="font-bold">Full-Stack Development</span> and{" "}
              <span className="font-bold">Mobile App Development</span>. I am
              committed to expanding my skills through{" "}
              <span className="font-bold">hands-on projects</span>.
            </p>
          </Card>
          <Card className="md:col-span-2 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white hover:bg-gray-50">
            <div className="flex gap-4">
              <div className="mt-2">
                <MdOutlineCastForEducation />
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">
                Education
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              {education.map((e) => (
                <li
                  key={e.school}
                  className="p-3 rounded-lg hover:bg-gray-100 transition duration-200"
                >
                  <div className="font-semibold text-gray-900">{e.school}</div>
                  <div className="italic">{e.degree}</div>
                  <div className="text-gray-600">
                    Expected Graduation: {e.grad}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-pink-600 text-2xl">🎨</span> Frontend
              Development
            </h4>
            <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full mb-4">
              <div className="h-2 bg-pink-500 rounded-full w-4/5"></div>
              <span className="absolute right-0 -top-6 text-sm font-medium text-pink-600">
                85%
              </span>
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
              <span className="text-blue-600 text-2xl">⚙️</span> Backend
              Development
            </h4>
            <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full mb-4">
              <div className="h-2 bg-blue-500 rounded-full w-3/5"></div>
              <span className="absolute right-0 -top-6 text-sm font-medium text-blue-600">
                80%
              </span>
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
              <span className="text-green-600 text-2xl">🛠</span> Tools & Others
            </h4>
            <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full mb-4">
              <div className="h-2 bg-green-500 rounded-full w-3/6"></div>
              <span className="absolute right-0 -top-6 text-sm font-medium text-green-600">
                60%
              </span>
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

      <Section title="Additional Skills">
        <div className="grid md:grid-cols-3 gap-6">
          {additionalSkills.map((a) => (
            <motion.div
              key={a.title}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Card className="h-60 w-full flex flex-col items-center text-center transition-all duration-300 overflow-hidden relative bg-white dark:bg-gray-900 shadow-md hover:shadow-lg rounded-2xl">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-r from-pink-400 via-white to-pink-400 animate-pulse rounded-2xl"></div>
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

      <Section id="projects" title="Featured Projects">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-3">
            {filters.map((f) => (
              <button
                key={f}
                className={`px-4 py-2 rounded-lg border ${
                  filter === f
                    ? "bg-pink-500 text-white border-pink-500"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
                } hover:bg-pink-500 hover:text-white transition`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <Card
              key={p.title}
              className="overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg duration-300 bg-gray-50 dark:bg-gray-800 rounded-2xl"
            >
              <Image
                src={p.image}
                width={1200}
                height={630}
                alt={p.title}
                className="w-full h-44 md:h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 text-sm items-center">
                  <FiCode className="text-gray-500 dark:text-gray-400" />
                  <a
                    href={p.code}
                    target="_blank"
                    className="text-gray-700 dark:text-gray-200 underline hover:text-pink-500 transition"
                  >
                    View Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    className="ml-auto text-gray-700 dark:text-gray-200 underline hover:text-pink-500 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get in Touch">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li>
                Email:{" "}
                <a className="underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  className="underline"
                  href={profile.linkedin}
                  target="_blank"
                >
                  linkedin.com/in/shevoni-rogers-51b811338
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a className="underline" href={profile.github} target="_blank">
                  github.com/shevoniR
                </a>
              </li>
            </ul>
          </div>
          <Card className="p-6">
            <ContactForm />
          </Card>
        </div>
      </Section>

      <footer className="bg-gray-900 text-gray-200">
        <div className="container py-6 flex items-center justify-between text-sm">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a href="#contact" className="hover:underline">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactForm() {
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("Message sent successfully!");
      } else {
        setMessage(result.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server Error");
    }
  };

  return (
    <div className="container">
      <h2 className="text-4xl md:text-3xl font-bold leading-tight mt-2 mb-10">
        Contact
      </h2>
      <form onSubmit={submitForm} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          placeholder="Your name"
          className="border px-3 py-2 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          className="border px-3 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
        {message && <p className="text-green-500">{message}</p>}
      </form>
    </div>
  );
}
