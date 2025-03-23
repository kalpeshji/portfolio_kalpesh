"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { FlipWords } from "@/components/FlipWords";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";
import { HoverBorderGradient } from "@/components/HoverBorderGradient";
import AboutSection from "@/components/AboutSection";
import TechnicalSkills from "@/components/TechnicalSkills";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import { TextHoverEffect } from "@/components/TextHoverEffect";
import { HoverEffect } from "@/components/HoverEffect";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Smart Automation",
      description:
        "Automate repetitive tasks and workflows to save time and reduce errors.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with real-time data visualization and reporting.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Team Collaboration",
      description:
        "Work together seamlessly with integrated communication tools.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Enterprise Security",
      description:
        "Keep your data safe with end-to-end encryption and compliance features.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Seamless Integration",
      description:
        "Connect with your favorite tools through our extensive API ecosystem.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our dedicated support team.",
      icon: <Star className="size-5" />,
    },
  ];

  const words = [
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Freelancer Developer",
  ];

  const projects = [
    {
      title: "Portfolio",
      description:
        "My Previous Portfolio which is developed using html, css and javascript.",
      link: "https://kalpeshji.github.io/Portfolio/public_html/index.html",
      bgimage: "/p1.png",
    },
    {
      title: "Tocly",
      description:
        "A Admin web design with HTML, jQuery and CSS. Utilized responsive design to enhance user experience.",
      link: "https://kalpeshji.github.io/Admin-Panel/login.html",
      bgimage: "/p2.jpg",
    },
    {
      title: "FreshCart",
      description:
        "A Grocery Ecommers web design with HTML, jQuery, CSS and Bootstrap. Utilized slick slider or swiper slider,headline js, and responsive design to enhance user experience.",
      link: "https://kalpeshji.github.io/Ecommers-Bootstrap/signup.html",
      bgimage: "/p3.png",
    },
    {
      title: "Restaurantly",
      description:
        "A Restaurant web design with HTML, Node.js, ejs, express.js and CSS. Utilized responsive design to enhance user experience.",
      link: "https://restaurantly-node.onrender.com/",
      bgimage: "/p8.webp",
    },
    {
      title: "Sneat",
      description:
        "Developed a robust Role-Based Admin Panel using JWT, Mongoose, EJS, Node.js, and JavaScript. Implemented CRUD operations, user authentication, and responsive design.",
      link: "https://finale-project-node.onrender.com/",
      bgimage: "/p6.png",
    },
    {
      title: "Food Rental",
      description:
        "Created a Food Portal web application with React.js and JSX. Utilized CRUD operations, hooks, routers, and responsive design to enhance user experience.",
      link: "https://food-portal.onrender.com/",
      bgimage: "/p7.png",
    },
  ];

  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <header
          className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            isScrolled
              ? "bg-background/80 shadow-sm  backdrop-blur-lg"
              : "bg-transparent"
          }`}
        >
          <div className="container flex h-16 items-center justify-between">
            <a href="/#">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  K
                </div>
                <span>Kalpesh</span>
              </div>
            </a>
            <nav className="hidden md:flex gap-8">
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About me
              </Link>
              <Link
                href="#service"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Why Choose me
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                My Projects
              </Link>
            </nav>
            <div className="hidden md:flex gap-4 items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="size-[18px]" />
                ) : (
                  <Moon className="size-[18px]" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <a href="#contact">
                <HoverBorderGradient>Contact me</HoverBorderGradient>
              </a>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="size-[18px]" />
                ) : (
                  <Moon className="size-[18px]" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
            >
              <div className="container py-4 flex flex-col gap-4">
                <Link
                  href="#about"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#service"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#skills"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Why Choose me
                </Link>
                <Link
                  href="#projects"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <div className="flex flex-col gap-2 pt-2 border-t">
                  <a href="#contact">
                    <HoverBorderGradient />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </header>
        <main className="flex-1">
          <div className="h-[100vh] w-full rounded-md bg-white dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <BackgroundBeams />
            <div className="max-w-3xl text-center mx-auto p-4">
              <h1 className="relative z-10 md:text-8xl sm:text-4xl text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-600 text-center font-sans font-bold">
                Kalpesh Gupta
              </h1>
              <FlipWords words={words} /> <br />
            </div>
          </div>
          <AboutSection />
          {/* Features Section */}
          <section id="service" className="w-full py-20 md:py-32">
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
                  Services
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Your One-Stop Solution for Growth
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  Whether you need a stunning website, a seamless user
                  experience, or custom solutions, I’ve got you covered!
                </p>
              </motion.div>
              <GlowingEffectDemo />
            </div>
          </section>
          <TechnicalSkills />
          <section id="projects" className="w-full py-20 md:py-32">
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
                  Projects
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Crafting Digital Experiences
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  Every project reflects my passion for building smart,
                  user-friendly applications.
                </p>
              </motion.div>
              <HoverEffect items={projects} />
            </div>
          </section>
          <ContactSection />
        </main>
        <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
          <div className="container flex flex-col gap-8 px-4 md:px-6 ">
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center py-8">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Kalpesh. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Created with ❤️ by Kalpesh
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
