import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-6 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Name and Year */}
        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition">
          <span className="text-white font-bold px-3 py-1 shadow-md text-base hover:text-cyan-400 transition">
            Himanshu Parab
          </span>
          <span className="text-gray-400 hover:text-cyan-400 transition">© {new Date().getFullYear()}</span>
        </div>

        {/* Right: Icons */}
        <div className="flex gap-6 text-xl text-white">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope className="hover:text-cyan-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
