import { useEffect, useState } from "react";
import styles from "./About.module.css";

function About() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
      tag: "AI & MACHINE LEARNING",
      title: "Building Intelligent Solutions",
      text: "Exploring Artificial Intelligence, Machine Learning, LLMs and modern AI technologies.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
      tag: "FULL STACK DEVELOPMENT",
      title: "Creating Modern Applications",
      text: "Developing responsive web applications using React, FastAPI, REST APIs and databases.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      tag: "IOT & EMBEDDED SYSTEMS",
      title: "Connecting Hardware & Software",
      text: "Working with ESP32, sensors and embedded systems to build smart IoT solutions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      tag: "SMART DASHBOARD",
      title: "Turning Data Into Insights",
      text: "Building real-time dashboards that visualize sensor data and intelligent predictions.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.aboutPage}>
      {/* HEADER */}
      <div className={styles.aboutHeader}>
        <span className={styles.aboutTag}>ABOUT ME</span>

        <h1>
          Turning Ideas Into <span>Smart Solutions</span>
        </h1>

        <p>
          I am Ramakant Sharma, a developer interested in Artificial
          Intelligence, Full Stack Development and IoT.
        </p>
      </div>

      {/* SLIDER */}
      <div className={styles.slider}>
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className={styles.sliderImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.sliderContent}>
          <span className={styles.sliderTag}>{slides[current].tag}</span>

          <h2>{slides[current].title}</h2>

          <p>{slides[current].text}</p>

          <div className={styles.sliderBottom}>
            <span className={styles.slideNumber}>
              {String(current + 1).padStart(2, "0")}
            </span>

            <div className={styles.dots}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  className={current === index ? styles.activeDot : ""}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>

            <span className={styles.slideNumber}>
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className={styles.skills}>
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>🤖</div>
          <h3>AI / ML</h3>
          <p>Intelligent applications</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>💻</div>
          <h3>React.js</h3>
          <p>Modern frontend development</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>⚙️</div>
          <h3>FastAPI</h3>
          <p>Backend & REST APIs</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>📡</div>
          <h3>IoT</h3>
          <p>Connected smart devices</p>
        </div>
      </div>
    </section>
  );
}

export default About;
