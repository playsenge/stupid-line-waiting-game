"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "./components/Badge";
import {
  Clock,
  DollarSign,
  Zap,
  AlertTriangle,
  Coffee,
  Gamepad2,
  Brain,
} from "lucide-react";
import { FeatureTile } from "./components/FeatureTile";

const features = [
  {
    Icon: Clock,
    title: "Testing your patience",
    color: "text-purple-400",
    description:
      "Experience the joy of endless waiting. You're never getting to the other side of the Grestin Wall.",
  },
  {
    Icon: DollarSign,
    title: "Testing your wallet",
    color: "text-green-400",
    description:
      "Enjoy spending your money on useless crap? This game is perfect for those of you with lots of money to waste.",
  },
  {
    Icon: Zap,
    title: "Testing your sanity",
    color: "text-yellow-400",
    description:
      "Love randomly getting kicked on the face by a homeless stranger terrorist or being pushed back in the line?",
  },
  {
    Icon: Brain,
    title: "Testing your ability to comply",
    color: "text-gray-300",
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
    <div className="w-8/12 mx-auto pt-12 geist">
      <header className="flex flex-row justify-left items-end gap-1.5 text-white">
        <span className="font-light">from the makers of Jump-A-Ball</span>
        <span className="font-semibold text-2xl">orbited game studios</span>
      </header>
      <section>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col text-white gap-2">
            <h1 className="flex flex-col text-6xl">
              <span className="font-black">papers please</span>
              <span className="font-bold italic">citizen edition</span>
            </h1>
            <div className="flex flex-row py-4 gap-2">
              <Badge content="Powered by Unity" />
              <Badge content="In active development" />
              <Badge content="100% Pay-2-Win" />
              <Badge content={`Coming Q4 ${year}`} />
            </div>
            <span className="mt-2 text-xl">
              Boring political dystopian reality game
            </span>
          </div>
          <Image
            src="/image.png"
            width={500}
            height={500}
            alt="Game beta screenshot"
          />
        </div>
      </section>
      <section>
        <button
          className="bg-purple-900 text-white p-2 rounded-xl"
          onClick={() => alert("The game isn't finished you dumbass")}
        >
          Purchase
        </button>
      </section>

      <section className="my-13">
        <span className="font-black italic text-white text-5xl">features</span>
        <div className="grid grid-cols-2 gap-6 mt-8">
          {features.map(({ Icon, title, color, description }) => (
            <FeatureTile key={title} Icon={Icon} title={title} color={color}>
              {description}
            </FeatureTile>
          ))}
        </div>
      </section>

      <footer className="text-center text-white">
        Not affiliated with Lucas Pope or 3909 LLC
      </footer>
    </div>
  );
}
