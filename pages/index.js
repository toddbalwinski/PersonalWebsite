import { useState, useMemo } from 'react'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { experiences } from '../data/experiences'

export default function Home() {

  // 2. BUILD TAG LIST (including “All”)
  const allTags = useMemo(() => {
    const tagSet = new Set()
    projects.forEach(p => p.tags.forEach(t => tagSet.add(t)))
    return ['All', ...Array.from(tagSet)]
  }, [projects])

  // 3. REACT STATE FOR CURRENT FILTER
  const [selectedTag, setSelectedTag] = useState('All')

  // 4. FILTERED PROJECTS
  const filtered = useMemo(() => {
    if (selectedTag === 'All') return projects
    return projects.filter(p => p.tags.includes(selectedTag))
  }, [selectedTag, projects])

  // Animation variants for each card
  const cardVariants = {
    hidden:   { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit:     { opacity: 0, y: -20 },
  }

  return (
    <>
      {/* ─── Navbar ─── */}
      <header className="fixed inset-x-0 top-0 bg-white shadow z-20 flex items-center justify-between py-4 px-2 md:px-4 lg:px-6">
        {/* Logo on left */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"           // put your small logo in public/
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Section links on right */}
          <nav className="space-x-6 text-charcoal">
          <a href="#bio"      className="hover:text-teal transition">About</a>
          <a href="#experience" className="hover:text-teal transition">Experience</a>
          <a href="#projects" className="hover:text-teal transition">Projects</a>
          <a href="#contact"  className="hover:text-teal transition">Contact</a>
        </nav>
      </header>

    <main className="pt-20"></main>
      <main className="max-w-screen-xl mx-auto px-6 py-8 bg-lightGray text-charcoal">
        <section id="bio" className="scroll-mt-20 flex flex-col md:flex-row items-center md:items-start">
          {/* Bio */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 text-charcoal">
              Hello, I’m Todd!
            </h1>
            <h1 className="text-2xl font-bold mb-4 text-red-500">
              This site is still under development and will be updated frequently.
            </h1>
            <p className="text-lg leading-relaxed">
              I am a student at the University of Virginia purusing a bachelors of science in Computer Science with minors in business and data science.
              I am passionate about the application of technology to improve business processes and operations. I love thinking about how people interact with systems and technology and how to create the best experiences and outcomes.
              In my free time, I enjoy playing puzzle games like tetris and sudoku, and playing and watching sports with my friends.
            </p>

            {/* ⬇︎ Button links */}
            <div className="mt-6 flex space-x-4">
              <a
                href="YOUR_RESUME_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal text-white rounded hover:bg-deepBlue transition"
              >
                Resume
              </a>
              <a
                href="YOUR_GITHUB_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal text-white rounded hover:bg-deepBlue transition"
              >
                GitHub
              </a>
              <a
                href="YOUR_LINKEDIN_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal text-white rounded hover:bg-deepBlue transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile pic */}
          <div className="mt-6 md:mt-0 md:ml-8">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-deepBlue">
              <Image
                src="/profile.png"
                alt="Todd’s Profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* ─── Experience Section ─── */}
        <section id="experience" className="scroll-mt-20 mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-deepBlue">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map(org => (
              <div
                key={org.id}
                className="bg-white rounded-lg shadow p-6"
              >
                {/* Org Name at Top */}
                <h3 className="text-xl font-semibold mb-4">
                  {org.orgName}
                </h3>

                <div className="flex flex-col md:flex-row items-start">
                  {/* Logo */}
                  <div className="w-16 h-16 relative flex-shrink-0 mr-6 mb-4 md:mb-0">
                    <Image
                      src={org.logo}
                      alt={`${org.orgName} logo`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>

                  {/* Roles under Org */}
                  <div className="flex-1 space-y-6">
                    {org.roles.map((role, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="text-xl font-semibold">
                          {role.position}
                        </h4>
                        <ul className="list-disc list-inside text-sm text-charcoal space-y-1">
                          {role.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                        {role.link && (
                          <a
                            href={role.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-1 text-sm font-medium text-deepBlue hover:underline"
                          >
                              Read more →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 3. Projects Section ─── */}
        <section id="projects" className="scroll-mt-20 mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-deepBlue">Projects</h2>

          {/* Tag buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {allTags.map(tag => {
              const isActive = tag === selectedTag
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`
                    px-3 py-1 rounded-full text-sm font-medium
                    ${
                      isActive
                        ? 'bg-teal text-white'
                        : 'bg-white text-charcoal border border-lightGray hover:bg-lightGray'
                    }
                    transition
                  `}
                >
                  {tag}
                </button>
              )
            })}
          </div>

          {/* Animated Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map(p => (
                <motion.div
                  key={p.id}
                  layout                           // animates position when others enter/exit
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={cardVariants}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow flex flex-col overflow-hidden"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={p.image}
                      alt={p.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-xl font-medium mb-2 text-charcoal">
                      {p.name}
                    </h3>
                    <p className="text-sm text-charcoal">{p.description}</p>
                  </div>
                  <div className="p-4">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-4 py-2 bg-teal text-white rounded hover:bg-deepBlue transition"
                    >
                      View on GitHub
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer id="contact" className="scroll-mt-20 mt-12 border-t border-lightGray pt-6 text-center">
          <p className="text-sm ">Contact me</p>
          <p className="text-sm">
            <a href="tel:+1234567890" className="hover:underline">
              (571) 521-9973
            </a>{' '}
            |{' '}
            <a href="mailto:todd@yourdomain.com" className="hover:underline">
              tbalwinski@gmail.com
            </a>
          </p>
          <p className="text-xs mt-2">Todd Balwinski. All rights reserved.</p>
        </footer> 
      </main>
    </>
  )
}