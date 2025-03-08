import React, { useState } from "react";
import "./message.css";

function Message() {
  const [link, setLink] = useState("");
  const [message, setMessage] = useState(null);
  const [isViewed, setIsViewed] = useState(false);

  const fetchMessage = () => {
    try {
      const decodedMessage = decodeURIComponent(link.split("/confession/")[1]);
      setMessage(decodedMessage);
      setIsViewed(true);
      setTimeout(() => {
        setMessage(null);
        setLink("");
        setIsViewed(false);
      }, 5000); // Message disappears after 5 seconds
    } catch (error) {
      alert("Invalid link. Please try again.");
    }
  };

  return (
    <div className="check-message-container">
      <div className="card2">
        <h2>Check Your Message</h2>
        <label>Paste your link here:</label>
        <input
          type="text"
          placeholder="Enter your link..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button className="submit-btn" onClick={fetchMessage} disabled={!link}>
          Submit
        </button>
        {message && (
          <div className="message-box">
            <p>{message}</p>
            <small>⚠️ This message will disappear after seen.</small>
          </div>
        )}
      </div>
      {/* Background Image */}
      {/* <div className="background-image"></div> */}
    </div>
  );
}

export default Message;
