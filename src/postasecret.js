import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import "./PostSecretPage.css";
import { IoMdSend } from "react-icons/io";

const initialPosts = [
  {
    id: 1,
    text: "Really digging the new extensions API in @raycastapp. A quick key combo and you can scroll through a big ol' list of community hotkeys and commands, basically. This is what I wanted more than a decade ago in the Alfred days; love it.",
  },
  {
    id: 2,
    text: "I recently started playing with @raycastapp extensions API and I have to say I'm really impressed by how easy it is to create an extension 🎉",
  },
  {
    id: 3,
    text: "Developing extensions for @raycastapp is so easy and developer-friendly ❤️",
  },
  {
    id: 4,
    text: "Mac OS apps will always have the softest spot for me. @raycastapp mixing React/Node with native tooling for extensions is a killer approach!",
  },
];

function PostASecret() {
  const [posts, setPosts] = useState(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() !== "") {
      const newEntry = {
        id: posts.length + 1,
        text: newPost,
      };
      setPosts([newEntry, ...posts]); // Add new post at the top
      setNewPost("");
      setIsModalOpen(false);
    }
  };

  return (
    <div className="post-a-secret">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Posts Container */}
      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <p className="post-text">{post.text}</p>

            {/* Username and Logo at Bottom */}
            <div className="post-footer">
              <img
                src="https://ik.imagekit.io/lmmaihcez/OBJECTS.png?updatedAt=1741399998141"
                alt="App Logo"
                className="post-logo"
              />
              <span className="username">@anonymous</span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Compose Button */}
      <button className="compose-btn" onClick={() => setIsModalOpen(true)}>
        <img
          src="https://ik.imagekit.io/lmmaihcez/Large%20FAB.png?updatedAt=1741382934666"
          alt="Compose"
          className="compose-icon small-compose-icon"
        />
      </button>

      {/* Modal for Posting */}
     {/* Modal for Posting */}
{/* Modal for Posting */}
{isModalOpen && (
  <div className="modal">
    <div className="modal-input-container">
      <textarea
        className="modal-input"
        placeholder="Type a post..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        rows={1} // Start with 1 row
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
      />
    </div>

    {/* Buttons Container */}
    <div className="modal-buttons">
      <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
      <button className="post-btn" onClick={handlePost}>Post</button>
    </div>
  </div>
)}



      {/* Background Image at Bottom */}
      <div className="bottom-background"></div>
    </div>
  );
}

export default PostASecret;
