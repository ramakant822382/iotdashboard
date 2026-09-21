import { useEffect, useState } from "react";
import styles from "./Projects.module.css";

function Projects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
      category: "AI / MACHINE LEARNING",
      title: "AI News Research Agent",
      description:
        "An AI-powered research agent that collects news, analyzes articles and generates useful summaries using LLM technology.",
      technologies: ["Python", "FastAPI", "React", "Ollama"],
      github: "https://github.com/",
      demo: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      category: "IOT / EMBEDDED",
      title: "Smart IoT Monitoring System",
      description:
        "A smart IoT system that collects sensor data and displays real-time information through a web dashboard.",
      technologies: ["ESP32", "Sensors", "FastAPI", "React"],
      github: "https://github.com/",
      demo: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      category: "DATA / ML",
      title: "Laptop Price Predictor",
      description:
        "A machine learning application that predicts laptop prices based on specifications and provides similar laptop recommendations.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      github: "https://github.com/",
      demo: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
      category: "FULL STACK",
      title: "Student Management System",
      description:
        "A full-stack application for managing student information, marks, attendance and academic records.",
      technologies: ["React", "FastAPI", "MongoDB", "REST API"],
      github: "https://github.com/",
      demo: "#",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const project = projects[current];

  return (
    <section className={styles.projectsPage}>
      <div className={styles.projectsHeader}>
        <span className={styles.projectsTag}>MY PROJECTS</span>

        <h1>
          Things I Have <span>Built</span>
        </h1>

        <p>
          A collection of projects where I combine Artificial Intelligence,
          Machine Learning, Full Stack Development and IoT to build practical
          solutions.
        </p>
      </div>

      <div className={styles.projectSlider}>
        <img
          key={project.image}
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />

        <div className={styles.projectOverlay}></div>

        <div className={styles.projectContent}>
          <span className={styles.projectCategory}>{project.category}</span>

          <h2>{project.title}</h2>

          <p className={styles.projectDescription}>{project.description}</p>

          <div className={styles.techList}>
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className={styles.projectButtons}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={styles.githubButton}
            >
              GitHub ↗
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={styles.demoButton}
            >
              Live Demo ↗
            </a>
          </div>

          <div className={styles.sliderBottom}>
            <span className={styles.slideNumber}>
              {String(current + 1).padStart(2, "0")}
            </span>

            <div className={styles.dots}>
              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={current === index ? styles.activeDot : ""}
                  aria-label={`Show project ${index + 1}`}
                />
              ))}
            </div>

            <span className={styles.slideNumber}>
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.projectInfo}>
        <div>
          <strong>{projects.length}+</strong>
          <span>Projects</span>
        </div>

        <div>
          <strong>AI</strong>
          <span>Technology</span>
        </div>

        <div>
          <strong>IoT</strong>
          <span>Hardware</span>
        </div>

        <div>
          <strong>Full Stack</strong>
          <span>Development</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
