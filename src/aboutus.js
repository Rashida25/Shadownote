import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import NavigationBar from './NavigationBar';

const AboutUs = () => {
  return (
    <div className="about-container">
         <NavigationBar />
      {/* Heading Section */}
      <motion.h1 
        className="about-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span>ShadowNote</span>
      </motion.h1>

      {/* Description Section */}
      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        A completely <strong>anonymous platform</strong> where users can post confessions, 
        send secret messages, and read them <strong>only once</strong> before they disappear forever.
      </motion.p>

      {/* Features Section */}
      <div className="features">
        <motion.div 
          className="feature-box"
          whileHover={{ scale: 1.05 }}
        >
          <h3>🕵️‍♂️ Anonymous Posting</h3>
          <p>Users can submit confessions without logging in.</p>
        </motion.div>

        <motion.div 
          className="feature-box"
          whileHover={{ scale: 1.05 }}
        >
          <h3>💬 Self-Destructing Messages</h3>
          <p>Messages are automatically deleted after being read once.</p>
        </motion.div>

        <motion.div 
          className="feature-box"
          whileHover={{ scale: 1.05 }}
        >
          <h3>⏳ Live Countdown Timer</h3>
          <p>See when a message will expire in real-time.</p>
        </motion.div>
      </div>

      {/* Backend Features */}
      <div className="backend-features">
        <motion.h2 
          className="backend-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Backend Features
        </motion.h2>
        <ul>
          <motion.li whileHover={{ scale: 1.05 }}>🔐 Optional User Authentication</motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>⚡ Fast Confessions API</motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>🕵️‍♀️ Secret Messages API</motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>⏳ Expiring Messages with Redis/Cron Jobs</motion.li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
