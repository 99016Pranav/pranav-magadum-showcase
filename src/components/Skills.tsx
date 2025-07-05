
import { Code, Database, Globe, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "SQL", "Python"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Frameworks & Stacks",
      icon: Globe,
      skills: ["MERN Stack", "React", "Node.js", "Express", "MongoDB"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Tools & IDEs",
      icon: Wrench,
      skills: ["VS Code", "R-Studio", "Git", "GitHub"],
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Specializations",
      icon: Database,
      skills: ["Machine Learning", "Deep Learning", "Web Development", "Data Analysis"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with to build innovative solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 font-medium rounded-lg border border-blue-100 hover:border-blue-300 transition-colors duration-200 hover:scale-105 transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Programming Languages</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Major Projects</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">4+</div>
              <div className="text-gray-600">Internships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
