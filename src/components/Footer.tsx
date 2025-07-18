
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="text-xl sm:text-2xl font-bold text-gradient mb-3 sm:mb-4">
              build2automate.online
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md">
              Transforming businesses through intelligent AI automation solutions. 
              We help companies streamline operations, boost productivity, and achieve unprecedented growth.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-primary p-1 sm:p-2">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary p-1 sm:p-2">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary p-1 sm:p-2">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start text-muted-foreground">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:contact@build2automate.online" className="text-xs sm:text-sm hover:text-primary transition-colors break-all">
                  contact@build2automate.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            © 2025 build2automate.online. All rights reserved. | Transforming businesses through AI automation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
