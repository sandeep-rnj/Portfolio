import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and internships that have shaped my development journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Current Role */}
          <Card className="bg-card-gradient border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Associate Software Developer Intern
                  </CardTitle>
                  <p className="text-primary font-semibold text-lg mt-1">QlimberTech Consulting</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    <Calendar className="h-3 w-3 mr-1" />
                    July 2025 – Present
                  </Badge>
                  <Badge variant="outline" className="bg-muted text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    Hybrid
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Working on scalable frontend modules for internal tools and enhancing UX across admin and dashboard interfaces.
                  Collaborating with product and backend teams in an Agile environment.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">Developed reusable UI components with React, TypeScript & TailwindCSS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">Integrated REST APIs and implemented secure login & OTP flows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">Contributed to sprint planning, daily stand-ups, and client demos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "TailwindCSS", "Node.js", "REST API", "Git", "Agile"].map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Past Internship */}
          <Card className="bg-card-gradient border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Front-End Developer Intern
                  </CardTitle>
                  <p className="text-primary font-semibold text-lg mt-1">Edu-Course</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    <Calendar className="h-3 w-3 mr-1" />
                    Feb 2025 - April 2025
                  </Badge>
                  <Badge variant="outline" className="bg-muted text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    Remote
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Gained valuable hands-on experience in frontend development while working on real-world projects and collaborating with development teams.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">Analyzed complex problems and collaborated with cross-functional teams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">Delivered presentations to communicate project goals and progress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">Collaborated with fellow interns to enhance productivity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">Expanded technical skillset with modern frontend tools</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "CSS", "HTML", "Git", "Team Collaboration"].map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
