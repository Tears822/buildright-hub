import { Shield, Lock, Eye, Terminal, Users, Award, ChevronRight, Zap, Server, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      icon: Terminal,
      title: "Penetration Testing",
      description: "Learn ethical hacking techniques to identify vulnerabilities in systems and networks.",
      level: "Advanced"
    },
    {
      icon: Lock,
      title: "Network Security",
      description: "Master firewall configurations, intrusion detection, and secure network architecture.",
      level: "Intermediate"
    },
    {
      icon: Eye,
      title: "Threat Intelligence",
      description: "Analyze cyber threats, malware behavior, and develop threat hunting skills.",
      level: "Advanced"
    },
    {
      icon: Code,
      title: "Secure Coding",
      description: "Write secure applications and understand common vulnerabilities like OWASP Top 10.",
      level: "Beginner"
    },
    {
      icon: Server,
      title: "Cloud Security",
      description: "Protect cloud infrastructure on AWS, Azure, and GCP with industry best practices.",
      level: "Intermediate"
    },
    {
      icon: Shield,
      title: "Incident Response",
      description: "Handle security breaches, forensic analysis, and recovery procedures.",
      level: "Advanced"
    }
  ];

  const stats = [
    { value: "50K+", label: "Students Trained" },
    { value: "200+", label: "Courses Available" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Lab Access" }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Security Analyst at TechCorp",
      quote: "This platform transformed my career. The hands-on labs are incredibly realistic.",
      avatar: "AC"
    },
    {
      name: "Sarah Mitchell",
      role: "Penetration Tester",
      quote: "Best investment I've made. Passed my OSCP on the first try thanks to these courses.",
      avatar: "SM"
    },
    {
      name: "James Wilson",
      role: "SOC Manager",
      quote: "We train our entire team here. The curriculum stays current with real-world threats.",
      avatar: "JW"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">CyberShield Academy</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">Courses</a>
            <a href="#labs" className="text-muted-foreground hover:text-foreground transition-colors">Labs</a>
            <a href="#certifications" className="text-muted-foreground hover:text-foreground transition-colors">Certifications</a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">New: Advanced Red Team Operations Course</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
              Master the Art of
              <br />
              <span className="text-primary">Cybersecurity</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Industry-leading training platform for security professionals. Learn from experts, practice in real-world labs, and earn recognized certifications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-14">
                Start Learning Free
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-border/60">
                View Course Catalog
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="courses" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Training Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive courses designed by industry experts to prepare you for real-world security challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group bg-card/50 border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {service.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="labs" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Hands-On Virtual Labs</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Practice in realistic environments with our cloud-based lab infrastructure. No setup required - launch instantly from your browser.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Real Vulnerable Systems", desc: "Practice on intentionally vulnerable machines without legal risks" },
                  { title: "Guided Challenges", desc: "Step-by-step walkthroughs for beginners, CTF-style for experts" },
                  { title: "Progress Tracking", desc: "Monitor your skill development with detailed analytics" }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border/40 p-8 flex items-center justify-center">
                <div className="w-full max-w-md bg-background/80 rounded-xl border border-border/60 shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/40">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="ml-4 text-xs text-muted-foreground font-mono">terminal@cybershield:~$</span>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <p className="text-green-400">$ nmap -sV target.lab</p>
                    <p className="text-muted-foreground mt-2">Starting Nmap 7.94...</p>
                    <p className="text-muted-foreground">Scanning target.lab (10.0.0.5)</p>
                    <p className="text-primary mt-2">PORT    STATE SERVICE</p>
                    <p className="text-foreground">22/tcp  open  ssh</p>
                    <p className="text-foreground">80/tcp  open  http</p>
                    <p className="text-foreground">443/tcp open  https</p>
                    <p className="text-green-400 mt-2 animate-pulse">█</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Professionals</h2>
            <p className="text-xl text-muted-foreground">Join thousands who've advanced their careers with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 border-border/40">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/20 p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our community of security professionals. Get access to all courses, labs, and certifications.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 h-14">
                Start Free Trial
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">CyberShield Academy</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 CyberShield Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
