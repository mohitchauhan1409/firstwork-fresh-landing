import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Globe, ChevronDown, MessageSquare } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignIn = () => {
    window.location.href = "https://app.getalai.com/login";
  };

  const handleDiscordJoin = () => {
    window.location.href = "https://discord.com/invite/BnqaQk74hk";
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Updated to use PNG image from public folder */}
          <a href="/" className="flex items-center">
            <img 
              src="/alai_logo.png" 
              alt="AI Logo" 
              className="h-8 w-auto"
            />
          </a>

          {/* Right Side Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="https://discord.com/invite/BnqaQk74hk" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              onClick={(e) => {
                e.preventDefault();
                handleDiscordJoin();
              }}
            >
              <FaDiscord className="w-4 h-4" />
              <span>Join Discord</span>
            </a>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <Button 
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-6"
              onClick={handleSignIn}
            >
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
              <a 
                href="https://discord.com/invite/BnqaQk74hk" 
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault();
                  handleDiscordJoin();
                }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join Discord</span>
              </a>
              <button className="flex items-center space-x-1 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <Button 
                className="bg-primary text-white hover:bg-primary/90 w-full rounded-full"
                onClick={handleSignIn}
              >
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