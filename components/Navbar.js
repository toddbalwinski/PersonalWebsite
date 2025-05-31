      
import Image from 'next/image'

export default function Navbar() {
  return (   
      <header className="fixed inset-x-0 top-0 bg-white shadow z-20           flex items-center justify-between
          h-12                           /* fixed height */
          px-4 md:px-6 lg:px-8           /* horizontal padding only */">
        <div className="flex-shrink-0">
          <Image
            src="/tb.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <nav className="space-x-6 text-charcoal">
            
          <a href="#bio" className="hover:text-teal transition">About</a>
          <a href="#experience" className="hover:text-teal transition">Experience</a>
          <a href="#projects" className="hover:text-teal transition">Projects</a>
          
          <a href="#contact" className="hover:text-teal transition">Contact</a>
        </nav>
      </header>
  )
}