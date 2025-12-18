import { Briefcase, Building, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Interview Coordinator Intern",
    company: "Indian School of Business (ISB)",
    period: "2024",
    description: [
      "Coordinated interview schedules and managed candidate communications",
      "Facilitated smooth interview processes through effective scheduling",
      "Demonstrated strong teamwork and communication skills",
      "Collaborated with multiple teams to ensure seamless operations",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary animate-glow" />
              
              <div className="glass-card p-8 ml-6 glow-border">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary mt-1">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <Briefcase className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
