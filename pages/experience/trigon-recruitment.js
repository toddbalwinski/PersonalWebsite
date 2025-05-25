import Image from 'next/image'
import Link from 'next/link'

export default function EngSocRecruitmentChair() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-charcoal bg-white">
      <h1 className="text-4xl font-bold mb-2 text-deepBlue">
        Recruitment Chair – Trigon Engineering Society
      </h1>
      <p className="text-md text-charcoal mb-6 italic">
        Restructuring processes to allow for growth and sucess
      </p>

      {/* 1st paragraph + image */}
      <div className="md:flex md:items-start md:gap-6 mb-8">
        <div className="md:w-2/3">
          <p className="mb-4">
            When I became the recruitment chair for Trigon at the beginning of my second year, I didn’t exactly know what to expect, but I was passionate about our society and who would join us, so I was determined to do a great job.
          </p>
          <p className="mb-4">
            After being elected at the end of my first year, I noticed over the summer that my friends involved in other organizations were already planning their recruitment events, yet Trigon hadn’t started anything. When I asked our senior recruitment chairs, they explained that typically, we only started planning a couple of weeks before school began. Curious about our existing materials, I requested access to our recruitment Google Drive and quickly realized things needed a serious overhaul.
          </p>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <Image
            src="/football.png"
            alt="Rush event banner"
            width={400}
            height={300}
            className="rounded shadow"
          />
        </div>
      </div>

      {/* 2nd paragraph */}
      <p className="mb-6">
        The drive was owned by an alumnus, making access complicated, and its contents were disorganized, inconsistent, and sometimes entirely irrelevant, like a random Taylor Swift album saved among the recruitment files. Sheets and documents had unclear titles, incomplete data, and no consistent method for tracking potential members. Clearly, our recruitment process relied too heavily on informal knowledge sharing, leaving significant room for error and inefficiency.
      </p>
      <p className="mb-6">
        I immediately got to work restructuring the system. I created standardized digital forms to track attendance at each recruitment event, which also included fun personality questions to help us get to know potential new members better. All responses fed directly into a clear, organized spreadsheet summarizing critical details like names, academic year, engineering status, and their responses to our engaging questions.
      </p>
      <p className="mb-6">
        To streamline internal participation, I designed another spreadsheet allowing current members to easily sign up for recruitment event shifts. This sheet was user-friendly, clearly displayed shift eligibility, and included a summary page that automatically confirmed each member’s eligibility to vote on new recruits based on their involvement.
      </p>

      {/* 2) Full-width break image */}
      <div className="w-full h-48 relative">
        <Image
          src="/football.png"
          alt="Group photo at rush event"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-8">
        {/* Old (right) */}
        <div className="flex flex-col items-center">
          <Image
            src="/oldfolder.png"   // your old-structure image in public/
            alt="Old folder structure"
            width={500}
            height={300}
            className="rounded shadow-lg object-cover"
          />
          <span className="mt-2 text-sm font-medium text-charcoal">Old</span>
        </div>

        {/* New (left) */}
        <div className="flex flex-col items-center">
          <Image
            src="/newfolder.png"   // your new-structure image in public/
            alt="New folder structure"
            width={500}
            height={300}
            className="rounded shadow-lg object-cover"
          />
          <span className="mt-2 text-sm font-medium text-charcoal">New</span>
        </div>
      </div>


      {/* 2nd paragraph */}
      <p className="mb-6">
        To ensure sustainability, I set up a dedicated recruitment email account that future recruitment chairs could easily inherit. I transferred and reorganized all relevant files and clearly labeled everything to prevent future confusion.
      </p>
      <p className="mb-6">
        This restructuring significantly improved our recruitment process, enabling us to smoothly manage a record number of interested new members. Moving forward, I plan to transition all recruitment information and forms onto a dedicated website backed by an SQL database. This will allow future chairs to effortlessly manage, sort, and query information online without needing extensive technical knowledge. It will also enhance our society’s visibility and provide prospective members with immediate access to information about our events, identity, and mission. I have also already started communication about the process and planning with the new junior recruitment chair to make sure we use our time as best as possible.
      </p>

      {/* Optional extra content */}
      <p className="mb-6">
        My approach to restructuring our recruitment process demonstrates my skills in creating clear, efficient systems that are both easy to use and maintain, ensuring that Trigon continues to thrive and attract engaged, passionate members year after year. (read more in the <Link href="/projects" className="text-teal hover:underline">Project Write-Up</Link>).
      </p>

      {/* Back link */}
      <p className="text-sm text-gray-500 mt-12">
        <Link href="/" className="hover:underline text-teal">
          ← Back to Home
        </Link>
      </p>
    </main>
  )
}
