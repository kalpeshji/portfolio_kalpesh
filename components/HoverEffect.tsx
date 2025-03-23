import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    bgimage: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl shadow-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            style={{
              backgroundImage: `url(${item.bgimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            isHovered={hoveredIndex === idx}
          >
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const CardBadge = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={cn(
        "inline-block py-1 px-2 bg-white bg-opacity-10 backdrop-blur-md text-xs font-medium text-white rounded-full mb-4",
        className
      )}
    >
      {children}
    </span>
  );
};

export const Card = ({
  className,
  children,
  style,
  isHovered = false,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  isHovered?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border border-zinc-800 group-hover:border-zinc-600 relative z-20 transition-all duration-300 shadow-xl",
        isHovered ? "translate-y-[-5px]" : "",
        className
      )}
      style={{
        ...style,
        transition: "all 0.3s ease",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-30"></div>
      
      {/* Hover state overlay with additional blur */}
      <div className={cn(
        "absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 transition-all duration-500",
        isHovered ? "bg-opacity-10 backdrop-blur-none" : ""
      )}></div>
      
      <div className="relative z-50">
        <div className="p-4 pt-16 flex flex-col h-full justify-end min-h-[200px]">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-4 text-xl drop-shadow-md relative",
        "after:content-[''] after:block after:w-12 after:h-1 after:bg-white after:mt-2 after:rounded-full after:transition-all after:duration-300 group-hover:after:w-20",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-zinc-300 tracking-wide leading-relaxed text-sm drop-shadow-lg transition-all duration-300 group-hover:text-zinc-200 max-w-[90%]",
        className
      )}
    >
      {children}
    </p>
  );
};