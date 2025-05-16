
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-light text-orange-400 mb-6">Page Not Found</h1>
      <p className="mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="bg-transparent hover:bg-orange-900/30 text-orange-400 border border-orange-400">
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
