import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">MindCare</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Revolutionising student well-being in higher education through digital mental health support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground text-sm">About Us</Link></li>
              <li><Link to="/features" className="text-muted-foreground hover:text-foreground text-sm">Features</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-foreground text-sm">How It Works</Link></li>
              <li><Link to="/impact" className="text-muted-foreground hover:text-foreground text-sm">Impact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/chatbot" className="text-muted-foreground hover:text-foreground text-sm">AI Support</Link></li>
              <li><Link to="/mood-tracker" className="text-muted-foreground hover:text-foreground text-sm">Mood Tracker</Link></li>
              <li><Link to="/tech-stack" className="text-muted-foreground hover:text-foreground text-sm">Technology</Link></li>
              <li><Link to="/future-vision" className="text-muted-foreground hover:text-foreground text-sm">Future Vision</Link></li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h3 className="font-semibold mb-3 text-destructive">Crisis Support</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium">24/7 Crisis Line</span>
              </div>
              <p className="text-destructive font-bold">1-800-MINDCARE</p>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">crisis@mindcare.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 MindCare. All rights reserved. Supporting student mental health globally.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;