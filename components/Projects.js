import { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  const allTags = useMemo(() => {
    const tagSet = new Set()
    projects.forEach(p => p.tags.forEach(t => tagSet.add(t)))
    return ['All', ...Array.from(tagSet)]
  }, [])

  const [selectedTag, setSelectedTag] = useState('All')
  const filtered = useMemo(() => {
    if (selectedTag === 'All') return projects
    return projects.filter(p => p.tags.includes(selectedTag))
  }, [selectedTag])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <section id="projects" className="scroll-mt-20 mt-12">
      <h2 className="text-3xl font-semibold mb-4 text-deepBlue">Projects</h2>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map(p => (
            <motion.div
                key={p.id}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariants}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="
                    bg-white rounded-lg shadow
                    border-2 border-transparent
                    transition-colors duration-200 ease-in-out
                    hover:border-teal/50
                    flex flex-col overflow-hidden
                "
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
                <h3 className="text-xl font-medium mb-2">{p.name}</h3>
                <p className="text-sm">{p.description}</p>
              </div>
              <div className="p-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-2 bg-teal text-white rounded hover:bg-deepBlue transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}