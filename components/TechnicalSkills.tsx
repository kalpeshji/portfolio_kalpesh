import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Custom skill card that matches the provided GraphQL example
interface SkillCardProps {
  name: string;
  icon: string;
  logo: React.ReactNode | null;
}
const SkillCard = ({ name, icon, logo }: SkillCardProps) => {
  return (
    <motion.div
      className="inline-block"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="flex items-center gap-2 bg-muted/60 rounded-full px-4 py-2 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {logo ? (
          <span className="text-2xl">{logo}</span>
        ) : (
          <motion.div
            className="text-2xl"
            animate={{
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        )}
        <span className="font-medium">{name}</span>
      </motion.div>
    </motion.div>
  );
};

const TechnicalSkills = () => {
  // Frontend skills with appropriate icons
  const frontendSkills = [
    { name: "Next.js", icon: "⚛️", logo: null },
    { name: "React", icon: "⚛️", logo: null },
    { name: "TypeScript", icon: "TS", logo: null },
    { name: "Tailwind CSS", icon: "🎨", logo: null },
    { name: "JavaScript", icon: "JS", logo: null },
    {
      name: "GraphQL",
      icon: "◢",
      logo: (
        <svg viewBox="0 0 400 400" className="w-6 h-6">
          <path
            fill="#E535AB"
            d="M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z"
          />
          <path fill="#E535AB" d="M39.8 272.2h320.3v16.6H39.8z" />
          <path
            fill="#E535AB"
            d="M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z"
          />
          <path
            fill="#E535AB"
            d="M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.375z"
          />
          <path
            fill="#E535AB"
            d="M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5z"
          />
          <path fill="#E535AB" d="M330.9 107.5h16.6v185h-16.6z" />
          <path
            fill="#E535AB"
            d="M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z"
          />
          <path
            fill="#E535AB"
            d="M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9"
          />
        </svg>
      ),
    },
  ];

  // Backend skills with appropriate icons
  const backendSkills = [
    { name: "Node.js", icon: "🟢", logo: null },
    { name: "Express", icon: "🚀", logo: null },
    { name: "REST API", icon: "🔌", logo: null },
  ];

  // Database skills with appropriate icons
  const databaseSkills = [
    { name: "MongoDB", icon: "🍃", logo: null },
    { name: "PostgreSQL", icon: "🐘", logo: null },
    { name: "Firebase", icon: "🔥", logo: null },
  ];

  // Tools skills with appropriate icons
  const toolsSkills = [
    { name: "GitHub", icon: "🔄", logo: null },
    { name: "Figma", icon: "📱", logo: null },
    { name: "CI/CD", icon: "⚙️", logo: null },
    // { name: "Jest", icon: "🧪", logo: null },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Why Choose me
          </Badge>

          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technical Skills
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I specialize in modern front-end technologies with a focus on
            creating performant, accessible, and visually appealing web
            applications.
          </motion.p>
        </motion.div>

        {/* Frontend Skills */}
        <div className="mb-16">
          <motion.h3
            className="text-xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Frontend Development
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>

        {/* Backend Skills */}
        <div className="mb-16">
          <motion.h3
            className="text-xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Backend Development
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {backendSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>

        {/* Database Skills */}
        <div className="mb-16">
          <motion.h3
            className="text-xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Database Technologies
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {databaseSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>

        {/* Tools Skills */}
        <div className="mb-16">
          <motion.h3
            className="text-xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Tools & Workflows
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {toolsSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>

        {/* Currently Learning Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.h3
            className="text-xl font-semibold mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Currently Learning
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {["Three.js", "WebGL", "Golang", "Rust", "Web3"].map((skill) => (
              <motion.div
                key={skill}
                className="inline-block"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="flex items-center gap-2 bg-purple-950/30 rounded-full px-4 py-2 border border-purple-700/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="font-medium">{skill}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default TechnicalSkills;
