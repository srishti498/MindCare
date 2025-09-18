import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Heart, 
  Building, 
  Award,
  CheckCircle,
  Target
} from "lucide-react";

const Impact = () => {
  const impactStats = [
    {
      icon: Heart,
      number: "85%",
      label: "Improvement in Mental Well-being",
      description: "Students report significant improvement in overall mental health within 30 days",
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: GraduationCap,
      number: "78%",
      label: "Higher Academic Retention",
      description: "Increase in course completion and semester retention rates",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Building,
      number: "92%",
      label: "University Satisfaction",
      description: "Campus counseling centers report improved student engagement",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      number: "10,000+",
      label: "Students Served",
      description: "Active users across 50+ universities and colleges",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const benefits = [
    {
      category: "For Students",
      icon: Heart,
      items: [
        "Reduced anxiety and depression symptoms",
        "Improved coping mechanisms and resilience",
        "Better academic performance and focus", 
        "Enhanced self-awareness and emotional intelligence",
        "24/7 access to mental health support",
        "Reduced stigma around seeking help"
      ]
    },
    {
      category: "For Universities", 
      icon: Building,
      items: [
        "Reduced counseling center wait times",
        "Lower student dropout rates",
        "Improved campus mental health culture",
        "Better resource allocation and planning",
        "Enhanced student satisfaction scores",
        "Proactive crisis intervention capabilities"
      ]
    },
    {
      category: "For Society",
      icon: Target,
      items: [
        "Healthier, more resilient workforce",
        "Reduced healthcare costs long-term",
        "Decreased mental health stigma",
        "Early intervention preventing crises",
        "Improved community well-being",
        "Better mental health literacy"
      ]
    }
  ];

  const caseStudies = [
    {
      university: "State University of Technology",
      students: "12,000",
      results: [
        "40% reduction in crisis interventions",
        "60% increase in early help-seeking behavior", 
        "25% improvement in semester completion rates"
      ],
      quote: "MindCare has transformed how we approach student mental health. The early intervention capabilities have been game-changing.",
      author: "Dr. Sarah Johnson, Director of Counseling Services"
    },
    {
      university: "Metropolitan College",
      students: "8,500", 
      results: [
        "50% reduction in counseling wait times",
        "35% increase in student engagement",
        "80% of students report improved well-being"
      ],
      quote: "The integration with our existing services has been seamless. Students love having support available 24/7.",
      author: "Michael Chen, VP of Student Affairs"
    }
  ];

  const futureGoals = [
    { goal: "Serve 1 million students by 2025", progress: 45 },
    { goal: "Partner with 500+ universities globally", progress: 30 },
    { goal: "Reduce student mental health crisis by 50%", progress: 60 },
    { goal: "Achieve 95% user satisfaction rating", progress: 85 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Measuring Our Impact
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Real results from students, universities, and communities using MindCare to transform mental health support in higher education.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Statistics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Impact by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable outcomes demonstrating the effectiveness of digital mental health support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg text-center overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${stat.gradient}`} />
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <h3 className="font-semibold text-foreground mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Breakdown */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits Across All Stakeholders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              MindCare creates positive impact for students, universities, and society as a whole.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {benefit.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real results from universities that have implemented MindCare campus-wide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{study.university}</CardTitle>
                    <Badge variant="outline">{study.students} students</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-muted-foreground text-sm italic mb-3">
                      "{study.quote}"
                    </p>
                    <p className="text-xs font-medium text-primary">
                      — {study.author}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our 2025 Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ambitious targets to expand our impact and reach more students in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureGoals.map((goal, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{goal.goal}</h3>
                    <Badge variant="outline">{goal.progress}%</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Be Part of the Solution
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students and hundreds of universities already transforming mental health support through MindCare.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/50 rounded-xl">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Award Winning</h3>
              <p className="text-sm text-muted-foreground">Recognized by education and healthcare organizations</p>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-xl">
              <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Evidence Based</h3>
              <p className="text-sm text-muted-foreground">Built on proven therapeutic methodologies</p>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-xl">
              <Users className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Community Driven</h3>
              <p className="text-sm text-muted-foreground">Developed with student and clinician feedback</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Impact;