
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, MessageSquare, Brain, Zap, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbots & Virtual Assistants",
      description: "Deploy intelligent chatbots that handle customer inquiries, provide 24/7 support, and qualify leads automatically.",
      features: ["Natural language processing", "Multi-platform integration", "Lead qualification", "Customer support automation"]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline your business operations with custom automation workflows that eliminate manual tasks.",
      features: ["Data entry automation", "Email marketing automation", "CRM integration", "Task scheduling"]
    },
    {
      icon: MessageSquare,
      title: "Content Generation",
      description: "Generate high-quality content at scale using advanced AI models for marketing, social media, and documentation.",
      features: ["Blog post generation", "Social media content", "Product descriptions", "Marketing copy"]
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Gain actionable insights from your data with intelligent analytics and predictive modeling.",
      features: ["Predictive analytics", "Customer behavior analysis", "Sales forecasting", "Performance insights"]
    },
    {
      icon: Zap,
      title: "Integration & APIs",
      description: "Connect your existing tools and platforms with seamless API integrations and custom connectors.",
      features: ["CRM integration", "Payment processing", "Third-party APIs", "Custom connectors"]
    },
    {
      icon: Settings,
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed specifically for your business needs and industry requirements.",
      features: ["Custom model training", "Industry-specific solutions", "Scalable architecture", "Ongoing support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive AI automation solutions to transform every aspect of your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
