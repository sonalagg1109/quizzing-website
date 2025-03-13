// ELearning.js
import React from 'react';
import '../styles/ELearning.css'; // optional styling

export default function ELearning() {
  return (
    <div className="elearning-container">
      <h1>E-Learning</h1>
      <p>Explore our Java and C++ video tutorials below!</p>

      <div className="videos-section">
        <h2>Java Tutorials</h2>
        <div className="video-grid">
          {/* Example: embedded YouTube video #1 */}
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/grEKMHGYyns"
              title="Java Tutorial for Beginners"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Example: embedded YouTube video #2 */}
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UmnCZ7-9yDY"
              title="Java OOP Concepts"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h2>C++ Tutorials</h2>
        <div className="video-grid">
          {/* Example: embedded YouTube video #1 */}
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vLnPwxZdW4Y"
              title="C++ Tutorial for Beginners"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Example: embedded YouTube video #2 */}
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mUQZ1qmKlLY"
              title="C++ OOP Concepts"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
