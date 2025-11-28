import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Briefcase } from 'lucide-react';

export default function Claude() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack online shopping platform with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio site with smooth animations",
      tags: ["React", "Framer Motion", "CSS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code"] }
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Corp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of cloud-based applications serving 100K+ users. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Improved app performance by 40% through code optimization",
        "Led migration to microservices architecture",
        "Reduced deployment time by 60% with CI/CD pipeline"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartUp Studios",
      period: "2020 - 2022",
      location: "Remote",
      description: "Developed and maintained multiple client projects using React, Node.js, and AWS services.",
      achievements: [
        "Built 5+ production applications from scratch",
        "Implemented real-time features using WebSockets",
        "Collaborated with design team to improve UX"
      ]
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      location: "New York, NY",
      description: "Worked on frontend development for various client websites and web applications.",
      achievements: [
        "Developed responsive websites for 10+ clients",
        "Learned modern JavaScript frameworks",
        "Participated in agile development process"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              YourName
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-6xl">
              👋
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer specializing in building exceptional digital experiences
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              View My Work
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                I'm a passionate developer with 5+ years of experience creating web applications that solve real-world problems. I love working with modern technologies and building products that make a difference.
              </p>
              <p className="text-gray-300 text-lg">
                When I'm not coding, you can find me contributing to open source, writing technical blogs, or exploring new technologies.
              </p>
            </div>
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-purple-400 font-semibold mb-3">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-purple-400 text-lg font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-gray-300 font-medium">{exp.period}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <p className="text-purple-300 font-semibold text-sm uppercase tracking-wide">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors">
                    View Project <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-300 text-lg mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="bg-slate-800 p-4 rounded-full hover:bg-purple-600 transition-colors">
              <Github className="text-white" size={24} />
            </a>
            <a href="#" className="bg-slate-800 p-4 rounded-full hover:bg-purple-600 transition-colors">
              <Linkedin className="text-white" size={24} />
            </a>
            <a href="#" className="bg-slate-800 p-4 rounded-full hover:bg-purple-600 transition-colors">
              <Mail className="text-white" size={24} />
            </a>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}