import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import NavigationBar from './NavigationBar';
import "./ConfessionPage.css";

const quotes = [
    "History never forgets. But now it will...",
    "Your invisible clock is activated...",
    "Some secrets are best left unspoken...",
    "The past whispers, will you listen?",
];

function ConfessionPage() {
    const [currentQuote, setCurrentQuote] = useState(0);
    const navigate = useNavigate(); // React Router navigation hook

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 6000); // Change quote every 6 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="confession-container">
            <NavigationBar />
            <div className="quote-container">{quotes[currentQuote]}</div>
            <div className="button-container">
                <button className="confession-btn generate-btn" onClick={() => navigate("/generatelink")}>
                    Generate a Link
                </button>
                <button className="confession-btn check-btn" onClick={() => navigate("/checkmessage")}>
                    Check Message
                </button>
            </div>
        </div>
    );
}

export default ConfessionPage;
