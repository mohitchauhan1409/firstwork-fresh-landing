import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-[#F8F9FF] via-white to-[#F8F9FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6 animate-fade-up tracking-tight">
            Empower Your HR Management
            <br />
            With Real-Time{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Insights</span>
              <svg className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-primary/10 w-24 h-24" viewBox="0 0 100 100">
                <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="none" stroke="currentColor" strokeWidth="8" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up animation-delay-100">
            Streamline Employee Tracking, Optimize Performance Metrics, And
            Make Data-Driven Decisions With Our Comprehensive HR Dashboard.
          </p>

          <div className="flex justify-center space-x-4 animate-fade-up animation-delay-200">
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-lg flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Join Now</span>
            </Button>
          </div>

          <div className="mt-20 relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl filter blur-3xl"></div>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-lg p-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Dashboard Preview Elements */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="h-40 bg-gray-50 rounded-lg mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-50 rounded w-1/2"></div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="h-40 bg-gray-50 rounded-lg mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-50 rounded w-1/2"></div>
                </div>
                <div className="hidden lg:block bg-white rounded-xl p-6 shadow-sm">
                  <div className="h-40 bg-gray-50 rounded-lg mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-50 rounded w-1/2"></div>
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