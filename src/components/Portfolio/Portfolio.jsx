import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Briefcase,
} from "lucide-react";
import Navigation from "../Navigation/Navigation";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  // Scroll to section when nav item is clicked

  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenuOpen(false);
  };

  // Detect which section is currently in view

  useEffect(() => {
    const observerOptions = {
      root: null,

      rootMargin: "-50% 0px -50% 0px",

      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section */}
      <ProfileCard sectionRefs={sectionRefs} />

      {/* About Section */}
      <About sectionRefs={sectionRefs} />

      {/* Experience Section */}
      <Experience sectionRefs={sectionRefs} />

      {/* Projects Section */}
      <Projects sectionRefs={sectionRefs} />

      {/* Contact Section */}
      <Contact sectionRefs={sectionRefs} />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Lohit Valavala (lohitvalavala@gmail.com) . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
