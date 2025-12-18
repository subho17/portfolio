import { Code, Palette, Wrench, Users } from "lucide-react";

const skills = {
  programming: [
    { name: "Python", level: 85 },
    { name: "C++", level: 80 },
    { name: "Java", level: 75 },
    { name: "JavaScript/TypeScript", level: 85 },
  ],
  webDev: [
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "MongoDB", level: 75 },
  ],
  design: [
    { name: "UI/UX Design", level: 90 },
    { name: "Figma", level: 88 },
    { name: "Photoshop", level: 82 },
    { name: "Premiere Pro", level: 78 },
  ],
  soft: [
    { name: "Teamwork", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 88 },
    { name: "Creativity", level: 92 },
  ],
};

const skillCategories = [
  { title: "Programming", icon: Code, skills: skills.programming },
  { title: "Web Development", icon: Wrench, skills: skills.webDev },
  { title: "Design Tools", icon: Palette, skills: skills.design },
  { title: "Soft Skills", icon: Users, skills: skills.soft },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-8 glow-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
