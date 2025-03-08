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

const formatQuote = (text, wordsPerLine = 3) => {
    return text.split(" ").reduce((acc, word, index) => {
        return acc + (index % wordsPerLine === 0 ? "<br />" : " ") + word;
    }, "");
};

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
            <div className="confession-background">
                {/* Displaying formatted quote with line breaks */}
                <div 
                    className="quote-container" 
                    dangerouslySetInnerHTML={{ __html: formatQuote(quotes[currentQuote]) }} 
                />
                <div className="button-container">
                    <button className="confession-btn generate-btn" onClick={() => navigate("/generatelink")}>
                        Send A Message
                    </button>
                    <button className="confession-btn check-btn" onClick={() => navigate("/checkmessage")}>
                        Retrive Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfessionPage;
