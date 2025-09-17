"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "./components/Badge";
import { Clock, DollarSign, Zap, Brain } from "lucide-react";
import { FeatureTile } from "./components/FeatureTile";

const features = [
  {
    Icon: Clock,
    title: "Testing your patience",
    color: "text-white",
    description:
      "Experience the joy of endless waiting. You're never getting to the other side of the Grestin Wall.",
  },
  {
    Icon: DollarSign,
    title: "Testing your wallet",
    color: "text-white",
    description:
      "Enjoy spending your money on useless crap? This game is perfect for those of you with lots of money to waste.",
  },
  {
    Icon: Zap,
    title: "Testing your sanity",
    color: "text-white",
    description:
      "Love randomly getting kicked on the face by a homeless stranger terrorist or being pushed back in the line?",
  },
  {
    Icon: Brain,
    title: "Testing your ability to comply",
    color: "text-white",
    description:
      "Thought-crime will not be accepted at any point. To get to the other side, you need strong nerves - and no (proven) terrorist associations.",
  },
];

export default function Home() {
  const [year, setYear] = useState(new Date().getUTCFullYear());

  useEffect(() => {
    const increment = () => setYear((y) => y + 1);
    const interval = setInterval(increment, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto pt-12 geist">
      <header className="flex flex-wrap items-end gap-1.5 text-white mb-6">
        <span className="font-light text-sm sm:text-base">
          from the makers of Jump-A-Ball
        </span>
        <span className="font-semibold text-xl sm:text-2xl">
          orbited game studios
        </span>
      </header>

      <section className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex flex-col text-white gap-4 text-center lg:text-left text-4xl sm:text-5xl">
          <h1 className="flex flex-col">
            <span className="font-black">papers please</span>
            <span
              className="font-bold italic"
              style={{ fontFamily: "Geist Mono" }}
            >
              citizen edition
            </span>
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start py-2 gap-2">
            <Badge content="Powered by Godot" />
            <Badge content="In active development" />
            <Badge content="100% Pay-2-Win" />
            <Badge content={`Coming Q4 ${year}`} />
          </div>

          <span className="text-lg sm:text-xl">
            Boring political dystopian reality game
          </span>
        </div>

        <div className="w-full max-w-md">
          <Image
            src="/image.png"
            width={500}
            height={500}
            alt="Game beta screenshot"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <section className="mt-2 flex justify-center lg:justify-start">
        <button
          className="bg-[#4F4F4F] text-white px-6 py-2 rounded-xl text-lg hover:bg-[#5f5f5f] transition"
          onClick={() => alert("The game isn't finished you dumbass")}
        >
          Purchase
        </button>
      </section>

      <section className="my-12">
        <h2 className="font-black italic text-white text-4xl sm:text-5xl text-center lg:text-left">
          features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {features.map(({ Icon, title, color, description }) => (
            <FeatureTile key={title} Icon={Icon} title={title} color={color}>
              {description}
            </FeatureTile>
          ))}
        </div>
      </section>

      <footer className="text-center text-white text-sm sm:text-base">
        Not affiliated with Lucas Pope or 3909 LLC
      </footer>
    </div>
  );
}
