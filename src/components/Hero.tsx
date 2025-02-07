import { Button } from "@/components/ui/button";
import { Zap, MoreVertical } from "lucide-react";

const Hero = () => {
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
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-lg p-8">
              {/* Dashboard Preview */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-semibold">Contracts Status Overview</h2>
                  <Button variant="outline" className="rounded-lg">
                    New Workflow
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Marketing Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium mb-1">Marketing</h3>
                        <p className="text-sm text-gray-500">Documents</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-3xl font-bold mb-4">120+</div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">+12 others</span>
                    </div>
                  </div>

                  {/* Business Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium mb-1">Business</h3>
                        <p className="text-sm text-gray-500">Documents</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-3xl font-bold mb-4">56+</div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">+12 others</span>
                    </div>
                  </div>

                  {/* Creative Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium mb-1">Creative</h3>
                        <p className="text-sm text-gray-500">Documents</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-3xl font-bold mb-4">99+</div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">+12 others</span>
                    </div>
                  </div>

                  {/* IT Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium mb-1">IT</h3>
                        <p className="text-sm text-gray-500">Documents</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-3xl font-bold mb-4">114+</div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">+12 others</span>
                    </div>
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