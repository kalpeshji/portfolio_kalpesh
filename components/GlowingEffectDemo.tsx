"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./GlowingEffect";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <GridItem
        area=""
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Web Design"
        description="Running out of copy so I'll write anything."
      />

      <GridItem
        area=""
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Web Development"
        description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
      />

      <GridItem
        area=""
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="UI/UX"
        description="It's the best money you'll ever spend"
      />

      <GridItem
        area=""
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Freelancing"
        description="I'm not even kidding. Ask my mom if you don't believe me."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[8rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 shadow-[0px_0px_27px_0px_#f0f0f0]  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3 mt-4">
              <h3 className="text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
