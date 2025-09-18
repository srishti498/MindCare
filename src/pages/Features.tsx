import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, ClipboardCheck, Phone, Brain, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const coreFeatures = [
    {
      icon: MessageCircle,
      title: "AI Chatbot Support",
      description: "Instant empathetic responses powered by advanced AI, providing personalized CBT exercises and coping strategies.",
      features: [
        "24/7 availability",
        "Empathetic conversation",
        "CBT-based exercises",
        "Crisis intervention protocols",
        "Multi-language support"
      ],
      status: "Available",
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Heart,
      title: "Mood & Journal Tracker",
      description: "Track your emotional well-being with personalized insights and pattern recognition for better self-awareness.",
      features: [
        "Daily mood tracking",
        "Journaling prompts",
        "Emotional patterns analysis",
        "Personalized insights",
        "Progress visualization"
      ],
      status: "Available",
      gradient: "from-secondary to-secondary-light"
    },
    {
      icon: ClipboardCheck,
      title: "Self-Assessment Tools",
      description: "Evidence-based questionnaires and assessments to help understand your mental health status.",
      features: [
        "PHQ-9 depression screening",
        "GAD-7 anxiety assessment",
        "Stress level evaluation",
        "Academic burnout check",
        "Personalized recommendations"
      ],
      status: "Available",
      gradient: "from-accent to-accent-light"
    },
    {
      icon: Phone,
      title: "24/7 Helpline Access",
      description: "Direct connection to crisis support and emergency mental health services when you need immediate help.",
      features: [
        "Crisis intervention",
        "Emergency support",
        "Professional counselor access",
        "Local resource directory",
        "Campus integration"
      ],
      status: "Available",
      gradient: "from-destructive to-orange-400"
    }
  ];

  const additionalFeatures = [
    {
      icon: Brain,
      title: "Personalized AI Insights",
      description: "Machine learning algorithms analyze your patterns to provide personalized mental health insights.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "End-to-end encryption and HIPAA compliance ensure your data remains completely private.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book sessions with licensed professionals at times that work with your academic schedule.",
    },
    {
      icon: Users,
      title: "Peer Support Network",
      description: "Connect with anonymous peer support groups and community resources safely.",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Mental Health Features
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Everything you need for your mental health journey, from AI-powered support to professional crisis intervention.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Core Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our four pillars of comprehensive mental health support designed specifically for students.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${feature.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={
                    feature.title.includes("Chatbot") ? "/chatbot" :
                    feature.title.includes("Mood") ? "/mood-tracker" :
                    "/contact"
                  }>
                    <Button className="w-full">
                      Try {feature.title.split(" ")[0]} Feature
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enhanced capabilities that make MindCare a complete mental health solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-muted to-muted-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Mental Health Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using MindCare to improve their mental well-being and academic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chatbot">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Start with AI Support
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;