import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative">
      {/* Background Shadow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900 via-blue-700 to-transparent opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to ShadowNote
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          onClick={() => navigate("/next-page")}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Home;