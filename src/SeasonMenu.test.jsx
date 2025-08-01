import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("SeasonMenu navigation and rendering", () => {
  test("navigates from main menu to season menu and back", () => {
    render(<App />);
    // Main menu should be visible
    expect(screen.getByTestId("menu-screen")).toBeInTheDocument();

    // Click the Season Menu button
    fireEvent.click(screen.getByTestId("season-menu-button"));

    // Season menu should be visible
    expect(screen.getByTestId("season-menu-screen")).toBeInTheDocument();

    // Header should be the Seasons Header image
    expect(screen.getByAltText(/seasons header/i)).toBeInTheDocument();

    // Sunny island art image should be present
    expect(screen.getByAltText(/sunny island art/i)).toBeInTheDocument();

    // At least one season button (Season 1) should be present
    expect(screen.getByTestId("season-1-button")).toBeInTheDocument();
    expect(screen.getByAltText(/season 1 button/i)).toBeInTheDocument();

    // Home button should be present
    expect(screen.getByTestId("home-button")).toBeInTheDocument();
    expect(screen.getByAltText(/home/i)).toBeInTheDocument();

    // Click the home button to return to main menu
    fireEvent.click(screen.getByTestId("home-button"));
    expect(screen.getByTestId("menu-screen")).toBeInTheDocument();
  });
});