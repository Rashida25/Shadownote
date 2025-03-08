import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationBar from "./NavigationBar";
import "./home.css";

const heroImage =
  "https://ik.imagekit.io/lmmaihcez/Group%20483559%20(1).png?updatedAt=1741373011673";

function HomePage() {
  console.log("HomePage component rendered");
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <NavigationBar />
      <div className="content">
        <motion.div
          className="text-content"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>Whisper your thoughts,</h1>
          <h1>and let the world</h1>
          <h1>listen anonymously</h1>
          <motion.button
            className="send-post-button"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/postasecret")}
          >
            Send Post
          </motion.button>
        </motion.div>
        <div className="image-content">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
