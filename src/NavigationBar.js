import React from 'react';
import { motion } from 'framer-motion';
import './NavigationBar.css';

const logoImage = "https://ik.imagekit.io/lmmaihcez/Frame%20483555.png?updatedAt=1741373352402";

function NavigationBar() {
    return (
        <motion.nav 
            className="navbar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.img 
                src={logoImage} 
                alt="ShadowNote Logo" 
                className="logo"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
            />
            <ul className="nav-links">
                {["Home", "Post a Secret", "Confession", "About Us", "Sign In"].map((item, index) => (
                    <motion.li 
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.a 
                            href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '')}`}
                            whileHover={{ color: "#d58445" }}
                            transition={{ duration: 0.2 }}
                        >
                            {item}
                        </motion.a>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
}

export default NavigationBar;
