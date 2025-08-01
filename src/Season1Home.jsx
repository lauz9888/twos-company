import React, { useEffect, useState } from "react";

function Season1Home({ onHome }) {
  const [hasSave, setHasSave] = useState(false);

  useEffect(() => {
    setHasSave(!!window.localStorage.getItem("season1_save"));
  }, []);

  const handleStart = () => {
    window.localStorage.setItem("season1_save", "started");
    setHasSave(true);
  };

  const handleRestart = () => {
    window.localStorage.removeItem("season1_save");
    setHasSave(false);
  };

  const handleResume = () => {
    // For now, just stay on this page (no game implemented)
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "url('/assets/Distinct Sunny Island Art.png') center/cover no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "sans-serif",
        paddingTop: "3rem"
      }}
      data-testid="season1-home-screen"
    >
      <h1 style={{ fontSize: "2.2rem", color: "#e75480", marginBottom: "1.5rem" }}>
        Season 1
      </h1>
      <div
        style={{
          width: 420,
          height: 180,
          marginBottom: "2rem",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
        aria-label="sunny island art"
      >
        <img
          src="/assets/Decorative Elements.png"
          alt="Season 1 Sunny Island Art"
          style={{ width: 420, height: 180, objectFit: "cover", borderRadius: 24, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
        />
      </div>
      <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem" }}>
        {!hasSave && (
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            data-testid="start-button"
            onClick={handleStart}
          >
            <img
              src="/assets/Start Restart Resume Buttons.png"
              alt="Start"
              style={{ height: 80 }}
            />
          </button>
        )}
        {hasSave && (
          <>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              data-testid="restart-button"
              onClick={handleRestart}
            >
              <img
                src="/assets/Start Restart Resume Buttons.png"
                alt="Restart"
                style={{ height: 80 }}
              />
            </button>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              data-testid="resume-button"
              onClick={handleResume}
            >
              <img
                src="/assets/Start Restart Resume Buttons.png"
                alt="Resume"
                style={{ height: 80 }}
              />
            </button>
          </>
        )}
      </div>
      <button
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          width: 48,
          height: 48,
          border: "none",
          background: "none",
          padding: 0,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        data-testid="home-button"
        aria-label="Home"
        onClick={onHome}
      >
        <img
          src="/assets/Home Button.png"
          alt="Home"
          style={{ width: 48, height: 48 }}
        />
      </button>
    </div>
  );
}

export default Season1Home;