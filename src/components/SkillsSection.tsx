"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

type Skill = { name: string; description: string };
type SkillCategories = Record<string, Skill[]>;

const skillCategories: SkillCategories = {
  "Machine Learning": [
    { name: "PyTorch", description: "A flexible, Pythonic deep learning library used for building and training dynamic neural networks." },
    { name: "TensorFlow", description: "An end-to-end open-source machine learning platform developed by Google for scalable model training and deployment." },
    { name: "Scikit-learn", description: "A comprehensive toolkit for classical machine learning algorithms including classification, regression, and clustering." },
    { name: "Deep Learning", description: "Techniques based on multi-layered neural networks for tasks like image recognition and language processing." },
    { name: "Computer Vision", description: "Field focused on enabling machines to interpret and make decisions based on visual data from the world." },
    { name: "NLP", description: "Natural Language Processing enables machines to understand, interpret, and generate human language." },
    { name: "Reinforcement Learning", description: "Training models to make sequential decisions through rewards and penalties over time." },
    { name: "MLOps", description: "A set of practices for automating and managing the ML lifecycle, from experimentation to production deployment." },
  ],
  "Data Science": [
    { name: "Pandas", description: "Powerful Python library for data manipulation, analysis, and time-series operations." },
    { name: "NumPy", description: "Foundational package for scientific computing with Python, supporting fast array operations and linear algebra." },
    { name: "Matplotlib", description: "A plotting library for creating static, animated, and interactive visualizations in Python." },
    { name: "Seaborn", description: "A statistical data visualization library built on top of Matplotlib for creating beautiful, informative graphics." },
    { name: "EDA", description: "Process of exploring datasets to summarize main characteristics using statistics and visualizations." },
    { name: "Statistics", description: "Fundamentals of descriptive and inferential statistics used to understand and model data behavior." },
    { name: "Data Wrangling", description: "Techniques for cleaning, transforming, and organizing raw data into usable formats." },
    { name: "Feature Engineering", description: "Process of creating new input features to improve model performance and insights." },
  ],
  "Generative AI": [
    { name: "LangChain", description: "A powerful framework for building context-aware LLM applications with chaining, agents, and tools." },
    { name: "Vector DBs", description: "Databases like Pinecone or FAISS optimized for storing and querying vector embeddings in semantic search." },
    { name: "Prompt Engineering", description: "Strategically designing input prompts to guide LLMs toward accurate and relevant outputs." },
    { name: "LLM Fine-tuning", description: "The process of adapting large language models to domain-specific data for improved task performance." },
    { name: "RAG", description: "Retrieval-Augmented Generation combines external knowledge retrieval with LLM-based response generation." },
    { name: "Embeddings", description: "Numerical vector representations of text or data that preserve semantic meaning." },
    { name: "OpenAI", description: "Creators of ChatGPT and DALL·E, providing powerful APIs for language and generative models." },
    { name: "HuggingFace", description: "An open-source platform offering pre-trained transformer models and tools for NLP and beyond." },
  ],
  "Tools & Platforms": [
    { name: "Git", description: "A distributed version control system for tracking changes in code and collaborating across teams." },
    { name: "Docker", description: "A platform to build, ship, and run applications in isolated, reproducible containerized environments." },
    { name: "Kubernetes", description: "An open-source system for automating deployment, scaling, and management of containerized applications." },
    { name: "VS Code", description: "A lightweight but powerful code editor with built-in support for debugging, version control, and extensions." },
    { name: "Postman", description: "A collaboration platform for API development, testing, and monitoring with a user-friendly interface." },
    { name: "AWS", description: "Amazon Web Services offers a suite of cloud computing services for storage, compute, AI/ML, and more." },
    { name: "GCP", description: "Google Cloud Platform provides infrastructure, data, and AI services for scalable application development." },
    { name: "Streamlit", description: "A Python library that turns data scripts into interactive web apps for machine learning and analytics." },
  ],
};


export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Machine Learning");

  return (
    <section id="skills" className="py-16 px-4 md:px-20 w-full bg-[#0d0d0d] text-white">
      <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2">
        Skills & Expertise
      </h2>
      <p className="text-center text-gray-400 mb-8">
        Technologies and methodologies I specialize in.
      </p>

      <div className="block md:hidden w-full flex justify-center mb-6">
  <Select value={activeTab} onValueChange={setActiveTab}>
    <SelectTrigger className="w-60 bg-black/30 border border-gray-700 text-white justify-center rounded-full h-12">
      <SelectValue placeholder="Select category" />
    </SelectTrigger>
    <SelectContent className="bg-[#0d0d0d] border border-gray-700 text-white">
      {Object.keys(skillCategories).map((category) => (
        <SelectItem key={category} value={category}>
          {category}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>


      {/* Tabs UI - Desktop */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden md:block w-full max-w-6xl mx-auto">
        <TabsList
          className="flex w-full max-w-4xl mx-auto bg-black/30 border border-gray-700 
                     rounded-full overflow-hidden p-0 h-12 mb-10"
        >
          {Object.keys(skillCategories).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="flex-1 h-full text-white text-base font-semibold 
                         transition-all data-[state=active]:bg-emerald-700 
                         data-[state=active]:text-white 
                         data-[state=active]:rounded-full rounded-none focus:outline-none"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="group [perspective:1000px] h-42">
                  <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
                    {/* Front */}
                    <Card className="absolute inset-0 bg-black/20 text-white text-center font-semibold text-base py-8 w-full h-full flex items-center justify-center border border-gray-700 backface-hidden rounded-xl">
                      {skill.name}
                    </Card>
                    {/* Back */}
                    <Card className="absolute inset-0 bg-black/20 text-white text-sm px-4 py-6 w-full h-full flex items-center justify-center text-center border border-gray-700 rotate-y-180 backface-hidden rounded-xl">
                      {skill.description}
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Mobile View Flip Cards */}
      <div className="md:hidden mt-6 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          {skillCategories[activeTab].map((skill) => (
            <div key={skill.name} className="group [perspective:1000px] h-42">
              <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <Card className="absolute inset-0 bg-black/20 text-white text-center font-semibold text-base py-8 w-full h-full flex items-center justify-center border border-gray-700 backface-hidden rounded-xl">
                  {skill.name}
                </Card>
                {/* Back */}
                <Card className="absolute inset-0 text-white text-sm px-4 py-6 w-full h-full flex items-center justify-center text-center border border-gray-700 rotate-y-180 backface-hidden rounded-xl">
                  {skill.description}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}