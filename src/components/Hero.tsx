import { Button } from "@/components/ui/button";
import { Zap, MoreVertical, PlayCircle, TrendingUp, Users, Calendar } from "lucide-react";

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
            Streamline hiring, automate onboarding, manage workforces and ensure financial well-being with our next-generation HR platform.
          </p>

          <div className="flex justify-center space-x-4 animate-fade-up animation-delay-200">
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-lg flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Join Now</span>
            </Button>
            <Button variant="outline" className="border-2 hover:bg-gray-50 rounded-full px-8 py-6 text-lg flex items-center space-x-2">
              <PlayCircle className="w-5 h-5" />
              <span>Book Demo</span>
            </Button>
          </div>

          <div className="mt-20 relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl filter blur-3xl"></div>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-lg p-8">
              {/* Dashboard Preview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold">Contracts Status Overview</h2>
                    <p className="text-gray-500">Track your department's document workflow</p>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" className="rounded-lg">
                      <Calendar className="w-4 h-4 mr-2" />
                      Last 30 days
                    </Button>
                    <Button className="rounded-lg">
                      New Workflow
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Marketing Card */}
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium mb-1">Marketing</h3>
                        <div className="flex items-center text-blue-600">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span className="text-sm">+12.5%</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-3xl font-bold mb-4">120+</div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                      <img src="https://images.unsplash.com/photo-1738362542910-b06a4f00f024?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                      </div>
                      <span className="text-sm text-gray-500">+9 others</span>
                    </div>
                  </div>

                  {/* Business Card */}
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm border border-purple-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium mb-1">Business</h3>
                        <div className="flex items-center text-purple-600">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span className="text-sm">+8.2%</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-3xl font-bold mb-4">56+</div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                      <img src="https://images.unsplash.com/photo-1738362542910-b06a4f00f024?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                      </div>
                      <span className="text-sm text-gray-500">+8 others</span>
                    </div>
                  </div>

                  {/* Creative Card */}
                  <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm border border-pink-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium mb-1">Creative</h3>
                        <div className="flex items-center text-pink-600">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span className="text-sm">+15.7%</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-3xl font-bold mb-4">99+</div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                      <img src="https://images.unsplash.com/photo-1738362542910-b06a4f00f024?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                      </div>
                      <span className="text-sm text-gray-500">+5 others</span>
                    </div>
                  </div>

                  {/* IT Card */}
                  <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-sm border border-green-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium mb-1">IT</h3>
                        <div className="flex items-center text-green-600">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span className="text-sm">+10.3%</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-3xl font-bold mb-4">114+</div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <img src="https://images.unsplash.com/photo-1738362542910-b06a4f00f024?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                      </div>
                      <span className="text-sm text-gray-500">+8 others</span>
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