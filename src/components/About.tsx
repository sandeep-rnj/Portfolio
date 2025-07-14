import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, TestTube } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["JavaScript", "ReactJS", "Bootstrap", "TailwindCSS"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Backend", 
      icon: Database,
      skills: ["Java", "Node.js", "Express.js"],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: ["Git", "GitHub Actions", "Docker", "AWS Basics"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      title: "Testing & APIs",
      icon: TestTube,
      skills: ["REST APIs", "Firebase", "Xcode (Swift)", "Manual Testing", "Postman"],
      color: "bg-pink-500/10 text-pink-600 border-pink-200"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate software developer with a strong foundation in modern web technologies 
            and a drive for creating innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Completed my Bachelor of Technology in Computer Science Engineering at Galgotias University, 
              I have developed a comprehensive skill set in both frontend and backend development. My experience 
              spans from building dynamic React applications to creating scalable backend APIs with Node.js and Java.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about writing clean, efficient code and staying up-to-date with the latest 
              technologies. My projects demonstrate my ability to work with modern frameworks, databases, 
              and deployment strategies while maintaining a focus on user experience and performance.
            </p>
          </div>
          
          <Card className="bg-card-gradient border-0 shadow-soft">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Quick Facts</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Based in Greater Noida, UP
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  B.Tech CSE Student (2021-2025)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Frontend Developer Intern Experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Multiple Certifications in Development
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-center text-foreground mb-12">Technical Skills</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="bg-card-gradient border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{category.title}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="outline"
                          className={`${category.color} transition-all hover:scale-105`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;