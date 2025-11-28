
const Experience = ({sectionRefs}) => {
    const experiences = [
        {
          title: "Full Stack Developer",
          company: "Copart India Technology Centre",
          period: "July 2023 - Present",
          location: "Hyderabad, India",
          description: "Developed and maintained multiple projects using React Js and Java Spring Boot.",
          achievements: [
              "Improved app performance by 40% through code optimization",
              "Led migration to microservices architecture",
              "Reduced deployment time by 60% with CI/CD pipeline"
          ]
        },
        {
          title: "Intern Software Developer",
          company: "Copart India Technology Centre",
          period: "Oct 2022 - June 2023",
          location: "Hyderabad, India",
          description: "Worked on creating multiple ETL pipelines using Python, Pentaho and SQL.",
          achievements: [
              "Built 5+ production applications from scratch",
              "Implemented real-time features using WebSockets",
              "Collaborated with design team to improve UX"
          ]
        }
    ];
    
    return (
        <section id="experience" ref={sectionRefs.experience} className="py-20 px-4 sm:px-6 lg:px-8">
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
                {/* <div className="space-y-2">
                  <p className="text-purple-300 font-semibold text-sm uppercase tracking-wide">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Experience;