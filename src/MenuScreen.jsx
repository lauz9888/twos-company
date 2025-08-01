import React from "react";

function MenuScreen({ onSeasonMenu }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "url('/assets/Background Art.png') center/cover no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
      data-testid="menu-screen"
    >
      <img
        src="/assets/LogoTitle.png"
        alt="Two's Company Logo"
        style={{ width: 400, marginBottom: "2rem" }}
      />
      <button
        style={{
          padding: "1rem 2.5rem",
          fontSize: "1.5rem",
          background: "none",
          border: "none",
          borderRadius: 32,
          boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
          cursor: "pointer",
          fontWeight: "bold",
          letterSpacing: "1px",
          transition: "background 0.2s",
        }}
        data-testid="season-menu-button"
        onClick={onSeasonMenu}
      >
        <img
          src="/assets/Season Menu.png"
          alt="Season Menu Button"
          style={{ height: 80 }}
        />
      </button>
    </div>
  );
}

export default MenuScreen;