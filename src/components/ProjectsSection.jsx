import { Github, Linkedin, ArrowRight } from "lucide-react";
import { useState } from "react";

const Projects = [
    {
        id: 1,
        title: "PCOS Detection Using Swin UNETR Model",
        description: "A novel medical imaging solution that leverages the Swin UNETR deep learning architecture to accurately segment and detect Polycystic Ovary Syndrome (PCOS) from ultrasound images.",
        tags: ["Python", "Swin UNETR", "PyTorch", "Medical Imaging", "Streamlit"],
        github: "https://github.com/tobymathew123/PCOS-Detection-using-Swin-Unetr-Model",
        // Added LinkedIn link here
        linkedin: "https://www.linkedin.com/posts/tobymmathew300804_pcos-aiinhealthcare-womenshealth-activity-7343282524783091712-4HJk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9K_ucBHpwnV_QmBbI7QcPy-rjyzyvxBho",
    },
    {
        id: 2,
        title: "Tesla Volume Impact Analysis",
        description: "A financial analytics dashboard utilizing XGBoost to analyze the correlation between trading volume spikes and stock price volatility for Tesla, providing data-driven market insights.",
        tags: ["Python", "Streamlit", "XGBoost", "Machine Learning"],
        github: "https://github.com/tobymathew123/Tesla-Volume-Spike-Analysis",
    },
    {
        id: 3,
        title: "AI Voice Agent For Banking Sector",
        description: "An intelligent conversational AI designed for the banking sector, capable of handling customer queries in real-time via voice commands.",
        tags: ["Python", "Deepgram", "Vobiz.ai", "Mistral-7B", "LangChain"],
        // Removed github property entirely here
    },
    {
        id: 4,
        title: "Nursing Station",
        description: "A robust desktop application for college nursing station streamlining patient record keeping, and treatment given.",
        tags: ["Java", "Java Swing", "MySQL"],
        github: "https://github.com/tobymathew123/Nursing-Station-Student-Entry-Management",
    },
];

export const ProjectsSection = () => {
    const [showAll, setShowAll] = useState(false);
    const [expandedCards, setExpandedCards] = useState(new Set());
    const initialProjectCount = 3;
    const displayedProjects = showAll ? Projects : Projects.slice(0, initialProjectCount);
    const hasMoreProjects = Projects.length > initialProjectCount;

    const toggleDescription = (projectId) => {
        setExpandedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(projectId)) {
                newSet.delete(projectId);
            } else {
                newSet.add(projectId);
            }
            return newSet;
        });
    };

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured
                    <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are my projects that showcase my skills and experience with
                    certain technologies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project, key) => (
                        <div
                            key={key}
                            className="project-card bg-card rounded-lg shadow-xs overflow-hidden"
                            style={{
                                animation: key >= initialProjectCount && showAll ? 'fadeInUp 0.5s ease-out forwards' : 'none',
                                opacity: key >= initialProjectCount && showAll ? 0 : 1,
                            }}
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <div className="mb-4">
                                    <p className={`text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${expandedCards.has(project.id) ? '' : 'line-clamp-3'
                                        }`}>
                                        {project.description}
                                    </p>
                                    <button
                                        onClick={() => toggleDescription(project.id)}
                                        className="text-primary text-xs font-medium mt-2 hover:underline inline-flex items-center gap-1 transition-all duration-200"
                                        aria-label={expandedCards.has(project.id) ? 'Show less' : 'Read more'}
                                    >
                                        {expandedCards.has(project.id) ? 'Show less' : 'Read more'}
                                        <svg
                                            className={`w-3 h-3 transition-transform duration-200 ${expandedCards.has(project.id) ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="project-tags flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2.5 py-1 text-xs border font-medium rounded-full bg-primary/10 text-foreground/70">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-actions flex space-x-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/70 hover:text-primary transition-all duration-200 hover:scale-110"
                                            aria-label="View on GitHub"
                                        >
                                            <Github size={22} />
                                        </a>
                                    )}

                                    {project.linkedin && (
                                        <a
                                            href={project.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/70 hover:text-blue-600 transition-all duration-200 hover:scale-110"
                                            aria-label="View on LinkedIn"
                                        >
                                            <Linkedin size={22} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More / Show Less Button */}
                {hasMoreProjects && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="cosmic-button"
                        >
                            {showAll ? 'Show Less' : 'Load More Projects'}
                        </button>
                    </div>
                )}

                <div className="text-center mt-8">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/tobymathew123"
                    >
                        Check Out My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}
