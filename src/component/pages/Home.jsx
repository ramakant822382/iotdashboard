import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dashboard-backend-jhmx.onrender.com/temperature")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API Error");
        }

        return res.json();
      })

      .then((data) => {
        setTemperature(data.temperature);
        setLoading(false);
        setError(false);
      })

      .catch((err) => {
        console.log(err);

        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className="home">
      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-content">
          <div className="live-badge">
            <span></span>
            LIVE IoT MONITORING
          </div>

          <h1>
            Smart
            <br />
            <span>Temperature</span>
            <br />
            Monitoring
          </h1>

          <p>
            Monitor real-time temperature data through an IoT-powered dashboard.
            Simple, smart and connected.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-btn">
              View Projects →
            </Link>

            <Link to="/contact" className="secondary-btn">
              Contact Me
            </Link>
          </div>
        </div>

        {/* ================= TEMPERATURE CARD ================= */}

        <div className="temperature-card">
          <div className="card-glow"></div>

          <div className="temperature-header">
            <div>
              <small>CURRENT TEMPERATURE</small>
              <h3>Environment</h3>
            </div>

            <div className="live-status">
              <span></span>
              LIVE
            </div>
          </div>

          <div className="temperature-main">
            <div className="temperature-icon">🌡️</div>

            <div className="temperature-value">
              {loading && <span className="loading">...</span>}

              {!loading && error && <span className="error">--</span>}

              {!loading && !error && (
                <>
                  {temperature}
                  <small>°C</small>
                </>
              )}
            </div>
          </div>

          <div className="sensor-status">
            {loading && (
              <>
                <span className="status loading-status"></span>
                Connecting to sensor...
              </>
            )}

            {!loading && error && (
              <>
                <span className="status error-status"></span>
                Unable to fetch temperature
              </>
            )}

            {!loading && !error && (
              <>
                <span className="status"></span>
                Sensor connected • Live data
              </>
            )}
          </div>

          <div className="api-row">
            <span>API Status</span>

            <strong>
              {loading ? "Connecting..." : error ? "Offline" : "Connected"}
            </strong>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="features">
        <div className="section-title">
          <span>SMART MONITORING</span>

          <h2>Real-Time IoT Dashboard</h2>

          <p>
            Connected devices provide live environmental data directly to the
            web application.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🌡️</div>

            <h3>Live Temperature</h3>

            <p>
              Get real-time temperature information from the connected IoT
              device.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>

            <h3>REST API</h3>

            <p>
              React communicates with the backend API to retrieve sensor data.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>

            <h3>Smart Dashboard</h3>

            <p>View IoT information through a clean and modern dashboard.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
