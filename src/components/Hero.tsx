
import { ArrowDown, Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/lovable-uploads/5e317054-4044-44ae-8b3e-8522b8afe0f0.png';
    link.download = 'Pranav_R_Magadum_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-12">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-gradient"></div>
              <div className="absolute inset-1 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/5689c22f-ae7c-451b-b22c-2db53c72830c.png" 
                  alt="Pranav R. Magadum"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
              Pranav R. Magadum
            </span>
          </h1>
          
          <div className="space-y-4 mb-10">
            <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
              M.Tech Computer Science Student
            </p>
            <p className="text-xl md:text-2xl text-blue-600 font-medium">
              Software Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable solutions and exploring cutting-edge technologies in 
              <span className="text-blue-600 font-semibold"> AI</span>, 
              <span className="text-purple-600 font-semibold"> Web Development</span>, and 
              <span className="text-cyan-600 font-semibold"> Machine Learning</span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={downloadResume}
            >
              <Download className="mr-3 h-6 w-6" />
              Download Resume
            </Button>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:pm3073900@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">pm3073900@gmail.com</span>
              </a>
              <a href="tel:+919591812943" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors group">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">+91 9591812943</span>
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Bangalore, India</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="https://www.linkedin.com/in/pranav-magadum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl text-blue-600 hover:text-blue-700 transform hover:-translate-y-2 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/99016Pranav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-700 hover:text-gray-900 transform hover:-translate-y-2 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors p-2 rounded-full hover:bg-blue-50"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
