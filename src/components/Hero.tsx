
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
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Transform Your Business</span>
              <br />
              <span className="text-foreground">With AI Automation</span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Build2Automate delivers cutting-edge AI solutions that streamline your operations, 
              boost productivity, and drive unprecedented growth for your business.
            </p>
          </div>

          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 animate-glow"
            >
              Start Your Automation Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 animate-float">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Chatbots</h3>
              <p className="text-muted-foreground">24/7 customer support automation</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <Workflow className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
              <p className="text-muted-foreground">Streamline repetitive tasks</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom AI Solutions</h3>
              <p className="text-muted-foreground">Tailored to your unique needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
