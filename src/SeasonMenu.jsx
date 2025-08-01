import React from "react";

function SeasonMenu({ onHome, onSeason1 }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "url('/assets/Extended Alternate Island Art.png') center/cover no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "sans-serif",
        paddingTop: "3rem"
      }}
      data-testid="season-menu-screen"
    >
      <img
        src="/assets/Header.png"
        alt="Seasons Header"
        style={{ width: 350, marginBottom: "1.5rem" }}
      />
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
          alt="Sunny Island Art"
          style={{ width: 420, height: 180, objectFit: "cover", borderRadius: 24, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
        />
      </div>
      <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem" }}>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          data-testid="season-1-button"
          onClick={typeof onSeason1 === "function" ? onSeason1 : undefined}
        >
          <img
            src="/assets/Season Buttons.png"
            alt="Season 1 Button"
            style={{ height: 80 }}
          />
        </button>
        {/* Future season buttons can be added here */}
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

export default SeasonMenu;