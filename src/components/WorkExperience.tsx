"use client";

import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Machine Learning Engineer Intern",
    company: "Quantiphi Analytics",
    companyColor: "text-emerald-400",
    date: "01/2025 - Present",
    description:
      "Working as a MLE Intern, developing AI solutions for real-world problems.\n• Built deep learning models for consumer behavior analysis, vehicle number plate recognition, and sentiment analysis.\n• Developed GenAI models for search relevance using NLP techniques.\n• Created a CNN from scratch, performed hyperparameter tuning, and visualized metrics using TensorBoard.\n• Designed a Paytm logo detection system for ICC match footage, implementing real-time video processing and cloud deployment.",
    skills: ["PyTorch", "TensorBoard", "NLP", "CNN", "LangChain", "GenAI"],
  },
  {
    title: "Data Analyst Intern",
    company: "Jindal SAW Ltd",
    companyColor: "text-emerald-400",
    date: "06/2024 - 07/2024",
    description:
      "Worked as a Data Analyst Intern, I analysed data to drive informed decision-making.\n• Conducted production efficiency analysis using ARIMA, statistical decomposition, and exploratory data analysis.\n• Developed Python-based forecasting models and interactive dashboards using Pandas, NumPy, Matplotlib, Seaborn and Streamlit.\n• Enhanced operational efficiency and reduced downtime by leveraging data-driven insights to generate actionable recommendations for improvised decision-making.",
    skills: ["ARIMA", "EDA", "Streamlit", "Pandas", "Seaborn", "NumPy"],
  },
  {
    title: "Python Developer Intern",
    company: "PilotJi",
    companyColor: "text-emerald-400",
    date: "11/2023 - 01/2024",
    description:
      "Worked as a Computer Vision Intern, leveraging OpenCV and AWS Rekognition.\n• Developed computer vision applications with OpenCV and Python for image processing.\n• Utilized AWS Rekognition for facial recognition and personalized customer experiences.\n• Built a personalization engine to enhance hotel CRM systems.",
    skills: ["OpenCV", "Python", "AWS Rekognition", "Computer Vision"],
  },
  {
    title: "Software Development Intern",
    company: "Remote Software Solutions Pvt Ltd (FLR Spectron)",
    companyColor: "text-emerald-400",
    date: "09/2023 - 12/2023",
    description:
      "Worked as SDE Intern, contributing to customizing applications.\n• Designed and customized WordPress websites, integrating themes and plugins for client needs.\n• Developed a multi-file chatbot with NLP integration, enhancing user experience.\n• Collaborated with cross-functional teams to improve functionality and meet performance benchmarks.",
    skills: ["WordPress", "NLP", "Chatbot", "Web Dev", "Plugins"],
  },
];


export default function WorkExperience() {
  return (
    <section id="experience" className="py-16 px-4 md:px-20 bg-[#0d0d0d] text-white">
      <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2">
        Work Experience
      </h2>
      <p className="text-center text-gray-400 mb-10">
        My professional journey in AI and data science.
      </p>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-700/40 z-0" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative md:w-1/2 z-10 px-4 ${
                  isLeft ? "md:self-start" : "md:self-end"
            }`}
          >
                {/* <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 z-20 bg-emerald-400 h-4 w-4 rounded-full border-2 border-[#0d0d0d]" /> */}
                <div className="bg-[#111111] rounded-xl border border-neutral-800 p-6 shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center text-sm text-gray-400 gap-2">
                      <FaCalendarAlt />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  <p className={`text-sm font-medium mb-2 ${exp.companyColor}`}>
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                </motion.div>
            //   </div>
              
            );
          })}
        </div>
      </div>
    </section>
  );
}
