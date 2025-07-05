
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      institution: "RV College of Engineering, Bangalore",
      degree: "M.Tech in Computer Science",
      period: "Sep 2023 - Aug 2025",
      grade: "CGPA: 8.3",
      current: true
    },
    {
      institution: "MVJ College of Engineering, Bangalore",
      degree: "BE in Computer Science",
      period: "Sep 2019 - Aug 2023",
      grade: "CGPA: 7.5",
      current: false
    },
    {
      institution: "Aryabhatta PU Science College, Dharwad",
      degree: "Class 12",
      period: "May 2017 - Apr 2019",
      grade: "Percentage: 87%",
      current: false
    },
    {
      institution: "Sri Sai Marathi High Primary School",
      degree: "Class 10",
      period: "Jun 2011 - Apr 2017",
      grade: "Percentage: 80%",
      current: false
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated Computer Science student with a passion for technology and innovation. 
            Currently pursuing M.Tech while gaining practical experience through various internships and projects.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Education</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${
                edu.current ? "ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-purple-50" : ""
              }`}>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <GraduationCap className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{edu.institution}</h4>
                      <p className="text-blue-600 font-medium">{edu.degree}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="font-semibold text-green-600">{edu.grade}</p>
                  {edu.current && (
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      Currently Pursuing
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate</h3>
            <p className="text-lg opacity-90">
              I'm always excited to work on challenging projects and contribute to innovative solutions. 
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
