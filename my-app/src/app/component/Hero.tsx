import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Birina Shrestha
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200 text-gray-800">
          Graphic Designer & Web Developer
        </p>
        <Button
          size="lg"
          className="animate-fade-in-up animation-delay-400 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
        >
          View My Work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
