
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "pm3073900@gmail.com",
      href: "mailto:pm3073900@gmail.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9591812943",
      href: "tel:+919591812943",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborations, or just have a chat about technology? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{method.label}</h3>
                <a 
                  href={method.href} 
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  {method.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-lg opacity-90 mb-6">
              Whether you have a project in mind, need technical consultation, or want to explore collaboration opportunities, 
              I'm here to help bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <a href="mailto:pm3073900@gmail.com">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="https://www.linkedin.com/in/pranav-magadum" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2024 Pranav R. Magadum. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
