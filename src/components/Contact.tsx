import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7903744430",
      href: "tel:+917903744430",
      color: "text-green-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "sandeeprnj23@gmail.com",
      href: "mailto:sandeeprnj23@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/sandeep-rnj/",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sandeep-rnj",
      href: "https://github.com/sandeep-rnj",
      color: "text-gray-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, UP, India",
      href: "#",
      color: "text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for a developer to join your team, interested in collaborating on a project, 
                  or just want to connect with a fellow developer, I'd love to hear from you. Let's build something amazing together!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card key={index} className="bg-card-gradient border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <a 
                          href={contact.href}
                          className="flex items-center gap-4 group"
                          {...(contact.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform`}>
                            <IconComponent className={`h-5 w-5 ${contact.color}`} />
                          </div>
                          <div>
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {contact.label}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {contact.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="lg:pl-8">
              <Card className="bg-hero-gradient text-white border-0 shadow-elegant">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Send className="h-12 w-12 mx-auto mb-4 opacity-90" />
                    <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
                    <p className="text-white/90 leading-relaxed">
                      I'm currently available for freelance work, internships, and full-time opportunities. 
                      Let's discuss how we can work together to bring your ideas to life.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg"
                      variant="outline"
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                      onClick={() => window.open('mailto:your-email@example.com', '_blank')}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Send me an Email
                    </Button>
                    
                    <Button 
                      size="lg"
                      variant="outline"
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                      onClick={() => window.open('tel:+917903744430', '_blank')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Me Now
                    </Button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      Usually responds within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Card className="bg-card-gradient border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">3+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="bg-card-gradient border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;