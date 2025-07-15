
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About Build2Automate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a fresh AI automation agency focused on bringing the latest AI technologies to businesses ready for transformation. 
            Our passion is helping companies discover the potential of AI automation to streamline operations and unlock new growth opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/30 backdrop-blur-sm border-border/50 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
