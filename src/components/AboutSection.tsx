import { GraduationCap, MapPin, Calendar, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: GraduationCap, label: "B.Tech in CS & Designing", value: "Swami Vivekananda Group of Institutes" },
    { icon: Calendar, label: "Expected Graduation", value: "2027" },
    { icon: MapPin, label: "Location", value: "India" },
    { icon: Heart, label: "Passion", value: "Building & Designing" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get To Know Me</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">B.Tech student</span> specializing in 
              Computer Science and Designing at Swami Vivekananda Group of Institutes. My journey in 
              tech is driven by an insatiable curiosity and a passion for creating meaningful digital experiences.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              As a fresher with hands-on project experience, I combine my technical skills in 
              <span className="text-foreground"> full-stack development</span> with my creative abilities in 
              <span className="text-foreground"> UI/UX design</span>. I believe in the power of collaboration, 
              effective communication, and continuous learning.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding or designing, you'll find me exploring new technologies, 
              working on creative projects, or brainstorming solutions to complex problems. 
              I'm always eager to take on new challenges and grow both personally and professionally.
            </p>

            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-flex">
                Let's Connect
              </a>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="glass-card p-6 glow-border transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
