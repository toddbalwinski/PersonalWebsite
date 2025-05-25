import BioSection from '../components/Bio'
import ProjectsSection from '../components/Projects'
import ExperienceSection from '../components/Experience'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="pt-20 max-w-screen-xl mx-auto px-6 py-8 bg-white text-charcoal">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4 text-red-500">This site is still under development and is being updated frequently</h1>
      <BioSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}