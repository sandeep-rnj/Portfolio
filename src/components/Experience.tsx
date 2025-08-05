import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  return (
    <section className="w-full px-4 md:px-12 py-8 space-y-6">
      {/* Qlimber Experience */}
      <Card className="bg-white/20 backdrop-blur-lg shadow-xl border border-white/30 rounded-2xl">
        <CardContent className="p-6 text-white">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-white">Associate Software Developer Intern</h3>
            <div className="flex gap-2 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">🗓 July 2025 - Present</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">🌐 Hybrid</Badge>
            </div>
          </div>
          <p className="text-indigo-200 font-medium">Qlimber Consulting</p>
          <p className="text-white mt-2 mb-3">
            Contributing to real-world SaaS applications using modern frontend stacks. Collaborating with mentors and teams on full-feature delivery pipelines.
          </p>
          <ul className="list-disc list-inside text-indigo-100 space-y-1">
            <li>Building and maintaining React-based UI components for web apps</li>
            <li>Collaborating in Agile workflows: code reviews, sprints, and daily standups</li>
            <li>Debugging and optimizing performance bottlenecks in frontend</li>
            <li>Using Git, REST APIs, and Storybook in a production-like environment</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {["React.js", "TypeScript", "Tailwind CSS", "GitHub", "REST API", "Agile/Scrum"].map((tech) => (
              <Badge key={tech} variant="outline" className="border-white/30 text-white">{tech}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edu-Course Internship */}
      <Card className="bg-white/20 backdrop-blur-lg shadow-xl border border-white/30 rounded-2xl">
        <CardContent className="p-6 text-white">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-white">Front-End Developer Intern</h3>
            <div className="flex gap-2 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">🗓 Feb 2025 - April 2025</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">🌐 Remote</Badge>
            </div>
          </div>
          <p className="text-indigo-200 font-medium">Edu-Course</p>
          <p className="text-white mt-2 mb-3">
            Gained valuable hands-on experience in frontend development while working on real-world projects and collaborating with development teams.
          </p>
          <ul className="list-disc list-inside text-indigo-100 space-y-1">
            <li>Analyzed complex problems and collaborated with cross-functional teams</li>
            <li>Improved communication during presentations of technical solutions</li>
            <li>Collaborated with fellow interns on UI-focused projects</li>
            <li>Enhanced frontend skills and familiarity with team tools</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "JavaScript", "CSS", "HTML", "Git", "Team Collaboration"].map((tech) => (
              <Badge key={tech} variant="outline" className="border-white/30 text-white">{tech}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Experience;
