import { Mail, Phone, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:your-email@example.com", label: "Email" },
    { icon: Phone, href: "tel:+917903744430", label: "Phone" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Name and Title */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Sandeep Ranjan</h3>
            <p className="text-muted-foreground">Software Developer | Full Stack Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                  {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright and Credits */}
          <div className="pt-6 border-t border-border space-y-2">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & Tailwind CSS
            </p>
            <p className="text-xs text-muted-foreground">
              © {2025} Sandeep Ranjan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
