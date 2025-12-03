import { Github, Linkedin, ArrowRight } from "lucide-react";

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
      description: "An intelligent conversational AI designed for the banking sector, capable of handling customer queries and transactions in real-time via voice commands.",
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
                    {Projects.map((project, key) => (
                        <div key={key} className="bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <Github size={20} />
                                            </a>
                                        )}

                                        {/* Only show LinkedIn icon if project.linkedin exists */}
                                        {project.linkedin && (
                                            <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-blue-600 transition-colors duration-300">
                                                <Linkedin size={20} />
                                            </a>
                                        )}
                                        
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/tobymathew123" // Don't forget to fill this in!
                    >
                        Check Out My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}