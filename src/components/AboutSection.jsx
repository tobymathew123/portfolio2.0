import { Bot, Braces, Brain, BriefcaseBusiness, Code } from "lucide-react";
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Software Developer & AI Enthusiast</h3>
                            <p className="text-primary text-base font-medium mb-6 leading-relaxed">
                                Building intelligent solutions that bridge innovation and real-world impact.
                            </p>
                        </div>
                        <p className="text-muted-foreground leading-loose mb-4">
                            I'm a passionate software developer focused on creating efficient, scalable technology that transforms complex ideas into reality. By combining modern web standards with intelligent logic, I engineer solutions that solve real-world problems.
                        </p>

                        <p className="text-muted-foreground leading-loose">
                            With a strong foundation in core programming and curiosity for emerging technologies, I build applications that are both functional and intuitive—delivering high-quality digital experiences through continuous learning.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <a href="#contact" className="cosmic-button text-center">
                                Get in Touch
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1ScVk34EmxwatYmNxSkyeygZmUYdyMs4c/view?usp=sharing"
                                className="px-6 py-2 rounded-full border border-primary/50 text-foreground/80 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 text-center font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="about-card gradient-border p-6">
                            <div className="flex items-start gap-4">
                                <div className="about-card-icon p-3 rounded-full bg-primary/10">
                                    <Braces className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-lg mb-1">Software Development</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Building scalable solutions using Java, Python, and modern web technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="about-card gradient-border p-6">
                            <div className="flex items-start gap-4">
                                <div className="about-card-icon p-3 rounded-full bg-primary/10">
                                    <Bot className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-lg mb-1">Building Voice Agents</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Designing intelligent conversational agents that enable natural, real-time human interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="about-card gradient-border p-6">
                            <div className="flex items-start gap-4">
                                <div className="about-card-icon p-3 rounded-full bg-primary/10">
                                    <BriefcaseBusiness className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-lg mb-1">Community Builder</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Co-Founder of Apna Meetup. Fostering tech communities with over 7K+ members.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};