
import { Briefcase, Code, Globe, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "EISystems Technologies",
      role: "Python Developer",
      description: "Contributed to Python development projects with a focus on scalable solutions and debugging.",
      icon: Code,
      color: "from-green-500 to-emerald-600"
    },
    {
      company: "INFOTRIXS",
      role: "Web Developer",
      description: "Worked on both frontend and backend development. Built user interfaces and server-side components.",
      icon: Globe,
      color: "from-blue-500 to-cyan-600"
    },
    {
      company: "Varcoons Technology",
      role: "Software Developer",
      description: "Participated in various software projects and applied theoretical knowledge to real-world tasks.",
      icon: Briefcase,
      color: "from-purple-500 to-violet-600"
    },
    {
      company: "NxtWave Disruptive Technologies",
      role: "SDI",
      description: "Worked on frontend and backend technologies, enhancing practical skills through real-time collaboration.",
      icon: Users,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through various technology companies, gaining hands-on experience in different domains
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                    <p className="text-blue-600 font-semibold">{exp.role}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white p-6 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold text-blue-600">4+</span> Internship Experiences
            </p>
            <p className="text-sm text-gray-500">
              Across various technology domains and companies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
