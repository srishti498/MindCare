import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  MessageCircle, 
  Heart, 
  ClipboardCheck, 
  Phone,
  Shield,
  Clock,
  Users,
  Star,
  ChevronRight,
  Brain,
  Zap
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Chatbot Support",
      description: "24/7 empathetic AI companion providing instant mental health support and CBT techniques.",
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Heart,
      title: "Mood & Journal Tracker",
      description: "Track emotional patterns with personalized insights for better self-awareness.",
      gradient: "from-secondary to-secondary-light"
    },
    {
      icon: ClipboardCheck,
      title: "Self-Assessment Tools",
      description: "Evidence-based questionnaires for understanding your mental health status.",
      gradient: "from-accent to-accent-light"
    },
    {
      icon: Phone,
      title: "24/7 Crisis Support",
      description: "Immediate access to professional crisis intervention and emergency support.",
      gradient: "from-destructive to-orange-400"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Served" },
    { number: "50+", label: "Universities" },
    { number: "24/7", label: "Support Available" },
    { number: "85%", label: "Improvement Rate" }
  ];

  const testimonials = [
    {
      text: "MindCare helped me through my darkest semester. The AI support was there when I needed it most at 3 AM.",
      author: "Sarah, Psychology Student",
      rating: 5
    },
    {
      text: "Finally, mental health support that understands student life. The mood tracker helped me recognize my patterns.",
      author: "Alex, Computer Science Student", 
      rating: 5
    },
    {
      text: "The integration with our counseling center has been seamless. Students love the 24/7 availability.",
      author: "Dr. Johnson, University Counselor",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                Revolutionizing Student Mental Health
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Revolutionising Student Well-being in 
                <span className="text-white/90"> Higher Education</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                AI-powered mental health support, mood tracking, and 24/7 crisis assistance designed specifically for students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/chatbot">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 pulse-glow">
                    Get Support Now
                    <MessageCircle className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 float">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">AI Assistant Available</p>
                      <p className="text-white/70 text-sm">Instant empathetic support</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">100% Confidential</p>
                      <p className="text-white/70 text-sm">HIPAA compliant & secure</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">24/7 Access</p>
                      <p className="text-white/70 text-sm">Support when you need it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for your mental wellness journey, from AI-powered conversations to professional crisis support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button size="lg" variant="outline">
                Explore All Features
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How MindCare Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple, step-by-step approach to better mental health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="font-semibold mb-2">Chat with AI</h3>
              <p className="text-sm text-muted-foreground">Start with our empathetic AI assistant for immediate support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="font-semibold mb-2">Track Moods</h3>
              <p className="text-sm text-muted-foreground">Monitor emotional patterns with daily mood tracking</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="font-semibold mb-2">Self-Assess</h3>
              <p className="text-sm text-muted-foreground">Complete validated mental health assessments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-sm text-muted-foreground">Access professional help when needed</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button size="lg">
                Learn More About Our Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Students Are Saying
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from students who found support through MindCare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-medium text-sm">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Your Mental Health Matters
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students already using MindCare to improve their well-being and academic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chatbot">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Journey Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Users className="w-5 h-5 mr-2" />
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
