
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Bot, Workflow } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden pt-16 sm:pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              <span className="text-foreground">Transform Your Business</span>
              <br />
              <span className="text-gradient">With AI Automation</span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Build2Automate delivers cutting-edge AI solutions that streamline your operations, 
              boost productivity, and drive unprecedented growth for your business.
            </p>
          </div>

          <div className="animate-fade-in flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 animate-glow text-sm sm:text-base"
            >
              <span className="sm:hidden">Start Automation</span>
              <span className="hidden sm:inline">Start Your Automation Journey</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              <span className="sm:hidden">Our Services</span>
              <span className="hidden sm:inline">Explore Our Services</span>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="animate-fade-in grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-16 px-4" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 animate-float">
                <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">AI Chatbots</h3>
              <p className="text-sm sm:text-base text-muted-foreground">24/7 customer support automation</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <Workflow className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Process Automation</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Streamline repetitive tasks</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Custom AI Solutions</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Tailored to your unique needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
