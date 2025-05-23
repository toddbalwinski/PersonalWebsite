import Image from 'next/image'
import BioSection from '../components/Bio'
import ProjectsSection from '../components/Projects'
import ExperienceSection from '../components/Experience'

export default function Home() {
  return (
    <>
      {/* ─── Navbar ─── */}
      <header className="fixed inset-x-0 top-0 bg-white shadow z-20 flex items-center justify-between py-4 px-2 md:px-4 lg:px-6">
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <nav className="space-x-6 text-charcoal">
          <a href="#bio" className="hover:text-teal transition">About</a>
          <a href="#projects" className="hover:text-teal transition">Projects</a>
          <a href="#experience" className="hover:text-teal transition">Experience</a>
          <a href="#contact" className="hover:text-teal transition">Contact</a>
        </nav>
      </header>

      {/* ─── Page Content ─── */}
      <main className="pt-20 max-w-screen-xl mx-auto px-6 py-8 bg-white text-charcoal">
        <BioSection />
        <ExperienceSection />
        <ProjectsSection />

        {/* ─── Footer ─── */}
        <footer
          id="contact"
          className="scroll-mt-16 mt-12 border-t border-lightGray pt-6 text-center"
        >
          <p className="text-sm">
            <a href="tel:+15715219973" className="hover:underline">
              +1 (571) 521-9973
            </a>{' '}
            |{' '}
            <a href="mailto:tbalwinski@gmail.com" className="hover:underline">
              tbalwinski@gmail.com
            </a>
          </p>
          <p className="text-xs mt-2">
            &copy; 2025 Todd Balwinski. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  )
}
