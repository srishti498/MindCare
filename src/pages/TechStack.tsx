import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Server, 
  Brain, 
  Database, 
  Cloud, 
  Smartphone, 
  Lock, 
  Globe,
  Zap,
  Code
} from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      gradient: "from-blue-500 to-blue-600",
      description: "Modern, responsive user interfaces built with cutting-edge web technologies",
      technologies: [
        { name: "React 18", description: "Component-based UI library with hooks and concurrent features", status: "Production" },
        { name: "Next.js 14", description: "Full-stack React framework with SSR and edge computing", status: "Production" },
        { name: "TypeScript", description: "Type-safe JavaScript for better development experience", status: "Production" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development", status: "Production" },
        { name: "Framer Motion", description: "Production-ready motion library for React animations", status: "Production" }
      ]
    },
    {
      title: "Backend Infrastructure",
      icon: Server,
      gradient: "from-green-500 to-green-600",
      description: "Scalable server architecture designed for high availability and performance",
      technologies: [
        { name: "Node.js", description: "JavaScript runtime for high-performance server applications", status: "Production" },
        { name: "Express.js", description: "Minimal web framework for building robust APIs", status: "Production" },
        { name: "Django", description: "Python web framework for rapid development and security", status: "Alternative" },
        { name: "GraphQL", description: "Efficient API query language for flexible data fetching", status: "Production" },
        { name: "REST APIs", description: "RESTful services for standard web communication", status: "Production" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      gradient: "from-purple-500 to-purple-600",
      description: "Advanced AI technologies powering our mental health support systems",
      technologies: [
        { name: "TensorFlow", description: "Open-source machine learning platform for AI models", status: "Production" },
        { name: "PyTorch", description: "Deep learning framework for research and production", status: "Production" },
        { name: "OpenAI GPT", description: "Large language model for conversational AI capabilities", status: "Production" },
        { name: "Natural Language Processing", description: "Text analysis for understanding user emotions and needs", status: "Production" },
        { name: "Sentiment Analysis", description: "Real-time mood and emotion detection algorithms", status: "Production" }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      gradient: "from-orange-500 to-orange-600",
      description: "Robust data management systems for secure and efficient information storage",
      technologies: [
        { name: "MongoDB", description: "NoSQL database for flexible, scalable data storage", status: "Production" },
        { name: "PostgreSQL", description: "Advanced relational database with JSON support", status: "Production" },
        { name: "Redis", description: "In-memory data structure store for caching and sessions", status: "Production" },
        { name: "AWS S3", description: "Object storage for files, images, and backup data", status: "Production" },
        { name: "Prisma ORM", description: "Type-safe database client and migration tool", status: "Production" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      gradient: "from-teal-500 to-teal-600",
      description: "Scalable cloud infrastructure with automated deployment and monitoring",
      technologies: [
        { name: "AWS", description: "Comprehensive cloud platform for hosting and services", status: "Production" },
        { name: "Docker", description: "Containerization for consistent deployment environments", status: "Production" },
        { name: "Kubernetes", description: "Container orchestration for scalable applications", status: "Production" },
        { name: "Vercel", description: "Frontend deployment platform with global CDN", status: "Production" },
        { name: "GitHub Actions", description: "CI/CD pipeline for automated testing and deployment", status: "Production" }
      ]
    },
    {
      title: "Security & Privacy",
      icon: Lock,
      gradient: "from-red-500 to-red-600",
      description: "Enterprise-grade security measures protecting sensitive mental health data",
      technologies: [
        { name: "HIPAA Compliance", description: "Healthcare data privacy and security standards", status: "Certified" },
        { name: "End-to-End Encryption", description: "AES-256 encryption for all sensitive communications", status: "Production" },
        { name: "OAuth 2.0", description: "Secure authentication and authorization protocols", status: "Production" },
        { name: "JWT Tokens", description: "Stateless authentication for secure API access", status: "Production" },
        { name: "SSL/TLS", description: "Encrypted communication between client and server", status: "Production" }
      ]
    }
  ];

  const mobileStack = [
    { name: "React Native", description: "Cross-platform mobile development" },
    { name: "Expo", description: "Mobile app development platform" },
    { name: "Push Notifications", description: "Real-time crisis alerts and reminders" },
    { name: "Offline Support", description: "Core features work without internet" }
  ];

  const performanceFeatures = [
    { name: "CDN Distribution", description: "Global content delivery network for fast loading" },
    { name: "Caching Strategy", description: "Multi-layer caching for optimal performance" },
    { name: "Load Balancing", description: "Distributed traffic management for reliability" },
    { name: "Real-time Monitoring", description: "24/7 system health and performance tracking" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Stack
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Built with cutting-edge technologies to ensure reliability, security, and scalability for mental health support at any scale.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Core Technologies */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our technology stack is carefully chosen to provide the best user experience while maintaining the highest standards of security and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${category.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.technologies.map((tech, idx) => (
                      <div key={idx} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{tech.name}</h4>
                          <Badge variant={
                            tech.status === 'Production' ? 'default' :
                            tech.status === 'Certified' ? 'destructive' :
                            'secondary'
                          }>
                            {tech.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mobile Stack */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mobile Development</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Native mobile experience with offline capabilities and push notifications for crisis situations.
              </p>
              <div className="space-y-3">
                {mobileStack.map((tech, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                    <Zap className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">{tech.name}</h4>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Features */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Performance & Reliability</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Enterprise-grade performance optimization ensuring MindCare is available when students need it most.
              </p>
              <div className="space-y-3">
                {performanceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                    <Code className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">{feature.name}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              System Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our scalable, secure architecture designed to handle millions of students while maintaining privacy and performance.
            </p>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">Frontend Layer</h3>
                  <p className="text-sm text-muted-foreground">React, Next.js, TypeScript</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-light rounded-2xl flex items-center justify-center mx-auto">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">API Layer</h3>
                  <p className="text-sm text-muted-foreground">Node.js, GraphQL, REST</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-2xl flex items-center justify-center mx-auto">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">Data Layer</h3>
                  <p className="text-sm text-muted-foreground">MongoDB, PostgreSQL, Redis</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Scale and Security
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our technology choices prioritize student privacy, data security, and 24/7 availability across all platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">256-bit</div>
              <p className="text-sm text-muted-foreground">AES Encryption</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">&lt;100ms</div>
              <p className="text-sm text-muted-foreground">Response Time</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechStack;