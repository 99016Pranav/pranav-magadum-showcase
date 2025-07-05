
import { ArrowDown, Download, Mail, Phone } from "lucide-react";
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/5689c22f-ae7c-451b-b22c-2db53c72830c.png" 
                alt="Pranav R. Magadum"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Pranav R. Magadum
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            M.Tech Computer Science Student & Software Developer
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Passionate about building scalable solutions and exploring cutting-edge technologies in AI, Web Development, and Machine Learning
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <a href="mailto:pm3073900@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="mr-2 h-5 w-5" />
                pm3073900@gmail.com
              </a>
              <a href="tel:+919591812943" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                +91 9591812943
              </a>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
