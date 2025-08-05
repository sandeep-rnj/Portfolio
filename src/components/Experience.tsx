import { Calendar, MapPin, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "Associate Software Developer Intern",
    company: "Qlimber Consulting (Hybrid)",
    duration: "July 2025 - Present",
    location: "Remote",
    description:
      "Contributing to real-world SaaS applications using modern frontend stacks. Collaborating with mentors and teams on full-feature delivery pipelines.",
    responsibilities: [
      "Building and maintaining React-based UI components for web apps",
      "Collaborating in Agile workflows: code reviews, sprints, and daily standups",
      "Debugging and optimizing performance bottlenecks in frontend",
      "Using Git, REST APIs, and Storybook in a production-like environment",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub",
      "REST API",
      "Agile/Scrum",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "Edu-Course",
    duration: "Feb 2025 - April 2025",
    location: "Remote",
    description:
      "Gained valuable hands-on experience in frontend development while working on real-world projects and collaborating with development teams.",
    responsibilities: [
      "Analyzed complex problems and collaborated with cross-functional teams",
      "Improved communication during presentations of technical solutions",
      "Collaborated with fellow interns on UI-focused projects",
      "Enhanced frontend skills and familiarity with team tools",
    ],
    technologies: ["React", "JavaScript", "CSS", "HTML", "Git", "Team Collaboration"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and internships that have shaped my development journey.
          </p>
        </div>

        <div className="grid gap-10 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-0 backdrop-blur-md bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                      <Building className="h-5 w-5 text-indigo-400" />
                      {exp.role}
                    </CardTitle>
                    <p className="text-indigo-300 font-semibold text-lg mt-1">{exp.company}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <Badge
                      variant="outline"
                      className="bg-indigo-400/10 text-indigo-300 border-indigo-400/20"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.duration}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-muted text-muted-foreground border border-muted-foreground/10"
                    >
                      <MapPin className="h-3 w-3 mr-1" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0 text-muted-foreground">
                <p className="mb-4">{exp.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Key Responsibilities:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-white/10 text-indigo-200 border-indigo-300/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
