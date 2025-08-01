import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// Helper to clear localStorage for test isolation
const clearSeason1Save = () => {
  window.localStorage.removeItem("season1_save");
};

describe("Season1Home navigation and save state", () => {
  beforeEach(() => {
    clearSeason1Save();
  });

  test("navigates from season menu to season 1 homepage and back", () => {
    render(<App />);
    // Go to season menu
    fireEvent.click(screen.getByTestId("season-menu-button"));
    // Go to season 1 homepage
    fireEvent.click(screen.getByTestId("season-1-button"));
    // Season 1 homepage should be visible
    expect(screen.getByTestId("season1-home-screen")).toBeInTheDocument();
    // Home button should be present
    expect(screen.getByTestId("home-button")).toBeInTheDocument();
    // Click home button, should return to main menu
    fireEvent.click(screen.getByTestId("home-button"));
    expect(screen.getByTestId("menu-screen")).toBeInTheDocument();
  });

  test("shows Start button if no save, and starts season", () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("season-menu-button"));
    fireEvent.click(screen.getByTestId("season-1-button"));
    // Should show Start button
    expect(screen.getByTestId("start-button")).toBeInTheDocument();
    // Click Start, should create save and show Resume/Restart
    fireEvent.click(screen.getByTestId("start-button"));
    expect(screen.getByTestId("resume-button")).toBeInTheDocument();
    expect(screen.getByTestId("restart-button")).toBeInTheDocument();
    // Save should exist in localStorage
    expect(window.localStorage.getItem("season1_save")).toBe("started");
  });

  test("shows Resume and Restart if save exists, and handles actions", () => {
    // Simulate a save
    window.localStorage.setItem("season1_save", "started");
    render(<App />);
    fireEvent.click(screen.getByTestId("season-menu-button"));
    fireEvent.click(screen.getByTestId("season-1-button"));
    // Should show Resume and Restart, not Start
    expect(screen.queryByTestId("start-button")).not.toBeInTheDocument();
    expect(screen.getByTestId("resume-button")).toBeInTheDocument();
    expect(screen.getByTestId("restart-button")).toBeInTheDocument();

    // Click Resume (simulate navigation, no save change)
    fireEvent.click(screen.getByTestId("resume-button"));
    // Should still be on season1 home (for now, as no game implemented)
    expect(screen.getByTestId("season1-home-screen")).toBeInTheDocument();

    // Click Restart (should delete save and show Start)
    fireEvent.click(screen.getByTestId("restart-button"));
    expect(screen.getByTestId("start-button")).toBeInTheDocument();
    expect(window.localStorage.getItem("season1_save")).toBeNull();
  });
});