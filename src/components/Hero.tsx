import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, PlayCircle, Volume2, VolumeX } from "lucide-react";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleRedirect = () => {
    window.location.href = "https://getalai.com/";
  };

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-[#F8F9FF] via-white to-[#F8F9FF] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#D3E4FD]/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#E5DEFF]/30 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#FFDEE2]/30 rounded-full blur-3xl animate-float animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* YC Badge */}
          <div className="flex justify-center mb-6 animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-[#F6F6F6] rounded-full px-4 py-2">
              <div className="w-5 h-5 bg-[#FF5733] flex items-center justify-center rounded-sm">
                <span className="text-white text-xs font-bold">Y</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Backed by Y Combinator</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6 animate-fade-up tracking-tight">
            Transform your presentation
            <br />
            skills effortlessly{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">with AI</span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up animation-delay-100">
            Streamline hiring, automate onboarding, manage workforces and ensure financial well-being with our next-generation HR platform.
          </p>

          <div className="flex justify-center space-x-4 animate-fade-up animation-delay-200">
            <Button 
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-lg flex items-center space-x-2 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105"
              onClick={handleRedirect}
            >
              <Zap className="w-5 h-5" />
              <span>Join Now</span>
            </Button>
            <Button 
              variant="outline" 
              className="border-2 hover:bg-gray-50 rounded-full px-8 py-6 text-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105"
              onClick={handleRedirect}
            >
              <PlayCircle className="w-5 h-5" />
              <span>Book Demo</span>
            </Button>
          </div>

          {/* Enhanced Video Section */}
          <div className="mt-16 relative animate-fade-up animation-delay-300">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-100 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-100 rounded-full opacity-70"></div>
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-primary/30 rounded-full opacity-70"></div>
            <div className="absolute top-1/2 -left-3 w-6 h-6 bg-primary/30 rounded-full opacity-70"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/10 to-blue-500/20 rounded-3xl filter blur-3xl"></div>
            
            {/* Main video container */}
            <div 
              className="relative rounded-3xl border border-gray-100 shadow-xl overflow-hidden transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Video wrapper with fancy border */}
              <div className="bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 p-1 rounded-3xl">
                <div className="relative bg-white rounded-2xl overflow-hidden group">
                  {/* Video element */}
                  <video 
                    className="w-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                  >
                    <source src="https://kareai.blob.core.windows.net/images/f035852b-2688-4c02-9a73-80e40a4aed69.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video overlay controls */}
                  <div className={`absolute inset-0 bg-black/0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute bottom-4 right-4 flex space-x-3">
                      {/* Mute/unmute button */}
                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-gray-700" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-gray-700" />
                        )}
                      </button>
                      
                      {/* Play/demo button */}
                      <button 
                        className="px-4 py-2 rounded-full bg-primary text-white flex items-center space-x-2 shadow-lg hover:bg-primary/90 transition-all duration-300"
                        onClick={handleRedirect}
                      >
                        <PlayCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Watch Full Demo</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Floating labels/annotations */}
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                    <span className="text-xs font-medium text-primary">AI-Powered Features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;