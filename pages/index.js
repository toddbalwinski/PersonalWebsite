// pages/index.js
// Main landing page with bio and projects sections
// Make sure Tailwind CSS is configured in your project (see tailwind.config.js)
import Head from 'next/head';

export default function Home() {
  const projects = [
    { title: 'Project One', description: 'A short description of project one.', link: '#' },
    { title: 'Project Two', description: 'A short description of project two.', link: '#' },
    // Add more projects here
  ];

  return (
    <>
      <Head>
        <title>Your Name | Home</title>
        <meta name="description" content="Bio and projects of Your Name" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Bio Section */}
        <section id="bio" className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Hello, I&apos;m Your Name</h1>
          <p className="text-lg leading-relaxed">
            I&apos;m a web developer with a passion for building beautiful, performant applications. I love exploring
            new technologies, contributing to open-source, and crafting clean, maintainable code.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-medium mb-2">
                  <a href={project.link} className="text-blue-600 hover:underline">
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}