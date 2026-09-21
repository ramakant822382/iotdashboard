import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>
            Ramakant<span>.</span>
          </h2>

          <p>
            Building intelligent applications using AI, Machine Learning, Full
            Stack Development and IoT technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Technologies */}
        <div className="footer-column">
          <h3>Technologies</h3>

          <p>Python</p>
          <p>React.js</p>
          <p>AI / ML</p>
          <p>IoT</p>
        </div>

        {/* Connect */}
        <div className="footer-column">
          <h3>Connect</h3>

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="mailto:yourmail@gmail.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ramakant Sharma. All rights reserved.</p>

        <p>Built with React</p>
      </div>
    </footer>
  );
}

export default Footer;
