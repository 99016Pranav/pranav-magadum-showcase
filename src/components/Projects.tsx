import { ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Led the development of a full-stack e-commerce application with secure payment integration and seamless UI for optimized product listings and a user-friendly shopping experience.",
      github: "https://github.com/99016Pranav/E-Coomerce-Platform.git",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      featured: true,
      tags: ["Full-Stack", "E-commerce", "Payment Integration"]
    },
    {
      title: "Autism Spectrum Disorder (ASD) Detection",
      description: "Built a machine learning-based system to predict ASD using classification algorithms and behavioral data analysis. Focused on early detection to support improved intervention strategies.",
      github: "https://github.com/99016Pranav/Autism-Spectrum-Disorder_ASD",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      featured: true,
      tags: ["Machine Learning", "Healthcare", "Classification"]
    },
    {
      title: "Crop Disease Detection",
      description: "Developed a crop disease detection system using image classification and deep learning techniques. Helps farmers identify crop diseases from leaf images and provides treatment suggestions to improve agricultural productivity.",
      github: "https://github.com/99016Pranav/Aarogya_Krishi.git",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      featured: true,
      tags: ["Deep Learning", "Agriculture", "Image Classification"]
    },
    {
      title: "Early Heart Disease Detection from Retinal Images",
      description: "Created a deep learning model with a web interface that allows healthcare professionals to detect early signs of heart disease from retinal scans.",
      github: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      featured: false,
      tags: ["Deep Learning", "Healthcare", "Medical Imaging"]
    },
    {
      title: "Text Summarization",
      description: "Developed a system to condense large texts while preserving key ideas and main information.",
      github: "#",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      featured: false,
      tags: ["NLP", "Text Processing", "Machine Learning"]
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects spanning machine learning, web development, and innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <h3 className="text-2xl font-bold text-gray-800">Featured Work</h3>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Additional Projects</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>
                    <h4 className="text-lg font-bold text-gray-800">{project.title}</h4>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Interested in collaboration?</h3>
            <p className="opacity-90">Let's discuss how we can work together on your next project!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
