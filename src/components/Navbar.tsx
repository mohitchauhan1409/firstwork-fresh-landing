import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">F</div>
            <span className="text-xl font-medium">Firstwork</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="bg-[#F1F0FB] rounded-full px-6 py-2">
              <div className="flex space-x-12">
                <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
                <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
              </div>
            </div>
          </div>

          {/* Right Side Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#help" className="text-gray-600 hover:text-gray-900">Help</a>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-4">
            <div className="flex flex-col space-y-4">
              <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
              <a href="#help" className="text-gray-600 hover:text-gray-900">Help</a>
              <button className="flex items-center space-x-1 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <Button className="bg-primary text-white hover:bg-primary/90 w-full rounded-full">
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;