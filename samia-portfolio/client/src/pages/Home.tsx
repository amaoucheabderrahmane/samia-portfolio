import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Linkedin, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold">
            <span className="text-primary">SAMIA</span>
          </div>
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="nav-link"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="nav-link"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
          </div>
          <Button className="btn-primary hidden md:block">
            Download CV
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-0">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">Welcome</p>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">Samia Brahimi</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                Professional Accountant & Administrative Expert
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              With over 20 years of expertise in accounting, administrative management, and professional development, I help organizations streamline their financial and operational processes with precision and dedication.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="btn-primary">
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 border-primary text-primary hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <a href="mailto:amaoucheabderrahmane@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium">amaoucheabderrahmane@gmail.com</p>
                </div>
              </a>
              <a href="tel:+1-200-300-4000" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-medium">+1-200-300-4000</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium">Batna, Algeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-0 bg-card/50">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                About Me
              </p>
              <h2 className="section-title">Professional Background</h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated accounting professional with extensive experience in financial management, administrative operations, and organizational development. My career spans over two decades of proven expertise in handling complex accounting tasks and administrative responsibilities.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical precision with strategic thinking, ensuring that every financial and administrative process is optimized for efficiency and accuracy. I take pride in my ability to adapt to changing business needs while maintaining the highest standards of professionalism.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">20+</p>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">100%</p>
                  <p className="text-muted-foreground">Dedication & Commitment</p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">CAP</p>
                  <p className="text-muted-foreground">Certified Professional</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <h3 className="subsection-title">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">Financial Accounting</span>
                  <span className="skill-badge">Administrative Management</span>
                  <span className="skill-badge">Budget Planning</span>
                  <span className="skill-badge">Record Keeping</span>
                  <span className="skill-badge">Financial Analysis</span>
                  <span className="skill-badge">Team Leadership</span>
                  <span className="skill-badge">Process Optimization</span>
                  <span className="skill-badge">Professional Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-0">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Professional Journey
            </p>
            <h2 className="section-title">Work Experience</h2>
          </div>

          <div className="space-y-8">
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="subsection-title">
                    Comptable / Agent de Bureau
                  </h3>
                  <p className="text-primary font-semibold text-lg">
                    Direction Générale de la Fonction Publique
                  </p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Dec 2004 - Aug 2024 (20 years)
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Managed comprehensive accounting operations and administrative coordination for a major public sector organization. Responsible for financial record-keeping, budget management, expense tracking, and administrative support across multiple departments. Successfully maintained accurate financial records and ensured compliance with governmental accounting standards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">Financial Accounting</span>
                <span className="skill-badge">Budget Management</span>
                <span className="skill-badge">Administrative Coordination</span>
                <span className="skill-badge">Compliance</span>
                <span className="skill-badge">Record Management</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="subsection-title">
                    Agent de Saisie
                  </h3>
                  <p className="text-primary font-semibold text-lg">
                    Brickéterie de Batna
                  </p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  18 months
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Performed accurate data entry and administrative support for manufacturing operations. Maintained comprehensive records, assisted in administrative coordination, and ensured data accuracy for operational reporting. Contributed to streamlining administrative processes and improving operational efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">Data Entry</span>
                <span className="skill-badge">Administrative Support</span>
                <span className="skill-badge">Record Keeping</span>
                <span className="skill-badge">Data Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 md:px-0 bg-card/50">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Learning & Credentials
            </p>
            <h2 className="section-title">Education & Certifications</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-background p-8 rounded-lg border border-border hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🎓</div>
                <div className="flex-1">
                  <h3 className="subsection-title">
                    CAP - Certificat d'Aptitude Professionnelle
                  </h3>
                  <p className="text-primary font-semibold">
                    Centre de Formations Professionnelles Boundouaou
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    October 2002 - October 2004
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Completed comprehensive professional training in accounting with practical internship. Achieved CAP certification in accounting and comptabilité, including accelerated accounting courses and hands-on experience in financial record management.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">📜</div>
                <div className="flex-1">
                  <h3 className="subsection-title">
                    Professional Training & Development
                  </h3>
                  <p className="text-primary font-semibold">
                    Amel Academy for Training & Personal Development
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Completed professional training program focused on personal and professional growth. Continuous commitment to skill enhancement and career development through specialized training in administrative management and professional competencies.
              </p>
            </div>

            {/* Languages */}
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="subsection-title mb-6">Languages</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-foreground">French</span>
                    <span className="text-primary font-semibold">Native</span>
                  </div>
                  <div className="w-full bg-card rounded-full h-2 border border-border overflow-hidden">
                    <div className="h-full accent-gradient" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-foreground">Arabic</span>
                    <span className="text-primary font-semibold">Fluent</span>
                  </div>
                  <div className="w-full bg-card rounded-full h-2 border border-border overflow-hidden">
                    <div className="h-full accent-gradient" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-0">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h2 className="section-title">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in hearing about new opportunities and collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:amaoucheabderrahmane@gmail.com"
              className="bg-card p-8 rounded-lg border border-border hover-lift text-center group"
            >
              <Mail className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground break-all hover:text-primary transition-colors">
                amaoucheabderrahmane@gmail.com
              </p>
            </a>

            <a
              href="tel:+1-200-300-4000"
              className="bg-card p-8 rounded-lg border border-border hover-lift text-center group"
            >
              <Phone className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +1-200-300-4000
              </p>
            </a>

            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                Batna, Algeria
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center space-y-6 border-t border-border pt-12">
            <div>
              <p className="text-muted-foreground mb-4">Connect with me on social media</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://linkedin.com/in/samia-brahimi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <Button className="btn-primary">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12 px-4 md:px-0">
        <div className="container text-center">
          <p className="text-muted-foreground">© 2024 Samia Brahimi. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-2">
            Professional Portfolio | Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
