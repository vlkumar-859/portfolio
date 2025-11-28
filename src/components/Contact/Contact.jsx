import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Contact = ({ sectionRefs }) => {
    return (
        <section 
            id="contact" 
            ref={sectionRefs?.contact} 
            className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
                <p className="text-gray-300 text-lg mb-12">
                    I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>
                <div className="flex justify-center gap-6 mb-12">
                    <a 
                        href="https://github.com/vlkumar-859" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-slate-800 p-4 rounded-full hover:bg-purple-600 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="text-white" size={24} />
                    </a>
                    <a 
                        href="https://leetcode.com/u/lohit_valavala/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-slate-800 p-4 rounded-full hover:bg-purple-600 transition-colors"
                        aria-label="LeetCode"
                    >
                        <Code className="text-white" size={24} />
                    </a>
                    <a 
                        href="https://linkedin.com/in/lohit-valavala-57191b1b4/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-slate-800 p-4 rounded-full hover:bg-purple-600 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="text-white" size={24} />
                    </a>
                    <a 
                        href="lohitvalavala@gmail.com"
                        className="bg-slate-800 p-4 rounded-full hover:bg-purple-600 transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="text-white" size={24} />
                    </a>
                </div>
                <button 
                    onClick={() => window.location.href = 'mailto:lohitvalavala@gmail.com'}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                >
                    Get In Touch
                </button>
            </div>
        </section>
    );
};

export default Contact;