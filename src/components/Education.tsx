import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      institution: "Galgotias University",
      location: "Greater Noida, UP",
      period: "2021 - 2025",
      status: "Completed",
      description: "Comprehensive program covering software engineering principles, data structures, algorithms, and modern development technologies.",
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      degree: "Higher Secondary (12th Grade)",
      field: "Science Stream",
      institution: "P.C. High School",
      location: "Samastipur, Bihar",
      period: "2019 - 2021",
      status: "Completed",
      description: "Focused on Mathematics, Physics, and Chemistry with strong analytical and problem-solving foundation.",
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      degree: "Secondary School (10th Grade)",
      field: "General Studies",
      institution: "North Point Children School",
      location: "Muzaffarpur, Bihar",
      period: "2019",
      status: "Completed",
      description: "Strong foundation in core subjects with emphasis on mathematics and science.",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    }
  ];

  const certifications = [
    {
      title: "Java Programming: Beginner to Master",
      provider: "Udemy",
      icon: "☕"
    },
    {
      title: "The Complete Front-End Web Development",
      provider: "Udemy", 
      icon: "🌐"
    },
    {
      title: "MERN Stack Technology",
      provider: "EduCourse",
      icon: "⚛️"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning through certifications 
            that have built my technical foundation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card key={index} className="bg-card-gradient border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-primary font-semibold">{edu.field}</p>
                        <p className="text-lg font-medium text-foreground mt-1">{edu.institution}</p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Badge variant="outline" className={edu.color}>
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.period}
                        </Badge>
                        <Badge variant="outline" className="bg-muted text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {edu.location}
                        </Badge>
                        <Badge variant="outline" className="bg-accent text-accent-foreground">
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card-gradient border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl mb-4">{cert.icon}</div>
                      <h4 className="font-semibold text-foreground mb-2 leading-tight">
                        {cert.title}
                      </h4>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {cert.provider}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;