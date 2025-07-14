import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Phone, Linkedin, Github } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img 
              src={profilePlaceholder}
              alt="Professional Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-elegant animate-float"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Sandeep Ranjan
          </h1>
          
          <p className="text-xl md:text-2xl mb-2 text-primary-glow font-medium">
            Software Developer
          </p>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
            Software developer with hands-on experience in frontend and backend development using ReactJS, Node.js, Java, and MongoDB. 
            Building responsive UIs, REST APIs, and deploying scalable web applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-elegant"
              onClick={() => scrollToSection('projects')}
            >
              <Download className="mr-2 h-4 w-4" />
              View My Work
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="tel:7903744430" className="text-white/80 hover:text-primary-glow transition-all hover:scale-110">
              <Phone className="h-6 w-6" />
            </a>
            <a href="mailto:your-email@example.com" className="text-white/80 hover:text-primary-glow transition-all hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-white/80 hover:text-primary-glow transition-all hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-white/80 hover:text-primary-glow transition-all hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;