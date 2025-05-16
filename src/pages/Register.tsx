
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userId: "",
    password: "",
    confirmPassword: "",
  });
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (Object.values(formData).some(val => val === "")) {
      toast({
        title: "Error",
        description: "All fields are required",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registration Successful",
      description: "This is a demo. Registration would happen here.",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6">
        <div className="text-2xl font-bold text-white">ORBITAL</div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <div className="relative flex-grow flex justify-center items-center bg-gradient-to-br from-cyan-900/20 via-black to-pink-900/20 px-4 py-10">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-light text-orange-400 text-center mb-8">REGISTER</h1>
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="fullName" className="w-36 text-right mr-4">FULL NAME</label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-white text-black"
                  />
                </div>
                
                <div className="flex items-center">
                  <label htmlFor="email" className="w-36 text-right mr-4">EMAIL</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white text-black"
                  />
                </div>
                
                <div className="flex items-center">
                  <label htmlFor="userId" className="w-36 text-right mr-4">DESIRED USER ID</label>
                  <Input
                    id="userId"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    className="bg-white text-black"
                  />
                </div>
                
                <div className="flex items-center">
                  <label htmlFor="password" className="w-36 text-right mr-4">PASSWORD</label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-white text-black"
                  />
                </div>
                
                <div className="flex items-center">
                  <label htmlFor="confirmPassword" className="w-36 text-right mr-4">CONFIRM PASSWORD</label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="bg-white text-black"
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-transparent hover:bg-orange-900/30 text-orange-400 border-none"
                  >
                    REGISTER
                  </Button>
                </div>
                
                <div className="text-center text-xs text-gray-400 pt-2">
                  Already have an account?{" "}
                  <Link to="/" className="text-orange-400 hover:underline">
                    Login here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 p-6">
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center mb-6 text-xs">
          <Link to="/" className="hover:text-orange-400 transition-colors">HOME</Link>
          <span>/</span>
          <Link to="/process" className="hover:text-orange-400 transition-colors">PROCESS</Link>
          <span>/</span>
          <Link to="/work" className="hover:text-orange-400 transition-colors">WORK</Link>
          <span>/</span>
          <Link to="/faqs" className="hover:text-orange-400 transition-colors">FAQS</Link>
          <span>/</span>
          <Link to="/webflow" className="hover:text-orange-400 transition-colors">WEBFLOW</Link>
          <span>/</span>
          <Link to="/privacy" className="hover:text-orange-400 transition-colors">PRIVACY</Link>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {currentYear} Orbital. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">San Francisco · Los Angeles · Seattle</p>
          <div className="mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
