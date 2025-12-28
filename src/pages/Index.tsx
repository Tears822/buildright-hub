import { Shield, Lock, Eye, Terminal, Users, Award, ChevronRight, Zap, Server, Code, Target, Bug, Wifi, Database, FileKey, Skull, AlertTriangle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroHacker from "@/assets/hero-hacker.jpg";
import networkSecurity from "@/assets/network-security.jpg";
import pentestTools from "@/assets/pentest-tools.jpg";
import cyberShield from "@/assets/cyber-shield.jpg";
import hackerPortrait from "@/assets/hacker-portrait.jpg";
import malwareAnalysis from "@/assets/malware-analysis.jpg";
import cyberSkull from "@/assets/cyber-skull.jpg";
import cloudSecurity from "@/assets/cloud-security.jpg";
import secureCoding from "@/assets/secure-coding.jpg";
import bugBounty from "@/assets/bug-bounty.jpg";

const Index = () => {
  const services = [
    {
      icon: Terminal,
      title: "Penetration Testing",
      description: "Master ethical hacking techniques. Learn to identify and exploit vulnerabilities in systems before malicious actors do.",
      level: "Advanced",
      image: pentestTools
    },
    {
      icon: Lock,
      title: "Network Security",
      description: "Configure firewalls, set up intrusion detection systems, and build secure network architectures from scratch.",
      level: "Intermediate",
      image: networkSecurity
    },
    {
      icon: Eye,
      title: "Threat Intelligence",
      description: "Analyze malware behavior, track threat actors, and develop advanced threat hunting methodologies.",
      level: "Advanced",
      image: malwareAnalysis
    },
    {
      icon: Code,
      title: "Secure Coding",
      description: "Write bulletproof applications. Understand OWASP Top 10, SQL injection, XSS, and secure development practices.",
      level: "Beginner",
      image: secureCoding
    },
    {
      icon: Server,
      title: "Cloud Security",
      description: "Protect AWS, Azure, and GCP infrastructures. Learn IAM policies, encryption, and compliance frameworks.",
      level: "Intermediate",
      image: cloudSecurity
    },
    {
      icon: Bug,
      title: "Bug Bounty Hunting",
      description: "Find vulnerabilities in real-world applications and earn rewards. Learn responsible disclosure practices.",
      level: "Advanced",
      image: bugBounty
    }
  ];

  const tools = [
    { name: "Nmap", desc: "Network Scanner" },
    { name: "Burp Suite", desc: "Web Testing" },
    { name: "Metasploit", desc: "Exploitation" },
    { name: "Wireshark", desc: "Packet Analysis" },
    { name: "John the Ripper", desc: "Password Cracking" },
    { name: "Ghidra", desc: "Reverse Engineering" },
  ];

  const stats = [
    { value: "50K+", label: "Security Professionals Trained" },
    { value: "200+", label: "Hands-On Labs" },
    { value: "98%", label: "Certification Pass Rate" },
    { value: "24/7", label: "Lab Environment Access" }
  ];

  const certifications = [
    { name: "Certified Ethical Hacker", abbr: "CEH", icon: Skull },
    { name: "Penetration Tester", abbr: "OSCP", icon: Target },
    { name: "Security Analyst", abbr: "SOC", icon: Eye },
    { name: "Cloud Security", abbr: "CCSP", icon: Server },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Security Analyst at TechCorp",
      quote: "The hands-on labs are incredibly realistic. I passed my OSCP on the first try thanks to this platform.",
      image: hackerPortrait
    },
    {
      name: "Sarah Mitchell",
      role: "Penetration Tester",
      quote: "Best investment in my career. The instructors are actual industry professionals with real-world experience.",
      image: null
    },
    {
      name: "James Wilson",
      role: "SOC Manager",
      quote: "We train our entire security team here. The curriculum stays current with emerging threats.",
      image: null
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 h-8 w-8 text-primary blur-md opacity-50">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">CyberShield<span className="text-primary">Academy</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Courses</a>
            <a href="#labs" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Labs</a>
            <a href="#tools" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Tools</a>
            <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Certifications</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">Sign In</Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroHacker} 
            alt="Hacker workspace with multiple monitors"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">New: Advanced Red Team Operations Course Available</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Learn to <span className="text-primary">Hack</span>
              <br />
              <span className="text-muted-foreground">Ethically.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Master cybersecurity with hands-on training. From penetration testing to malware analysis, 
              learn the skills that top security professionals use to protect systems worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 shadow-lg shadow-primary/25">
                <Terminal className="mr-2 h-5 w-5" />
                Start Free Lab Access
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                View All Courses
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-xl bg-card/50 border border-primary/20 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hacker Image Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={hackerPortrait} 
            alt="Anonymous hacker"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Think Like a <span className="text-primary">Hacker</span>
              </h2>
              <p className="text-muted-foreground">
                Understand attacker mindsets, techniques, and tools. The best defenders know how attackers think.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border border-primary/20">
                <img src={cyberSkull} alt="Cyber skull" className="w-full h-full object-cover" />
              </div>
              <div className="w-32 h-32 rounded-2xl overflow-hidden border border-primary/20">
                <img src={cyberShield} alt="Cyber shield" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 border-y border-primary/10 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <span className="text-muted-foreground text-sm font-medium">Tools You'll Master:</span>
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-2 group">
                <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                <span className="text-foreground font-mono text-sm group-hover:text-primary transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-primary font-mono text-sm mb-2">// TRAINING_PROGRAMS</div>
              <h2 className="text-4xl md:text-5xl font-bold">Security Courses</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Comprehensive training designed by industry experts with real-world experience in offensive and defensive security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group bg-card/50 border-primary/10 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <CardContent className="p-6 -mt-8 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/20">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-mono ${
                      service.level === 'Advanced' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                      service.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                      'bg-green-500/10 text-green-400 border border-green-500/20'
                    }`}>
                      {service.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-mono text-sm">
                    explore_course() <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section id="labs" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-primary font-mono text-sm mb-2">// VIRTUAL_LABS</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Real Hacking.<br />
                <span className="text-muted-foreground">Safe Environment.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Practice on vulnerable machines, exploit real CVEs, and build your skills without legal risk. 
                Our cloud-based labs launch instantly from your browser.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Target, title: "Vulnerable Machines", desc: "50+ intentionally vulnerable systems to hack legally" },
                  { icon: Wifi, title: "Network Simulations", desc: "Full network environments for realistic pentests" },
                  { icon: Database, title: "CTF Challenges", desc: "Capture The Flag competitions from beginner to expert" },
                  { icon: FileKey, title: "Real-World Scenarios", desc: "Simulated corporate environments and APT attacks" }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-[60px]" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                <img 
                  src={networkSecurity} 
                  alt="Network security visualization"
                  className="w-full opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Terminal Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/90 backdrop-blur-md rounded-xl border border-primary/20 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border-b border-primary/10">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                      <span className="ml-4 text-xs text-muted-foreground font-mono">kali@cybershield:~$</span>
                    </div>
                    <div className="p-4 font-mono text-sm">
                      <p className="text-primary">$ sudo nmap -sV -sC 10.10.10.1</p>
                      <p className="text-muted-foreground mt-2 text-xs">Scanning target machine...</p>
                      <p className="text-foreground mt-1 text-xs">PORT   STATE SERVICE VERSION</p>
                      <p className="text-green-400 text-xs">22/tcp open  ssh     OpenSSH 8.2</p>
                      <p className="text-yellow-400 text-xs">80/tcp open  http    Apache 2.4.41</p>
                      <p className="text-red-400 text-xs">3306/tcp open mysql  MySQL 5.7.32</p>
                      <p className="text-primary mt-2 animate-pulse">█</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Section with Images */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-primary font-mono text-sm mb-2">// THREAT_LANDSCAPE</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Understand the Threats</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn to identify, analyze, and defend against modern cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all">
              <img src={malwareAnalysis} alt="Malware Analysis" className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <span className="text-red-400 font-mono text-sm">HIGH RISK</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Malware Analysis</h3>
                <p className="text-sm text-muted-foreground">Reverse engineer malicious software and understand attack patterns.</p>
              </div>
            </div>

            <div className="relative group rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all">
              <img src={cyberSkull} alt="Advanced Threats" className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Skull className="h-5 w-5 text-primary" />
                  <span className="text-primary font-mono text-sm">APT TACTICS</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Persistent Threats</h3>
                <p className="text-sm text-muted-foreground">Study nation-state attack techniques and defense strategies.</p>
              </div>
            </div>

            <div className="relative group rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all">
              <img src={cloudSecurity} alt="Cloud Threats" className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  <span className="text-cyan-400 font-mono text-sm">CLOUD SECURITY</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
                <p className="text-sm text-muted-foreground">Secure modern cloud environments and prevent misconfigurations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-primary font-mono text-sm mb-2">// CERTIFICATIONS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Certified</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized certifications that prove your skills to employers and clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group bg-card/50 border-primary/10 hover:border-primary/40 transition-all text-center p-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2 font-mono">{cert.abbr}</div>
                <div className="text-muted-foreground text-sm">{cert.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-primary font-mono text-sm mb-2">// SUCCESS_STORIES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From Our Graduates</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 border-primary/10 overflow-hidden">
                {testimonial.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover opacity-60" />
                  </div>
                )}
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={cyberShield} 
              alt="Cyber shield protection"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
            
            <div className="relative p-12 md:p-20">
              <div className="max-w-2xl">
                <div className="text-primary font-mono text-sm mb-4">// START_YOUR_JOURNEY</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Become a<br />
                  <span className="text-primary">Security Expert?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of professionals who've launched their cybersecurity careers with us. 
                  Start with free lab access today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 shadow-lg shadow-primary/25">
                    <Zap className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-primary/30 hover:bg-primary/10">
                    Talk to Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold">CyberShield<span className="text-primary">Academy</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional cybersecurity training for the next generation of security experts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Training</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">All Courses</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Learning Paths</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/10 gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 CyberShield Academy. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground font-mono">
              <span className="text-primary">$</span> echo "Hack the planet, ethically."
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
