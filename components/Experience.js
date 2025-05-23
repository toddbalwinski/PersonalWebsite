import Image from 'next/image'
import { experiences } from '../data/experiences'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 mt-12">
      <h2 className="text-3xl font-semibold mb-6 text-deepBlue">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map(org => (
          <div key={org.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">{org.orgName}</h3>
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-16 h-16 relative flex-shrink-0 mr-6 mb-4 md:mb-0">
                <Image
                  src={org.logo}
                  alt={`${org.orgName} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex-1 space-y-6">
                {org.roles.map((role, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="text-xl font-semibold">
                      {role.position}
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {role.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
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
  )
}
