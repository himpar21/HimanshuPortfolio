import { Button } from "@/components/ui/button";
import { FaRobot, FaDatabase, FaFileAlt, FaMagic } from "react-icons/fa";
import profile from "@/assets/profile.jpg"; // replace with your real image
import resumePDF from "@/assets/resume.pdf";
import { motion } from "framer-motion";
const features = [
  { icon: <FaRobot size={24} />, title: "ML Models", subtitle: "30+ Deployed" },
  {
    icon: <FaDatabase size={24} />,
    title: "Data Pipelines",
    subtitle: "10+ Built",
  },
  {
    icon: <FaFileAlt size={24} />,
    title: "Certifications",
    subtitle: "10+ Earned",
  },
  { icon: <FaMagic size={24} />, title: "GenAI Apps", subtitle: "10+ Created" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 pt-10 md:pt-20 px-6 md:px-20 bg-[#0d0d0d] text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          About Me
        </h2>
        <p className="mt-2 text-gray-400 max-w-3xl mx-auto">
          I'm a data scientist and AI/ML engineer passionate about solving
          complex problems with cutting-edge technology.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={profile}
            alt="About"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Bio */}



<div className="w-full md:w-1/2 space-y-6">
  {[
    `I’m an inquisitive mind driven by a deep curiosity for how machines learn and how intelligence can be engineered. As a computer science student with a passion for AI, I find joy in transforming complex problems into creative solutions—whether it’s through algorithms, data models, or a well-structured line of code.`,
    `My interests span across machine learning, deep learning, generative AI, and natural language processing. I love exploring how these technologies can be applied to real-world challenges, and I spend a lot of time experimenting with new ideas, reading research, and building things that excite me.`,
    `Beyond the code, I value thoughtful design, lifelong learning, and working on projects that blend technical depth with real impact. Whether it's a model that understands language or a tool that makes data more meaningful, I aim to build with purpose and curiosity.`,
  ].map((text, idx) => (
    <motion.p
      key={idx}
      className="text-gray-300 leading-relaxed text-center md:text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      {text}
    </motion.p>
  ))}



          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map(({ icon, title, subtitle }) => (
              <div
                key={title}
                className="bg-[#111] border border-[#222] p-4 rounded-lg flex flex-col items-center text-center"
              >
                <div className="text-cyan-400 mb-2">{icon}</div>
                <h4 className="text-white font-medium">{title}</h4>
                <p className="text-gray-400 text-sm">{subtitle}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              <Button className="px-30 py-6 bg-gradient-to-r from-green-400 to-cyan-400 text-black text-base font-semibold border border-emerald-500 rounded-full hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer">
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
