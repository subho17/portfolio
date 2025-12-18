import { Palette, Layout, Code2, Smartphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning user interfaces with a focus on user experience, accessibility, and modern design principles.",
  },
  {
    icon: Layout,
    title: "Graphic Design",
    description: "Designing engaging visual content including logos, banners, social media graphics, and brand identity elements using industry-standard tools.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive, performant, and scalable web applications using modern technologies like React, Node.js, and cutting-edge frameworks.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Developing cross-platform mobile applications with seamless user experiences and robust backend integrations.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I Offer</p>
          <h2 className="section-title">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            With experience in both design and development, I offer a comprehensive range of 
            services to bring your digital ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 glow-border group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="mt-24 py-6 bg-primary/10 border-y border-primary/20 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {["WEB DESIGN", "APP DESIGN", "DEVELOPMENT", "UI/UX", "BRANDING", "GRAPHIC DESIGN"].map((text) => (
                <span key={text} className="text-2xl font-bold text-primary/60 tracking-wider">
                  {text} <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
