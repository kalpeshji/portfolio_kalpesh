import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Send,
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response has content before parsing JSON
      const text = await response.text();
      const data = text.length ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong!",
        description: (error as Error).message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
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
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to new
            ideas and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 bg-card border rounded-2xl shadow p-6 md:p-8 backdrop-blur-sm"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full rounded-lg border-muted-foreground/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full rounded-lg border-muted-foreground/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="w-full rounded-lg border-muted-foreground/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let me know how I can help..."
                    rows={5}
                    required
                    className="w-full resize-none rounded-lg border-muted-foreground/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-black hover:bg-black/90  dark:bg-white dark:hover:bg-white/90  py-6 transition-all duration-300"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-green-100  flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Thank you for reaching out! I'll get back to you as soon as
                  possible.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="rounded-full px-6"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 flex flex-col justify-between gap-8"
          >
            {/* Contact Info Card */}
            <div className="bg-card border rounded-2xl shadow p-6 md:p-8 backdrop-blur-sm h-full">
              <h3 className="text-xl font-bold mb-8 border-b pb-4">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-card hover:bg-muted p-3 rounded-full border transition-colors">
                    <Mail size={20} className="" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Email
                    </h4>
                    <a
                      href="mailto:guptakalpeshji@gmail.com"
                      className="text-base transition-colors"
                    >
                      guptakalpeshji@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-card hover:bg-muted p-3 rounded-full border transition-colors">
                    <Phone size={20} className="" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Phone
                    </h4>
                    <a
                      href="tel:+918849269211"
                      className="text-base transition-colors"
                    >
                      +91 8849269211
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-card hover:bg-muted p-3 rounded-full border transition-colors">
                    <MapPin size={20} className="" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Location
                    </h4>
                    <p className="text-base">Surat, Gujarat, IN</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">
                    Follow Me
                  </h4>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/kalpeshji"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card hover:bg-muted p-3 rounded-full border transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kalpesh-gupta-%F0%9F%A5%87-a9a62b251/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card hover:bg-muted p-3 rounded-full border transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/im._.kalpesh/?igsh=ZjN0M3RrcmZ1YnZt#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card hover:bg-muted p-3 rounded-full border transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
