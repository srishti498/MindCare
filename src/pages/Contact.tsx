import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  AlertCircle,
  Users,
  Building,
  Heart
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    contactType: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Success simulation
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      message: "",
      contactType: "general"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      info: "hello@mindcare.edu",
      description: "Questions about our platform, partnerships, or general information"
    },
    {
      icon: Phone,
      title: "24/7 Crisis Support",
      info: "1-800-MINDCARE",
      description: "Immediate mental health crisis support and emergency assistance"
    },
    {
      icon: Building,
      title: "University Partnerships",
      info: "partnerships@mindcare.edu",
      description: "Institutional partnerships and campus integration inquiries"
    },
    {
      icon: Users,
      title: "Student Support",
      info: "support@mindcare.edu", 
      description: "Technical support and user assistance for students"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Crisis Support Only" },
    { day: "Crisis Line", hours: "24/7 Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Get in touch with our team for support, partnerships, or any questions about MindCare's mental health platform.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Crisis Alert */}
        <div className="mb-12">
          <Card className="border-destructive/50 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-destructive mb-1">Mental Health Crisis?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you're experiencing a mental health crisis or having thoughts of self-harm, please reach out immediately:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="destructive" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call 1-800-MINDCARE
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat with Crisis Counselor
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@university.edu"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="organization">Organization/University</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="University name or organization"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactType">Contact Type</Label>
                    <select
                      id="contactType"
                      name="contactType"
                      value={formData.contactType}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="student">Student Support</option>
                      <option value="university">University Partnership</option>
                      <option value="press">Press & Media</option>
                      <option value="technical">Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{method.title}</h4>
                        <p className="text-primary font-medium text-sm">{method.info}</p>
                        <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="text-sm text-muted-foreground">{schedule.day}</span>
                      <span className="text-sm font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Office Location */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Headquarters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">MindCare Technologies</p>
                    <p className="text-sm text-muted-foreground">
                      123 Innovation Drive<br />
                      Suite 456<br />
                      Boston, MA 02115<br />
                      United States
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Our team works remotely to better serve universities globally. 
                      In-person meetings available by appointment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-md bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-primary" />
                  Need Immediate Support?
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Try Our AI Chatbot
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Access Mood Tracker
                  </Button>
                  <Button variant="destructive" size="sm" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Crisis Helpline
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;