import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, ClipboardCheck, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Start with AI Chatbot",
      description: "Begin your journey by chatting with our empathetic AI assistant. Get immediate support, personalized CBT exercises, and coping strategies tailored to your needs.",
      icon: MessageCircle,
      features: [
        "Immediate response 24/7",
        "Personalized CBT techniques",
        "Crisis intervention protocols",
        "Evidence-based conversations"
      ],
      action: "Try Chatbot",
      link: "/chatbot",
      gradient: "from-primary to-primary-light"
    },
    {
      number: "02", 
      title: "Track Your Mood",
      description: "Use our intelligent mood tracker to monitor your emotional patterns. Journal your thoughts and receive personalized insights about your mental health journey.",
      icon: Heart,
      features: [
        "Daily mood logging",
        "Emotional pattern analysis",
        "Journaling prompts",
        "Progress visualization"
      ],
      action: "Start Tracking",
      link: "/mood-tracker",
      gradient: "from-secondary to-secondary-light"
    },
    {
      number: "03",
      title: "Complete Self-Assessment",
      description: "Take evidence-based assessments to better understand your mental health status. Get personalized recommendations based on validated screening tools.",
      icon: ClipboardCheck,
      features: [
        "PHQ-9 depression screening",
        "GAD-7 anxiety assessment",
        "Stress level evaluation",
        "Personalized recommendations"
      ],
      action: "Take Assessment",
      link: "/contact",
      gradient: "from-accent to-accent-light"
    },
    {
      number: "04",
      title: "Connect with Professionals",
      description: "When you need human support, seamlessly connect with licensed mental health professionals and campus counseling services.",
      icon: Users,
      features: [
        "Licensed therapist matching",
        "Campus resource integration",
        "Crisis intervention access",
        "Flexible scheduling"
      ],
      action: "Get Professional Help",
      link: "/contact",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    "Reduces wait times from weeks to seconds",
    "Available 24/7 during crisis moments", 
    "Removes stigma and accessibility barriers",
    "Provides continuous monitoring and support",
    "Integrates with campus mental health services",
    "Uses evidence-based therapeutic approaches"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How MindCare Works
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            A simple, step-by-step approach to comprehensive mental health support that meets you wherever you are in your journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Process Steps */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Mental Health Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Four simple steps to access comprehensive mental health support designed specifically for students.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-full w-px h-12 bg-gradient-to-b from-border to-transparent" />
                )}
                
                <Card className="hover-lift border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${step.gradient}`} />
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {/* Step Number & Icon */}
                      <div className={`lg:col-span-3 bg-gradient-to-r ${step.gradient} p-8 text-white flex flex-col justify-center items-center text-center`}>
                        <div className="text-4xl font-bold mb-4 opacity-80">{step.number}</div>
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                          <step.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-6 p-8">
                        <p className="text-lg text-muted-foreground mb-6">
                          {step.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                          {step.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <div className="lg:col-span-3 p-8 bg-muted/30 flex items-center justify-center">
                        <Link to={step.link}>
                          <Button className="w-full lg:w-auto" size="lg">
                            {step.action}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why This Approach Works
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our step-by-step methodology is designed based on research in digital mental health, student needs assessment, and evidence-based therapeutic practices.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Impact Statistics
                </h3>
                <p className="text-muted-foreground">
                  Real results from students using MindCare
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <p className="text-sm text-muted-foreground">Report improved mood within 2 weeks</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">92%</div>
                  <p className="text-sm text-muted-foreground">Continue using after 30 days</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">70%</div>
                  <p className="text-sm text-muted-foreground">Reduced anxiety levels</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Crisis support availability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental health. Start with our AI chatbot or explore our mood tracking features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chatbot">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Start Step 1: AI Chatbot
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline">
                Explore All Features
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;