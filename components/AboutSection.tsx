"use client";

import { useRef } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    const response = await fetch("/resume.pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Kalpesh_Gupta_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            About
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything You Need to Succeed
          </h2>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Fixed Photo */}
          <div
            ref={imageRef}
            className="md:w-2/5 mb-8 md:mb-0 sticky top-24 h-fit"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/me.jpg" alt="" />
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded-full font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right column - Scrollable Content */}
          <div className="md:w-3/5">
            {/* Personal Info */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Personal Information
              </h3>
              <div className="space-y-4">
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Hello! I'm <span className="font-semibold">Kalpesh</span>, a
                  passionate web developer with over 1 years of experience
                  creating modern, responsive websites and applications. <br />
                  <br />
                  I am currently pursuing a Bachelor of Computer Application
                  (BCA) degree from Bhagwan Mahavir University. In addition to
                  my academic studies, I have completed a comprehensive Full
                  Stack Web Development course at the Red and White Multimedia
                  Institute, where I gained both theoretical knowledge and
                  practical skills in web development. My education and training
                  have equipped me with a solid foundation in computer science
                  and programming, allowing me to work confidently in various
                  development environments.
                  <br />
                  <br /> My technical expertise includes a diverse range of
                  languages and frameworks, such as HTML, CSS, jQuery, and
                  Bootstrap for front-end development, and C, C++, JavaScript,
                  React.js, Node.js, Express.js, and MongoDB for back-end
                  development. This combination of skills enables me to handle
                  all aspects of the development process, from designing
                  intuitive user interfaces to building robust server-side
                  logic. <br />
                  <br /> These experiences have not only deepened my
                  understanding of full-stack development but have also
                  sharpened my problem-solving abilities, allowing me to
                  troubleshoot issues effectively and deliver high-quality
                  solutions. My goal is to continuously improve my skill set and
                  contribute to the creation of innovative and efficient web
                  applications that provide real value to users.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="space-y-1">
                    <h5 className="font-medium text-neutral-800 dark:text-neutral-200">
                      Location
                    </h5>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Surat, Gujarat, IN
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-medium text-neutral-800 dark:text-neutral-200">
                      Email
                    </h5>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      guptakalpeshji@gmail.com
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-medium text-neutral-800 dark:text-neutral-200">
                      Phone
                    </h5>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      +91 8849269211
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-medium text-neutral-800 dark:text-neutral-200">
                      Availability
                    </h5>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Available for freelance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline flex-wrap">
                      <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                        Bachelor of Computer Application
                      </h4>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        2022 - Present
                      </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Bhagwan Mahavir University
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline flex-wrap">
                      <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                        HSC
                      </h4>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        2021 - 2022
                      </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Gaurav School
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline flex-wrap">
                      <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                        SSC
                      </h4>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        2019-2020
                      </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Gurukrupa School
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Certificates
              </h3>
              <div className="space-y-4">
                <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                  <div className="flex justify-between items-baseline flex-wrap mb-1">
                    <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                      Full Stack Web Development Certification
                    </h4>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      May 2024
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Red and White Multimedia Institute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
