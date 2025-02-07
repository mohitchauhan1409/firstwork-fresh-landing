import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-secondary via-white to-secondary">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              The Operating System for frontline workers
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Streamline hiring, automate onboarding, manage workforces and ensure financial well-being with our next-generation HR platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6">
                Book a Demo
              </Button>
              <Button variant="outline" className="border-2 text-lg px-8 py-6">
                <img src="/y-combinator.svg" alt="Y Combinator" className="w-6 h-6 mr-2" />
                Launch YC
                <span className="ml-2 bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm">129</span>
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary rounded-full filter blur-3xl"></div>
              <img
                src="/lovable-uploads/542d3248-aaac-4ba9-933c-a7901060eef8.png"
                alt="Frontline Workers"
                className="relative z-10 w-full max-w-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;