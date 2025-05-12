import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="py-16 pt-24 md:min-h-screen px-6 md:px-20 bg-[#0d0d0d] text-white flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="flex flex-col gap-1 max-w-xl items-center text-center md:items-start md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-400">
  Hi, I’m
  <span className="block whitespace-nowrap text-5xl sm:text-7xl md:text-6xl lg:text-8xl font-extrabold leading-[1.1] text-center md:text-left text-white">
    Himanshu Parab
  </span>
</h1>

        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mt-0 text-center md:text-left">
          <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
            Data Scientist
          </span>
        </h2>

        <p className="text-gray-400 text-lg">
          Transforming data into intelligent solutions with machine learning and
          generative AI.
        </p>

        <div className="flex gap-4 mt-4">
          <a href="#projects">
            <Button className="bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold px-6 py-2 hover:opacity-90 cursor-pointer">
              View My Work
            </Button>
          </a>

          <a href="#contact">
            <Button className="bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold px-6 py-2 hover:opacity-90 cursor-pointer">
              Get In Touch
            </Button>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-[300px] md:w-[340px] lg:w-[400px] aspect-square rounded-full border-4 border-cyan-500 shadow-[0_0_60px_rgba(0,255,255,0.3)] overflow-hidden">
          <img
            src={profileImg}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
