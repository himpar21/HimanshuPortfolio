import { FaGithub } from "react-icons/fa";
import dataImg from "@/assets/data.jpg";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";
const projects = [
  {
    title: "Generative AI Assistant",
    description:
      "A domain-specific LLM assistant fine-tuned for medical research with RAG capabilities.",
    tags: ["PyTorch", "Transformers", "LangChain"],
    repo: "#",
    link: "#",
    image: dataImg,
  },
  {
    title: "Computer Vision Pipeline",
    description:
      "Real-time object detection and tracking system for manufacturing quality control.",
    tags: ["TensorFlow", "OpenCV", "YOLO"],
    repo: "#",
    link: "#",
    image: dataImg,
  },
  {
    title: "Predictive Analytics Platform",
    description:
      "Time-series forecasting system for financial markets with anomaly detection.",
    tags: ["Python", "Pandas", "Prophet"],
    repo: "#",
    link: "#",
    image: dataImg,
  },
  {
    title: "Deep Learning for Healthcare",
    description:
      "AI model for predicting health risks using medical imaging data.",
    tags: ["TensorFlow", "Keras", "OpenCV"],
    repo: "#",
    link: "#",
    image: dataImg,
  },
  {
    title: "Sentiment Analysis Engine",
    description: "NLP-based sentiment analysis for social media posts.",
    tags: ["Python", "NLTK", "Transformers"],
    repo: "#",
    link: "#",
    image: dataImg,
  },
  {
    title: "Time Series Prediction",
    description: "ARIMA-based model for forecasting stock market trends.",
    tags: ["Python", "Pandas", "ARIMA"],
    repo: "#",
    link: "#",
    image: dataImg,
  },
  {
    title: "AI-Based Chatbot",
    description: "Chatbot powered by GPT for automated customer support.",
    tags: ["Python", "OpenAI", "Flask"],
    repo: "#",
    link: "#",
    image: dataImg,
  },
  {
    title: "Sales Forecasting",
    description: "Predictive analytics for forecasting sales trends.",
    tags: ["Python", "Pandas", "Scikit-Learn"],
    repo: "#",
    link: "#",
    image: dataImg,
  },
  {
    title: "Recommendation System",
    description:
      "Collaborative filtering-based recommendation engine for products.",
    tags: ["Python", "Pandas", "Scikit-Learn"],
    repo: "#",
    link: "#",
    image: dataImg,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 px-4 md:px-20 bg-[#0d0d0d] text-white"
    >
      <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2">
        Featured Projects
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Showcasing my work in AI, machine learning, and data science.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="p-6 bg-[#111111] rounded-xl border border-neutral-800 overflow-hidden shadow-md hover:shadow-cyan-800/20 transition-shadow flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              {/* Animated Title + Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-white hover:text-cyan-400" />
                  </a>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>
              </motion.div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-emerald-500 text-white rounded-full text-sm px-4 py-2 w-full text-center flex justify-center items-center gap-2 hover:bg-emerald-800"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Separate View All Projects Button */}
      <div className="mt-12 flex justify-center">
        <Drawer>
          <DrawerTrigger>
            <button className="px-20 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold border border-emerald-500 rounded-full hover:opacity-90 transition-all flex items-center gap-2">
              {/* <button className="bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold px-6 py-2 hover:opacity-90"> */}
              View All Projects
            </button>
          </DrawerTrigger>

          <DrawerContent className="bg-[#111111] text-white p-6 rounded-xl max-w-screen w-full h-[90vh] flex flex-col overflow-hidden [--vaul-drawer-handle-display:none]">
            <DrawerTitle className="text-3xl font-bold mt-6 mb-1 text-center text-emerald-500">
              All Projects
            </DrawerTitle>
            <DrawerDescription className="text-gray-400 mb-3 text-center text-xl">
              Here are more details about all my featured projects.
            </DrawerDescription>

            {/* 3x3 Grid of Cards */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-[#111111] rounded-xl border border-neutral-800 overflow-hidden shadow-md hover:shadow-cyan-800/20 transition-shadow flex flex-col scale-97"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-58 object-cover rounded-xl p-6"
                    />
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-semibold">
                            {project.title}
                          </h3>
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="text-white hover:text-cyan-400" />
                          </a>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-emerald-500 text-white rounded-full text-sm px-4 py-2 w-full text-center flex justify-center items-center gap-2 hover:bg-emerald-800"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
}
