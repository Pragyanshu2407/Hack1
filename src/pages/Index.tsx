
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId || !password) {
      toast({
        title: "Error",
        description: "Please enter both user ID and password",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Login Attempt",
      description: "This is a demo. Authentication would happen here.",
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
        {/* Login Section */}
        <div className="relative flex-grow flex justify-center items-center bg-gradient-to-br from-cyan-900/20 via-black to-pink-900/20 px-4">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-light text-orange-400 text-center mb-8">LOGIN</h1>
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="flex items-center">
                  <label htmlFor="userId" className="w-28 text-right mr-4">USER ID</label>
                  <Input
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="bg-white text-black"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="password" className="w-28 text-right mr-4">PASSWORD</label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white text-black"
                  />
                </div>
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-transparent hover:bg-orange-900/30 text-orange-400 border-none"
                  >
                    LOGIN
                  </Button>
                </div>
                <div className="text-right text-xs text-gray-400">
                  <Link to="/register" className="hover:text-orange-400 transition-colors">REGISTER AS NEW</Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 px-6 py-20 bg-black">
          <div className="space-y-6">
            <div className="flex gap-2">
              <div className="text-orange-400 font-light">
                M<br />I<br />S<br />S<br />I<br />O<br />N
              </div>
              <h2 className="text-4xl text-orange-400 font-light mb-6">VISION</h2>
            </div>
            <p className="text-sm leading-relaxed">
              AT ORBITAL, WE ENVISION A WORLD WHERE EVERY LEARNER NAVIGATES THEIR UNIQUE 
              EDUCATIONAL JOURNEY WITH CONFIDENCE. OUR MISSION IS TO EMPOWER INDIVIDUALS 
              THROUGH PERSONALIZED LEARNING RECOMMENDATIONS—OFFERING CURATED 
              COURSES AND ACTIVITIES BASED ON YOUR INTERESTS, GOALS, AND SKILLS. WHETHER 
              YOU'RE EXPLORING NEW HORIZONS OR AIMING HIGHER IN YOUR FIELD, ORBITAL HELPS YOU STAY 
              ON TRACK, KEEP LEARNING, AND REACH YOUR ORBIT OF SUCCESS.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-2">
              <div className="text-orange-400 font-light">
                V<br />I<br />S<br />I<br />O<br />N
              </div>
              <h2 className="text-4xl text-orange-400 font-light mb-6">MISSION</h2>
            </div>
            <p className="text-sm leading-relaxed">
              AT ORBITAL, OUR MISSION IS TO REVOLUTIONIZE THE WAY PEOPLE LEARN BY DELIVERING 
              INTELLIGENT, PERSONALIZED RECOMMENDATIONS FOR COURSES AND ACTIVITIES. WE AIM TO 
              BRIDGE THE GAP BETWEEN CURIOSITY AND CAPABILITY, HELPING USERS IDENTIFY THEIR STRENGTHS, 
              EXPLORE THEIR INTERESTS, AND FOLLOW LEARNING PATHS THAT ALIGN WITH THEIR GOALS. 
              THROUGH SMART TECHNOLOGY AND A LEARNER-FIRST APPROACH, ORBITAL EMPOWERS INDIVIDUALS 
              TO GROW WITH PURPOSE AND DIRECTION.
            </p>
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

export default Index;
