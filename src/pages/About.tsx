import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Target, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { number: "60%", label: "of students report anxiety", icon: Brain },
    { number: "40%", label: "experience depression", icon: Heart },
    { number: "75%", label: "never seek help", icon: Users },
    { number: "24/7", label: "support availability", icon: Target },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About MindCare
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Understanding the mental health crisis in higher education and how we're building solutions to support every student's well-being journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* The Challenge */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Mental Health Crisis
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Higher education students face unprecedented levels of stress, anxiety, and depression. Traditional support systems are overwhelmed and inaccessible to many who need help most.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="hover-lift border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                MindCare exists to democratize mental health support in higher education. We believe every student deserves immediate, personalized, and evidence-based mental health resources.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                By combining artificial intelligence, cognitive behavioral therapy principles, and 24/7 accessibility, we're breaking down barriers that prevent students from getting the help they need.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where mental health support is as accessible as checking your email – immediate, personalized, and stigma-free.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Immediate Access</h4>
                    <p className="text-muted-foreground text-sm">No waiting lists, no appointments needed. Support when you need it most.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Evidence-Based</h4>
                    <p className="text-muted-foreground text-sm">Built on proven CBT techniques and validated mental health frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Privacy First</h4>
                    <p className="text-muted-foreground text-sm">Complete confidentiality and privacy protection for all interactions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How MindCare Helps
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach combines technology with human compassion to provide holistic mental health support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Support</h3>
                <p className="text-muted-foreground">
                  Intelligent chatbot provides immediate empathetic responses and personalized CBT exercises based on your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-light rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Personal Growth</h3>
                <p className="text-muted-foreground">
                  Mood tracking and journaling tools help you understand patterns and develop emotional intelligence over time.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional Bridge</h3>
                <p className="text-muted-foreground">
                  Seamless connection to licensed professionals when you need human support beyond our AI capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;