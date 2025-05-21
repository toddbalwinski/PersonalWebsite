import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const projects = [
    { title: 'Golf Pool Entry Form', description: 'Built a dynamic web form that manages entries into a custom golf pool.', link: 'https://github.com/toddbalwinski/GolfPoolEntryForm' },
    { title: 'Project Two', description: 'A short description of project two.', link: '#' },
    // more projects here
  ];

  return (
    <>
      <Head>
        <title>Your Name | Home</title>
        <meta name="description" content="Bio and projects of Your Name" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* Bio + Profile Picture */}
        <div className="flex flex-col md:flex-row items-start mb-16">
          <section id="bio" className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Hello, I&apos;m Todd Balwinski</h1>
            <h1 className="text-2xl font-bold mb-4 text-red-500">This site is still under development and being updated frequently</h1>
            <p className="text-lg leading-relaxed">
              I am a student at the University of Virginia purusing a bachelors of science in Computer Science with minors in business and data science.
              I am passionate about the application of technology to improve business processes and operations. I love thinking about how people interact with systems and technology and how to create the best experiences and outcomes.
              In my free time, I enjoy playing puzzle games like tetris and sudoku, and playing and watching sports with my friends.
            </p>
          </section>

          <div className="mt-6 md:mt-0 md:ml-8">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Image
              src="/profile.png"
              alt="Todd’s Profile"
              layout="fill"           // fill the wrapper
              objectFit="cover"       // crop/cover to maintain aspect
              className="rounded-full"
            />
          </div>
        </div>
        </div>

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