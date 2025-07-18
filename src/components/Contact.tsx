
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI automation? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Whether you're looking to automate customer service, streamline operations, or implement custom AI solutions, 
                we're here to help. Our team of experts will work with you to understand your unique challenges and 
                develop a tailored automation strategy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email Us</h4>
                <a
                  href="mailto:contact@build2automate.online"
                  className="text-primary hover:text-primary/80 transition-colors text-base sm:text-lg font-medium break-all sm:break-normal"
                >
                  contact@build2automate.online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
