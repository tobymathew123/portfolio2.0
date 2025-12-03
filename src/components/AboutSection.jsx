import { Bot, Braces, Brain, BriefcaseBusiness, Code } from "lucide-react";   
export const AboutSection=()=>{
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                   About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Software Developer & AI Enthusiast</h3>
                            <p  className="text-muted-foreground ">
                                A passionate software developer focused on building efficient and scalable technology, turning complex ideas into reality by combining modern web standards with intelligent logic. 
                                My goal is to engineer innovative solutions that solve real-world problems and enhance user experiences.
                            </p>

                            <p className="text-muted-foreground ">
                                With a strong foundation in core programming concepts and a curiosity for emerging technologies, I strive to build applications that are not just functional, but also intuitive. I am dedicated to continuous learning and pushing technical boundaries to deliver high-quality digital experiences.
                            </p>
                            
                            <div className="flex flex-col sm: flex-row gap-4 pt-4 justify-center ">
                                <a href="#contact" className="cosmic-button">
                                    {" "}
                                    Get in Touch
                                </a>
                                <a href="https://drive.google.com/file/d/1ScVk34EmxwatYmNxSkyeygZmUYdyMs4c/view?usp=sharing" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                    View CV
                                </a>
                            </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 ">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Braces className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Software Development</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Building scalable solutions using Java, Python, and modern web technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Bot className="h-6 w-6 text-primary"/>
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Building Voice Agents</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Designing intelligent conversational agents that enable natural, real-time human interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <BriefcaseBusiness className="h-6 w-6 text-primary"/>
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Community Builder</h4>
                                    <p className="text-muted-foreground text-sm">
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