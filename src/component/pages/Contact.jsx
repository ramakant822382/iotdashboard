import { useEffect, useState } from "react";
import styles from "./Contact.module.css";

function Temperature() {
  const [temperatures, setTemperatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "https://dashboard-backend-jhmx.onrender.com/all-data";

  const fetchTemperatures = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch temperature data");
      }

      const data = await response.json();

      // API agar directly array return kare
      if (Array.isArray(data)) {
        setTemperatures(data);
      }

      // API agar { temperatures: [...] } return kare
      else if (Array.isArray(data.temperatures)) {
        setTemperatures(data.temperatures);
      }

      // API agar { data: [...] } return kare
      else if (Array.isArray(data.data)) {
        setTemperatures(data.data);
      } else {
        setTemperatures([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemperatures();

    // Refresh every 10 seconds
    const interval = setInterval(fetchTemperatures, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.temperaturePage}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <span className={styles.tag}>IoT SENSOR</span>

          <h1>
            Temperature <span>Monitoring</span>
          </h1>

          <p>
            Real-time temperature data collected from the connected sensor
            database.
          </p>
        </div>

        <button className={styles.refreshButton} onClick={fetchTemperatures}>
          ↻ Refresh
        </button>
      </div>

      {/* STATUS */}
      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span className={styles.statusDot}></span>

          <span>{loading ? "Loading data..." : "Database connected"}</span>
        </div>

        <span className={styles.totalRecords}>
          {temperatures.length} Records
        </span>
      </div>

      {/* LOADING */}
      {loading && temperatures.length === 0 && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading temperature data...</p>
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className={styles.error}>
          <div className={styles.errorIcon}>!</div>

          <div>
            <h3>Unable to load data</h3>
            <p>{error}</p>
          </div>

          <button onClick={fetchTemperatures}>Try Again</button>
        </div>
      )}

      {/* EMPTY */}
      {!loading && !error && temperatures.length === 0 && (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🌡️</div>

          <h3>No Temperature Data</h3>

          <p>There are no temperature records available in the database.</p>
        </div>
      )}

      {/* TEMPERATURE CARDS */}
      {temperatures.length > 0 && (
        <div className={styles.cardGrid}>
          {temperatures.map((item, index) => {
            const temperature =
              item.temperature ?? item.temp ?? item.value ?? "--";

            const timestamp =
              item.timestamp ?? item.createdAt ?? item.date ?? item.time ?? "";

            const sensor =
              item.sensor ?? item.sensorName ?? "Temperature Sensor";

            return (
              <div
                className={styles.temperatureCard}
                key={item._id || item.id || index}
              >
                {/* CARD TOP */}
                <div className={styles.cardTop}>
                  <div className={styles.sensorIcon}>🌡️</div>

                  <span className={styles.liveBadge}>● LIVE</span>
                </div>

                {/* TEMPERATURE */}
                <div className={styles.temperatureValue}>
                  <span>{temperature}</span>
                  <sup>°C</sup>
                </div>

                {/* SENSOR NAME */}
                <h3>{sensor}</h3>

                {/* TIME */}
                {timestamp && (
                  <p className={styles.timestamp}>
                    {new Date(timestamp).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                )}

                {/* CARD FOOTER */}
                <div className={styles.cardFooter}>
                  <span>Sensor Status</span>

                  <strong>Online</strong>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* FOOTER INFO */}
      {temperatures.length > 0 && (
        <div className={styles.bottomInfo}>
          <div>
            <span>Total Records</span>
            <strong>{temperatures.length}</strong>
          </div>

          <div>
            <span>Data Source</span>
            <strong>API / Database</strong>
          </div>

          <div>
            <span>Auto Refresh</span>
            <strong>10 Seconds</strong>
          </div>
        </div>
      )}
    </section>
  );
}

export default Temperature;
