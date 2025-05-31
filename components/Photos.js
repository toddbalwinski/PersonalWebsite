// components/PhotoCollage.js
import Image from 'next/image';

export default function PhotoCollage() {
  return (
    <div className="w-2/3 h-screen overflow-hidden">
      <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full">
        {/* Big hero: spans 2 cols × 2 rows */}
        <div className="col-start-1 col-span-2 row-start-1 row-span-2 relative overflow-hidden rounded-lg">
          <Image
            src="/almafi.png"
            alt="Cliffside view"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Top-right */}
        <div className="col-start-3 row-start-1 relative overflow-hidden rounded-lg">
          <Image
            src="/cook.jpg"
            alt="Cooking experience"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Mid-right */}
        <div className="col-start-3 row-start-2 relative overflow-hidden rounded-lg">
          <Image
            src="/row.jpg"
            alt="Rowing on the river"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Bottom row, left */}
        <div className="col-start-1 row-start-3 relative overflow-hidden rounded-lg">
          <Image
            src="/f2.jpg"
            alt="Childhood football fun"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Bottom row, center */}
        <div className="col-start-2 row-start-3 relative overflow-hidden rounded-lg">
          <Image
            src="/football.JPG"
            alt="Cheering at the game"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Bottom row, right */}
        <div className="col-start-3 row-start-3 relative overflow-hidden rounded-lg">
          <Image
            src="/snow.png"
            alt="Snowboarding adventure"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
