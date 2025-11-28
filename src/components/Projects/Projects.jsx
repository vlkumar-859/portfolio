import {  ExternalLink } from 'lucide-react';
import React from 'react'
import cricketAppImg from '../../assets/cricketApp.png';
import Portfolio from '../../assets/portfolio.png';
const Projects = ({sectionRefs}) => {
    const projects = [
        {
            title: "Cricket Auction App",
            description: "A full-stack online auction platform for cricket",
            tags: ["React JS", "Python"],
            image: cricketAppImg
        },
        // {
        //     title: "Task Management App",
        //     description: "Collaborative project management tool with real-time updates",
        //     tags: ["Vue.js", "Firebase", "Tailwind"],
        //     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
        // },
        {
            title: "Portfolio Website",
            description: "Responsive portfolio site with smooth animations",
            tags: ["React JS", "CSS"],
            image: Portfolio, // "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
        }
    ]
    
    return (
        <section id="projects" ref={sectionRefs.projects} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                    {/* <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors">
                        View Project <ExternalLink size={16} />
                    </button> */}
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default Projects