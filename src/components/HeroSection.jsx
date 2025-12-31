import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Toby</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}Mathew</span>
                    </h1>

                    {/* SEQUENCED ANIMATION: Each word appears one after another */}
                    <p className="text-2xl md:text-4xl font-medium text-muted-foreground max-w-2xl mx-auto flex flex-wrap justify-center gap-2 md:gap-3">
                        <span className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>Innovate</span>
                        <span className="opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>|</span>
                        <span className="opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>Create</span>
                        <span className="opacity-0 animate-fade-in" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>|</span>
                        <span className="opacity-0 animate-fade-in" style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>Solve</span>
                    </p>

                    <div>
                        {/* Delayed to appear after the text sequence */}
                        <a href="#projects" className="cosmic-button opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};

