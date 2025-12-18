import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-gradient">Subhadeep Chanda</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Full-Stack Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/subhadeep-chanda-0360092a7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/subho17"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:subhadeepchanda00@gmail.com"
              className="p-3 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {currentYear} Subhadeep Chanda. Made with{" "}
            <Heart className="w-4 h-4 text-destructive fill-destructive" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
