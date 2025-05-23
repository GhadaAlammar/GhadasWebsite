export default function Portfolio() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home">
              <span className="logo-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </span>
              
            </a>
          </div>
          <div className="nav-menu" id="nav-menu">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <div className="hamburger" id="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hello I'm <span className="highlight">Ghadah Alammar</span>
            </h1>
            <h2 className="hero-subtitle">Computer Science Student</h2>
            <p className="hero-description">
              Fueled by curiosity and a passion for building things that matter. I'm always seeking ways to turn ideas
              into practical tech solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="code-animation">
              <div className="code-line"></div>
              <div className="code-line"></div>
              <div className="code-line"></div>
              <div className="code-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a dedicated Computer Science student driven by a passion for problem-solving and innovation. My
                journey in programming started with curiosity and has evolved into a deep love for creating efficient,
                scalable solutions.
              </p>
              <p>
                I enjoy working on diverse projects that challenge me to learn new technologies and improve my skills.
                From web development to machine learning, I'm always eager to explore new frontiers in computer science
                and apply my knowledge to create meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-content">
                <h3>Morse App Translator</h3>
                <p>
                  A SwiftUI iOS app that translates between English and Morse code with real-time
                  results, a copy feature, and a simple, interactive UI.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">SwiftUI</span>
                  <span className="tech-tag">Xcode</span>
                  <span className="tech-tag">Swift</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3>Facial Recognition System</h3>
                <p>
                  A facial recognition login system that authenticates users by comparing their registered face with
                  stored facial data to grant or deny access.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">OpenCV</span>
                  <span className="tech-tag">Flask</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-container">
            <div className="skills-list" style={{ padding: "1.5rem" }}>
              <div className="skill-item" style={{ marginBottom: "1.25rem" }}>
                <span className="skill-name">Python</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ marginBottom: "1.25rem" }}>
                <span className="skill-name">C</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "65%" }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ marginBottom: "1.25rem" }}>
                <span className="skill-name">JavaScript</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ marginBottom: "1.25rem" }}>
                <span className="skill-name">Java</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ marginBottom: "1.25rem" }}>
                <span className="skill-name">PyTorch</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ marginBottom: "1.25rem" }}>
                <span className="skill-name">TensorFlow</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="skill-item" style={{ marginBottom: "1.25rem" }}>
                <span className="skill-name">HTML/CSS</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>ghada.alammarr@gmail.com</span>
                </div>
                <div className="contact-item">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+966 552203995</span>
                </div>
                <div className="contact-item">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Riyadh, Saudi Arabia</span>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/GhadaAlammar/GhadasWebsite/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ghadah-alammar-74306a29a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Ghadah Alammar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
