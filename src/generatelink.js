import React, { useState } from "react";
import { FaCopy, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./GenerateLinkPage.css";

function GenerateLinkPage() {
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const generateLink = () => {
    if (message.trim() !== "") {
      const encodedMessage = encodeURIComponent(message);
      const link = `${window.location.origin}/confession/${encodedMessage}`;
      setGeneratedLink(link);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="generate-link-container">
      <div className="card1">
        <h2>Create Your Confession Link</h2>
        <textarea
          placeholder="Type your secret message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="generate-btn" onClick={generateLink}>
          Generate Link
        </button>
        {generatedLink && (
          <div className="link-section">
            <input type="text" value={generatedLink} readOnly />
            <button className="copy-btn" onClick={copyToClipboard}>
              <FaCopy /> Copy
            </button>
            <div className="share-icons">
              <a
                href={`https://wa.me/?text=${generatedLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="whatsapp-icon" />
              </a>
              <a
                href={`https://www.instagram.com/direct/new/?text=${generatedLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="instagram-icon" />
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Background Image */}
      <div className="background-image"></div>
    </div>
  );
}

export default GenerateLinkPage;
