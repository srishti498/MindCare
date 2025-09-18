import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Watch, 
  Mic, 
  Glasses, 
  Users, 
  Brain, 
  Globe,
  Smartphone,
  Zap,
  Target,
  Lightbulb,
  Rocket,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const FutureVision = () => {
  const roadmapItems = [
    {
      phase: "2024 Q4",
      title: "Wearable Integration",
      icon: Watch,
      status: "In Development",
      description: "Smart watch and fitness tracker integration for continuous health monitoring and stress detection.",
      features: [
        "Heart rate variability monitoring",
        "Sleep pattern analysis", 
        "Stress detection algorithms",
        "Automatic mood check-ins",
        "Emergency alert system"
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      phase: "2025 Q1", 
      title: "AI Voice Therapy",
      icon: Mic,
      status: "Research Phase",
      description: "Voice-based AI therapy sessions with natural language processing for more human-like interactions.",
      features: [
        "Natural conversation flow",
        "Emotion detection in speech",
        "Personalized voice responses",
        "Multi-language support",
        "Privacy-focused processing"
      ],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      phase: "2025 Q2",
      title: "VR/AR Therapy Sessions", 
      icon: Glasses,
      status: "Conceptual",
      description: "Immersive virtual reality environments for anxiety treatment, meditation, and exposure therapy.",
      features: [
        "Guided meditation spaces",
        "Exposure therapy simulations",
        "Calming virtual environments",
        "Group therapy sessions",
        "Biometric feedback integration"
      ],
      gradient: "from-green-500 to-green-600"
    },
    {
      phase: "2025 Q3",
      title: "Peer Community Platform",
      icon: Users,
      status: "Planning",
      description: "Anonymous peer support network connecting students with similar experiences in a safe environment.",
      features: [
        "Anonymous matching system",
        "Moderated support groups", 
        "Peer mentorship program",
        "Crisis buddy system",
        "Achievement sharing"
      ],
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const longTermVision = [
    {
      icon: Brain,
      title: "Predictive Mental Health",
      description: "AI algorithms that can predict mental health episodes before they occur, enabling preventive interventions.",
      timeline: "2026-2027"
    },
    {
      icon: Globe,
      title: "Global Mental Health Network",
      description: "Worldwide platform connecting students across cultures and languages with localized mental health resources.",
      timeline: "2027-2028"
    },
    {
      icon: Smartphone,
      title: "Integrated Campus Ecosystem",
      description: "Complete integration with university systems, academic platforms, and campus life for holistic support.",
      timeline: "2026-2027"
    },
    {
      icon: Zap,
      title: "Real-time Crisis Prevention",
      description: "Advanced monitoring and intervention systems that can prevent mental health crises in real-time.",
      timeline: "2028-2029"
    }
  ];

  const researchAreas = [
    {
      area: "Digital Therapeutics",
      description: "FDA-approved digital treatments for depression, anxiety, and other mental health conditions",
      impact: "Prescription-grade mental health apps"
    },
    {
      area: "Neurofeedback Technology", 
      description: "Brain-computer interfaces for direct neural monitoring and therapeutic intervention",
      impact: "Direct brain-based mental health monitoring"
    },
    {
      area: "Personalized AI Models",
      description: "Individual AI models trained on personal mental health patterns and responses", 
      impact: "Truly personalized mental health AI"
    },
    {
      area: "Quantum Computing Applications",
      description: "Leveraging quantum computers for complex mental health pattern analysis",
      impact: "Unprecedented pattern recognition capabilities"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Future Vision
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            The next generation of mental health technology - exploring cutting-edge innovations that will transform student well-being.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Product Roadmap */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Roadmap
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our development timeline for revolutionary features that will reshape digital mental health support.
            </p>
          </div>

          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Phase & Status */}
                    <div className={`lg:col-span-3 bg-gradient-to-r ${item.gradient} p-6 text-white flex flex-col justify-center`}>
                      <Badge className="bg-white/20 text-white border-white/30 mb-3 w-fit">
                        {item.status}
                      </Badge>
                      <div className="text-lg font-semibold mb-2">{item.phase}</div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6 p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-6">{item.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Innovation Score */}
                    <div className="lg:col-span-3 p-6 bg-muted/30 flex flex-col justify-center items-center text-center">
                      <Lightbulb className="w-12 h-12 text-yellow-500 mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Innovation Level</h4>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {index === 0 ? "8.5" : index === 1 ? "9.2" : index === 2 ? "9.8" : "8.9"}/10
                      </div>
                      <p className="text-xs text-muted-foreground">Breakthrough Potential</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Long-term Vision */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Long-term Vision (2026-2030)
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Revolutionary advances that will fundamentally transform how we understand and treat mental health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {longTermVision.map((vision, index) => (
              <Card key={index} className="hover-lift border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <vision.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline">{vision.timeline}</Badge>
                  </div>
                  <CardTitle className="text-xl">{vision.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{vision.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Areas */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Research & Development Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge research areas we're actively exploring to push the boundaries of mental health technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((research, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{research.area}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{research.description}</p>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                        <p className="text-xs font-medium text-primary">
                          Impact: {research.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision Statement */}
        <section className="mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8 md:p-12 text-center">
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Ultimate Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                By 2030, we envision a world where mental health crises are predicted and prevented before they occur, 
                where every student has access to personalized, AI-powered mental health support that understands them 
                as individuals, and where the stigma around mental health has been completely eliminated through 
                technology-enabled normalization of mental wellness.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                  <p className="text-sm text-muted-foreground">Student Mental Health Crises</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Access to Mental Health Support</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Global</div>
                  <p className="text-sm text-muted-foreground">Mental Health Network</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Us in Building the Future
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the revolution in mental health technology. Whether you're a student, researcher, or institution, 
            there's a place for you in shaping this future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Partner With Us
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline">
                Explore Current Features
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FutureVision;