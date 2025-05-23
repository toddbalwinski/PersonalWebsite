import Image from 'next/image'

export default function Bio() {
  return (
    <section
      id="bio"
      className="scroll-mt-16 flex flex-col md:flex-row items-center md:items-start"
    >
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">Hello, I’m Todd!</h1>
        <p className="text-lg leading-relaxed">
          I’m a rising third-year engineering student at UVA, majoring in
          Computer Science with minors in Business & Data Science. I love
          improving workflows with technology—and building my own when I can.
        </p>
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
  )
}