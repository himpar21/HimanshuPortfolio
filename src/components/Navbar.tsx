// import { Button } from "@/components/ui/button";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="w-full px-6 py-4 flex justify-between items-center bg-[#0d0d0d] text-white fixed top-0 z-50 shadow-md">
//       {/* Left: Logo */}
//       <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
//         Himanshu Parab
//       </div>

//       {/* Center: Navigation Links */}
//       <div className="hidden md:flex gap-10 text-2base font-medium">
//         {["About", "Projects", "Skills", "Experience", "Contact"].map(
//           (item) => (
//             <a
//               href={`#${item.toLowerCase()}`}
//               key={item}
//               className="hover:text-cyan-400 transition-colors duration-200"
//             >
//               {item}
//             </a>
//           )
//         )}
//       </div>

//       {/* Right: Icons + Button */}
//       <div className="flex items-center gap-4">
//         <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//           <FaGithub className="text-xl hover:text-cyan-400 transition" />
//         </a>
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedin className="text-xl hover:text-cyan-400 transition" />
//         </a>
//         <Button className="bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold hover:opacity-90">
//           Contact Me
//         </Button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-[#0d0d0d] text-white fixed top-0 z-50 shadow-md">
      {/* Left: Logo */}
      <div className="text-base font-semibold bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
        Himanshu Parab
      </div>

      {/* Center: Desktop Navigation Links */}
      <div className="hidden md:flex gap-10 text-base font-medium">
        {["About", "Projects", "Skills", "Experience", "Contact"].map((item) => (
          <a
            href={`#${item.toLowerCase()}`}
            key={item}
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right: Desktop Icons + Button */}
      <div className="hidden md:flex items-center gap-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl hover:text-cyan-400 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl hover:text-cyan-400 transition" />
        </a>
        <a href="#contact">
          <Button className="bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold hover:opacity-90">
            Contact Me
          </Button>
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl hover:text-cyan-400 transition" />
          ) : (
            <FaBars className="text-2xl hover:text-cyan-400 transition" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0d0d0d] text-white flex flex-col items-center py-4 gap-4 border-t border-gray-700 md:hidden">
          {["About", "Projects", "Skills", "Experience", "Contact"].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="hover:text-cyan-400 text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-6 mt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-cyan-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-cyan-400 transition" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
