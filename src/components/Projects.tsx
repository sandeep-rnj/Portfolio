import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Chrome, Film } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Movies-Hub",
      description: "Built a dynamic movie web app with real-time search, trailers, and reviews using the TMDb API...",
      icon: Film,
      technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript", "TMDb API"],
      features: [
        "Real-time movie search functionality",
        "Trailer integration and reviews system",
        "Scalable backend with MongoDB",
        "CI/CD deployment with GitHub Pages"
      ],
      liveUrl: "https://h1ghgtvxt9z3wpjw1uvvsa.on.drv.tw/www.Movie-HUB.com/Public/",
      githubUrl: "https://github.com/sandeep-rnj/Movies-HUB",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Smart-Study (iOS App)",
      description: "Created an intuitive iOS app for study planning with customizable schedules and real-time progress tracking...",
      icon: Smartphone,
      technologies: ["Swift", "Firebase", "Xcode"],
      features: [
        "Customizable study schedules and plans",
        "Real-time progress tracking",
        "Firebase integration for data sync",
        "Push notifications and reminders"
      ],
      githubUrl: "https://github.com/sandeep-rnj/Smart-Study",
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      title: "Online Kitchen",
      description: "Online Kitchen is a sleek and responsive frontend website for a modern online food ordering platform...",
      icon: Chrome,
      technologies: ["JavaScript", "HTML5", "CSS3", "React", "Tailwind CSS"],
      features: [
        "Interactive Menu – Visually appealing and categorized food items",
        "Cart View – Add, view, and manage selected dishes before checkout",
        "Request a Dish – Users can submit a form to request custom dishes",
        "Responsive Design – Optimized for desktops, tablets, and mobile devices",
        "Modal Popups – Smooth modals for dish details or user input"
      ],
      liveUrl: "https://kitchenplace.netlify.app/",
      githubUrl: "https://github.com/sandeep-rnj/online-kitchen",
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development skills through real-world projects that demonstrate 
            my expertise in full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={index}
                className="bg-card-gradient border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className={`${project.color} text-xs transition-all hover:scale-105`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className={project.liveUrl ? "flex-1" : "w-full"}
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
