// pages/experience/eng-soc-vp.js
import Image from 'next/image'
import Link from 'next/link'

export default function trigonvp() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-charcoal bg-white">
      <h1 className="text-4xl font-bold mb-2 text-deepBlue">Vice President – Trigon Engineering Society</h1>
      <p className="text-md text-charcoal mb-6 italic">
        Reflections on leadership, outreach, and growth
      </p>

      {/* Paragraph + image block */}
      <div className="md:flex md:items-start md:gap-6 mb-8">
        <div className="md:w-2/3">
          <p className="mb-4">
            When I first joined Trigon, our engineering society was built around three key ideas: social events, brotherhood, and community service. While social activities and brotherhood help us build strong internal friendships, I've always believed that community service is the most important as it connects us meaningfully to our broader community and truly gives our organization purpose.
          </p>
          <p className="mb-4">
            However, when I first became a member, our commitment to community service wasn't matching up with this vision. The society was mostly inactive, holding just one service event per semester, and even then, only first-year students typically showed up. Most upperclassmen were disengaged, and the main exception was the Thomas E. Hutchinson Award dinner, where we honored outstanding professors. But this event alone wasn't enough to show our commitment to service.
          </p>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <Image
            src="/rivanna.jpeg"
            alt="Engineering workshop event"
            width={400}
            height={300}
            className="rounded shadow"
          />
        </div>
      </div>

      {/* Plain paragraph */}
      <p className="mb-6">
        I felt strongly that this needed to change, so I decided to run for Vice President, highlighting my passion for community involvement and my dedication to getting more members involved. I knew we needed regular and meaningful service activities to re-establish our strong community ties and make sure future leaders could easily continue these efforts.
      </p>
      <p className="mb-6">
        Instead of immediately trying to launch big events, I started by focusing on smaller, consistent volunteer activities to gradually build enthusiasm and participation. I reached out proactively to various local organizations and managed to set up multiple volunteer opportunities, including the Habitat for Humanity Rake-a-Thon, which we're now hoping becomes a yearly tradition. By getting the word out early and clearly, I was able to significantly increase involvement from our members.
      </p>

      {/* Paragraph with link */}
      <p className="mb-6">
        By the end of my first semester as Vice President, more than half of our members had joined at least one service event, which was a major improvement over previous years. More importantly, these events created stronger connections within our society, drawing in members who had previously been inactive and helping new members feel welcomed and involved right from the start.
      </p>

      {/* Second image and reflection */}
      <div className="md:flex md:items-start md:gap-6 mb-8">
        <div className="md:w-1/3 mt-4 md:mt-0 order-2 md:order-none">
          <Image
            src="/rake.jpeg"
            alt="Engineering Society group photo"
            width={400}
            height={300}
            className="rounded shadow"
          />
        </div>
        <div className="md:w-2/3">
          <p className="mb-6">
            Beyond just running these events, I also pushed for changes that would help future leaders. I set up dedicated emails for each executive position and encouraged everyone to document their tasks and projects clearly. These small organizational improvements will help make leadership transitions smoother and ensure that the momentum we've built isn't lost.
          </p>
          <p className="mb-4">
            Overall, my time as Vice President helped revive our commitment to service, boosted member engagement, and established lasting changes that will help Trigon continue making a positive impact for years to come.          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-12">
        <Link href="/" className="hover:underline text-teal">← Back to Home</Link>
      </p>
    </main>
  )
}
