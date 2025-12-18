import { ArrowDown, Download, Sparkles } from "lucide-react";
import profilephoto from "@/assets/profilephoto.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Available for Opportunities</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Hello! I'm{" "}
              <span className="text-gradient">Subhadeep Chanda</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Computer Science & Design Student | Full-Stack Developer | UI/UX Designer
            </p>
            
            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Passionate about learning new technologies, improving skills, and building innovative solutions. 
              I thrive on teamwork, communication, and turning creative ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View My Work
              </a>
              <a href="#contact" className="btn-outline flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow opacity-75 blur-sm" style={{ animation: "spin 8s linear infinite" }} />
              
              {/* Photo container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background">
                <img
                  src={profilephoto}
                  alt="Subhadeep Chanda"
                  className="w-full h-full object-cover object-center block bg-transparent transform scale-150 translate-y-3 transition-transform duration-700"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 animate-float">
                <p className="text-sm font-semibold text-primary">B.Tech 2027</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
