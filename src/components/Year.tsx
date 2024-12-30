"use client";
import { useState, useEffect } from "react";

interface Star {
  top: string;
  left: string;
  animationDuration: string;
  delay: string;
  scale: number;
  opacity: number;
}

export default function YearTransition() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const randomPositions: Star[] = [...Array(100)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 2 + 2}s`,
      delay: `${Math.random() * 2}s`,
      scale: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
    }));
    setStars(randomPositions); // No error after fixing the type
  }, []);

  return (
    <section className="w-full h-full">
      <div className="flex flex-col justify-center pr-[50px] items-center bg-[url('/news3.jpg')] h-full bg-no-repeat bg-cover bg-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {stars.map((position, index) => (
            <div
              key={`${position.top}-${position.left}-${index}`}
              className="star"
              style={{
                top: position.top,
                left: position.left,
                animationDuration: position.animationDuration,
                animationDelay: position.delay,
                transform: `scale(${position.scale})`,
                opacity: position.opacity,
              }}
            ></div>
          ))}
        </div>

        <div className="relative">
          <span className="absolute text-start sm:left-[-163px] left-[-115px] text-xl font-bold drop-shadow-custom-yellow">
            365 / 365
          </span>
          <span className="absolute uppercase sm:left-[36px] left-[20px] text-xl font-bold drop-shadow-custom-yellow">
            Goodbye
          </span>
          <p className="uppercase absolute top-[130px] -right-[280px] text-black/90 text-xl font-bold animate-slideToLefts sm:hidden drop-shadow-custom-white">
            a new beginning
          </p>
          <p className="uppercase absolute hidden sm:block sm:top-[195px] -right-[280px] text-black/90 text-xl font-bold animate-slideToLeft drop-shadow-custom-white">
            a new beginning
          </p>
        </div>
        <div className="relative flex text-6xl font-bold">
          <p className="mr-2 sm:text-[200px] text-[140px] drop-shadow-custom-yellow">
            <span className="text-black/90">2</span>02
          </p>
          <span className="absolute left-full top-0 sm:animate-moveDown animate-moveDowns sm:text-[200px] text-[140px] drop-shadow-custom-yellow">
            4
          </span>
          <span className="absolute left-full  top-0 sm:animate-moveUp animate-moveUps sm:text-[200px] text-[140px] drop-shadow-custom-yellow">
            5
          </span>
        </div>
      </div>

      <style jsx>{`
        .star {
          position: absolute;
          width: 5px;
          height: 5px;
          background-color: white;
          border-radius: 50%;
          opacity: 0;
          animation: twinkle 2s ease-out infinite, rise 2s ease-out infinite;
        }

        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) scale(1);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}
