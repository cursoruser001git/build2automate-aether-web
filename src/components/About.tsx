
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision-Driven",
      description: "We deliver targeted AI solutions that address your specific business challenges with surgical precision."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to understand and exceed your expectations."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of the curve, implementing cutting-edge AI technologies to give you a competitive advantage."
    },
    {
      icon: Rocket,
      title: "Results-Oriented",
      description: "We measure our success by the tangible improvements we bring to your business operations and growth."
    }
  ];

  const stats = [
    { number: "∞", label: "Possibilities Ahead" },
    { number: "Fresh", label: "Innovative Approach" },
    { number: "100%", label: "Dedication" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">About Build2Automate</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a fresh AI automation agency focused on bringing the latest AI technologies to businesses ready for transformation. 
            Our passion is helping companies discover the potential of AI automation to streamline operations and unlock new growth opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16 px-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/30 backdrop-blur-sm border-border/50 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gradient">Our Mission</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                "To make AI automation accessible and practical for businesses ready to embrace the future. 
                We're committed to learning, growing, and delivering solutions that create real value, 
                helping companies take their first steps into intelligent automation."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
