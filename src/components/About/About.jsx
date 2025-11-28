const About = ({sectionRefs}) => {
    const skills = [
        { category: "Frontend", items: ["React", "HTML", "CSS", "JavaScript"] },
        { category: "Backend", items: ["Java", "SpringBoot", "Python", "SQL", "C++"] },
        { category: "Tools", items: ["Git", "VS Code", "Eclipse", "Postman"] }
     ];

    return (
        <section id="about" ref={sectionRefs.about} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                <p className="text-gray-300 text-lg mb-6">
                    I’m a passionate Full Stack Developer with 3+ years of experience crafting scalable web applications that tackle real-world challenges. I enjoy working with modern technologies, shaping clean architectures, and building products that create genuine value for users.
                </p>
                <p className="text-gray-300 text-lg mb-6">
                    I love sharpening my logical instincts through Data Structures & Algorithms and puzzles, and I’m always exploring new tools or ideas that stretch my thinking as a developer.
                </p>
                <p className="text-gray-300 text-lg">
                    When I’m away from the keyboard, you’ll usually find me on a cricket field, in the middle of a workout, or doing something that keeps both mind and body switched on.
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
    )
}

export default About